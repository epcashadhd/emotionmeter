import * as THREE from './resources/vendor/three.module.js';
// Original interaction: grow only while the original shadow is held.
// All geometry rises progressively from the roots rather than appearing whole.
export function createTree(canvas){
 const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'low-power'});renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.7));renderer.setClearColor(0,0);renderer.outputColorSpace=THREE.SRGBColorSpace;
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(32,1,.1,40);scene.add(new THREE.HemisphereLight(0xfff7e7,0x719071,2));const light=new THREE.DirectionalLight(0xffedd8,2.5);light.position.set(-3,6,5);scene.add(light);const edge=new THREE.DirectionalLight(0xd4ecd4,1.3);edge.position.set(3,4,-4);scene.add(edge);
 const root=new THREE.Group();root.rotation.y=.42;scene.add(root);
 const textureLoader=new THREE.TextureLoader(),barkTextures=['diff','nor_gl','rough'].map(name=>textureLoader.load(new URL(`./resources/textures/bark/${name}.jpg`,import.meta.url).href));
 barkTextures.forEach(texture=>{texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.anisotropy=Math.min(4,renderer.capabilities.getMaxAnisotropy());});barkTextures[0].colorSpace=THREE.SRGBColorSpace;
 const barkAge={value:0};
 const wood=new THREE.MeshStandardMaterial({color:0xffffff,map:barkTextures[0],normalMap:barkTextures[1],normalScale:new THREE.Vector2(.72,.72),roughnessMap:barkTextures[2],roughness:1});
 wood.onBeforeCompile=shader=>{shader.uniforms.barkAge=barkAge;shader.fragmentShader='uniform float barkAge;\n'+shader.fragmentShader;shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`#include <map_fragment>
  diffuseColor.rgb=mix(vec3(0.21,0.32,0.10),diffuseColor.rgb,barkAge);
 `);};
 let seed=31;const rand=()=>{seed=seed*16807%2147483647;return(seed-1)/2147483646;},V=(x,y,z)=>new THREE.Vector3(x,y,z),clamp=x=>Math.max(0,Math.min(1,x)),smooth=x=>{x=clamp(x);return x*x*(3-2*x);};const branches=[],leaves=[];
 const dummy=new THREE.Object3D();
 function branch(points,radius,start,speed,parentCurve=null,anchor=1,kind="branch"){
  if(parentCurve){const parent=parentCurve.branchRecord;radius=Math.min(radius,parent.radius*(1-anchor*parent.taper)*.76);}
  const curve=new THREE.CatmullRomCurve3(points),rings=radius>.06?40:radius>.018?24:10,sides=radius>.06?18:radius>.018?10:6;
  const positions=new Float32Array((rings+1)*(sides+1)*3),normals=new Float32Array(positions.length),uvs=new Float32Array((rings+1)*(sides+1)*2),indices=[];
  for(let i=0;i<rings;i++)for(let j=0;j<sides;j++){const a=i*(sides+1)+j,b=a+sides+1;indices.push(a,b,a+1,b,b+1,a+1);}
  const parent=parentCurve?.branchRecord,effectiveStart=parent?Math.max(start,parent.start+anchor/parent.speed):start;
  const record={positions,normals,uvs,indices,rings,sides,radius,start:effectiveStart,speed,curve,frames:curve.computeFrenetFrames(120,false),parent,anchor,kind,taper:kind==='trunk'?.81:kind==='root'?.995:.94,growth:0,phase:rand()*6.28,length:curve.getLength()};
  branches.push(record);curve.branchRecord=record;return curve;
 }
 // The leader develops from a tender shoot into a crooked, tapering trunk.
 const trunk=branch([V(0,0,0),V(-.045,.42,.015),V(-.13,.93,-.025),V(-.08,1.36,.035),V(.09,1.9,.015),V(.025,2.4,-.035),V(.16,2.86,.045)],.145,0,2.8,null,1,'trunk');
 // Limbs emerge at staggered heights and reach sideways, including low limbs.
 // Foliage grows along fine twigs throughout a rounded crown, not an upward cone.
 const levels=[.39,.47,.55,.62,.69,.75,.82,.89,.97];
 const lobes=[V(-.90,2.29,-.18),V(.97,2.42,.15),V(.32,2.82,-.86),V(-.79,2.93,.38),V(.90,3.07,.25),V(-.42,3.39,-.45),V(.25,3.48,.63),V(.62,3.58,-.38),V(-.20,3.68,.08)];
 for(let i=0;i<levels.length;i++){
  const anchor=levels[i],from=trunk.getPoint(anchor),end=lobes[i].clone().add(V((rand()-.5)*.1,(rand()-.5)*.09,(rand()-.5)*.1)),angle=Math.atan2(end.z,end.x),d=end.clone().sub(from);
  const main=branch([from,from.clone().add(trunk.getTangent(anchor).multiplyScalar(.13)).add(V(Math.cos(angle)*.06,0,Math.sin(angle)*.06)),from.clone().add(d.clone().multiplyScalar(.44)).add(V(0,.12,0)),from.clone().add(d.clone().multiplyScalar(.77)).add(V((rand()-.5)*.1,.11,(rand()-.5)*.1)),end],.061,.12+i*.012,5,trunk,anchor);
  const sideCount=6+Math.floor(rand()*3);
  for(let j=0;j<sideCount;j++){
   const at=.44+j/(sideCount-1)*.54,a=main.getPoint(at),az=angle+j*2.399+(rand()-.5)*.5;
   const spread=.35+rand()*.30,vertical=(rand()-.48)*.68,tip=end.clone().add(V(Math.cos(az)*spread,vertical,Math.sin(az)*spread*.85));
   const delta=tip.clone().sub(a);
   const secondary=branch([a,a.clone().add(main.getTangent(at).multiplyScalar(.06)),a.clone().add(delta.clone().multiplyScalar(.58)).add(V(0,.05,0)),tip],.019,.27+j*.008,6,main,at);
   const twigCount=4+Math.floor(rand()*2);
   for(let k=0;k<twigCount;k++){
    const u=.40+k/(twigCount-1)*.58,b=secondary.getPoint(u),az2=az+k*2.399+(rand()-.5)*.5;
    const e=b.clone().add(V(Math.cos(az2)*(.18+rand()*.17),-.13+rand()*.37,Math.sin(az2)*(.17+rand()*.17)));
    const stem=branch([b,b.clone().add(secondary.getTangent(u).multiplyScalar(.035)),b.clone().lerp(e,.53).add(V(0,.035,0)),e],.006,.38+k*.006,8,secondary,u);
    const count=13+Math.floor(rand()*7);
    for(let n=0;n<count;n++){
     const t=.09+n/(count-1)*.9+(rand()-.5)*.035,az3=n*2.399+az2;
     leaves.push({parent:stem.branchRecord,u:clamp(t),direction:V(Math.cos(az3),-.5+rand()*.9,Math.sin(az3)).normalize(),twist:(rand()-.5)*2.6,size:.30+rand()*.31,width:.72+rand()*.32,start:.24+rand()*.08,tint:rand()});
    }
   }
  }
 }
 // A thin, pointed botanical leaf, with a raised midrib and curved edges.
 // Each leaf is attached to its twig; no floating ellipsoids or particle clumps.
 const leafPositions=[],leafUV=[],leafIndices=[],lengthSteps=8,widthSteps=4;
 for(let i=0;i<=lengthSteps;i++){const u=i/lengthSteps;let halfWidth=Math.pow(Math.sin(Math.PI*u),.85)*(.055+.028*(1-u));if(u<.13)halfWidth=.002;
 for(let j=0;j<=widthSteps;j++){const v=j/widthSteps*2-1,x=v*halfWidth,y=Math.sin(Math.PI*u)*.012*(1-v*v)+Math.pow(u,3)*.023+v*v*Math.sin(u*Math.PI)*.006;leafPositions.push(x,y,u*.235);leafUV.push((v+1)/2,u);}}
 for(let i=0;i<lengthSteps;i++)for(let j=0;j<widthSteps;j++){const a=i*(widthSteps+1)+j,b=a+widthSteps+1;leafIndices.push(a,a+1,b,b,a+1,b+1);}
 const leafGeo=new THREE.BufferGeometry();leafGeo.setAttribute('position',new THREE.Float32BufferAttribute(leafPositions,3));leafGeo.setAttribute('uv',new THREE.Float32BufferAttribute(leafUV,2));leafGeo.setIndex(leafIndices);leafGeo.computeVertexNormals();
 const textureCanvas=document.createElement('canvas');textureCanvas.width=128;textureCanvas.height=256;const context=textureCanvas.getContext('2d'),wash=context.createLinearGradient(0,0,128,256);wash.addColorStop(0,'#9caf72');wash.addColorStop(.45,'#7f9859');wash.addColorStop(1,'#637d47');context.fillStyle=wash;context.fillRect(0,0,128,256);context.strokeStyle='rgba(219,228,181,.48)';context.lineWidth=1.6;context.beginPath();context.moveTo(64,0);context.quadraticCurveTo(62,120,64,256);context.stroke();
 context.lineWidth=.7;context.strokeStyle='rgba(214,225,174,.28)';for(let i=0;i<9;i++){const y=30+i*24;context.beginPath();context.moveTo(64,y);context.quadraticCurveTo(82,y-11,112,y-26);context.moveTo(64,y);context.quadraticCurveTo(43,y-10,15,y-26);context.stroke();}
 const leafTexture=new THREE.CanvasTexture(textureCanvas);leafTexture.colorSpace=THREE.SRGBColorSpace;leafTexture.anisotropy=Math.min(4,renderer.capabilities.getMaxAnisotropy());
 const leafWind={value:0},windAmount={value:1};
 const leafMat=new THREE.MeshStandardMaterial({color:0xffffff,map:leafTexture,roughness:.93,metalness:0,side:THREE.DoubleSide});const foliage=new THREE.InstancedMesh(leafGeo,leafMat,leaves.length);foliage.instanceMatrix.setUsage(THREE.DynamicDrawUsage);foliage.frustumCulled=false;root.add(foliage);for(let i=0;i<leaves.length;i++){
  const variation=leaves[i].tint;
  foliage.setColorAt(i,new THREE.Color().setHSL(.22+variation*.05,.12+rand()*.16,.64+variation*.26));
 }
 // Thin leaves softly transmit light at the edges and on their underside.
 leafMat.onBeforeCompile=shader=>{
  shader.uniforms.leafWind=leafWind;shader.uniforms.windAmount=windAmount;
  shader.vertexShader='uniform float leafWind;uniform float windAmount;\n'+shader.vertexShader;
  shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
   float phase=0.0;
   #ifdef USE_INSTANCING
    phase=instanceMatrix[3].x*5.0+instanceMatrix[3].z*7.0;
   #endif
   transformed.y+=sin(leafWind+phase)*0.006*pow(position.z/0.235,2.0)*windAmount;
  `);
  shader.fragmentShader=shader.fragmentShader.replace('#include <lights_fragment_end>',`#include <lights_fragment_end>
   #if NUM_DIR_LIGHTS > 0
    float leafBacklight=pow(max(0.0,dot(-normal,directionalLights[0].direction)),1.4);
    totalEmissiveRadiance+=diffuseColor.rgb*(0.045+leafBacklight*0.24);
   #endif
  `);
 };

 // The seed leaf stays at the growing apex; early leaf nodes follow the shoot.
 const seedLeaves=Array.from({length:5},(_,i)=>{const mesh=new THREE.Mesh(leafGeo,leafMat);root.add(mesh);return mesh;});
 // Winding roots are unequal in length, with tapered forks and fine rootlets.
 for(let i=0;i<7;i++){
  const angle=i*2.399+(rand()-.5)*.6,length=1.03+rand()*.55,dir=V(Math.cos(angle),0,Math.sin(angle)*.68),side=V(-Math.sin(angle),0,Math.cos(angle)*.68);
  const bend=(rand()-.5)*.55,end=dir.clone().multiplyScalar(length).addScaledVector(side,bend);end.y=-.025;
  const mainRoot=branch([V(0,.055,0),dir.clone().multiplyScalar(.15).add(V(0,.025,0)),dir.clone().multiplyScalar(length*.38).addScaledVector(side,-bend*.35).add(V(0,.012,0)),dir.clone().multiplyScalar(length*.7).addScaledVector(side,bend*.8).add(V(0,-.018,0)),end],.051,.025+i*.003,1.9,null,1,'root');
  for(let j=0;j<3;j++){
   const anchor=.34+j*.21,from=mainRoot.getPoint(anchor),heading=angle+(j%2?-1:1)*(.43+rand()*.55),reach=.3+rand()*.35;
   const fineEnd=from.clone().add(V(Math.cos(heading)*reach,-.012,Math.sin(heading)*reach*.68));
   const fine=branch([from,from.clone().add(mainRoot.getTangent(anchor).multiplyScalar(.05)),from.clone().lerp(fineEnd,.58).add(V(-.03,0,.025)),fineEnd],.015,.27,3,mainRoot,anchor,'root');
   const a=.68,p=fine.getPoint(a),e=p.clone().add(V(Math.cos(heading+.8)*.22,-.01,Math.sin(heading+.8)*.22*.68));
   branch([p,p.clone().lerp(e,.45).add(V(.02,0,-.015)),e],.003,.5,4,fine,a,'root');
  }
 }
 // Share one dynamic wood buffer: hundreds of connected twigs cost one draw call.
 const vertexCount=branches.reduce((n,b)=>n+b.positions.length/3,0),positions=new Float32Array(vertexCount*3),normals=new Float32Array(vertexCount*3),uvs=new Float32Array(vertexCount*2),indices=[];let vertex=0;
 for(const b of branches){b.positions=positions.subarray(vertex*3,(vertex+b.positions.length/3)*3);b.normals=normals.subarray(vertex*3,vertex*3+b.normals.length);b.uvs=uvs.subarray(vertex*2,vertex*2+b.uvs.length);indices.push(...b.indices.map(i=>i+vertex));vertex+=b.positions.length/3;}
 const woodGeo=new THREE.BufferGeometry();woodGeo.setAttribute('position',new THREE.BufferAttribute(positions,3).setUsage(THREE.DynamicDrawUsage));woodGeo.setAttribute('normal',new THREE.BufferAttribute(normals,3).setUsage(THREE.DynamicDrawUsage));woodGeo.setAttribute('uv',new THREE.BufferAttribute(uvs,2).setUsage(THREE.DynamicDrawUsage));woodGeo.setIndex(indices);
 const woodMesh=new THREE.Mesh(woodGeo,wood);woodMesh.frustumCulled=false;root.add(woodMesh);
 let lastGrowth=-1,lastW=0,lastH=0,lastRender=0;const reduced=matchMedia('(prefers-reduced-motion:reduce)').matches;
 function update(growth,time=0){const rect=canvas.getBoundingClientRect();if(!rect.width||!rect.height)return;const resized=rect.width!==lastW||rect.height!==lastH;if(resized){lastW=rect.width;lastH=rect.height;renderer.setSize(lastW,lastH,false);camera.aspect=lastW/lastH;camera.position.set(0,2.1,8.9);camera.lookAt(0,2.1,0);camera.updateProjectionMatrix();}if(!resized&&time-lastRender<32&&Math.abs(growth-lastGrowth)<.002)return;lastRender=time;
 if(growth!==lastGrowth){
 barkAge.value=smooth((growth-.12)/.48);
 const maturity=.09+.91*smooth((growth-.015)/.83);
 for(const b of branches){const g=clamp((growth-b.start)*b.speed);b.growth=g;
 const center=V(0,0,0),normal=V(0,0,0),binormal=V(0,0,0),radial=V(0,0,0);
 for(let i=0;i<=b.rings;i++){const u=i/b.rings*g,frame=u*120,low=Math.min(119,Math.floor(frame)),f=frame-low;center.copy(b.curve.getPoint(u));normal.copy(b.frames.normals[low]).lerp(b.frames.normals[low+1],f).normalize();binormal.copy(b.frames.binormals[low]).lerp(b.frames.binormals[low+1],f).normalize();const t=i/b.rings,tip=t>.94?Math.sqrt(Math.max(0,1-Math.pow((t-.94)/.06,2))):1;
 const collar=b.kind==='trunk'?1+.65*Math.exp(-u*17):1+.12*Math.exp(-u*25);
 const radius=b.radius*Math.sqrt(g)*maturity*(1-u*b.taper)*tip*collar;
 for(let j=0;j<=b.sides;j++){
  const theta=j/b.sides*Math.PI*2;radial.copy(normal).multiplyScalar(Math.cos(theta)).addScaledVector(binormal,Math.sin(theta));
  // Uneven longitudinal ridges, knots and lobed root flare change the silhouette.
  const ridges=1+.075*Math.sin(theta*5+u*4+b.phase)+.04*Math.sin(theta*9-u*8+b.phase)+.06*Math.sin(u*34+b.phase)*Math.sin(theta*2+b.phase);
  const flare=b.kind==='trunk'?1+.14*Math.cos(theta*7)*Math.exp(-u*20):1,r=radius*(1+(ridges*flare-1)*maturity),index=(i*(b.sides+1)+j)*3;
  b.positions[index]=center.x+radial.x*r;b.positions[index+1]=center.y+radial.y*r;b.positions[index+2]=center.z+radial.z*r;b.normals[index]=radial.x;b.normals[index+1]=radial.y;b.normals[index+2]=radial.z;
  const uv=(i*(b.sides+1)+j)*2;b.uvs[uv]=j/b.sides*Math.max(.13,b.radius*Math.PI*2/.42)+b.phase;b.uvs[uv+1]=u*b.length/.66;
 }
 }
 }
 woodGeo.attributes.position.needsUpdate=true;woodGeo.attributes.normal.needsUpdate=true;woodGeo.attributes.uv.needsUpdate=true;
 leaves.forEach((l,i)=>{const leafStart=Math.max(l.start,l.parent.start+l.u/l.parent.speed),sprout=smooth((growth-leafStart)*7)*l.size;
 dummy.position.copy(l.parent.curve.getPoint(l.u));dummy.quaternion.setFromUnitVectors(V(0,0,1),l.direction);dummy.rotateZ(l.twist);dummy.scale.set(sprout*l.width,sprout,sprout);dummy.updateMatrix();foliage.setMatrixAt(i,dummy.matrix);});foliage.instanceMatrix.needsUpdate=true;
 seedLeaves.forEach((mesh,i)=>{const onset=.012+i*.043,opened=smooth((growth-onset)/.042),retired=i===0?1:1-smooth((growth-.30)/.30),size=opened*(i===0?1.10-.58*smooth((growth-.3)/.35):.70)*retired;
 const u=Math.max(0,trunk.branchRecord.growth*(.985-i*.135));mesh.position.copy(trunk.getPoint(u));mesh.quaternion.setFromUnitVectors(V(0,0,1),V(Math.cos(i*2.4+.2),.35-i*.11,Math.sin(i*2.4+.2)).normalize());mesh.rotateZ(1.18+i*.43);mesh.scale.setScalar(size);mesh.visible=size>.001;});
 lastGrowth=growth;}
 leafWind.value=time/1100;windAmount.value=reduced?0:1;
 root.rotation.z=reduced?0:Math.sin(time/1500)*.008;renderer.render(scene,camera);}
 update(0);return{update,dispose(){woodGeo.dispose();leafGeo.dispose();wood.dispose();barkTextures.forEach(t=>t.dispose());leafMat.dispose();leafTexture.dispose();renderer.dispose();}};
}
