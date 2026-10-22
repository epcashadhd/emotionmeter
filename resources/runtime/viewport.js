/* Keep portrait pages still, with scrolling for all emotions. Landscape
   phones retain their original inner scroll areas; text editing stays native. */
(() => {
 let lastTouchY = null;
 const landscapePhone = () => matchMedia('(max-height:500px) and (orientation:landscape)').matches;
 const scrollerFor = target => {
  if(!(target instanceof Element)) return null;
  const usual=target.closest('.zone-stage[data-mode="all"]:not(.zone-stage-leaving), textarea');
  if(usual || !landscapePhone()) return usual;
  // On a landscape phone keep the platform's original internal scroll areas,
  // including the writing sidebar and quadrant cards, at their original size.
  for(let node=target;node&&node!==document.body;node=node.parentElement){
   if(/^(auto|scroll)$/.test(getComputedStyle(node).overflowY)&&node.scrollHeight>node.clientHeight+1) return node;
  }
  return null;
 };
 const canMove = (node, delta) => node && !node.closest('[inert]') &&
  (delta < 0 ? node.scrollTop > 0 : delta > 0 && node.scrollTop + node.clientHeight < node.scrollHeight - 1);
 document.addEventListener('touchstart', event => {
  lastTouchY = event.touches.length === 1 ? event.touches[0].clientY : null;
 }, {passive:true});
 document.addEventListener('touchmove', event => {
  if(event.touches.length !== 1 || lastTouchY === null) return;
  const y = event.touches[0].clientY, delta = lastTouchY - y;
  lastTouchY = y;
  // Native range dragging and text selection must keep working. Their
  // containers are fixed, so neither can move the surrounding page.
  if(event.target instanceof Element && event.target.closest('input[type="range"], textarea')) return;
  if(!canMove(scrollerFor(event.target), delta) && event.cancelable) event.preventDefault();
 }, {passive:false});
 const clearTouch = () => {lastTouchY = null;};
 document.addEventListener('touchend', clearTouch, {passive:true});
 document.addEventListener('touchcancel', clearTouch, {passive:true});
 document.addEventListener('wheel', event => {
  if(event.ctrlKey || event.metaKey) return; // Keep browser zoom available.
  if(!canMove(scrollerFor(event.target), event.deltaY) && event.cancelable) event.preventDefault();
 }, {passive:false});
})();
