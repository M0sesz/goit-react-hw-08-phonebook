"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[386],{1386:function(t,e,n){n.r(e),n.d(e,{default:function(){return Ie}});var o=n(2791),r=n(9434),a=n(4270),i=n(4942),s=n(1413),c=n(9439),u=n(5430);function l(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=n(3433);function f(t){var e,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=f(t[e]))&&(o&&(o+=" "),o+=n);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}var p=function(){for(var t,e,n=0,o="";n<arguments.length;)(t=arguments[n++])&&(e=f(t))&&(o&&(o+=" "),o+=e);return o},m=["theme","type"],v=["delay","staleId"],h=function(t){return"number"==typeof t&&!isNaN(t)},g=function(t){return"string"==typeof t},y=function(t){return"function"==typeof t},b=function(t){return g(t)||y(t)?t:null},Z=function(t){return(0,o.isValidElement)(t)||g(t)||y(t)||h(t)};function x(t){var e=t.enter,n=t.exit,r=t.appendPosition,a=void 0!==r&&r,i=t.collapse,s=void 0===i||i,c=t.collapseDuration,u=void 0===c?300:c;return function(t){var r=t.children,i=t.position,c=t.preventExitTransition,l=t.done,f=t.nodeRef,p=t.isIn,m=a?"".concat(e,"--").concat(i):e,v=a?"".concat(n,"--").concat(i):n,h=(0,o.useRef)(0);return(0,o.useLayoutEffect)((function(){var t,e=f.current,n=m.split(" "),o=function t(o){var r;o.target===f.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",t),e.removeEventListener("animationcancel",t),0===h.current&&"animationcancel"!==o.type&&(r=e.classList).remove.apply(r,(0,d.Z)(n)))};(t=e.classList).add.apply(t,(0,d.Z)(n)),e.addEventListener("animationend",o),e.addEventListener("animationcancel",o)}),[]),(0,o.useEffect)((function(){var t=f.current,e=function e(){t.removeEventListener("animationend",e),s?function(t,e,n){void 0===n&&(n=300);var o=t.scrollHeight,r=t.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(e,n)}))}))}(t,l,u):l()};p||(c?e():(h.current=1,t.className+=" ".concat(v),t.addEventListener("animationend",e)))}),[p]),o.createElement(o.Fragment,null,r)}}function E(t,e){return null!=t?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}var T={list:new Map,emitQueue:new Map,on:function(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off:function(t,e){if(e){var n=this.list.get(t).filter((function(t){return t!==e}));return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit:function(t){var e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit:function(t){var e=arguments,n=this;this.list.has(t)&&this.list.get(t).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,d.Z)([].slice.call(e,1)))}),0);n.emitQueue.has(t)||n.emitQueue.set(t,[]),n.emitQueue.get(t).push(r)}))}},w=function(t){var e=t.theme,n=t.type,r=l(t,m);return o.createElement("svg",(0,s.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===e?"currentColor":"var(--toastify-icon-color-".concat(n,")")},r))},C={info:function(t){return o.createElement(w,(0,s.Z)({},t),o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return o.createElement(w,(0,s.Z)({},t),o.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return o.createElement(w,(0,s.Z)({},t),o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return o.createElement(w,(0,s.Z)({},t),o.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return o.createElement("div",{className:"Toastify__spinner"})}};function I(t){var e=(0,o.useReducer)((function(t){return t+1}),0),n=(0,c.Z)(e,2)[1],r=(0,o.useState)([]),a=(0,c.Z)(r,2),i=a[0],u=a[1],f=(0,o.useRef)(null),p=(0,o.useRef)(new Map).current,m=function(t){return-1!==i.indexOf(t)},x=(0,o.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:m,getToast:function(t){return p.get(t)}}).current;function w(t){var e=t.containerId;!x.props.limit||e&&x.containerId!==e||(x.count-=x.queue.length,x.queue=[])}function I(t){u((function(e){return null==t?[]:e.filter((function(e){return e!==t}))}))}function O(){var t=x.queue.shift();k(t.toastContent,t.toastProps,t.staleId)}function _(t,e){var r=e.delay,a=e.staleId,i=l(e,v);if(Z(t)&&!function(t){return!f.current||x.props.enableMultiContainer&&t.containerId!==x.props.containerId||p.has(t.toastId)&&null==t.updateId}(i)){var u=i.toastId,d=i.updateId,m=i.data,w=x.props,_=function(){return I(u)},L=null==d;L&&x.count++;var N,j,P=(0,s.Z)((0,s.Z)((0,s.Z)({},w),{},{style:w.toastStyle,key:x.toastKey++},Object.fromEntries(Object.entries(i).filter((function(t){var e=(0,c.Z)(t,2);e[0];return null!=e[1]})))),{},{toastId:u,updateId:d,data:m,closeToast:_,isIn:!1,className:b(i.className||w.toastClassName),bodyClassName:b(i.bodyClassName||w.bodyClassName),progressClassName:b(i.progressClassName||w.progressClassName),autoClose:!i.isLoading&&(N=i.autoClose,j=w.autoClose,!1===N||h(N)&&N>0?N:j),deleteToast:function(){var t=E(p.get(u),"removed");p.delete(u),T.emit(4,t);var e=x.queue.length;if(x.count=null==u?x.count-x.displayedToast:x.count-1,x.count<0&&(x.count=0),e>0){var o=null==u?x.props.limit:1;if(1===e||1===o)x.displayedToast++,O();else{var r=o>e?e:o;x.displayedToast=r;for(var a=0;a<r;a++)O()}}else n()}});P.iconOut=function(t){var e=t.theme,n=t.type,r=t.isLoading,a=t.icon,i=null,s={theme:e,type:n};return!1===a||(y(a)?i=a(s):(0,o.isValidElement)(a)?i=(0,o.cloneElement)(a,s):g(a)||h(a)?i=a:r?i=C.spinner():function(t){return t in C}(n)&&(i=C[n](s))),i}(P),y(i.onOpen)&&(P.onOpen=i.onOpen),y(i.onClose)&&(P.onClose=i.onClose),P.closeButton=w.closeButton,!1===i.closeButton||Z(i.closeButton)?P.closeButton=i.closeButton:!0===i.closeButton&&(P.closeButton=!Z(w.closeButton)||w.closeButton);var R=t;(0,o.isValidElement)(t)&&!g(t.type)?R=(0,o.cloneElement)(t,{closeToast:_,toastProps:P,data:m}):y(t)&&(R=t({closeToast:_,toastProps:P,data:m})),w.limit&&w.limit>0&&x.count>w.limit&&L?x.queue.push({toastContent:R,toastProps:P,staleId:a}):h(r)?setTimeout((function(){k(R,P,a)}),r):k(R,P,a)}}function k(t,e,n){var o=e.toastId;n&&p.delete(n);var r={content:t,props:e};p.set(o,r),u((function(t){return[].concat((0,d.Z)(t),[o]).filter((function(t){return t!==n}))})),T.emit(4,E(r,null==r.props.updateId?"added":"updated"))}return(0,o.useEffect)((function(){return x.containerId=t.containerId,T.cancelEmit(3).on(0,_).on(1,(function(t){return f.current&&I(t)})).on(5,w).emit(2,x),function(){p.clear(),T.emit(3,x)}}),[]),(0,o.useEffect)((function(){x.props=t,x.isToastActive=m,x.displayedToast=i.length})),{getToastToRender:function(e){var n=new Map,o=Array.from(p.values());return t.newestOnTop&&o.reverse(),o.forEach((function(t){var e=t.props.position;n.has(e)||n.set(e,[]),n.get(e).push(t)})),Array.from(n,(function(t){return e(t[0],t[1])}))},containerRef:f,isToastActive:m}}function O(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function _(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function k(t){var e=(0,o.useState)(!1),n=(0,c.Z)(e,2),r=n[0],a=n[1],i=(0,o.useState)(!1),s=(0,c.Z)(i,2),u=s[0],l=s[1],d=(0,o.useRef)(null),f=(0,o.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,o.useRef)(t),m=t.autoClose,v=t.pauseOnHover,h=t.closeToast,g=t.onClick,b=t.closeOnClick;function Z(e){if(t.draggable){"touchstart"===e.nativeEvent.type&&e.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",w),document.addEventListener("mouseup",C),document.addEventListener("touchmove",w),document.addEventListener("touchend",C);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=O(e.nativeEvent),f.y=_(e.nativeEvent),"x"===t.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(t.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent/100))}}function x(e){if(f.boundingRect){var n=f.boundingRect,o=n.top,r=n.bottom,a=n.left,i=n.right;"touchend"!==e.nativeEvent.type&&t.pauseOnHover&&f.x>=a&&f.x<=i&&f.y>=o&&f.y<=r?T():E()}}function E(){a(!0)}function T(){a(!1)}function w(e){var n=d.current;f.canDrag&&n&&(f.didMove=!0,r&&T(),f.x=O(e),f.y=_(e),f.delta="x"===t.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(t.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function C(){document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",C),document.removeEventListener("touchmove",w),document.removeEventListener("touchend",C);var e=d.current;if(f.canDrag&&f.didMove&&e){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform="translate".concat(t.draggableDirection,"(0)"),e.style.opacity="1"}}(0,o.useEffect)((function(){p.current=t})),(0,o.useEffect)((function(){return d.current&&d.current.addEventListener("d",E,{once:!0}),y(t.onOpen)&&t.onOpen((0,o.isValidElement)(t.children)&&t.children.props),function(){var t=p.current;y(t.onClose)&&t.onClose((0,o.isValidElement)(t.children)&&t.children.props)}}),[]),(0,o.useEffect)((function(){return t.pauseOnFocusLoss&&(document.hasFocus()||T(),window.addEventListener("focus",E),window.addEventListener("blur",T)),function(){t.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",T))}}),[t.pauseOnFocusLoss]);var I={onMouseDown:Z,onTouchStart:Z,onMouseUp:x,onTouchEnd:x};return m&&v&&(I.onMouseEnter=T,I.onMouseLeave=E),b&&(I.onClick=function(t){g&&g(t),f.canCloseOnClick&&h()}),{playToast:E,pauseToast:T,isRunning:r,preventExitTransition:u,toastRef:d,eventHandlers:I}}function L(t){var e=t.closeToast,n=t.theme,r=t.ariaLabel,a=void 0===r?"close":r;return o.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(t){t.stopPropagation(),e(t)},"aria-label":a},o.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function N(t){var e=t.delay,n=t.isRunning,r=t.closeToast,a=t.type,c=void 0===a?"default":a,u=t.hide,l=t.className,d=t.style,f=t.controlledProgress,m=t.progress,v=t.rtl,h=t.isIn,g=t.theme,b=u||f&&0===m,Z=(0,s.Z)((0,s.Z)({},d),{},{animationDuration:"".concat(e,"ms"),animationPlayState:n?"running":"paused",opacity:b?0:1});f&&(Z.transform="scaleX(".concat(m,")"));var x=p("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(g),"Toastify__progress-bar--".concat(c),{"Toastify__progress-bar--rtl":v}),E=y(l)?l({rtl:v,type:c,defaultClassName:x}):p(x,l);return o.createElement("div",(0,i.Z)({role:"progressbar","aria-hidden":b?"true":"false","aria-label":"notification timer",className:E,style:Z},f&&m>=1?"onTransitionEnd":"onAnimationEnd",f&&m<1?null:function(){h&&r()}))}var j=function(t){var e=k(t),n=e.isRunning,r=e.preventExitTransition,a=e.toastRef,i=e.eventHandlers,c=t.closeButton,u=t.children,l=t.autoClose,d=t.onClick,f=t.type,m=t.hideProgressBar,v=t.closeToast,h=t.transition,g=t.position,b=t.className,Z=t.style,x=t.bodyClassName,E=t.bodyStyle,T=t.progressClassName,w=t.progressStyle,C=t.updateId,I=t.role,O=t.progress,_=t.rtl,j=t.toastId,P=t.deleteToast,R=t.isIn,M=t.isLoading,D=t.iconOut,A=t.closeOnClick,z=t.theme,B=p("Toastify__toast","Toastify__toast-theme--".concat(z),"Toastify__toast--".concat(f),{"Toastify__toast--rtl":_},{"Toastify__toast--close-on-click":A}),F=y(b)?b({rtl:_,position:g,type:f,defaultClassName:B}):p(B,b),S=!!O||!l,H={closeToast:v,type:f,theme:z},q=null;return!1===c||(q=y(c)?c(H):(0,o.isValidElement)(c)?(0,o.cloneElement)(c,H):L(H)),o.createElement(h,{isIn:R,done:P,position:g,preventExitTransition:r,nodeRef:a},o.createElement("div",(0,s.Z)((0,s.Z)({id:j,onClick:d,className:F},i),{},{style:Z,ref:a}),o.createElement("div",(0,s.Z)((0,s.Z)({},R&&{role:I}),{},{className:y(x)?x({type:f}):p("Toastify__toast-body",x),style:E}),null!=D&&o.createElement("div",{className:p("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!M})},D),o.createElement("div",null,u)),q,o.createElement(N,(0,s.Z)((0,s.Z)({},C&&!S?{key:"pb-".concat(C)}:{}),{},{rtl:_,theme:z,delay:l,isRunning:n,isIn:R,closeToast:v,hide:m,type:f,style:w,className:T,controlledProgress:S,progress:O||0}))))},P=function(t,e){return void 0===e&&(e=!1),{enter:"Toastify--animate Toastify__".concat(t,"-enter"),exit:"Toastify--animate Toastify__".concat(t,"-exit"),appendPosition:e}},R=x(P("bounce",!0)),M=(x(P("slide",!0)),x(P("zoom")),x(P("flip")),(0,o.forwardRef)((function(t,e){var n=I(t),r=n.getToastToRender,a=n.containerRef,i=n.isToastActive,c=t.className,u=t.style,l=t.rtl,d=t.containerId;function f(t){var e=p("Toastify__toast-container","Toastify__toast-container--".concat(t),{"Toastify__toast-container--rtl":l});return y(c)?c({position:t,rtl:l,defaultClassName:e}):p(e,b(c))}return(0,o.useEffect)((function(){e&&(e.current=a.current)}),[]),o.createElement("div",{ref:a,className:"Toastify",id:d},r((function(t,e){var n=e.length?(0,s.Z)({},u):(0,s.Z)((0,s.Z)({},u),{},{pointerEvents:"none"});return o.createElement("div",{className:f(t),style:n,key:"container-".concat(t)},e.map((function(t,n){var r=t.content,a=t.props;return o.createElement(j,(0,s.Z)((0,s.Z)({},a),{},{isIn:i(a.toastId),style:(0,s.Z)((0,s.Z)({},a.style),{},{"--nth":n+1,"--len":e.length}),key:"toast-".concat(a.key)}),r)})))})))})));M.displayName="ToastContainer",M.defaultProps={position:"top-right",transition:R,autoClose:5e3,closeButton:L,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var D,A=new Map,z=[],B=1;function F(){return""+B++}function S(t){return t&&(g(t.toastId)||h(t.toastId))?t.toastId:F()}function H(t,e){return A.size>0?T.emit(0,t,e):z.push({content:t,options:e}),e.toastId}function q(t,e){return(0,s.Z)((0,s.Z)({},e),{},{type:e&&e.type||t,toastId:S(e)})}function Q(t){return function(e,n){return H(e,q(t,n))}}function V(t,e){return H(t,q("default",e))}V.loading=function(t,e){return H(t,q("default",(0,s.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},e)))},V.promise=function(t,e,n){var o,r=e.pending,a=e.error,i=e.success;r&&(o=g(r)?V.loading(r,n):V.loading(r.render,(0,s.Z)((0,s.Z)({},n),r)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=function(t,e,r){if(null!=e){var a=(0,s.Z)((0,s.Z)((0,s.Z)({type:t},c),n),{},{data:r}),i=g(e)?{render:e}:e;return o?V.update(o,(0,s.Z)((0,s.Z)({},a),i)):V(i.render,(0,s.Z)((0,s.Z)({},a),i)),r}V.dismiss(o)},l=y(t)?t():t;return l.then((function(t){return u("success",i,t)})).catch((function(t){return u("error",a,t)})),l},V.success=Q("success"),V.info=Q("info"),V.error=Q("error"),V.warning=Q("warning"),V.warn=V.warning,V.dark=function(t,e){return H(t,q("default",(0,s.Z)({theme:"dark"},e)))},V.dismiss=function(t){A.size>0?T.emit(1,t):z=z.filter((function(e){return null!=t&&e.options.toastId!==t}))},V.clearWaitingQueue=function(t){return void 0===t&&(t={}),T.emit(5,t)},V.isActive=function(t){var e=!1;return A.forEach((function(n){n.isToastActive&&n.isToastActive(t)&&(e=!0)})),e},V.update=function(t,e){void 0===e&&(e={}),setTimeout((function(){var n=function(t,e){var n=e.containerId,o=A.get(n||D);return o&&o.getToast(t)}(t,e);if(n){var o=n.props,r=n.content,a=(0,s.Z)((0,s.Z)((0,s.Z)({delay:100},o),e),{},{toastId:e.toastId||t,updateId:F()});a.toastId!==t&&(a.staleId=t);var i=a.render||r;delete a.render,H(i,a)}}),0)},V.done=function(t){V.update(t,{progress:1})},V.onChange=function(t){return T.on(4,t),function(){T.off(4,t)}},V.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},V.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},T.on(2,(function(t){D=t.containerId||t,A.set(D,t),z.forEach((function(t){T.emit(0,t.content,t.options)})),z=[]})).on(3,(function(t){A.delete(t.containerId||t),0===A.size&&T.off(0).off(1).off(5)}));var U,Y,G,K,W,X,$=n(168),J=n(5867),tt=J.ZP.div(U||(U=(0,$.Z)(["\n  max-width: 350px;\n  margin: 0 auto;\n  padding: 20px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n"]))),et=J.ZP.label(Y||(Y=(0,$.Z)(["\n  display: block;\n  margin-bottom: 10px;\n  font-weight: bold;\n"]))),nt=J.ZP.input(G||(G=(0,$.Z)(["\n  width: 100%;\n  padding: 8px;\n  margin-bottom: 10px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n"]))),ot=J.ZP.button(K||(K=(0,$.Z)(["\n  background-color: #4caf50;\n  color: white;\n  padding: 10px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n"]))),rt=(0,J.ZP)(M)(W||(W=(0,$.Z)(["\n  .Toastify__toast {\n    background: #e74c3c;\n    color: white;\n  }\n"]))),at=J.ZP.div(X||(X=(0,$.Z)(["\n  margin-bottom: 20px;\n\n  label {\n    font-weight: bold;\n    margin-right: 10px;\n  }\n\n  input[type='text'] {\n    padding: 5px;\n    border: 1px solid #ccc;\n    border-radius: 3px;\n  }\n"]))),it=n(3329),st=function(){var t=(0,r.I0)(),e=(0,o.useState)({name:"",phone:""}),n=(0,c.Z)(e,2),a=n[0],l=n[1],d=(0,r.v9)((function(t){return t.contacts.items})),f=function(t){var e=t.target,n=e.name,o=e.value;l((0,s.Z)((0,s.Z)({},a),{},(0,i.Z)({},n,o)))};return(0,it.jsxs)(tt,{children:[(0,it.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),a.name.trim()&&a.phone.trim()){var n=d.some((function(t){return t.name===a.name}));/^\d+$/.test(a.phone)?n?V.error("This name is already in your contacts."):t((0,u.uK)(a)).then((function(){l({name:"",phone:""})})).catch((function(t){V.error("Error: ".concat(t.message))})):V.error("Phone can only contain digits.")}else V.error("Please fill in all fields.")},children:[(0,it.jsxs)(et,{children:["Name:",(0,it.jsx)(nt,{type:"text",name:"name",value:a.name,onChange:f})]}),(0,it.jsxs)(et,{children:["Phone:",(0,it.jsx)(nt,{type:"text",name:"phone",value:a.phone,onChange:f})]}),(0,it.jsx)(ot,{type:"submit",children:"Add Contact"})]}),(0,it.jsx)(rt,{})]})},ct=function(){var t=(0,r.I0)(),e=(0,r.v9)((function(t){return t.contacts.items})),n=(0,r.v9)((function(t){return t.filter}));(0,o.useEffect)((function(){t((0,u.yF)())}),[t]);var a=e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}));return(0,it.jsx)("ul",{children:a.map((function(e){return(0,it.jsxs)("li",{children:[e.name," - ",e.phone,(0,it.jsx)("button",{onClick:function(){return n=e.id,void t((0,u.GK)(n));var n},children:"Delete"})]},e.id)}))})},ut=n(6531),lt=function(){var t=(0,r.v9)((function(t){return t.contacts.filter})),e=(0,r.I0)();return(0,it.jsxs)(at,{children:[(0,it.jsx)("label",{htmlFor:"filter",children:"Filter contacts by name: "}),(0,it.jsx)("input",{type:"text",id:"filter",name:"filter",value:t,onChange:function(t){e((0,ut.T)(t.target.value))}})]})},dt={data:""},ft=function(t){return"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||dt},pt=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,mt=/\/\*[^]*?\*\/|  +/g,vt=/\n+/g,ht=function t(e,n){var o="",r="",a="",i=function(i){var s=e[i];"@"==i[0]?"i"==i[1]?o=i+" "+s+";":r+="f"==i[1]?t(s,i):i+"{"+t(s,"k"==i[1]?"":n)+"}":"object"==typeof s?r+=t(s,n?n.replace(/([^,])+/g,(function(t){return i.replace(/(^:.*)|([^,])+/g,(function(e){return/&/.test(e)?e.replace(/&/g,t):t?t+" "+e:e}))})):i):null!=s&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=t.p?t.p(i,s):i+":"+s+";")};for(var s in e)i(s);return o+(n&&a?n+"{"+a+"}":a)+r},gt={},yt=function t(e){if("object"==typeof e){var n="";for(var o in e)n+=o+t(e[o]);return n}return e},bt=function(t,e,n,o,r){var a=yt(t),s=gt[a]||(gt[a]=function(t){for(var e=0,n=11;e<t.length;)n=101*n+t.charCodeAt(e++)>>>0;return"go"+n}(a));if(!gt[s]){var c=a!==t?t:function(t){for(var e,n,o=[{}];e=pt.exec(t.replace(mt,""));)e[4]?o.shift():e[3]?(n=e[3].replace(vt," ").trim(),o.unshift(o[0][n]=o[0][n]||{})):o[0][e[1]]=e[2].replace(vt," ").trim();return o[0]}(t);gt[s]=ht(r?(0,i.Z)({},"@keyframes "+s,c):c,n?"":"."+s)}var u=n&&gt.g?gt.g:null;return n&&(gt.g=gt[s]),function(t,e,n,o){o?e.data=e.data.replace(o,t):-1===e.data.indexOf(t)&&(e.data=n?t+e.data:e.data+t)}(gt[s],e,o,u),s},Zt=function(t,e,n){return t.reduce((function(t,o,r){var a=e[r];if(a&&a.call){var i=a(n),s=i&&i.props&&i.props.className||/^go/.test(i)&&i;a=s?"."+s:i&&"object"==typeof i?i.props?"":ht(i,""):!1===i?"":i}return t+o+(null==a?"":a)}),"")};function xt(t){var e=this||{},n=t.call?t(e.p):t;return bt(n.unshift?n.raw?Zt(n,[].slice.call(arguments,1),e.p):n.reduce((function(t,n){return Object.assign(t,n&&n.call?n(e.p):n)}),{}):n,ft(e.target),e.g,e.o,e.k)}xt.bind({g:1});var Et,Tt,wt,Ct,It,Ot,_t,kt,Lt,Nt,jt,Pt,Rt,Mt,Dt,At,zt,Bt,Ft,St=xt.bind({k:1});function Ht(t,e){var n=this||{};return function(){var o=arguments;function r(a,i){var s=Object.assign({},a),c=s.className||r.className;n.p=Object.assign({theme:Tt&&Tt()},s),n.o=/ *go\d+/.test(c),s.className=xt.apply(n,o)+(c?" "+c:""),e&&(s.ref=i);var u=t;return t[0]&&(u=s.as||t,delete s.as),wt&&u[0]&&wt(s),Et(u,s)}return e?e(r):r}}var qt=function(t,e){return function(t){return"function"==typeof t}(t)?t(e):t},Qt=function(){var t=0;return function(){return(++t).toString()}}(),Vt=function(){var t;return function(){if(void 0===t&&typeof window<"u"){var e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}}(),Ut=new Map,Yt=function(t){if(!Ut.has(t)){var e=setTimeout((function(){Ut.delete(t),Xt({type:4,toastId:t})}),1e3);Ut.set(t,e)}},Gt=function t(e,n){switch(n.type){case 0:return(0,s.Z)((0,s.Z)({},e),{},{toasts:[n.toast].concat((0,d.Z)(e.toasts)).slice(0,20)});case 1:return n.toast.id&&function(t){var e=Ut.get(t);e&&clearTimeout(e)}(n.toast.id),(0,s.Z)((0,s.Z)({},e),{},{toasts:e.toasts.map((function(t){return t.id===n.toast.id?(0,s.Z)((0,s.Z)({},t),n.toast):t}))});case 2:var o=n.toast;return e.toasts.find((function(t){return t.id===o.id}))?t(e,{type:1,toast:o}):t(e,{type:0,toast:o});case 3:var r=n.toastId;return r?Yt(r):e.toasts.forEach((function(t){Yt(t.id)})),(0,s.Z)((0,s.Z)({},e),{},{toasts:e.toasts.map((function(t){return t.id===r||void 0===r?(0,s.Z)((0,s.Z)({},t),{},{visible:!1}):t}))});case 4:return void 0===n.toastId?(0,s.Z)((0,s.Z)({},e),{},{toasts:[]}):(0,s.Z)((0,s.Z)({},e),{},{toasts:e.toasts.filter((function(t){return t.id!==n.toastId}))});case 5:return(0,s.Z)((0,s.Z)({},e),{},{pausedAt:n.time});case 6:var a=n.time-(e.pausedAt||0);return(0,s.Z)((0,s.Z)({},e),{},{pausedAt:void 0,toasts:e.toasts.map((function(t){return(0,s.Z)((0,s.Z)({},t),{},{pauseDuration:t.pauseDuration+a})}))})}},Kt=[],Wt={toasts:[],pausedAt:void 0},Xt=function(t){Wt=Gt(Wt,t),Kt.forEach((function(t){t(Wt)}))},$t={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Jt=function(t){return function(e,n){var o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",n=arguments.length>2?arguments[2]:void 0;return(0,s.Z)((0,s.Z)({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},n),{},{id:(null==n?void 0:n.id)||Qt()})}(e,t,n);return Xt({type:2,toast:o}),o.id}},te=function(t,e){return Jt("blank")(t,e)};te.error=Jt("error"),te.success=Jt("success"),te.loading=Jt("loading"),te.custom=Jt("custom"),te.dismiss=function(t){Xt({type:3,toastId:t})},te.remove=function(t){return Xt({type:4,toastId:t})},te.promise=function(t,e,n){var o=te.loading(e.loading,(0,s.Z)((0,s.Z)({},n),null==n?void 0:n.loading));return t.then((function(t){return te.success(qt(e.success,t),(0,s.Z)((0,s.Z)({id:o},n),null==n?void 0:n.success)),t})).catch((function(t){te.error(qt(e.error,t),(0,s.Z)((0,s.Z)({id:o},n),null==n?void 0:n.error))})),t};var ee=function(t,e){Xt({type:1,toast:{id:t,height:e}})},ne=function(){Xt({type:5,time:Date.now()})},oe=function(t){var e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=(0,o.useState)(Wt),n=(0,c.Z)(e,2),r=n[0],a=n[1];(0,o.useEffect)((function(){return Kt.push(a),function(){var t=Kt.indexOf(a);t>-1&&Kt.splice(t,1)}}),[r]);var i=r.toasts.map((function(e){var n,o;return(0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)({},t),t[e.type]),e),{},{duration:e.duration||(null==(n=t[e.type])?void 0:n.duration)||(null==t?void 0:t.duration)||$t[e.type],style:(0,s.Z)((0,s.Z)((0,s.Z)({},t.style),null==(o=t[e.type])?void 0:o.style),e.style)})}));return(0,s.Z)((0,s.Z)({},r),{},{toasts:i})}(t),n=e.toasts,r=e.pausedAt;(0,o.useEffect)((function(){if(!r){var t=Date.now(),e=n.map((function(e){if(e.duration!==1/0){var n=(e.duration||0)+e.pauseDuration-(t-e.createdAt);if(!(n<0))return setTimeout((function(){return te.dismiss(e.id)}),n);e.visible&&te.dismiss(e.id)}}));return function(){e.forEach((function(t){return t&&clearTimeout(t)}))}}}),[n,r]);var a=(0,o.useCallback)((function(){r&&Xt({type:6,time:Date.now()})}),[r]),i=(0,o.useCallback)((function(t,e){var o,r=e||{},a=r.reverseOrder,i=void 0!==a&&a,s=r.gutter,c=void 0===s?8:s,u=r.defaultPosition,l=n.filter((function(e){return(e.position||u)===(t.position||u)&&e.height})),f=l.findIndex((function(e){return e.id===t.id})),p=l.filter((function(t,e){return e<f&&t.visible})).length;return(o=l.filter((function(t){return t.visible}))).slice.apply(o,(0,d.Z)(i?[p+1]:[0,p])).reduce((function(t,e){return t+(e.height||0)+c}),0)}),[n]);return{toasts:n,handlers:{updateHeight:ee,startPause:ne,endPause:a,calculateOffset:i}}},re=St(Ct||(Ct=(0,$.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),ae=St(It||(It=(0,$.Z)(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),ie=St(Ot||(Ot=(0,$.Z)(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),se=Ht("div")(_t||(_t=(0,$.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(function(t){return t.primary||"#ff4b4b"}),re,ae,(function(t){return t.secondary||"#fff"}),ie),ce=St(kt||(kt=(0,$.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),ue=Ht("div")(Lt||(Lt=(0,$.Z)(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(function(t){return t.secondary||"#e0e0e0"}),(function(t){return t.primary||"#616161"}),ce),le=St(Nt||(Nt=(0,$.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),de=St(jt||(jt=(0,$.Z)(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),fe=Ht("div")(Pt||(Pt=(0,$.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(function(t){return t.primary||"#61d345"}),le,de,(function(t){return t.secondary||"#fff"})),pe=Ht("div")(Rt||(Rt=(0,$.Z)(["\n  position: absolute;\n"]))),me=Ht("div")(Mt||(Mt=(0,$.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),ve=St(Dt||(Dt=(0,$.Z)(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),he=Ht("div")(At||(At=(0,$.Z)(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),ve),ge=function(t){var e=t.toast,n=e.icon,r=e.type,a=e.iconTheme;return void 0!==n?"string"==typeof n?o.createElement(he,null,n):n:"blank"===r?null:o.createElement(me,null,o.createElement(ue,(0,s.Z)({},a)),"loading"!==r&&o.createElement(pe,null,"error"===r?o.createElement(se,(0,s.Z)({},a)):o.createElement(fe,(0,s.Z)({},a))))},ye=function(t){return"\n0% {transform: translate3d(0,".concat(-200*t,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n")},be=function(t){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*t,"%,-1px) scale(.6); opacity:0;}\n")},Ze=Ht("div")(zt||(zt=(0,$.Z)(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),xe=Ht("div")(Bt||(Bt=(0,$.Z)(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]))),Ee=o.memo((function(t){var e=t.toast,n=t.position,r=t.style,a=t.children,i=e.height?function(t,e){var n=t.includes("top")?1:-1,o=Vt()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ye(n),be(n)],r=(0,c.Z)(o,2),a=r[0],i=r[1];return{animation:e?"".concat(St(a)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(St(i)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}}(e.position||n||"top-center",e.visible):{opacity:0},u=o.createElement(ge,{toast:e}),l=o.createElement(xe,(0,s.Z)({},e.ariaProps),qt(e.message,e));return o.createElement(Ze,{className:e.className,style:(0,s.Z)((0,s.Z)((0,s.Z)({},i),r),e.style)},"function"==typeof a?a({icon:u,message:l}):o.createElement(o.Fragment,null,u,l))}));!function(t,e,n,o){ht.p=e,Et=t,Tt=n,wt=o}(o.createElement);var Te=function(t){var e=t.id,n=t.className,r=t.style,a=t.onHeightUpdate,i=t.children,s=o.useCallback((function(t){if(t){var n=function(){var n=t.getBoundingClientRect().height;a(e,n)};n(),new MutationObserver(n).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[e,a]);return o.createElement("div",{ref:s,className:n,style:r},i)},we=xt(Ft||(Ft=(0,$.Z)(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]))),Ce=function(t){var e=t.reverseOrder,n=t.position,r=void 0===n?"top-center":n,a=t.toastOptions,i=t.gutter,c=t.children,u=t.containerStyle,l=t.containerClassName,d=oe(a),f=d.toasts,p=d.handlers;return o.createElement("div",{style:(0,s.Z)({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},u),className:l,onMouseEnter:p.startPause,onMouseLeave:p.endPause},f.map((function(t){var n=t.position||r,a=function(t,e){var n=t.includes("top"),o=n?{top:0}:{bottom:0},r=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return(0,s.Z)((0,s.Z)({left:0,right:0,display:"flex",position:"absolute",transition:Vt()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(e*(n?1:-1),"px)")},o),r)}(n,p.calculateOffset(t,{reverseOrder:e,gutter:i,defaultPosition:r}));return o.createElement(Te,{id:t.id,key:t.id,onHeightUpdate:p.updateHeight,className:t.visible?we:"",style:a},"custom"===t.type?qt(t.message,t):c?c(t):o.createElement(Ee,{toast:t,position:n}))})))};function Ie(){var t=(0,r.I0)();return(0,o.useEffect)((function(){t((0,u.yF)())}),[t]),(0,it.jsxs)(it.Fragment,{children:[(0,it.jsx)(a.q,{children:(0,it.jsx)("title",{children:"Your contacts"})}),(0,it.jsx)("h1",{children:"Phonebook"}),(0,it.jsx)(st,{}),(0,it.jsx)("h2",{children:"Contacts"}),(0,it.jsx)(lt,{}),(0,it.jsx)(ct,{}),(0,it.jsx)(Ce,{})]})}}}]);
//# sourceMappingURL=386.1518c983.chunk.js.map