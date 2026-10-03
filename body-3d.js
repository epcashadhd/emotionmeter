import * as THREE from './resources/vendor/three.module.js';
let modelPromise;
const LANDMARKS={head:[0,3.57,.46],shoulders:[-.36,2.54,.245],chest:[.14,2.29,.265],stomach:[0,1.82,.29],hands:[-.72,1.28,.15],feet:[.29,.23,.32]};
export async function createBody(canvas,onProject){
 modelPromise??=fetch(new URL('./resources/models/body/body-mesh.json?v=inside-light-a-20261003',import.meta.url)).then(response=>{if(!response.ok)throw Error('Body model unavailable');return response.json();});
 const data=await modelPromise;
 const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'low-power'});renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.6));renderer.setClearColor(0,0);renderer.outputColorSpace=THREE.SRGBColorSpace;
 const scene=new THREE.Scene(),camera=new THREE.OrthographicCamera(-1.48,1.48,2.1,-2.1,.1,100);camera.position.set(0,1.95,12);camera.lookAt(0,1.95,0);
 const figure=new THREE.Group();figure.rotation.y=-.10;scene.add(figure);
 const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(data.positions,3));geometry.setIndex(data.indices);geometry.setAttribute('normal',new THREE.Float32BufferAttribute(data.normals,3));
 // The approved A concept: diffuse warmth inside the figure, without raised beads.
 const ids=Object.keys(LANDMARKS),weights=new Float32Array(6);
 const surface=new THREE.ShaderMaterial({
  uniforms:{locations:{value:Object.values(LANDMARKS).map(p=>new THREE.Vector3(...p))},selection:{value:weights},pulse:{value:1}},
  vertexShader:`varying vec3 vN;varying vec3 vP;
   void main(){vN=normalize(normalMatrix*normal);vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
  fragmentShader:`varying vec3 vN;varying vec3 vP;
   uniform vec3 locations[6];uniform float selection[6];uniform float pulse;
   void main(){
    vec3 n=normalize(vN);
    float diffuse=max(0.0,dot(n,normalize(vec3(-.55,.75,1.0))));
    float edge=pow(1.0-max(n.z,0.0),2.0);
    vec3 colour=mix(vec3(.37,.45,.42),vec3(.78,.82,.76),.52+diffuse*.48);
    colour+=vec3(.055,.055,.035)*edge;
    for(int i=0;i<6;i++){
     vec2 delta=vP.xy-locations[i].xy;
     float width=mix(.085,.14,selection[i]);
     float glow=exp(-dot(delta,delta)/(width*width));
     colour+=vec3(.31,.23,.065)*glow*mix(.72,pulse,selection[i]);
    }
    gl_FragColor=vec4(colour,.76);
    #include <colorspace_fragment>
   }`,
  transparent:true,depthWrite:true,side:THREE.FrontSide
 });
 const body=new THREE.Mesh(geometry,surface);figure.add(body);
 let selected=-1,disposed=false,frame,lastRender=0,lastWidth=0,lastHeight=0;
 const reduced=matchMedia('(prefers-reduced-motion:reduce)');
 function resize(){const rect=canvas.getBoundingClientRect();if(!rect.width||!rect.height)return;if(rect.width===lastWidth&&rect.height===lastHeight)return;lastWidth=rect.width;lastHeight=rect.height;renderer.setSize(rect.width,rect.height,false);const halfWidth=2.1*rect.width/rect.height;camera.left=-halfWidth;camera.right=halfWidth;camera.updateProjectionMatrix();figure.updateMatrixWorld(true);const points={};for(const[id,xyz]of Object.entries(LANDMARKS)){const p=new THREE.Vector3(...xyz).applyMatrix4(figure.matrixWorld).project(camera);points[id]={left:`${(p.x*.5+.5)*100}%`,top:`${(-p.y*.5+.5)*100}%`};}onProject(points);}
 function render(time){if(disposed)return;frame=requestAnimationFrame(render);if(document.hidden||time-lastRender<40)return;const dt=Math.min((time-lastRender)/1000,.1);lastRender=time;
  const blend=1-Math.exp(-dt*8);
  for(let i=0;i<6;i++)weights[i]+=((i===selected?1:0)-weights[i])*blend;
  surface.uniforms.pulse.value=reduced.matches?1:1+.12*Math.sin(time*Math.PI/2000);
  resize();renderer.render(scene,camera);}
 const observer=new ResizeObserver(resize);observer.observe(canvas);resize();frame=requestAnimationFrame(render);
 return{setSelected(id){selected=ids.indexOf(id);},dispose(){disposed=true;cancelAnimationFrame(frame);observer.disconnect();geometry.dispose();surface.dispose();renderer.dispose();}};
}
