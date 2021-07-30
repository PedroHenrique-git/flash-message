!function(t,e){t.FlashMessage=e()}(this,()=>{const t=["top-left","top-right","top-center","bottom-left","bottom-right","bottom-center"],e=function(e){this.container=document.createElement("section"),this.options=e||{},t.includes(this.options.position)?this.container.classList.add(this.options.position):this.container.classList.add(t[1]),this.container.classList.add("flash-container"),document.body.appendChild(this.container)},s=function(t,e){this.start=0,this.timer=0,this.remaining=e,this.resume=function(){this.start=new Date,this.timer=window.setTimeout(t,this.remaining)},this.pause=function(){this.remaining-=new Date-this.start,window.clearTimeout(this.timer)},this.resume()},n=(t,e)=>{if(typeof t!==e)throw window.TypeError(`pass a ${e} to the method`)};return e.prototype={constructor:e,controlFadeAndHover(t){const e=new s(()=>{t.classList.add("flash-hidden")},this.options.duration||3e3);t.addEventListener("mouseover",()=>{e.pause()}),t.addEventListener("mouseout",()=>{e.resume()}),t.addEventListener("transitionend",()=>{t.classList.add("smooth"),this.removeFlahsFromDom()})},closeButton(t,e){const s=document.createElement("button"),n=document.createTextNode(e);s.className="close-btn",s.appendChild(n),s.addEventListener("click",()=>{t.classList.add("flash-hidden")}),s.addEventListener("transitionend",()=>{t.classList.add("smooth")}),t.appendChild(s)},removeFlahsFromDom(){const t=document.getElementsByClassName("flash-hidden");new s(()=>{Array.from(t).forEach(t=>t.remove())},1e3)},createFlash(t){const e=document.createElement("div");return e.className=`flash ${t}`,this.controlFadeAndHover(e),e},warn(t){n(t,"string");const e=this.createFlash("warn");e.innerText=t,this.container.appendChild(e),this.closeButton(e,"X")},error(t){n(t,"string");const e=this.createFlash("error");e.innerText=t,this.container.appendChild(e),this.closeButton(e,"X")},info(t){n(t,"string");const e=this.createFlash("info");e.innerText=t,this.container.appendChild(e),this.closeButton(e,"X")},success(t){n(t,"string");const e=this.createFlash("success");e.innerText=t,this.container.appendChild(e),this.closeButton(e,"X")}},e});