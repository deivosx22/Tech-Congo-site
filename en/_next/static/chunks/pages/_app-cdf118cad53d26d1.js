(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(9011)}])},5132:function(e,t){"use strict";var n,r,o,l;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ACTION_FAST_REFRESH:function(){return f},ACTION_NAVIGATE:function(){return c},ACTION_PREFETCH:function(){return s},ACTION_REFRESH:function(){return a},ACTION_RESTORE:function(){return u},ACTION_SERVER_ACTION:function(){return d},ACTION_SERVER_PATCH:function(){return i},PrefetchCacheEntryStatus:function(){return r},PrefetchKind:function(){return n},isThenable:function(){return p}});let a="refresh",c="navigate",u="restore",i="server-patch",s="prefetch",f="fast-refresh",d="server-action";function p(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(o=n||(n={})).AUTO="auto",o.FULL="full",o.TEMPORARY="temporary",(l=r||(r={})).fresh="fresh",l.reusable="reusable",l.expired="expired",l.stale="stale",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2842:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(8796),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3500:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return j}});let r=n(8754),o=n(5893),l=r._(n(7294)),a=n(4813),c=n(5853),u=n(5058),i=n(5782),s=n(8878),f=n(7171),d=n(3068),p=n(1487),h=n(2842),x=n(1412),y=n(5132),m=new Set;function v(e,t,n,r,o,l){if(l||(0,c.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(m.has(o))return;m.add(o)}(async()=>l?e.prefetch(t,o):e.prefetch(t,n,r))().catch(e=>{})}}function g(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let j=l.default.forwardRef(function(e,t){let n,r;let{href:u,as:m,children:j,prefetch:b=null,passHref:_,replace:C,shallow:T,scroll:R,locale:O,onClick:A,onMouseEnter:E,onTouchStart:N,legacyBehavior:P=!1,...M}=e;n=j,P&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let S=l.default.useContext(f.RouterContext),w=l.default.useContext(d.AppRouterContext),I=null!=S?S:w,k=!S,L=!1!==b,U=null===b?y.PrefetchKind.AUTO:y.PrefetchKind.FULL,{href:F,as:q}=l.default.useMemo(()=>{if(!S){let e=g(u);return{href:e,as:m?g(m):e}}let[e,t]=(0,a.resolveHref)(S,u,!0);return{href:e,as:m?(0,a.resolveHref)(S,m):t||e}},[S,u,m]),D=l.default.useRef(F),H=l.default.useRef(q);P&&(r=l.default.Children.only(n));let K=P?r&&"object"==typeof r&&r.ref:t,[J,V,Q]=(0,p.useIntersection)({rootMargin:"200px"}),Y=l.default.useCallback(e=>{(H.current!==q||D.current!==F)&&(Q(),H.current=q,D.current=F),J(e),K&&("function"==typeof K?K(e):"object"==typeof K&&(K.current=e))},[q,K,F,Q,J]);l.default.useEffect(()=>{I&&V&&L&&v(I,F,q,{locale:O},{kind:U},k)},[q,F,V,O,L,null==S?void 0:S.locale,I,k,U]);let B={ref:Y,onClick(e){P||"function"!=typeof A||A(e),P&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,n,r,o,a,u,i,s){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s&&!(0,c.isLocalURL)(n)))return;e.preventDefault();let d=()=>{let e=null==u||u;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,locale:i,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})};s?l.default.startTransition(d):d()}(e,I,F,q,C,T,R,O,k)},onMouseEnter(e){P||"function"!=typeof E||E(e),P&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),I&&(L||!k)&&v(I,F,q,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:U},k)},onTouchStart:function(e){P||"function"!=typeof N||N(e),P&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),I&&(L||!k)&&v(I,F,q,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:U},k)}};if((0,i.isAbsoluteUrl)(q))B.href=q;else if(!P||_||"a"===r.type&&!("href"in r.props)){let e=void 0!==O?O:null==S?void 0:S.locale,t=(null==S?void 0:S.isLocaleDomain)&&(0,h.getDomainLocale)(q,e,null==S?void 0:S.locales,null==S?void 0:S.domainLocales);B.href=t||(0,x.addBasePath)((0,s.addLocale)(q,e,null==S?void 0:S.defaultLocale))}return P?l.default.cloneElement(r,B):(0,o.jsx)("a",{...M,...B,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1487:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return u}});let r=n(7294),o=n(6078),l="function"==typeof IntersectionObserver,a=new Map,c=[];function u(e){let{rootRef:t,rootMargin:n,disabled:u}=e,i=u||!l,[s,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(l){if(i||s)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=c.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},c.push(n),a.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),a.delete(r);let e=c.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&c.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!s){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[i,n,t,s,d.current]),[p,s,(0,r.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3733:function(e,t,n){"use strict";n.d(t,{A:function(){return l},Z:function(){return c}});var r=n(5893),o=n(7294);let l=(0,o.createContext)(),a=(e,t)=>{switch(t.type){case"ADD_TO_CART":if(console.log("Reducer: Adding to cart",t.payload),e.find(e=>e.id===t.payload.id))return e.map(e=>e.id===t.payload.id?{...e,quantity:e.quantity+1}:e);return[...e,{...t.payload,quantity:1}];case"REMOVE_FROM_CART":return console.log("Reducer: Removing from cart",t.payload),e.filter(e=>e.id!==t.payload);case"UPDATE_QUANTITY":return console.log("Reducer: Updating quantity",t.payload),e.map(e=>e.id===t.payload.id?{...e,quantity:t.payload.quantity}:e);default:return e}},c=e=>{let{children:t}=e,[n,c]=(0,o.useReducer)(a,[]);return(0,o.useEffect)(()=>{let e=localStorage.getItem("cart");e&&(console.log("Initial cart from localStorage:",e),c({type:"INIT_CART",payload:JSON.parse(e)}))},[]),(0,o.useEffect)(()=>{console.log("Saving cart to localStorage:",JSON.stringify(n)),localStorage.setItem("cart",JSON.stringify(n))},[n]),(0,r.jsx)(l.Provider,{value:{cart:n,addToCart:e=>{console.log("CartContext: Adding to cart",e),c({type:"ADD_TO_CART",payload:e})},removeFromCart:e=>{console.log("CartContext: Removing from cart",e),c({type:"REMOVE_FROM_CART",payload:e})},updateQuantity:(e,t)=>{console.log("CartContext: Updating quantity",e,t),c({type:"UPDATE_QUANTITY",payload:{id:e,quantity:t}})}},children:t})}},7166:function(e,t,n){"use strict";n.d(t,{A:function(){return a},i:function(){return c}});var r=n(5893),o=n(7294),l=n(1163);let a=(0,o.createContext)(),c=e=>{let{children:t}=e,n=(0,l.useRouter)(),[c,u]=(0,o.useState)(n.locale||"en");return(0,o.useEffect)(()=>{u(n.locale||"en")},[n.locale]),(0,r.jsx)(a.Provider,{value:{locale:c,changeLanguage:e=>{let t=n.asPath;n.push(t,t,{locale:e})}},children:t})}},956:function(e,t,n){"use strict";n.d(t,{J:function(){return c},l:function(){return a}});var r=n(5893),o=n(7294);let l=(0,o.createContext)(),a=()=>(0,o.useContext)(l),c=e=>{let{children:t}=e,[n,a]=(0,o.useState)(null);return(0,r.jsx)(l.Provider,{value:{notification:n,showNotification:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";a({message:e,type:t}),setTimeout(()=>a(null),3e3)}},children:t})}},9011:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(5893),o=n(9008),l=n.n(o),a=n(1664),c=n.n(a),u=n(7294),i=n(3733),s=n(7166);let f={en:{home:"Home",shop:"Shop",about:"About",contact:"Contact",cart:"Cart"},fr:{home:"Accueil",shop:"Boutique",about:"\xc0 propos",contact:"Contact",cart:"Panier"}};function d(){let{cart:e}=(0,u.useContext)(i.A),{locale:t}=(0,u.useContext)(s.A),n=e.reduce((e,t)=>e+t.quantity,0);return(0,r.jsx)("nav",{children:(0,r.jsxs)("ul",{className:"flex space-x-4",children:[(0,r.jsx)("li",{children:(0,r.jsx)(c(),{href:"/",className:"hover:text-secondary",children:f[t].home})}),(0,r.jsx)("li",{children:(0,r.jsx)(c(),{href:"/shop",className:"hover:text-secondary",children:f[t].shop})}),(0,r.jsx)("li",{children:(0,r.jsx)(c(),{href:"/about",className:"hover:text-secondary",children:f[t].about})}),(0,r.jsx)("li",{children:(0,r.jsx)(c(),{href:"/contact",className:"hover:text-secondary",children:f[t].contact})}),(0,r.jsx)("li",{children:(0,r.jsxs)(c(),{href:"/cart",className:"hover:text-secondary flex items-center",children:[f[t].cart,n>0&&(0,r.jsx)("span",{className:"ml-1 bg-secondary text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs",children:n})]})})]})})}var p=n(956),h=()=>{let{notification:e}=(0,p.l)();if(!e)return null;let t="success"===e.type?"bg-green-500":"bg-red-500";return(0,r.jsx)("div",{className:"fixed bottom-4 right-4 ".concat(t," text-white px-4 py-2 rounded-md shadow-lg"),children:e.message})};let x={en:{allRightsReserved:"All rights reserved."},fr:{allRightsReserved:"Tous droits r\xe9serv\xe9s."}};function y(e){let{children:t}=e,{locale:n,changeLanguage:o}=(0,u.useContext)(s.A);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l(),{children:[(0,r.jsx)("title",{children:"Tech Congo"}),(0,r.jsx)("meta",{name:"description",content:"Modern e-commerce website for tech products"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)("header",{className:"bg-primary text-white p-4",children:(0,r.jsxs)("div",{className:"container mx-auto flex justify-between items-center",children:[(0,r.jsx)(c(),{href:"/",className:"text-2xl font-bold",children:"Tech Congo"}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(d,{}),(0,r.jsx)("div",{className:"ml-4",children:(0,r.jsx)("button",{onClick:()=>o("en"===n?"fr":"en"),children:"en"===n?"FR":"EN"})})]})]})}),(0,r.jsxs)("main",{className:"container mx-auto mt-8 px-4",children:[t,(0,r.jsx)(h,{})]}),(0,r.jsx)("footer",{className:"bg-primary text-white mt-8 py-4",children:(0,r.jsx)("div",{className:"container mx-auto text-center",children:(0,r.jsxs)("p",{children:["\xa9 2023 Tech Congo. ",x[n].allRightsReserved]})})})]})}n(7908);var m=function(e){let{Component:t,pageProps:n}=e;return(0,r.jsx)(s.i,{children:(0,r.jsx)(i.Z,{children:(0,r.jsx)(p.J,{children:(0,r.jsx)(y,{children:(0,r.jsx)(t,{...n})})})})})}},7908:function(){},9008:function(e,t,n){e.exports=n(494)},1664:function(e,t,n){e.exports=n(3500)},1163:function(e,t,n){e.exports=n(7253)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(7253)}),_N_E=e.O()}]);