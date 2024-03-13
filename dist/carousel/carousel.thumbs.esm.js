const t=(e,...i)=>{const s=i.length;for(let n=0;n<s;n++){const s=i[n]||{};Object.entries(s).forEach((([i,s])=>{const n=Array.isArray(s)?[]:{};var r;e[i]||Object.assign(e,{[i]:n}),"object"==typeof(r=s)&&null!==r&&r.constructor===Object&&"[object Object]"===Object.prototype.toString.call(r)?Object.assign(e[i],t(n,s)):Array.isArray(s)?Object.assign(e,{[i]:[...s]}):Object.assign(e,{[i]:s})}))}return e},e=t=>`${t||""}`.split(" ").filter((t=>!!t)),i=(t,i)=>{t&&e(i).forEach((e=>{t.classList.add(e)}))},s=(t,i)=>{t&&e(i).forEach((e=>{t.classList.remove(e)}))},n=function(t,e){return t.split(".").reduce(((t,e)=>"object"==typeof t?t[e]:void 0),e)};class r{constructor(t={}){Object.defineProperty(this,"options",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"events",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),this.setOptions(t);for(const t of Object.getOwnPropertyNames(Object.getPrototypeOf(this)))t.startsWith("on")&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}setOptions(e){this.options=e?t({},this.constructor.defaults,e):{};for(const[t,e]of Object.entries(this.option("on")||{}))this.on(t,e)}option(t,...e){let i=n(t,this.options);return i&&"function"==typeof i&&(i=i.call(this,this,...e)),i}optionFor(t,e,i,...s){let r=n(e,t);var o;"string"!=typeof(o=r)||isNaN(o)||isNaN(parseFloat(o))||(r=parseFloat(r)),"true"===r&&(r=!0),"false"===r&&(r=!1),r&&"function"==typeof r&&(r=r.call(this,this,t,...s));let a=n(e,this.options);return a&&"function"==typeof a?r=a.call(this,this,t,...s,r):void 0===r&&(r=a),void 0===r?i:r}cn(t){const e=this.options.classes;return e&&e[t]||""}localize(t,e=[]){t=String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g,((t,e,i)=>{let s="";return i?s=this.option(`${e[0]+e.toLowerCase().substring(1)}.l10n.${i}`):e&&(s=this.option(`l10n.${e}`)),s||(s=t),s}));for(let i=0;i<e.length;i++)t=t.split(e[i][0]).join(e[i][1]);return t=t.replace(/\{\{(.*?)\}\}/g,((t,e)=>e))}on(t,e){let i=[];"string"==typeof t?i=t.split(" "):Array.isArray(t)&&(i=t),this.events||(this.events=new Map),i.forEach((t=>{let i=this.events.get(t);i||(this.events.set(t,[]),i=[]),i.includes(e)||i.push(e),this.events.set(t,i)}))}off(t,e){let i=[];"string"==typeof t?i=t.split(" "):Array.isArray(t)&&(i=t),i.forEach((t=>{const i=this.events.get(t);if(Array.isArray(i)){const t=i.indexOf(e);t>-1&&i.splice(t,1)}}))}emit(t,...e){[...this.events.get(t)||[]].forEach((t=>t(this,...e))),"*"!==t&&this.emit("*",t,...e)}}Object.defineProperty(r,"version",{enumerable:!0,configurable:!0,writable:!0,value:"5.0.35"}),Object.defineProperty(r,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{}});class o extends r{constructor(t,e){super(e),Object.defineProperty(this,"instance",{enumerable:!0,configurable:!0,writable:!0,value:t})}attach(){}detach(){}}var a,l;!function(t){t[t.Init=0]="Init",t[t.Error=1]="Error",t[t.Ready=2]="Ready",t[t.Panning=3]="Panning",t[t.Mousemove=4]="Mousemove",t[t.Destroy=5]="Destroy"}(a||(a={})),function(t){t[t.Init=0]="Init",t[t.Ready=1]="Ready",t[t.Destroy=2]="Destroy"}(l||(l={}));const c=(t,e=1e4)=>(t=parseFloat(t+"")||0,Math.round((t+Number.EPSILON)*e)/e),h={classes:{container:"f-thumbs f-carousel__thumbs",viewport:"f-thumbs__viewport",track:"f-thumbs__track",slide:"f-thumbs__slide",isResting:"is-resting",isSelected:"is-selected",isLoading:"is-loading",hasThumbs:"has-thumbs"},minCount:2,parentEl:null,thumbTpl:'<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>',type:"modern"};var u;!function(t){t[t.Init=0]="Init",t[t.Ready=1]="Ready",t[t.Hidden=2]="Hidden"}(u||(u={}));const d="isResting",f="thumbWidth",b="thumbHeight",p="thumbClipWidth";class g extends o{constructor(){super(...arguments),Object.defineProperty(this,"type",{enumerable:!0,configurable:!0,writable:!0,value:"modern"}),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"track",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"carousel",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"thumbWidth",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"thumbClipWidth",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"thumbHeight",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"thumbGap",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"thumbExtraGap",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:u.Init})}get isModern(){return"modern"===this.type}onInitSlide(t,e){const i=e.el?e.el.dataset:void 0;i&&(e.thumbSrc=i.thumbSrc||e.thumbSrc||"",e[p]=parseFloat(i[p]||"")||e[p]||0,e[b]=parseFloat(i.thumbHeight||"")||e[b]||0),this.addSlide(e)}onInitSlides(){this.build()}onChange(){var t;if(!this.isModern)return;const i=this.container,n=this.instance,r=n.panzoom,o=this.carousel,a=o?o.panzoom:null,l=n.page;if(r&&o&&a){if(r.isDragging){s(i,this.cn(d));let e=(null===(t=o.pages[l])||void 0===t?void 0:t.pos)||0;e+=n.getProgress(l)*(this[p]+this.thumbGap);let r=a.getBounds();-1*e>r.x.min&&-1*e<r.x.max&&a.panTo({x:-1*e,friction:.12})}else c=i,h=this.cn(d),u=r.isResting,c&&e(h).forEach((t=>{c.classList.toggle(t,u||!1)}));var c,h,u;this.shiftModern()}}onRefresh(){this.updateProps();for(const t of this.instance.slides||[])this.resizeModernSlide(t);this.shiftModern()}isDisabled(){const t=this.option("minCount")||0;if(t){const e=this.instance;let i=0;for(const t of e.slides||[])t.thumbSrc&&i++;if(i<t)return!0}const e=this.option("type");return["modern","classic"].indexOf(e)<0}getThumb(t){const e=this.option("thumbTpl")||"";return{html:this.instance.localize(e,[["%i",t.index],["%d",t.index+1],["%s",t.thumbSrc||"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"]])}}addSlide(t){const e=this.carousel;e&&e.addSlide(t.index,this.getThumb(t))}getSlides(){const t=[];for(const e of this.instance.slides||[])t.push(this.getThumb(e));return t}resizeModernSlide(t){this.isModern&&(t[f]=t[p]&&t[b]?Math.round(this[b]*(t[p]/t[b])):this[f])}updateProps(){const t=this.container;if(!t)return;const e=e=>parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-"+e))||0;this.thumbGap=e("gap"),this.thumbExtraGap=e("extra-gap"),this[f]=e("width")||40,this[p]=e("clip-width")||40,this[b]=e("height")||40}build(){const e=this;if(e.state!==u.Init)return;if(e.isDisabled())return void e.emit("disabled");const s=e.instance,n=s.container,r=e.getSlides(),o=e.option("type");e.type=o;const a=e.option("parentEl"),l=e.cn("container"),c=e.cn("track");let h=null==a?void 0:a.querySelector("."+l);h||(h=document.createElement("div"),i(h,l),a?a.appendChild(h):n.after(h)),i(h,`is-${o}`),i(n,e.cn("hasThumbs")),e.container=h,e.updateProps();let d=h.querySelector("."+c);d||(d=document.createElement("div"),i(d,e.cn("track")),h.appendChild(d)),e.track=d;const f=t({},{track:d,infinite:!1,center:!0,fill:"classic"===o,dragFree:!0,slidesPerPage:1,transition:!1,preload:.25,friction:.12,Panzoom:{maxVelocity:0},Dots:!1,Navigation:!1,classes:{container:"f-thumbs",viewport:"f-thumbs__viewport",track:"f-thumbs__track",slide:"f-thumbs__slide"}},e.option("Carousel")||{},{Sync:{target:s},slides:r}),b=new s.constructor(h,f);b.on("createSlide",((t,i)=>{e.setProps(i.index),e.emit("createSlide",i,i.el)})),b.on("ready",(()=>{e.shiftModern(),e.emit("ready")})),b.on("refresh",(()=>{e.shiftModern()})),b.on("Panzoom.click",((t,i,s)=>{e.onClick(s)})),e.carousel=b,e.state=u.Ready}onClick(t){t.preventDefault(),t.stopPropagation();const e=this.instance,{pages:i,page:s}=e,n=t=>{if(t){const e=t.closest("[data-carousel-index]");if(e)return[parseInt(e.dataset.carouselIndex||"",10)||0,e]}return[-1,void 0]},r=(t,e)=>{const i=document.elementFromPoint(t,e);return i?n(i):[-1,void 0]};let[o,a]=n(t.target);if(o>-1)return;const l=this[p],c=t.clientX,h=t.clientY;let[u,d]=r(c-l,h),[f,b]=r(c+l,h);d&&b?(o=Math.abs(c-d.getBoundingClientRect().right)<Math.abs(c-b.getBoundingClientRect().left)?u:f,o===s&&(o=o===u?f:u)):d?o=u:b&&(o=f),o>-1&&i[o]&&e.slideTo(o)}getShift(t){var e;const i=this,{instance:s}=i,n=i.carousel;if(!s||!n)return 0;const r=i[f],o=i[p],a=i.thumbGap,l=i.thumbExtraGap;if(!(null===(e=n.slides[t])||void 0===e?void 0:e.el))return 0;const c=.5*(r-o),h=s.pages.length-1;let u=s.getProgress(0),d=s.getProgress(h),b=s.getProgress(t,!1,!0),g=0,m=c+l+a;const y=u<0&&u>-1,v=d>0&&d<1;return 0===t?(g=m*Math.abs(u),v&&1===u&&(g-=m*Math.abs(d))):t===h?(g=m*Math.abs(d)*-1,y&&-1===d&&(g+=m*Math.abs(u))):y||v?(g=-1*m,g+=m*Math.abs(u),g+=m*(1-Math.abs(d))):g=m*b,g}setProps(t){var e;const i=this;if(!i.isModern)return;const{instance:s}=i,n=i.carousel;if(s&&n){const r=null===(e=n.slides[t])||void 0===e?void 0:e.el;if(r&&r.childNodes.length){let e=c(1-Math.abs(s.getProgress(t))),n=c(i.getShift(t));r.style.setProperty("--progress",e?e+"":""),r.style.setProperty("--shift",n+"")}}}shiftModern(){const t=this;if(!t.isModern)return;const{instance:e,track:i}=t,s=e.panzoom,n=t.carousel;if(!(e&&i&&s&&n))return;if(s.state===a.Init||s.state===a.Destroy)return;for(const i of e.slides)t.setProps(i.index);let r=(t[p]+t.thumbGap)*(n.slides.length||0);i.style.setProperty("--width",r+"")}cleanup(){const t=this;t.carousel&&t.carousel.destroy(),t.carousel=null,t.container&&t.container.remove(),t.container=null,t.track&&t.track.remove(),t.track=null,t.state=u.Init,s(t.instance.container,t.cn("hasThumbs"))}attach(){const t=this,e=t.instance;e.on("initSlide",t.onInitSlide),e.state===l.Init?e.on("initSlides",t.onInitSlides):t.onInitSlides(),e.on(["change","Panzoom.afterTransform"],t.onChange),e.on("Panzoom.refresh",t.onRefresh)}detach(){const t=this,e=t.instance;e.off("initSlide",t.onInitSlide),e.off("initSlides",t.onInitSlides),e.off(["change","Panzoom.afterTransform"],t.onChange),e.off("Panzoom.refresh",t.onRefresh),t.cleanup()}}Object.defineProperty(g,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:h});export{u as States,g as Thumbs,h as defaultOptions};
