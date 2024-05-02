(()=>{var e={484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",s="minute",r="hour",a="day",o="week",l="month",c="quarter",d="year",u="date",p="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},m=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},_={s:m,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+m(i,2,"0")+":"+m(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(i,l),r=n-s<0,a=t.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:o,d:a,D:u,h:r,m:s,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},g="en",$={};$[g]=f;var y=function(e){return e instanceof T},b=function e(t,n,i){var s;if(!t)return g;if("string"==typeof t){var r=t.toLowerCase();$[r]&&(s=r),n&&($[r]=n,s=r);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var o=t.name;$[o]=t,s=o}return!i&&s&&(g=s),s||!i&&g},M=function(e,t){if(y(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new T(n)},D=_;D.l=b,D.i=y,D.w=function(e,t){return M(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var T=function(){function f(e){this.$L=b(e.locale,null,!0),this.parse(e)}var m=f.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(h);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return D},m.isValid=function(){return!(this.$d.toString()===p)},m.isSame=function(e,t){var n=M(e);return this.startOf(t)<=n&&n<=this.endOf(t)},m.isAfter=function(e,t){return M(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<M(e)},m.$g=function(e,t,n){return D.u(e)?this[t]:this.set(n,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var n=this,c=!!D.u(t)||t,p=D.p(e),h=function(e,t){var i=D.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return c?i:i.endOf(a)},v=function(e,t){return D.w(n.toDate()[e].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},f=this.$W,m=this.$M,_=this.$D,g="set"+(this.$u?"UTC":"");switch(p){case d:return c?h(1,0):h(31,11);case l:return c?h(1,m):h(0,m+1);case o:var $=this.$locale().weekStart||0,y=(f<$?f+7:f)-$;return h(c?_-y:_+(6-y),m);case a:case u:return v(g+"Hours",0);case r:return v(g+"Minutes",1);case s:return v(g+"Seconds",2);case i:return v(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,t){var o,c=D.p(e),p="set"+(this.$u?"UTC":""),h=(o={},o[a]=p+"Date",o[u]=p+"Date",o[l]=p+"Month",o[d]=p+"FullYear",o[r]=p+"Hours",o[s]=p+"Minutes",o[i]=p+"Seconds",o[n]=p+"Milliseconds",o)[c],v=c===a?this.$D+(t-this.$W):t;if(c===l||c===d){var f=this.clone().set(u,1);f.$d[h](v),f.init(),this.$d=f.set(u,Math.min(this.$D,f.daysInMonth())).$d}else h&&this.$d[h](v);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[D.p(e)]()},m.add=function(n,c){var u,p=this;n=Number(n);var h=D.p(c),v=function(e){var t=M(p);return D.w(t.date(t.date()+Math.round(e*n)),p)};if(h===l)return this.set(l,this.$M+n);if(h===d)return this.set(d,this.$y+n);if(h===a)return v(1);if(h===o)return v(7);var f=(u={},u[s]=e,u[r]=t,u[i]=1e3,u)[h]||1,m=this.$d.getTime()+n*f;return D.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var i=e||"YYYY-MM-DDTHH:mm:ssZ",s=D.z(this),r=this.$H,a=this.$m,o=this.$M,l=n.weekdays,c=n.months,d=function(e,n,s,r){return e&&(e[n]||e(t,i))||s[n].slice(0,r)},u=function(e){return D.s(r%12||12,e,"0")},h=n.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:d(n.monthsShort,o,c,3),MMMM:d(c,o),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,l,2),ddd:d(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:D.s(r,2,"0"),h:u(1),hh:u(2),a:h(r,a,!0),A:h(r,a,!1),m:String(a),mm:D.s(a,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:s};return i.replace(v,(function(e,t){return t||f[e]||s.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,u,p){var h,v=D.p(u),f=M(n),m=(f.utcOffset()-this.utcOffset())*e,_=this-f,g=D.m(this,f);return g=(h={},h[d]=g/12,h[l]=g,h[c]=g/3,h[o]=(_-m)/6048e5,h[a]=(_-m)/864e5,h[r]=_/t,h[s]=_/e,h[i]=_/1e3,h)[v]||_,p?g:D.a(g)},m.daysInMonth=function(){return this.endOf(l).$D},m.$locale=function(){return $[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=b(e,t,!0);return i&&(n.$L=i),n},m.clone=function(){return D.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},f}(),w=T.prototype;return M.prototype=w,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",a],["$M",l],["$y",d],["$D",u]].forEach((function(e){w[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),M.extend=function(e,t){return e.$i||(e(t,T,M),e.$i=!0),M},M.locale=b,M.isDayjs=y,M.unix=function(e){return M(1e3*e)},M.en=$[g],M.Ls=$,M.p={},M}()}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=[{id:"event-0",basePrice:1200,dateFrom:"2019-07-10T22:55:56.845Z",dateTo:"2019-07-11T11:22:13.375Z",destination:"Chamonix",isFavorite:!0,offers:[{id:"train-offer-0",title:"Add luggage",price:50},{id:"train-offer-1",title:"Switch to comfort",price:80},{id:"train-offer-2",title:"Add meal",price:15},{id:"train-offer-3",title:"Choose seats",price:5},{id:"train-offer-4",title:"Travel by train",price:40}],type:"train"},{id:"event-1",basePrice:1500,dateFrom:"2019-08-10T22:55:56.845Z",dateTo:"2019-08-11T11:22:13.375Z",destination:"Amsterdam",isFavorite:!1,offers:[{id:"bus-offer-0",title:"Add luggage",price:50},{id:"bus-offer-1",title:"Switch to comfort",price:80}],type:"bus"},{id:"event-2",basePrice:1100,dateFrom:"2019-09-10T22:55:56.845Z",dateTo:"2019-09-11T11:22:13.375Z",destination:"Geneva",isFavorite:!1,type:"flight"}];function t(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function i(e,t,n="beforeend"){t.insertAdjacentElement(n,e.getElement())}class s{getTemplate(){return'\n    <header class="page-header">\n      <div class="page-body__container page-header__container">\n        <img\n          class="page-header__logo"\n          src="img/logo.png"\n          width="42"\n          height="42"\n          alt="Trip logo"\n         >\n      </div>\n    </header>\n  '}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class r{constructor({filters:e}){this.filters=e}getTemplate(){return`\n    <div class="trip-main">\n      \n    <section class="trip-main__trip-info trip-info">\n      <div class="trip-info__main">\n        <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n        <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>\n      </div>\n      <p class="trip-info__cost">\n        Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n      </p>\n    </section>\n  \n      ${e=this.filters,`\n    <div class="trip-main__trip-controls trip-controls">\n      <div class="trip-controls__filters">\n        <h2 class="visually-hidden">Filter events</h2>\n        <form class="trip-filters" action="#" method="get">\n          ${e.map((e=>`\n            <div class="trip-filters__filter">\n              <input\n                id="filter-${e}"\n                class="trip-filters__filter-input visually-hidden"\n                type="radio"\n                name="trip-filter"\n                value=${e}\n                ${"everything"===e?"checked":""}\n              >\n              <label\n                class="trip-filters__filter-label"\n                for="filter-${e}"\n              >\n                ${e}\n              </label>\n            </div>\n          `)).join("")}\n\n          <button class="visually-hidden" type="submit">Accept filter</button>\n        </form>\n      </div>\n    </div>\n  `}\n\n      <button\n        class="trip-main__event-add-btn btn btn--big btn--yellow"\n        type="button"\n      >\n        New event\n      </button>\n    </div>\n  `;var e}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class a{getTemplate(){return'\n    <main class="page-body__page-main page-main">\n      <div class="page-body__container">\n        <section class="trip-events">\n          <h2 class="visually-hidden">Trip events</h2>\n        </section>\n      </div>\n    </main>\n  '}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class o{constructor(e){this.sorts=e}getTemplate(){return`\n    <form class="trip-events__trip-sort trip-sort" action="#" method="get">\n      ${this.sorts.map((e=>`\n        <div class="trip-sort__item trip-sort__item--${e}">\n          <input\n            id="sort-${e}"\n            class="trip-sort__input visually-hidden"\n            type="radio"\n            name="trip-sort"\n            value="sort-${e}"\n            ${"days"===e?"checked":""}\n            ${"event"===e||"offers"===e?"disabled":""}\n          >\n          <label\n            class="trip-sort__btn"\n            for="sort-${e}"\n          >\n            ${e}\n          </label>\n        </div>\n      `)).join("")}\n    </form>\n  `}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class l{getTemplate(){return'<ul class="trip-events__list"></ul>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}var c=n(484),d=n.n(c);function u(e,t){return e?d()(e).format(t):""}class p{constructor({event:e}){this.event=e}getTemplate(){return function(e){const{basePrice:t,dateFrom:n,dateTo:i,destination:s,isFavorite:r,offers:a,type:o}=e,l=r?"event__favorite-btn--active":"",c=function(e,t){const n=d()(e).diff(d()(t),"minutes");return n?`${Math.floor(n/60)}H ${n%60}M`:""}(i,n);return`\n    <div class="event">\n      <time\n        class="event__date"\n        datetime="${u(n,"YYYY-MM-DD")}"\n      >\n        ${u(n,"MMM DD")}\n      </time>\n      <div class="event__type">\n        <img\n          class="event__type-icon"\n          width="42"\n          height="42"\n          src="img/icons/${o}.png"\n          alt="Event type icon"\n        >\n      </div>\n      <h3 class="event__title">${o} ${s}</h3>\n      <div class="event__schedule">\n        <p class="event__time">\n          <time\n            class="event__start-time"\n            datetime="${u(n,"YYYY-MM-DDTHH:MM")}"\n          >\n            ${u(n,"HH:MM")}\n          </time>\n          &mdash;\n          <time\n            class="event__end-time"\n            datetime="${u(i,"YYYY-MM-DDTHH:MM")}"\n          >\n            ${u(i,"HH:MM")}\n          </time>\n        </p>\n        <p class="event__duration">${c}</p>\n      </div>\n      <p class="event__price">\n        &euro;&nbsp;<span class="event__price-value">${t}</span>\n      </p>\n      ${a&&a.length>0?`\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers">\n          ${a.map((({title:e,price:t})=>`\n            <li class="event__offer">\n               <span class="event__offer-title">${e}</span>\n               &plus;&euro;&nbsp;\n               <span class="event__offer-price">${t}</span>\n            </li>\n          `)).join("")}\n        </ul>\n      `:""}\n      <button class="event__favorite-btn ${l}" type="button">\n        <span class="visually-hidden">Add to favorite</span>\n        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n          <path\n            d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688\n            14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"\n          />\n        </svg>\n      </button>\n      <button class="event__rollup-btn" type="button">\n        <span class="visually-hidden">Open event</span>\n      </button>\n    </div>\n  `}(this.event)}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}const h={basePrice:1100,dateFrom:"2019-07-10T22:55:56.845Z",dateTo:"2019-07-11T11:22:13.375Z",destination:{id:"chamonix",name:"Chamonix",description:"Chamonix description",pictures:[{src:"./img/photos/1.jpg",description:"Description"},{src:"./img/photos/2.jpg",description:"Description"},{src:"./img/photos/3.jpg",description:"Description"},{src:"./img/photos/4.jpg",description:"Description"},{src:"./img/photos/5.jpg",description:"Description"}]},isFavorite:!0,offers:[{id:"taxi-offer-0dsa",title:"Add luggage",price:50},{id:"taxi-offer-11231",title:"Switch to comfort",price:80},{id:"taxi-offer-2312mds1",title:"Add meal",price:15},{id:"taxi-offer-3ds01k3",title:"Choose seats",price:5},{id:"taxi-offer-4dasm123",title:"Travel by train",price:40}],type:"taxi"};class v{constructor({event:e=h,types:t,destinations:n,edit:i=!1}=""){this.event=e,this.types=t,this.destinations=n,this.edit=i}getTemplate(){return e=this.event,t=this.types,n=this.destinations,i=this.edit,`\n    <form class="event event--edit" action="#" method="post">\n      ${function(e,t,n,i){const{basePrice:s,dateFrom:r,dateTo:a,destination:o,type:l}=e;return`\n    <header class="event__header">\n      <div class="event__type-wrapper">\n        <label class="event__type event__type-btn" for="event-type-toggle-1">\n          <span class="visually-hidden">Choose event type</span>\n          <img class="event__type-icon" width="17" height="17" src="img/icons/${l}.png" alt="Event type icon">\n        </label>\n        <input class="event__type-toggle visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n        <div class="event__type-list">\n          <fieldset class="event__type-group">\n            <legend class="visually-hidden">Event type</legend>\n\n            ${t.map((e=>`\n              <div class="event__type-item">\n                <input\n                  id="event-type-${e}-1"\n                  class="event__type-input visually-hidden"\n                  type="radio"\n                  name="event-type"\n                  value="${e}"\n                  ${e===l?"checked":""}\n                >\n                <label\n                  class="event__type-label event__type-label--${e}"\n                  for="event-type-${e}-1"\n                >\n                  ${e}\n                </label>\n              </div>\n            `)).join("")}\n          </fieldset>\n        </div>\n      </div>\n\n      <div class="event__field-group event__field-group--destination">\n        <label class="event__label event__type-output" for="event-destination-1">\n          ${l}\n        </label>\n        <input\n          class="event__input event__input--destination"\n          id="event-destination-1"\n          type="text"\n          name="event-destination"\n          value="${o.name}"\n          list="destination-list-1"\n        >\n        <datalist id="destination-list-1">\n          ${n.map((e=>`\n            <option value="${e.name}"></option>\n          `)).join("")}\n        </datalist>\n      </div>\n\n      <div class="event__field-group event__field-group--time">\n        <label class="visually-hidden" for="event-start-time-1">From</label>\n        <input\n          class="event__input event__input--time"\n          id="event-start-time-1"\n          type="text"\n          name="event-start-time"\n          value="${u(r,"DD/MM/YY HH:MM")}"\n        >\n          &mdash;\n        <label class="visually-hidden" for="event-end-time-1">To</label>\n        <input\n          class="event__input event__input--time"\n          id="event-end-time-1"\n          type="text"\n          name="event-end-time"\n          value="${u(a,"DD/MM/YY HH:MM")}"\n        >\n      </div>\n\n      <div class="event__field-group event__field-group--price">\n        <label class="event__label" for="event-price-1">\n          <span class="visually-hidden">Price</span>\n          &euro;\n        </label>\n        <input\n          class="event__input event__input--price"\n          id="event-price-1"\n          type="text"\n          name="event-price"\n          value="${s}"\n        >\n      </div>\n\n      <button class="event__save-btn btn btn--blue" type="submit">Save</button>\n      ${!0===i?'\n        <button class="event__reset-btn" type="reset">Delete</button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button> ':'\n        <button class="event__reset-btn" type="reset">Cancel</button>\n      '}\n    </header>\n  `}(e,t,n,i)}\n      ${function({destination:e,offers:t}){return`\n    <section class="event__details">\n      ${t.length>0?`\n        <section class="event__section event__section--offers">\n          <h3 class="event__section-title event__section-title--offers">Offers</h3>\n\n          <div class="event__available-offers">\n            ${t.map((e=>`\n              <div class="event__offer-selector">\n                <input\n                  class="event__offer-checkbox visually-hidden"\n                  id="${e.id}"\n                  type="checkbox"\n                  name="event-offer-${e.title}"\n                >\n                <label class="event__offer-label" for="${e.id}>\n                  <span class="event__offer-title">${e.title}</span>\n                  &plus;&euro;&nbsp;\n                  <span class="event__offer-price">${e.price}</span>\n                </label>\n              </div>\n            `)).join("")}\n          </div>\n        </section>\n      `:""}\n\n      ${""!==e.description||e.pictures.length>0?`\n        <section class="event__section event__section--destination">\n          <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n          ${""!==e.destinations?`\n            <p class="event__destination-description">${e.description}</p>\n          `:""}\n          ${e.pictures.length>0?`\n            <div class="event__photos-container">\n              <div class="event__photos-tape">\n                ${e.pictures.map((e=>`\n                  <img class="event__photo" src="${e.src}" alt="${e.description}">\n                `))}}\n              </div>\n            </div>\n          `:""}\n        </section>\n      `:""}\n    </section>\n  `}(e)}\n    </form>\n  `;var e,t,n,i}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}const f=["everything","future","present","past"],m=["days","event","time","price","offers"],_=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"],g=[{id:"chamonix",name:"Chamonix",description:"",pictures:[{src:"./img/1.jpg",description:"Description"},{src:"./img/2.jpg",description:"Description"},{src:"./img/3.jpg",description:"Description"},{src:"./img/4.jpg",description:"Description"},{src:"./img/5.jpg",description:"Description"}]},{id:"amsterdam",name:"Amsterdam",description:"Amsterdam description",pictures:[]},{id:"geneva",name:"Geneva",description:"",pictures:[]}],$=new class{events=e;getEvents(){return this.events}},y=new class{headerComponent=new s;mainComponent=new a;tripEventsElement=this.mainComponent.getElement().querySelector(".trip-events");eventsComponent=new l;constructor({container:e,eventsModel:t}){this.container=e,this.eventsModel=t}init(){this.tripEvents=[...this.eventsModel.getEvents()],i(this.headerComponent,this.container),i(new r({filters:f}),this.headerComponent.getElement().querySelector(".page-body__container")),i(this.mainComponent,this.container),i(new o(m),this.tripEventsElement),i(this.eventsComponent,this.tripEventsElement),i(new v({types:_,destinations:g}),this.eventsComponent.getElement()),this.tripEvents.map((e=>{i(new p({event:e}),this.eventsComponent.getElement())}))}}({container:document.body,eventsModel:$});y.init()})()})();
//# sourceMappingURL=bundle.a1807f2f547702f6efd0.js.map