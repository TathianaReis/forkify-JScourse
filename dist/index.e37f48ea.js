// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hycaY":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _configJs = require("./config.js");
var _recipeViewJs = require("./views/recipeView.js"); //Importing the object from RecipeVIew class
var _recipeViewJsDefault = parcelHelpers.interopDefault(_recipeViewJs);
var _searchViewJs = require("./views/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _resultsViewJs = require("./views/resultsView.js");
var _resultsViewJsDefault = parcelHelpers.interopDefault(_resultsViewJs);
var _paginationViewJs = require("./views/paginationView.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
var _bookmarksViewJs = require("./views/bookmarksView.js");
var _bookmarksViewJsDefault = parcelHelpers.interopDefault(_bookmarksViewJs);
var _addRecipeViewJs = require("./views/addRecipeView.js");
var _addRecipeViewJsDefault = parcelHelpers.interopDefault(_addRecipeViewJs);
//import 'core-js/stable'; //polyfilling everything else
//import 'regenerator-runtime/runtime'; //polyfilling async / await
var _regeneratorRuntime = require("regenerator-runtime");
console.log("SASS is a beeer way of writting CSS which has some nice additional features which makes writing CSS in a large scale application a lot easier. Browsers dont understand Sass so it has to be converted to CSS. Parcel will gonna do it for us");
console.log("Start:index.html is our entry point/ We added a build script which the command that we are going to run in the end once we're already building the application. The entry point can also be a JS file, also could be in a different folder and we can specify all that in the parcel command ");
console.log("First we have to INITIALIZE a new project with Parcel: Terminal -> npm init");
console.log("In order to run Parcel we need to INSTALLED it. Terminal npm i parcel -D (dev dependency). This command simply instal the latest version that is available on npm for parcel");
console.log("To be able to install a better version - like the next version - we can use Terminal: npm i parcel@next -D");
console.log("RUN a Parcel: Terminal: npm run start ");
console.log("To install Saas. Terminal: npm install sass@1.26.10");
console.log("Everything we develop is in the src folder. Only what we see in the browser is comiing from the dist folder (distribuition). That is the whole logic of having a module bundler: It takes our raw source code and compiles it into a nice package (in the dist) that is ready to ship to browsers.");
console.log("To add Polyfills for ES6 features to our codebase, to add this special packages:  npm i core-js regenerator-runtime. Now we import them at the top with: import 'core-js/stable' . This will make sure old browsers are still supported by our application ");
console.log("This is for polyfilling ascync/await: regenerator-runtime/runtime. We could cherry pick but here we are importing everything");
console.log("OBS: We can use npm to calculate Fraction. We can use GOOGLE to search npm packages for example npm fractional. You can see on npmjs.com. You can installed on terminal: npm install fractional. Then we need to import (we will import inside recipeView - import fractional from 'fractional') ");
//This is coming from Parcel.
if (module.hot) module.hot.accept();
//const recipeContainer = document.querySelector('.recipe');
// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
// to initialize a new project with Parcel: Terminal -> npm init
// Get recipe
//https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886
const controlRecipes = async function() {
    try {
        //resultsView.renderSpinner();
        const id = window.location.hash.slice(1); //.location significa the entire URL - The .slice is to remove the # character
        //console.log(id);
        if (!id) return; //Guard clouse caso faca o loading da pagina assim: http://localhost:1234/
        (0, _recipeViewJsDefault.default).renderSpinner(); //This will automatically render the spinner on the recipeView
        //0) Update results view to mark selected search result
        (0, _resultsViewJsDefault.default).update(_modelJs.getSearchResultsPage());
        // 1) Updating bookmarks view
        //debugger;
        (0, _bookmarksViewJsDefault.default).update(_modelJs.state.bookmarks);
        // 2) Loading Recipe
        await _modelJs.loadRecipe(id); //As this loadRecipe is a async function it will return a Promise so here we have to await that promise in order to move on in the next step here
        //const {recipe} = model.state;
        //console.log(model.state);
        //console.log(model.state.recipe);
        // 3) Rendering Recipe
        (0, _recipeViewJsDefault.default).render(_modelJs.state.recipe); //model.state.recipe is coming from loadRecipe()
    //If we had exported the whole class we would have to do something like:
    // const recipeView = new RecipeView(model.state.recipe)
    } catch (err) {
        (0, _recipeViewJsDefault.default).renderError(`${err} erro dentro do Control Recipes`);
        console.error(err); //Para ver no console qual o erro
    }
};
//controlRecipes();
//Isto aqui e' qndo clicamos no link da recipe a esquerda
//window.addEventListener('hashchange', controlRecipes);
//Isto aqui e' para qndo loading the page caso copiem o link direto no browser http://localhost:1234/#5ed6604691c37cdc054bd0c0
//window.addEventListener('load', controlRecipes);
//Search for recipes: https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=<insert your key>
//////////////////////////////////////////////////////////////////////////////////////
console.log("////////////////////////// CHAPTER 294 - Event Handlers in MVC: Publisher-Subcriber Pattern //////////////////////////////////  ");
const str2 = `Lets now learn how we can listen for events and also handle events in our MVC Architecture by using something called Publisher-Subscriber pattern.
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
`;
console.log(str2);
///////////////////////////////////////////////////////////
const controlSearchResults = async function() {
    try {
        (0, _resultsViewJsDefault.default).renderSpinner();
        console.log((0, _resultsViewJsDefault.default));
        //1) Get Search Query
        const query = (0, _searchViewJsDefault.default).getQuery();
        if (!query) return;
        //2) Load search results
        await _modelJs.loadSearchResults(query);
        //3) Render Results
        console.log(_modelJs.state.search.results);
        // resultsView.render(model.state.search.results); //Here we are passing whatever we wanted to be rendered
        (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResultsPage(1));
        //4) Render initial pagination buttons
        (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
    } catch (err) {
        console.log(err);
    }
};
// THis is the controller that will be executed whenever a click on the pagination happens
const controlPagination = function(goToPage) {
    //1) Render NEW Results
    (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResultsPage(goToPage)); //It will change the value of page from the model.js getSearchResultsPage
    //2) Render NEW pagination buttons
    (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
};
///////////////////////////////////////////////////////////////
//////////////// INCREASE OR DECREASE - + THE SERVINS BUTTONS ON THE WEBSITE
const controlServings = function(newServings) {
    //Update the recipe servings (in state) has to do with the model. So in the model we would like to have some Method which does that for us.
    // We dont want to manipulate data directly here in the controller. Instead we delegate to the Model which is all about the data
    _modelJs.updateServings(newServings);
    //Update the recipe view -- The difference entre update e render is that update Method will only update text and attributes in the DOM without rerender the entire view
    //recipeView.render(model.state.recipe);
    (0, _recipeViewJsDefault.default).update(_modelJs.state.recipe);
};
/////////////////////////////////////////////////////////
const controlAddBookmark = function() {
    //OBS: Is possible that we read the bookmarked property right at the beginning because we add that to all the recipes  that are ever loaded right at the beginning in the model.js(line 52 loadRecipe())
    //1) Add/Remove bookmark
    if (!_modelJs.state.recipe.bookmarked) _modelJs.addBookmark(_modelJs.state.recipe); //adding a bookmark with the current recipe
    else _modelJs.deleteBookmark(_modelJs.state.recipe.id); //Delete bookmark
    //2) Update Recipe View
    console.log(_modelJs.state.recipe);
    (0, _recipeViewJsDefault.default).update(_modelJs.state.recipe);
    //3) Render bookmarks
    (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
// In the state we didn't only store the IDs of the bookmarks, but we stored the entire data about the bookmarks
// So we can nicely display them in this list -- The result list on the left side
};
//Ao inves de chamar varios codigos de handler como acima, faremos um ARRAY de event handler
//['hashchange', 'load'].forEach(ev => window.addEventListener(ev, controlRecipes));
//instead we will use
//Esta funcao aqui e' para quando ja existem bookmarks que estao armazenados no storage.
//Entao no load da pagina vamos chama-la e se quem esta' chamando isto e' la no bookmarksView.js
//Teve um bug antes de criar isto pq o app tava chamando o update bookmark e com isso o app nao tera nada para update
const controlBookmarks = function() {
    (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
};
const controlAddRecipe = async function(newRecipe) {
    // This function will recive the new recipe data coming from addRecipeView. Usually our recipe data is always an object and not an array of entries like this.
    try {
        console.log(newRecipe);
        // Show loading spinner
        (0, _addRecipeViewJsDefault.default).renderSpinner();
        // Upload the new recipe data
        await _modelJs.uploadRecipe(newRecipe);
        console.log(_modelJs.state.recipe);
        // Render recipe
        (0, _recipeViewJsDefault.default).render(_modelJs.state.recipe);
        // Success message to be displayed before closing the window
        (0, _addRecipeViewJsDefault.default).renderMessage();
        // Render bookmark view
        (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks); //This will make it render the new recipe in the bookmarks menu
        // Change ID in the URL
        window.history.pushState(null, "", `#${_modelJs.state.recipe.id}`); //This will allow us to change the URL of the browser with the new recipe ID that we have just created WITHOUT reloading the page.
        // .pushState takes 3 arguments 1st is the state, 2nd title, 3rd the URL
        // the history API also allow us to use back and forward like the buttons in the browser: window.history.back()
        // Close form window
        setTimeout(function() {
            (0, _addRecipeViewJsDefault.default).toggleWindow(); //Para fechar a janela do formulario
        }, (0, _configJs.MODAL_CLOSE_SEC) * 1000);
    } catch (err) {
        //We needed to use the try catch here in case something goes wrong with uploadRecipe method
        console.error("Erro vindo do controlAddRecipe", err);
        (0, _addRecipeViewJsDefault.default).renderError(err.message);
    }
};
const init = function() {
    (0, _bookmarksViewJsDefault.default).addHandlerRender(controlBookmarks);
    (0, _recipeViewJsDefault.default).addHandlerRender(controlRecipes);
    (0, _recipeViewJsDefault.default).addHandlerUpdateServings(controlServings);
    (0, _recipeViewJsDefault.default).addHandlerAddBookmark(controlAddBookmark);
    (0, _searchViewJsDefault.default).addHandlerSearch(controlSearchResults);
    (0, _paginationViewJsDefault.default).addHandlerClick(controlPagination);
    (0, _addRecipeViewJsDefault.default).addHandlerUpload(controlAddRecipe);
    console.log("blabla");
};
init(); /////////////////////////////////////////////////////////

},{"./model.js":"Y4A21","./config.js":"k5Hzs","./views/recipeView.js":"l60JC","./views/searchView.js":"9OQAM","./views/resultsView.js":"cSbZE","./views/paginationView.js":"6z7bi","./views/bookmarksView.js":"4Lqzq","./views/addRecipeView.js":"i6DNj","regenerator-runtime":"dXNgZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadRecipe", ()=>loadRecipe);
parcelHelpers.export(exports, "loadSearchResults", ()=>loadSearchResults);
parcelHelpers.export(exports, "getSearchResultsPage", ()=>getSearchResultsPage);
parcelHelpers.export(exports, "updateServings", ()=>updateServings);
parcelHelpers.export(exports, "addBookmark", ()=>addBookmark);
parcelHelpers.export(exports, "deleteBookmark", ()=>deleteBookmark);
parcelHelpers.export(exports, "uploadRecipe", ()=>uploadRecipe);
var _regeneratorRuntime = require("regenerator-runtime");
var _configJs = require("./config.js");
var _helpersJs = require("./helpers.js");
const state = {
    recipe: {},
    search: {
        query: "",
        results: [],
        page: 1,
        resultsPerPage: (0, _configJs.RES_PER_PAGE)
    },
    bookmarks: []
};
//This function will be responsable for fetching the recipe data from our Forkify API
//This funtion is not going to return anything, all it will do is to change our state object
// This loadRecipe is not a pure function as the state value has been manipulated / modified so it has the SIDE EFECT of manipulating a variable (state) that is outside of it
const createRecipeObject = function(data) {
    const { recipe } = data.data; //(The first .data is our variable data.recipe is what we see in the console coming from the api)
    //we are creating a new recipe object here //OBS: NOTE: BEFORE EVERYTHING THAT WAS IN GETJSON WAS HERE
    return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        sourceUrl: recipe.source_url,
        image: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients,
        ...recipe.key && {
            key: recipe.key
        }
    };
};
const loadRecipe = async function(id) {
    try {
        //const data = await getJSON(`${API_URL}${id}`);
        const data = await (0, _helpersJs.AJAX)(`${(0, _configJs.API_URL)}${id}?key=${(0, _configJs.KEY)}`);
        state.recipe = createRecipeObject(data);
        //************************* THIS IS NOW AT createRecipeObject ***************************/
        // const {recipe} = data.data; //(The first .data is our variable data.recipe is what we see in the console coming from the api)
        // //we are creating a new recipe object here //OBS: NOTE: BEFORE EVERYTHING THAT WAS IN GETJSON WAS HERE
        // state.recipe = {
        // id:recipe.id,
        // title: recipe.title,
        // publisher: recipe.publisher,
        // sourceUrl: recipe.source_url,
        // image: recipe.image_url,
        // servings: recipe.servings,
        // cookingTime: recipe.cooking_time,
        // ingredients: recipe.ingredients,   
        // }; ******************************************************************
        // We will store in the state so we can check if there is already a recipe with the same ID the bookmarks state. If it is then we will mark in the current recipe that we just loaded from the API as bookmarked set to true. 
        // We will use the some Method to return true or false. Great for a if check like this
        if (state.bookmarks.some((b)=>b.id === id)) state.recipe.bookmarked = true;
        else state.recipe.bookmarked = false;
        console.log(state.recipe);
    } catch (err) {
        // Temp error handling. THE ERROR IS coming from getJSON()
        console.error(`Erro dentro do LoadRecipe: ${err}`);
        throw err;
    }
};
const loadSearchResults = async function(query) {
    //https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=<insert your key>
    try {
        state.search.query = query;
        //const data = await getJSON(`${API_URL}?search=${query}&key=${KEY}`)
        const data = await (0, _helpersJs.AJAX)(`${(0, _configJs.API_URL)}?search=${query}&key=${(0, _configJs.KEY)}`);
        console.log(data);
        console.log(data.data);
        console.log(data.data.recipes); //this is the array of all objects and now we want to create a new array which contains the new objects where the property names are different
        state.search.results = data.data.recipes.map((rec)=>{
            return {
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url,
                ...rec.key && {
                    key: rec.key
                }
            };
        });
        //console.log(state.search.results);
        state.search.page = 1; //Zerando a paginacao. 
    } catch (err) {
        console.log(`Erro vindo de loadSearchResults ${err}`);
        throw err;
    }
};
const getSearchResultsPage = function(page = state.search.page) {
    //const start = (page - 1) * 10; //0 -> If we request page 1 => 1-1=0 * 10 the result is 0
    //const end = page * 10; //9
    //return state.search.results.slice(0, 9) 
    //The .results is the results array from the state object. We will use .slice because we want to return only part of if. In this case 10 recipes. 
    // Remember the .slice Method does not include the last value so it will be ok to pass 0-9 then 10-20...
    state.search.page = page;
    const start = (page - 1) * state.search.resultsPerPage; //0
    const end = page * state.search.resultsPerPage; //9
    return state.search.results.slice(start, end);
};
const updateServings = function(newServings) {
    state.recipe.ingredients.forEach((ing)=>{
        ing.quantity = ing.quantity * newServings / state.recipe.servings;
    //new quantity = oldQuantity * newServings / oldServings // 2 * 8 / 4 = 4
    });
    //updating the servigns
    state.recipe.servings = newServings;
};
//Chapter 305 - Storing Bookmarks with Local Storage - Whenever we delete or add a bookmark we need to persist that data
//We dont need to export the function below because we will call it from addBookmark & deleteBookmark functions
//We can see that by going to the browser console Storage -> Local Storage
const persistBookmarks = function() {
    localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
};
const addBookmark = function(recipe) {
    //Add bookmark
    state.bookmarks.push(recipe);
    //Mark current recipe as bookmarked. Current recipe is state.recipe.id
    if (recipe.id === state.recipe.id) state.recipe.bookmarked = true; //here we are setting a new properti to state recipe above.
    persistBookmarks();
};
const deleteBookmark = function(id) {
    //Delete bookmark
    const index = state.bookmarks.findIndex((el)=>el.id === id) //where current bookmark is equal to the id we are passing - The one that is true we will take below and delete from the array
    ;
    state.bookmarks.splice(index, 1) //to delete something - Here we are using the element where is actually located. And how many items we want to delete
    ;
    //Mark current recipe as NOT bookmarked. Current recipe is state.recipe.id
    if (id === state.recipe.id) state.recipe.bookmarked = false; //here we are setting a new property to state recipe above.
    persistBookmarks();
};
const init = function() {
    const storage = localStorage.getItem("bookmarks"); //.getItem method from the localStorage
    if (storage) state.bookmarks = JSON.parse(storage); //.parse = convert the string back to an object
};
init();
const clearBookmarks = function() {
    localStorage.clear("bookmarks");
};
const uploadRecipe = async function(newRecipe) {
    try {
        //THe first task of this function will be to take the raw input data and transform it into the same format as the data that we also get our of the API  
        const ingredients = Object.entries(newRecipe) //newRecipe is an object and Object.entries() will convert the object into an array
        .filter((entry)=>entry[0].startsWith("ingredient") && entry[1] !== "") //.filter will only filter the properties that are called 1, 2, 3, until 6. In this array each element is an entry. And the second element should not be an empty string
        .map((ing)=>{
            const ingArr = ing[1].split(",").map((el)=>el.trim()); //Here we are splitting the string into multiple parts, wich will then return an array and then we will loop over that array and trim each of the elements 
            // const ingArr = ing[1].replaceAll(' ', '').split(','); //The replace all in this case was wrong pq estava removendo todos os espacos e juntando as palavras
            if (ingArr.length !== 3) throw new Error("Wrong ingredient fromat! Please use the correct format :)");
            const [quantity, unit, description] = ingArr; //Destructuring an array
            return {
                quantity: quantity ? +quantity : null,
                unit,
                description
            };
        });
        //This will be the object that we wanted to upload  
        const recipe = {
            title: newRecipe.title,
            source_url: newRecipe.sourceUrl,
            image_url: newRecipe.image,
            publisher: newRecipe.publisher,
            cooking_time: +newRecipe.cookingTime,
            servings: +newRecipe.servings,
            ingredients
        };
        console.log(recipe);
        //sendJSON(`${API_URL}`);
        const data = await (0, _helpersJs.AJAX)(`${(0, _configJs.API_URL)}?key=${(0, _configJs.KEY)}`, recipe);
        state.recipe = createRecipeObject(data);
        addBookmark(state.recipe);
    } catch (err) {
        throw err;
    }
};
console.log(state.bookmarks);

},{"regenerator-runtime":"dXNgZ","./config.js":"k5Hzs","./helpers.js":"hGI1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dXNgZ":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    "use strict";
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var defineProperty = Object.defineProperty || function(obj, key, desc) {
        obj[key] = desc.value;
    };
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        defineProperty(generator, "_invoke", {
            value: makeInvokeMethod(innerFn, self, context)
        });
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    defineProperty(Gp, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
    });
    defineProperty(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
    });
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        defineProperty(this, "_invoke", {
            value: enqueue
        });
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method;
        var method = delegate.iterator[methodName];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method, or a missing .next mehtod, always terminate the
            // yield* loop.
            context.delegate = null;
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (methodName === "throw" && delegate.iterator["return"]) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = "return";
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);
                if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
            }
            if (methodName !== "return") {
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(val) {
        var object = Object(val);
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next.next = next;
            }
        }
        // Return an iterator with no values.
        return {
            next: doneResult
        };
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
(0, module.exports));
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
    else Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"k5Hzs":[function(require,module,exports) {
// In the config.js we should put all the variables that should be constants and should be reused across the project.
// The Goal of having this file with all these variables is that will allow us to easily configure our project by somply changing some of the data that is this configuration file
// THE ONLY VARIABLES WE WANT HERE ARE THE ONES THAT ARE RESPONSABLE OF DEFINING SOME IMPORTANT DATA ABT THE APPLICATION ITSELF
// For example the API URL we will be resused in multiple places accross our project. I.e: Getting search data and also for uploading a recipe to the server
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC);
parcelHelpers.export(exports, "RES_PER_PAGE", ()=>RES_PER_PAGE);
parcelHelpers.export(exports, "KEY", ()=>KEY);
parcelHelpers.export(exports, "MODAL_CLOSE_SEC", ()=>MODAL_CLOSE_SEC);
const API_URL = "https://forkify-api.herokuapp.com/api/v2/recipes/"; //We used uppercase because this is a constant that will never change. This is a common practice, specially in a config file like this
const TIMEOUT_SEC = 30;
const RES_PER_PAGE = 10;
const KEY = "073bd98e-9d02-4609-9203-77869f840c83";
const MODAL_CLOSE_SEC = 2.5 //Time in seconds
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hGI1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getJSON", ()=>getJSON);
parcelHelpers.export(exports, "sendJSON", ()=>sendJSON);
parcelHelpers.export(exports, "AJAX", ()=>AJAX);
var _regeneratorRuntime = require("regenerator-runtime");
var _configJs = require("./config.js");
// The goal of this file is to contain a couple of functions that we reuse over and over in our project
// For example create a function which will get JSON. A function which encapsulates all the json await async  and also some of the error handling.
//What this function does is that will return a new promise which will reject after a certain number of seconds 
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const getJSON = async function(url) {
    try {
        //using the fetch function here will return a promise. Since we are in a async function we can await that promise! Async function runs in the background and dont block our main thread of execution here
        const res = await Promise.race([
            fetch(url),
            timeout((0, _configJs.TIMEOUT_SEC))
        ]); //The TIMEOUT_SEC is configured in the config.js file
        //Explanation of the timeout and Promise.race above:
        //We used the timeout function, So after that time has passed, the new Promise is rejected with the newly created error message. 
        // So as soon as any of the Promises in the Promise.race rejects or fulfills,  then that promise will become the winner
        // the winner in this case is our Rejected timeout(), which will then trigger the catch block below. Which will get thrown to loadRecipe() 
        //Once we have the result we need to convert that to JSON. So as always we create a data variable and await the response .JSON
        const data = await res.json(); //The json method is available on all the response objects! And a response object is what the fetch function above returns. We can call JSON on that response which returns another promise which we then have to await again! In the end we will get our data stored to the data variable
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        //console.log(res, data);
        return data; //this data here is going to be the resolved value of the Promise that the getJSON  Function returns! OBS: when was everything inside model.js loadRecipe the return data line of code didnt exist. 
    } catch (err) {
        //Here we are going to rethrow the error so when loadRecipe() call getJSON the error goes to there so we can handle it at loadRecipe()!
        throw err; //So now with this, the promise that is being returned from getJSON will acutally Reject the PROMISE
    }
};
const sendJSON = async function(url, uploadData) {
    try {
        const fetchPro = fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(uploadData)
        });
        const res = await Promise.race([
            fetchPro,
            timeout((0, _configJs.TIMEOUT_SEC))
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (err) {
        throw err;
    }
};
const AJAX = async function(url, uploadData) {
    try {
        const fetchPro = uploadData ? fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(uploadData)
        }) : fetch(url);
        const res = await Promise.race([
            fetchPro,
            timeout((0, _configJs.TIMEOUT_SEC))
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (err) {
        throw err;
    }
};

},{"regenerator-runtime":"dXNgZ","./config.js":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l60JC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
//import icons from '../img/icons.svg' //Parcel 1
var _iconsSvg = require("url:../../img/icons.svg"); // Parcel 2 //Este path e' relativo ao controler.js location
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
//import {Fraction} from 'fractional';
//console.log(icons);
//console.log({Fraction});
/* NOTE: The Fractional package has been reported to cause an error when deployed to a server. I suggest you to use Fracty instead. */ // import { Fraction } from 'fractional';
var _fracty = require("fracty");
var _fractyDefault = parcelHelpers.interopDefault(_fracty);
class RecipeView extends (0, _viewJsDefault.default) {
    //Tudo que esta' la' dentro do View estava aqui antes.
    _parentElement = document.querySelector(".recipe");
    //The above 2 properties are something that all the views will have in common
    _errorMessage = "We could not find that recipe. Please try another one.";
    _message = "";
    addHandlerRender(handler) {
        [
            "hashchange",
            "load"
        ].forEach((ev)=>window.addEventListener(ev, handler));
    //This is not a private Method because it needs to be part of the public API of this object.
    }
    addHandlerUpdateServings(handdler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--update-servings");
            if (!btn) return;
            console.log(btn);
            //const updateTo = btn.dataset.updateTo;
            const updateTo = +btn.dataset.updateTo;
            if (updateTo > 0) handdler(updateTo); //HOw we determine the new Servings in this function? Here we will need to connect the user interface with the code. For that we use the special data properties - See buttons - +
        });
    }
    addHandlerAddBookmark(handdler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--bookmark");
            if (!btn) return;
            handdler();
        });
    }
    _generateMarkup() {
        //All the child Views should have this method because in the View the render Method relies on that!
        return `
                <figure class="recipe__fig">
                <img src="${this._data.image}" alt=">${this._data.title}" class="recipe__img" />
                <h1 class="recipe__title">
                <span>${this._data.title}</span>
                </h1>
            </figure>this.#
            
            <div class="recipe__details">
                <div class="recipe__info">
                <svg class="recipe__info-icon">
                    <use href="${0, _iconsSvgDefault.default}.svg#icon-clock"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
                <span class="recipe__info-text">minutes</span>
                </div>
                <div class="recipe__info">
                <svg class="recipe__info-icon">
                    <use href="${0, _iconsSvgDefault.default}.svg#icon-users"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
                <span class="recipe__info-text">servings</span>
            
                <div class="recipe__info-buttons">
                    <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings - 1}">
                    <svg>
                        <use href="${0, _iconsSvgDefault.default}.svg#icon-minus-circle"></use>
                    </svg>
                    </button>
                    <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings + 1}">
                    <svg>
                        <use href="${0, _iconsSvgDefault.default}.svg#icon-plus-circle"></use>
                    </svg>
                    </button>
                </div>
                </div>
            
                <div class="recipe__user-generated ${this._data.key ? "" : "hidden"}">
                <svg>
                  <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
                </svg>
              </div>
                <button class="btn--round btn--bookmark">
                <svg class="">
                    <use href="${0, _iconsSvgDefault.default}.svg#icon-bookmark${this._data.bookmarked ? "-fill" : ""}"></use>
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
                    <use href="${0, _iconsSvgDefault.default}.svg#icon-arrow-right"></use>
                </svg>
                </a>
            </div>        
        `;
    //console.log(markup);
    }
    _generatMarkupIngredient(ing) {
        return `
                <li class="recipe__ingredient">
                <svg class="recipe__icon">
                    <use href="${0, _iconsSvgDefault.default}.svg#icon-check"></use>
                </svg>
                <div class="recipe__quantity">${ing.quantity ? (0, _fractyDefault.default)(ing.quantity).toString() : ""}</div>
                <div class="recipe__description">
                    <span class="recipe__unit">${ing.unit}</span>
                    ${ing.description}
                </div>
            </li>
        `;
    }
}
//We could export the entire class like: export class RecipeView, but then we would have to import that class and create a new object out of that class (create a new RecipeView object)
//We are then creating the object of the class here and exporting the object
exports.default = new RecipeView(); //Like that we can give any name to the import

},{"./View.js":"5cUXS","url:../../img/icons.svg":"loVOp","fracty":"hJO4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5cUXS":[function(require,module,exports) {
// The View class will be a parent class for all the other view classes (Recipe, Result, Search views...)
// Because Search and Results for example will share the same Methods - We will be able to reuse the Methods in all the views we will.
// Basically on all the objects that are created through all the view classess 
//This time we are exporting the class itself because we are not going to create any instance of this view we are only use as a parent class of these child views
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg"); // Parcel 2 //Este path e' relativo ao controler.js location
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class View {
    _data;
    /**
     * Render the received object to the DOM  --> THis is the description of the function
     * @param {Object | Object[]} data The data to be rendered. (e.g recipe) --> The bar means OR simble. Dentro do {} estamos informando que estamos esperando um Objct Ou um Array of Object. 'data' is the name of the parameter. E por ultimo short description of the parameter
     * @param {boolean} [render = true] If false, create markup string instead of rendering to the DOM --> here the type is a boolean. O resto e' a descricao. 
     * @returns {undefined | string} A markup string is returned if render=false --> What the function returns (if returns anything) OR it might also be a string
     * @this {Objct} View instance --> We can also define this keyword. Here the this keyword points to the View object itself 
     * @author Tathiana Reis
     * @todo Finish implementation
   */ render(data, render = true) {
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError(); //This check here is not enough because we do get data. But it is an empty array. This works for Underfined or Null
        this._data = data; //From the controler object we passed the ajax recipe data recipeView.render(model.state.recipe);
        const markup = this._generateMarkup();
        if (!render) return markup;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    update(data) {
        //We are removing this here because when we were loading the url with a recipe id the array was empty and the error was showing on the left hand side
        //if(!data || (Array.isArray(data) && data.length === 0)) return this.renderError(); //This check here is not enough because we do get data. But it is an empty array. This works for Underfined or Null
        this._data = data; //From the controler object we passed the ajax recipe data recipeView.render(model.state.recipe);
        const newMarkup = this._generateMarkup(); //Here we will create a new markup but not render it. Instead we will generate this markup and then compare with that new HTML to the current HTML then only change text and attributes that actually have changed
        const newDOM = document.createRange().createContextualFragment(newMarkup); //the create contextual fragment is converting the string into a real DOM Node objects 
        // The newDOM will become like a big object, which is like a virtual DOM  which lives in our memory not on a html page
        const newElements = Array.from(newDOM.querySelectorAll("*")); //Array.from transform to a Array
        console.log(newElements);
        //Now, getting all the current elements that are in our page
        const curElements = Array.from(this._parentElement.querySelectorAll("*"));
        // console.log(curElements);
        //console.log(newElements);
        newElements.forEach((newEl, i)=>{
            const curEl = curElements[i];
            //Updates changed TEXT
            if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== "") {
                curEl.textContent = newEl.textContent;
                console.log(curEl, newEl.isEqualNode(curEl));
            }
            //Updates changed ATTRIBUTES of the html
            if (!newEl.isEqualNode(curEl)) Array.from(newEl.attributes).forEach((attr)=>curEl.setAttribute(attr.name, attr.value));
        });
    }
    _clear() {
        this._parentElement.innerHTML = "";
    }
    renderSpinner() {
        const markup = `
            <div class="spinner">
              <svg>
                <use href="${(0, _iconsSvgDefault.default)}#icon-loader"></use>
              </svg>
            </div> 
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    renderError(message = this._errorMessage) {
        const markup = `
        <div class="error">
             <div>
                <svg>
                    <use href="${(0, _iconsSvgDefault.default)}#icon-alert-triangle"></use>
                </svg>
             </div>
            <p>${message}</p>
         </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    renderMessage(message = this._successMessage) {
        const markup = `
        <div class="message">
             <div>
                <svg>
                    <use href="${(0, _iconsSvgDefault.default)}#icon-smile"></use>
                </svg>
             </div>
            <p>${message}</p>
         </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
}
exports.default = View;

},{"url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"loVOp":[function(require,module,exports) {
module.exports = require("9bcc84ee5d265e38").getBundleURL("hWUTQ") + "icons.dfd7a6db.svg" + "?" + Date.now();

},{"9bcc84ee5d265e38":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"hJO4d":[function(require,module,exports) {
// FRACTY CONVERTS DECIMAL NUMBERS TO FRACTIONS BY ASSUMING THAT TRAILING PATTERNS FROM 10^-2 CONTINUE TO REPEAT
// The assumption is based on the most standard numbering conventions
// e.g. 3.51 will convert to 3 51/100 while 3.511 will convert to 3 23/45
// Throw any number up to 16 digits long at fracty and let fracy do the work.
// If number is beyond 16 digits fracty will truncate at 15 digits to compensate for roundoff errors created in IEEE 754 Floating Point conversion.
module.exports = function(number) {
    let type;
    if (number < 0) {
        number = Math.abs(number);
        type = "-";
    } else type = "";
    if (number === undefined) return `Your input was undefined.`;
    if (isNaN(number)) return `"${number}" is not a number.`;
    if (number == 9999999999999999) return `${type}9999999999999999`;
    if (number > 9999999999999999) return `Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.`;
    if (Number.isInteger(number)) return `${type}${number}`;
    if (number < .000001) return "0";
    const numberString = number.toString();
    const entry = numberString.split(".");
    let integer = entry[0];
    let decimal;
    if (decimal == "0" && integer !== "0") return integer;
    else if (decimal == "0" && integer == "0") return "0";
    else if (numberString.length >= 17) decimal = entry[1].slice(0, entry[1].length - 1);
    else decimal = entry[1];
    if (decimal == "99" && integer !== "0") return `${integer} 99/100`;
    else if (decimal == "99" && integer == "0") return `99/100`;
    else if (1 - parseFloat(`.${decimal}`) < .0011) decimal = "999";
    if (decimal == undefined) return integer;
    const decimalRev = decimal.split("").reverse().join(""); //Reverse the string to look for patterns.
    const patternSearch = /^(\d+)\1{1,2}/; //This greedy regex matches the biggest pattern that starts at the beginning of the string (at the end, in the case of the reversed string). A lazy regex doesn't work because it only identifies subpatterns in cases where subpatterns exist (e.g. '88' in '388388388388'), thus pattern capture must be greedy.
    let pattern = decimalRev.match(patternSearch); //If there's a pattern, it's full sequence is in [0] of this array and the single unit is in [1] but it may still need to be reduced further.
    if (pattern && decimal.length > 2) {
        let patternSequence = pattern[0].split("").reverse().join("");
        let endPattern = pattern[1].split("").reverse().join("");
        if (endPattern.length > 1) {
            let endPatternArray = endPattern.split("");
            let testSingleUnit = 1;
            for(let i = 0; i < endPatternArray.length; i++)testSingleUnit /= endPatternArray[0] / endPatternArray[i];
            if (testSingleUnit === 1) endPattern = endPatternArray[0];
        }
        if (endPattern.length > 1 && endPattern.length % 2 === 0) endPattern = parseInt(endPattern.slice(0, endPattern.length / 2), 10) - parseInt(endPattern.slice(endPattern.length / 2, endPattern.length), 10) === 0 ? endPattern.slice(0, endPattern.length / 2) : endPattern;
        return yesRepeat(decimal, endPattern, patternSequence, integer, type); //Begin calculating the numerator and denominator for decimals that have a pattern.
    } else return noRepeat(decimal, integer, type); //Begin calculating the numerator and denominator for decimals that don't have a pattern.
};
//IF THERE'S A TRAILING PATTERN FRACTY DIVIDES THE INPUT BY ONE SUBTRACTED FROM THE NEAREST BASE 10 NUMBER WITH NUMBER OF ZEROS EQUAL TO THE LENGTH OF THE REPEATED PATTERN (I.E. A SERIES OF 9'S) MULTIPLIED BY THE BASE 10 NUMBER GREATER THAN AND CLOSEST TO THE INPUT.
function yesRepeat(decimal, endPattern, patternSequence, integer, type) {
    const rep = true; //The numerator repeats.
    const nonPatternLength = decimal.length - patternSequence.length >= 1 ? decimal.length - patternSequence.length : 1; //Does the length of the non pattern segment of the input = 0? If it does, that's incorrect since we know it must equal at least 1, otherwise it's the length of the decimal input minus the length of the full pattern.
    const decimalMultiplier2 = Math.pow(10, nonPatternLength); //Second multiplier to use.
    const float = parseFloat(`0.${decimal}`); //Convert the decimal input to a floating point number.
    const decimalMultiplier1 = Math.pow(10, endPattern.length); //Find the right multiplier to use for both numerator and denominator, which will later have 1 subtracted from it in the case of the denominator.
    const numerator = Math.round((float * decimalMultiplier1 - float) * Math.pow(10, nonPatternLength)); //Find the numerator to be used in calculating the fraction that contains a repeating trailing sequence.
    const denominator = (decimalMultiplier1 - 1) * decimalMultiplier2; //Caluculate the denominator using the equation for repeating trailing sequences.
    return reduce(numerator, denominator, integer, type, rep); //Further reduce the numerator and denominator.
}
//IF THERE'S NO TRAILING PATTERN FRACTY DIVIDES THE INPUT BY THE NEAREST BASE 10 INTEGER GREATER THAN THE NUMERATOR.
function noRepeat(decimal, integer, type) {
    const rep = false; //The numerator doesn't repeat.
    const numerator = parseInt(decimal, 10); //Numerator begins as decimal input converted into an integer.
    const denominator = Math.pow(10, decimal.length); //Denominator begins as 10 to the power of the length of the numerator.
    return reduce(numerator, denominator, integer, type, rep); //Reduce the numerator and denominator.
}
//FRACTY REDUCES THE FRACTION.
function reduce(numerator, denominator, integer, type, rep) {
    const primeNumberArray = [
        2,
        3,
        5
    ]; //If the numerator isn't from a repeating decimal case, the initialized array of prime numbers will suffice to find the common denominators.
    if (rep === true) {
        for(let i = 3; i * i <= numerator; i += 2)if (numerator % i === 0) primeNumberArray.push(i);
    }
    let j = 0; //Initialize counter over the prime number array for the while loop.
    let comDenom = 1; //Initialize the common denominator.
    let num = numerator; //Initialize the numerator.
    let den = denominator; //Initialize the denominator.
    while(j <= primeNumberArray.length)if (num % primeNumberArray[j] === 0 && den % primeNumberArray[j] === 0) {
        comDenom = comDenom * primeNumberArray[j];
        num = num / primeNumberArray[j];
        den = den / primeNumberArray[j];
    } else j++;
    return returnStrings(den, num, integer, type);
}
//FRACTY RETURNS THE REDUCED FRACTION AS A STRING.
function returnStrings(den, num, integer, type) {
    if (den === 1 && num === 1) {
        integer = `${type}${(parseInt(integer) + 1).toString()}`; //Add 1 to the integer and return a string without a fraction.
        return `${integer}`;
    } else if (num === 0) return `${type}${integer}`;
    else if (integer == "0") return `${type}${num}/${den}`;
    else return `${type}${integer} ${num}/${den}`; //If there's an integer and a fraction return both.
}

},{}],"9OQAM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SearchView {
    #parentEl = document.querySelector(".search");
    //All we want from this class is to get the query and eventually also listen for the click event on the button
    getQuery() {
        const query = this.#parentEl.querySelector(".search__field").value;
        this._clearInput();
        return query;
    }
    _clearInput() {
        return this.#parentEl.querySelector(".search__field").value = "";
    }
    addHandlerSearch(handdler) {
        this.#parentEl.addEventListener("submit", function(e) {
            e.preventDefault();
            handdler();
        }); //We are taking the parent element of the button (the entire form) because there we can listen for the submit event. No matter if the user clicks in the submit button or hits Enter while typing the query
    //we cant call the handler immediately because when we submit a form we need to first prevent the default action because otherwise the page is going to reload
    }
}
exports.default = new SearchView(); // Not exporting the class BUT exporting an Object that was created by this class.

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cSbZE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg"); // Parcel 2 //Este path e' relativo ao controler.js location
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class ResultsView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".results");
    _errorMessage = "No recipes found for your query! Please try again.";
    _message = "";
    _generateMarkup() {
        console.log(this._data);
        return this._data.map(this._generateMarkupPreview).join("");
    }
    _generateMarkupPreview(result) {
        const id = window.location.hash.slice(1); //We want to take everything except the first element
        console.log(`TEST: ${id}`);
        return `
                <li class="preview">
                    <a class="preview__link ${result.id === id ? "preview__link--active" : ""}" href=#${result.id}>
                        <figure class="preview__fig">
                            <img src="${result.img}" alt="${result.title}" />
                        </figure>
                        <div class="preview__data">
                            <h4 class="preview__title">${result.title}</h4>
                            <p class="preview__publisher">${result.publisher}</p>
                        </div>
                    </a>
                 </li>    
        `;
    }
}
exports.default = new ResultsView();

},{"./View.js":"5cUXS","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6z7bi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg"); // Parcel 2 //Este path e' relativo ao controler.js location
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class PaginationView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".pagination");
    // We need to use the publisher subscriber pattern like in the recipeView. 
    // That works by creating a publisher, which is basically a function which is the one listening for the event which receives a handler function 
    // Which in our case is going to be a controller that lives in the Controller.js.So we will be able to listen for the event here in the paginationView while at the same time
    // we will be able to handle that event from the COntroller. 
    // Here we are going to use the event delegation because there are going to be two buttons and we are going to add the eventListener to the common parent element
    addHandlerClick(handdler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--inline"); // .target is the clicked element and closest which is similar to queryselector but instead for searching UP in the tree - lOOKING FOR PARENTS
            if (!btn) return;
            const goToPage = +btn.dataset.goto; //From the html below data-goto. The + is converting the btn.dataset.goto from string to number!
            handdler(goToPage);
        });
    }
    _generateMarkup() {
        //OBS: In order to know if we are on page one and there are other pages, we need to know how many pages there are. 
        // How do we know the number of pages? We need the number of results dived by the number of results per page 
        // The number of results comes from this._data.results
        //Math.ceil to round the number
        const curPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        console.log(numPages);
        // Page 1, and there are other pages
        if (curPage === 1 && numPages > 1) return `
                <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
                    <span>${curPage + 1}</span>
                    <svg class="search__icon">
                        <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
                    </svg>
                </button>
            `;
        // Last Page - Means the current page is the same as the number of pages
        if (curPage === numPages && numPages > 1) return `
                    <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
                        <svg class="search__icon">
                        <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
                        </svg>
                        <span>${curPage - 1}</span>
                    </button>
            ` //Go to previous Page: Current Page - 1
        ;
        // Other page
        if (curPage < numPages) return `
                    <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
                        <svg class="search__icon">
                        <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
                        </svg>
                        <span>${curPage - 1}</span>
                    </button>
                    <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
                        <span>${curPage + 1}</span>
                        <svg class="search__icon">
                            <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
                        </svg>
                    </button>
            `;
        // Page1, and there are NOT other pages
        return "";
    }
}
//Exporting this View so we can import it into the controller
exports.default = new PaginationView();

},{"./View.js":"5cUXS","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Lqzq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _previewViewJs = require("./previewView.js");
var _previewViewJsDefault = parcelHelpers.interopDefault(_previewViewJs);
var _iconsSvg = require("url:../../img/icons.svg"); // Parcel 2 //Este path e' relativo ao controler.js location
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class BookmarksView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".bookmarks__list");
    _errorMessage = "No bookmarks yet. Find a nice recipe and bookmark it";
    _message = "";
    //Este method aqui esta sendo criado para quando iniciarmos a pagina que ja tiver recipe no storage para que possamos handle
    addHandlerRender(handler) {
        window.addEventListener("load", handler);
    }
    _generateMarkup() {
        console.log(this._data);
        //return this._data.map(this._generateMarkupPreview).join('');
        return this._data.map((bookmark)=>(0, _previewViewJsDefault.default).render(bookmark, false)).join("");
    }
}
exports.default = new BookmarksView();

},{"./View.js":"5cUXS","./previewView.js":"1FDQ6","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1FDQ6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg"); // Parcel 2 //Este path e' relativo ao controler.js location
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
//This View only generates one preview element like the <li class="preview"> below
//THis PreviewView will only generate a markup for one of these preview elements
class PreviewView extends (0, _viewJsDefault.default) {
    _parentElement = "";
    _generateMarkup() {
        const id = window.location.hash.slice(1); //We want to take everything except the first element
        console.log(`TEST: ${id}`);
        return `
            <li class="preview">
                <a class="preview__link ${this._data.id === id ? "preview__link--active" : ""}" href="#${this._data.id}">
                    <figure class="preview__fig">
                        <img src="${this._data.image}" alt="${this._data.title}" />
                    </figure>
                    <div class="preview__data">
                        <h4 class="preview__title">${this._data.title}</h4>
                        <p class="preview__publisher">${this._data.publisher}</p>
                        <div class="preview__user-generated ${this._data.key ? "" : "hidden"}">
                            <svg>
                             <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
                            </svg>
                        </div>
                    </div>
                </a>
            </li>
        `;
    }
}
exports.default = new PreviewView(); /////// EXPLICACAO ////////////////////
 // PreviewView vai ser o parent de resultsView e bookmarksView
 // PreviewView e' o lado esquerdo da pagina com os links de cada receita do search

},{"./View.js":"5cUXS","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i6DNj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg"); // Parcel 2
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class AddRecipeView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".upload");
    _successMessage = "Recipe was successfully uploaded :)";
    _window = document.querySelector(".add-recipe-window");
    _overlay = document.querySelector(".overlay");
    _btnOpen = document.querySelector(".nav__btn--add-recipe");
    _btnClose = document.querySelector(".btn--close-modal");
    //This conscructor Method is being created as will need to run both functions as soon as the objects are created
    constructor(){
        super(); //super() is here because we are on a child class and only after that we can use the 'this.' keyword
        this._addHandlerShowWindow();
        this._addHandlerHideWindow();
    }
    toggleWindow() {
        this._overlay.classList.toggle("hidden"); //Toggle will add to class if its not there and remove the class when it is already there
        this._window.classList.toggle("hidden");
    }
    //    *********************       IMPORTANTE   ************************ ///
    //In order to show and hide this window the controller.js wont interfere at all. 
    //But we still need to import the addRecipeView because otherwise our main script sort of controller will never execute this file
    _addHandlerShowWindow() {
        this._btnOpen.addEventListener("click", this.toggleWindow.bind(this)); //Here we are selecting the button
    //this._btnOpen.addEventListener('click', function(){ //What we want to do when we click the button: We want to take the overlay into window and remove the hidden class
    //  this._overlay.classList.toggle('hidden');
    //});
    }
    _addHandlerHideWindow() {
        this._btnClose.addEventListener("click", this.toggleWindow.bind(this));
        this._overlay.addEventListener("click", this.toggleWindow.bind(this));
    }
    //Form Submition
    addHandlerUpload(handler) {
        this._parentElement.addEventListener("submit", function(e) {
            e.preventDefault();
            // Here we are spreading FormData(this) object into an array. Otherwise we are not able to use this object. 
            // Now this array will containg all the fields with all the values of the form. 
            const dataArr = [
                ...new FormData(this)
            ]; //FormData is a MODERN browser API that we can now make use of. Inside de FormData() constructor we have to pass in an element that is a form. In this case is the this keyword
            const data = Object.fromEntries(dataArr); //Converting the data into an Object -- See controller.js -- THis fromEntries Method takes an array of entries and convert it to an object. This  is the opposite of the entries method that is available on Arrays
            handler(data);
        //EXPLANATION: What we will do with this data? This data is what we want to use upload to the API.
        // and that acion of uploading the data is going to be just another API call. The API calls happen on model.js.
        // Therefore we need a way of getting this data to the model. We will need to create a controller function which will then be the handler of this event. 
        });
    }
    _generateMarkup() {}
}
exports.default = new AddRecipeView();

},{"./View.js":"5cUXS","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["hycaY","aenu9"], "aenu9", "parcelRequire3a11")

//# sourceMappingURL=index.e37f48ea.js.map
