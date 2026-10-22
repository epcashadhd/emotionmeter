/* Preview only: one document background survives screen transitions.
   The screen contents retain their existing opacity transition. */
(() => {
 const base=[245,242,235];
 const rgba=text=>{
  if(!text||text==='transparent')return [...base,0];
  const numbers=text.match(/[\d.]+/g)?.map(Number)||[];
  return [numbers[0]??base[0],numbers[1]??base[1],numbers[2]??base[2],numbers[3]??1];
 };
 const fadedImage=(image,opacity)=>image==='none'?'none':image.replace(/rgba?\(([^)]+)\)/g,match=>{
  const [r,g,b,a]=rgba(match);return `rgba(${r},${g},${b},${+(a*opacity).toFixed(4)})`;
 });
 function boot(){
  const root=document.getElementById('root');if(!root)return;
  let theme=document.querySelector('meta[name="theme-color"]');
  if(!theme){theme=document.createElement('meta');theme.name='theme-color';document.head.appendChild(theme);}
  let page=null,source=null,raf=0,captureRaf=0,until=0,last='';
  const findPage=()=>Array.from(root.children).find(n=>n.matches('.platform-home,.fixed.inset-0'));
  function paint(){
   raf=0;if(!page?.isConnected||!source)return;
   const opacity=Math.max(0,Math.min(1,Number(getComputedStyle(page).opacity)));
   const [r,g,b,a]=source.colour,weight=a*opacity;
   const colour=`rgb(${[r,g,b].map((v,i)=>+(base[i]+(v-base[i])*weight).toFixed(3)).join(',')})`;
   const image=fadedImage(source.image,opacity),key=colour+'|'+image;
   if(key!==last){
    last=key;document.documentElement.style.setProperty('--edge-canvas-colour',colour);
    document.documentElement.style.setProperty('--edge-canvas-image',image);
    theme.content=colour;
   }
   document.documentElement.dataset.edgePaintOpacity=String(opacity);
   if(!document.hidden&&performance.now()<until)raf=requestAnimationFrame(paint);
  }
  function capture(){
   const next=findPage();if(!next)return; // Never clear paint between screens.
   if(next!==page){page?.removeAttribute('data-edge-paint');page=next;}
   // Read the page's original palette before its background is delegated to
   // the document canvas. Attribute filtering avoids observer feedback.
   page.removeAttribute('data-edge-paint');
   const css=getComputedStyle(page),image=css.backgroundImage;
   // Gradients do not supply an opaque background-color. Safari can sample
   // the underlying solid colour for its top/bottom UI, so give that layer
   // the same emotion hue as the gradient instead of the neutral page base.
   const firstStop=image==='none'?null:image.match(/rgba?\([^)]+\)/)?.[0];
   source={colour:rgba(firstStop||css.backgroundColor),image};
   page.dataset.edgePaint='true';until=performance.now()+950;
   if(raf)cancelAnimationFrame(raf);paint();
  }
  // Tailwind may generate a newly used emotion palette after React changes
  // its classes. Sample after that stylesheet update, not during the gap.
  function queueCapture(){if(!captureRaf)captureRaf=requestAnimationFrame(()=>{captureRaf=0;capture();});}
  const observer=new MutationObserver(queueCapture);
  observer.observe(root,{childList:true,subtree:true,attributes:true,attributeFilter:['class']});
  const styles=new MutationObserver(queueCapture);
  styles.observe(document.head,{childList:true,subtree:true,characterData:true});
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)capture();});
  window.addEventListener('pageshow',capture);capture();
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();
