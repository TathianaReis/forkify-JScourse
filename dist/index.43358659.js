function e(e){return e&&e.__esModule?e.default:e}var t=globalThis,r={},n={},i=t.parcelRequire3a11;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequire3a11=i),(0,i.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>r,set:e=>r=e,enumerable:!0,configurable:!0});var r,n=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),i("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.43358659.js","eyyUD","icons.c14567a0.svg"]'));var a=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function d(e,r,n,a){var o,s,l=Object.create((r&&r.prototype instanceof v?r:v).prototype);return i(l,"_invoke",{value:(o=new T(a||[]),s=h,function(r,i){if(s===p)throw Error("Generator is already running");if(s===g){if("throw"===r)throw i;return x()}for(o.method=r,o.arg=i;;){var a=o.delegate;if(a){var l=function e(r,n){var i=n.method,a=r.iterator[i];if(a===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),f;var o=u(a,r.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,f;var s=o.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,f):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,f)}(a,o);if(l){if(l===f)continue;return l}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(s===h)throw s=g,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);s=p;var c=u(e,n,o);if("normal"===c.type){if(s=o.done?g:"suspendedYield",c.arg===f)continue;return{value:c.arg,done:o.done}}"throw"===c.type&&(s=g,o.method="throw",o.arg=c.arg)}})}),l}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=d;var h="suspendedStart",p="executing",g="completed",f={};function v(){}function m(){}function _(){}var w={};c(w,o,function(){return this});var y=Object.getPrototypeOf,b=y&&y(y(R([])));b&&b!==r&&n.call(b,o)&&(w=b);var k=_.prototype=v.prototype=Object.create(w);function E(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,a){function o(){return new t(function(r,o){!function r(i,a,o,s){var l=u(e[i],e,a);if("throw"===l.type)s(l.arg);else{var c=l.arg,d=c.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then(function(e){r("next",e,o,s)},function(e){r("throw",e,o,s)}):t.resolve(d).then(function(e){c.value=e,o(c)},function(e){return r("throw",e,o,s)})}}(i,a,r,o)})}return r=r?r.then(o,o):o()}})}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function R(e){if(e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:x}}function x(){return{value:t,done:!0}}return m.prototype=_,i(k,"constructor",{value:_,configurable:!0}),i(_,"constructor",{value:m,configurable:!0}),m.displayName=c(_,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,_):(e.__proto__=_,c(e,l,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),c(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new S(d(t,r,n,i),a);return e.isGeneratorFunction(r)?o:o.next().then(function(e){return e.done?e.value:o.next()})},E(k),c(k,l,"Generator"),c(k,o,function(){return this}),c(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=R,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else if(c){if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return(o.type=e,o.arg=t,a)?(this.method="next",this.next=a.finallyLoc,f):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;L(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:R(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),f}},e}({});try{regeneratorRuntime=a}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=a:Function("r","regeneratorRuntime = r")(a)}const o="https://forkify-api.herokuapp.com/api/v2/recipes/",s="073bd98e-9d02-4609-9203-77869f840c83",l=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 30 second"))},3e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},c={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},d=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},u=async function(e){try{let t=await l(`${o}${e}?key=${s}`);c.recipe=d(t),c.bookmarks.some(t=>t.id===e)?c.recipe.bookmarked=!0:c.recipe.bookmarked=!1,console.log(c.recipe)}catch(e){throw console.error(`Erro dentro do LoadRecipe: ${e}`),e}},h=async function(e){try{c.search.query=e;let t=await l(`${o}?search=${e}&key=${s}`);console.log(t),console.log(t.data),console.log(t.data.recipes),c.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),c.search.page=1}catch(e){throw console.log(`Erro vindo de loadSearchResults ${e}`),e}},p=function(e=c.search.page){c.search.page=e;let t=(e-1)*c.search.resultsPerPage,r=e*c.search.resultsPerPage;return c.search.results.slice(t,r)},g=function(e){c.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/c.recipe.servings}),c.recipe.servings=e},f=function(){localStorage.setItem("bookmarks",JSON.stringify(c.bookmarks))},v=function(e){c.bookmarks.push(e),e.id===c.recipe.id&&(c.recipe.bookmarked=!0),f()},m=function(e){let t=c.bookmarks.findIndex(t=>t.id===e);c.bookmarks.splice(t,1),e===c.recipe.id&&(c.recipe.bookmarked=!1),f()};!function(){let e=localStorage.getItem("bookmarks");e&&(c.bookmarks=JSON.parse(e))}();const _=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient fromat! Please use the correct format :)");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t};console.log(r);let n=await l(`${o}?key=${s}`,r);c.recipe=d(n),v(c.recipe)}catch(e){throw e}};console.log(c.bookmarks);var w={};w=new URL("icons.c14567a0.svg",import.meta.url).toString();class y{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*"));console.log(r);let n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent,console.log(r,e.isEqualNode(r))),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let t=`
            <div class="spinner">
              <svg>
                <use href="${e(w)}#icon-loader"></use>
              </svg>
            </div> 
        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderError(t=this._errorMessage){let r=`
        <div class="error">
             <div>
                <svg>
                    <use href="${e(w)}#icon-alert-triangle"></use>
                </svg>
             </div>
            <p>${t}</p>
         </div>
        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}renderMessage(t=this._successMessage){let r=`
        <div class="message">
             <div>
                <svg>
                    <use href="${e(w)}#icon-smile"></use>
                </svg>
             </div>
            <p>${t}</p>
         </div>
        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}}var b={};function k(e,t,r,n,i){var a,o,s;let l=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&l.push(t);let c=0,d=e,u=t;for(;c<=l.length;)d%l[c]==0&&u%l[c]==0?(l[c],d/=l[c],u/=l[c]):c++;return a=u,o=d,s=r,1===a&&1===o?(s=`${n}${(parseInt(s)+1).toString()}`,`${s}`):0===o?`${n}${s}`:"0"==s?`${n}${o}/${a}`:`${n}${s} ${o}/${a}`}b=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),i=n.split("."),a=i[0];if("0"==r&&"0"!==a)return a;if("0"==r&&"0"==a)return"0";if("99"==(r=n.length>=17?i[1].slice(0,i[1].length-1):i[1])&&"0"!==a)return`${a} 99/100`;if("99"==r&&"0"==a)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return a;let o=r.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(!o||!(r.length>2)){var s,l;return s=r,l=t,k(parseInt(s,10),Math.pow(10,s.length),a,l,!1)}{let e=o[0].split("").reverse().join(""),n=o[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),function(e,t,r,n,i){let a=e.length-r.length>=1?e.length-r.length:1,o=Math.pow(10,a),s=parseFloat(`0.${e}`),l=Math.pow(10,t.length);return k(Math.round((s*l-s)*Math.pow(10,a)),(l-1)*o,n,i,!0)}(r,n,e,a,t)}};class E extends y{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one.";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;console.log(r);let n=+r.dataset.updateTo;n>0&&e(n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
                <figure class="recipe__fig">
                <img src="${this._data.image}" alt=">${this._data.title}" class="recipe__img" />
                <h1 class="recipe__title">
                <span>${this._data.title}</span>
                </h1>
            </figure>this.#
            
            <div class="recipe__details">
                <div class="recipe__info">
                <svg class="recipe__info-icon">
                    <use href="${e(w)}.svg#icon-clock"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
                <span class="recipe__info-text">minutes</span>
                </div>
                <div class="recipe__info">
                <svg class="recipe__info-icon">
                    <use href="${e(w)}.svg#icon-users"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
                <span class="recipe__info-text">servings</span>
            
                <div class="recipe__info-buttons">
                    <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                    <svg>
                        <use href="${e(w)}.svg#icon-minus-circle"></use>
                    </svg>
                    </button>
                    <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                    <svg>
                        <use href="${e(w)}.svg#icon-plus-circle"></use>
                    </svg>
                    </button>
                </div>
                </div>
            
                <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
                <svg>
                  <use href="${e(w)}#icon-user"></use>
                </svg>
              </div>
                <button class="btn--round btn--bookmark">
                <svg class="">
                    <use href="${e(w)}.svg#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
                </svg>
                </button>
            </div>
            
            <div class="recipe__ingredients">
                <h2 class="heading--2">Recipe ingredients</h2>
                <ul class="recipe__ingredient-list">            
                    ${this._data.ingredients.map(this._generatMarkupIngredient).join("")}                      
                </ul>
            </div>
            
            <div class="recipe__directions">
                <h2 class="heading--2">How to cook it</h2>
                <p class="recipe__directions-text">
                This recipe was carefully designed and tested by
                <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
                directions at their website.
                </p>
                <a
                class="btn--small recipe__btn"
                href=">${this._data.sourceUrl}"
                target="_blank"
                >
                <span>Directions</span>
                <svg class="search__icon">
                    <use href="${e(w)}.svg#icon-arrow-right"></use>
                </svg>
                </a>
            </div>        
        `}_generatMarkupIngredient(t){return`
                <li class="recipe__ingredient">
                <svg class="recipe__icon">
                    <use href="${e(w)}.svg#icon-check"></use>
                </svg>
                <div class="recipe__quantity">${t.quantity?e(b)(t.quantity).toString():""}</div>
                <div class="recipe__description">
                    <span class="recipe__unit">${t.unit}</span>
                    ${t.description}
                </div>
            </li>
        `}}var S=new E;class ${#e=document.querySelector(".search");getQuery(){let e=this.#e.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){return this.#e.querySelector(".search__field").value=""}addHandlerSearch(e){this.#e.addEventListener("submit",function(t){t.preventDefault(),e()})}}var L=new $;class T extends y{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again.";_message="";_generateMarkup(){return console.log(this._data),this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(e){let t=window.location.hash.slice(1);return console.log(`TEST: ${t}`),`
                <li class="preview">
                    <a class="preview__link ${e.id===t?"preview__link--active":""}" href=#${e.id}>
                        <figure class="preview__fig">
                            <img src="${e.img}" alt="${e.title}" />
                        </figure>
                        <div class="preview__data">
                            <h4 class="preview__title">${e.title}</h4>
                            <p class="preview__publisher">${e.publisher}</p>
                        </div>
                    </a>
                 </li>    
        `}}var R=new T;class x extends y{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let t=this._data.page,r=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(console.log(r),1===t&&r>1)?`
                <button data-goto="${t+1}" class="btn--inline pagination__btn--next">
                    <span>${t+1}</span>
                    <svg class="search__icon">
                        <use href="${e(w)}#icon-arrow-right"></use>
                    </svg>
                </button>
            `:t===r&&r>1?`
                    <button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
                        <svg class="search__icon">
                        <use href="${e(w)}#icon-arrow-left"></use>
                        </svg>
                        <span>${t-1}</span>
                    </button>
            `:t<r?`
                    <button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
                        <svg class="search__icon">
                        <use href="${e(w)}#icon-arrow-left"></use>
                        </svg>
                        <span>${t-1}</span>
                    </button>
                    <button data-goto="${t+1}" class="btn--inline pagination__btn--next">
                        <span>${t+1}</span>
                        <svg class="search__icon">
                            <use href="${e(w)}#icon-arrow-right"></use>
                        </svg>
                    </button>
            `:""}}var H=new x,M=new class extends y{_parentElement="";_generateMarkup(){let t=window.location.hash.slice(1);return console.log(`TEST: ${t}`),`
            <li class="preview">
                <a class="preview__link ${this._data.id===t?"preview__link--active":""}" href="#${this._data.id}">
                    <figure class="preview__fig">
                        <img src="${this._data.image}" alt="${this._data.title}" />
                    </figure>
                    <div class="preview__data">
                        <h4 class="preview__title">${this._data.title}</h4>
                        <p class="preview__publisher">${this._data.publisher}</p>
                        <div class="preview__user-generated ${this._data.key?"":"hidden"}">
                            <svg>
                             <use href="${e(w)}#icon-user"></use>
                            </svg>
                        </div>
                    </div>
                </a>
            </li>
        `}};class P extends y{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return console.log(this._data),this._data.map(e=>M.render(e,!1)).join("")}}var I=new P;class O extends y{_parentElement=document.querySelector(".upload");_successMessage="Recipe was successfully uploaded :)";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkup(){}}var N=new O;console.log("SASS is a beeer way of writting CSS which has some nice additional features which makes writing CSS in a large scale application a lot easier. Browsers dont understand Sass so it has to be converted to CSS. Parcel will gonna do it for us"),console.log("Start:index.html is our entry point/ We added a build script which the command that we are going to run in the end once we're already building the application. The entry point can also be a JS file, also could be in a different folder and we can specify all that in the parcel command "),console.log("First we have to INITIALIZE a new project with Parcel: Terminal -> npm init"),console.log("In order to run Parcel we need to INSTALLED it. Terminal npm i parcel -D (dev dependency). This command simply instal the latest version that is available on npm for parcel"),console.log("To be able to install a better version - like the next version - we can use Terminal: npm i parcel@next -D"),console.log("RUN a Parcel: Terminal: npm run start "),console.log("To install Saas. Terminal: npm install sass@1.26.10"),console.log("Everything we develop is in the src folder. Only what we see in the browser is comiing from the dist folder (distribuition). That is the whole logic of having a module bundler: It takes our raw source code and compiles it into a nice package (in the dist) that is ready to ship to browsers."),console.log("To add Polyfills for ES6 features to our codebase, to add this special packages:  npm i core-js regenerator-runtime. Now we import them at the top with: import 'core-js/stable' . This will make sure old browsers are still supported by our application "),console.log("This is for polyfilling ascync/await: regenerator-runtime/runtime. We could cherry pick but here we are importing everything"),console.log("OBS: We can use npm to calculate Fraction. We can use GOOGLE to search npm packages for example npm fractional. You can see on npmjs.com. You can installed on terminal: npm install fractional. Then we need to import (we will import inside recipeView - import fractional from 'fractional') ");const j=async function(){try{let e=window.location.hash.slice(1);if(!e)return;S.renderSpinner(),R.update(p()),I.update(c.bookmarks),await u(e),S.render(c.recipe)}catch(e){S.renderError(`${e} erro dentro do Control Recipes`),console.error(e)}};console.log("////////////////////////// CHAPTER 294 - Event Handlers in MVC: Publisher-Subcriber Pattern //////////////////////////////////  "),console.log(`Lets now learn how we can listen for events and also handle events in our MVC Architecture by using something called Publisher-Subscriber pattern.
we are listening for the events  hashchange and load here in the controller.js. BUT EVERYTHING that is related to DOM Manipulation Should be inside the View which is the USER INTERFACE
The problem here is that the dandler function that we used "controlRecipes()" is inside the controller.js
The solution is to use the Publisher Subscriber Pattern which is standard solutions to certain kinds of problems.
In the PSP we have a publisher which is some code that knows when to react! In this case is going to be the addHandlerRender() function - PUBLISHER - because it will contain the addEventListener method and therefore will know when to react to the event.
Now in the other hand we have a SUBSCRIBER which is code that actually wants to react. So, controlRecibes() - SUBSCRIBER - that should be executed when the event happens.   
Remember that the PUBLISHER doesnt know yet the SUBSCRIBER even exists because the SUBSCRIBER is in the controller that the view CAN NOT access 
SOLUTION: We can Subscribe to the Publisher by passing into subscriber function as an argument. In Practice means: as soon as the Program Loads, the init function is called which in turn immediately calls the addHandlerRender() from the view. That is possible because the Controller.js import Both the View.js and the Model.js
As we call addHanddlerRender we pass in our controlRecipes() as an argument. Essencially we SUBSCRIBE controlRecipes to addHandlerRender. Connecting the functions like that. 
This will allow to keep the handler in the controller and the listener in the view. 

OBS: REMEMBER IN THE CONSOLE.LOG IN THE BROWSER WHEN THE COLOUR OF WHAT IS WRITTEN IS BLUE MEANS ITS A NUMBER AND BLACK STRING
`);const A=async function(){try{R.renderSpinner(),console.log(R);let e=L.getQuery();if(!e)return;await h(e),console.log(c.search.results),R.render(p(1)),H.render(c.search)}catch(e){console.log(e)}},q=async function(e){try{console.log(e),N.renderSpinner(),await _(e),console.log(c.recipe),S.render(c.recipe),N.renderMessage(),I.render(c.bookmarks),window.history.pushState(null,"",`#${c.recipe.id}`),setTimeout(function(){N.toggleWindow()},2500)}catch(e){console.error("Erro vindo do controlAddRecipe",e),N.renderError(e.message)}};I.addHandlerRender(function(){I.render(c.bookmarks)}),S.addHandlerRender(j),S.addHandlerUpdateServings(function(e){g(e),S.update(c.recipe)}),S.addHandlerAddBookmark(function(){c.recipe.bookmarked?m(c.recipe.id):v(c.recipe),console.log(c.recipe),S.update(c.recipe),I.render(c.bookmarks)}),L.addHandlerSearch(A),H.addHandlerClick(function(e){R.render(p(e)),H.render(c.search)}),N.addHandlerUpload(q),console.log("blabla");
//# sourceMappingURL=index.43358659.js.map
