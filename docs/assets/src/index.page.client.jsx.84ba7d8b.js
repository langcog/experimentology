var Fa=Object.defineProperty,Ha=Object.defineProperties;var za=Object.getOwnPropertyDescriptors;var ze=Object.getOwnPropertySymbols;var gn=Object.prototype.hasOwnProperty,yn=Object.prototype.propertyIsEnumerable;var bn=(e,t,n)=>t in e?Fa(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,W=(e,t)=>{for(var n in t||(t={}))gn.call(t,n)&&bn(e,n,t[n]);if(ze)for(var n of ze(t))yn.call(t,n)&&bn(e,n,t[n]);return e},Ue=(e,t)=>Ha(e,za(t));var wt=(e,t)=>{var n={};for(var r in e)gn.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&ze)for(var r of ze(e))t.indexOf(r)<0&&yn.call(e,r)&&(n[r]=e[r]);return n};var Me,_,wr,xr,Ee,Cr,kn,Ar,Ke={},Er=[],Ua=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function K(e,t){for(var n in t)e[n]=t[n];return e}function Or(e){var t=e.parentNode;t&&t.removeChild(e)}function U(e,t,n){var r,a,i,o={};for(i in t)i=="key"?r=t[i]:i=="ref"?a=t[i]:o[i]=t[i];if(arguments.length>2&&(o.children=arguments.length>3?Me.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)o[i]===void 0&&(o[i]=e.defaultProps[i]);return Oe(e,o,r,a,null)}function Oe(e,t,n,r,a){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:a==null?++wr:a};return a==null&&_.vnode!=null&&_.vnode(i),i}function Sr(){return{current:null}}function V(e){return e.children}function z(e,t){this.props=e,this.context=t}function _e(e,t){if(t==null)return e.__?_e(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?_e(e):null}function Tr(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Tr(e)}}function Tt(e){(!e.__d&&(e.__d=!0)&&Ee.push(e)&&!Je.__r++||kn!==_.debounceRendering)&&((kn=_.debounceRendering)||Cr)(Je)}function Je(){for(var e;Je.__r=Ee.length;)e=Ee.sort(function(t,n){return t.__v.__b-n.__v.__b}),Ee=[],e.some(function(t){var n,r,a,i,o,s;t.__d&&(o=(i=(n=t).__v).__e,(s=n.__P)&&(r=[],(a=K({},i)).__v=i.__v+1,Zt(s,i,a,n.__n,s.ownerSVGElement!==void 0,i.__h!=null?[o]:null,r,o==null?_e(i):o,i.__h),Ir(r,i),i.__e!=o&&Tr(i)))})}function Pr(e,t,n,r,a,i,o,s,f,c){var l,d,u,m,v,k,p,b=r&&r.__k||Er,y=b.length;for(n.__k=[],l=0;l<t.length;l++)if((m=n.__k[l]=(m=t[l])==null||typeof m=="boolean"?null:typeof m=="string"||typeof m=="number"||typeof m=="bigint"?Oe(null,m,null,null,m):Array.isArray(m)?Oe(V,{children:m},null,null,null):m.__b>0?Oe(m.type,m.props,m.key,null,m.__v):m)!=null){if(m.__=n,m.__b=n.__b+1,(u=b[l])===null||u&&m.key==u.key&&m.type===u.type)b[l]=void 0;else for(d=0;d<y;d++){if((u=b[d])&&m.key==u.key&&m.type===u.type){b[d]=void 0;break}u=null}Zt(e,m,u=u||Ke,a,i,o,s,f,c),v=m.__e,(d=m.ref)&&u.ref!=d&&(p||(p=[]),u.ref&&p.push(u.ref,null,m),p.push(d,m.__c||v,m)),v!=null?(k==null&&(k=v),typeof m.type=="function"&&m.__k===u.__k?m.__d=f=Lr(m,f,e):f=Nr(e,m,u,b,v,f),typeof n.type=="function"&&(n.__d=f)):f&&u.__e==f&&f.parentNode!=e&&(f=_e(u))}for(n.__e=k,l=y;l--;)b[l]!=null&&(typeof n.type=="function"&&b[l].__e!=null&&b[l].__e==n.__d&&(n.__d=_e(r,l+1)),$r(b[l],b[l]));if(p)for(l=0;l<p.length;l++)Mr(p[l],p[++l],p[++l])}function Lr(e,t,n){for(var r,a=e.__k,i=0;a&&i<a.length;i++)(r=a[i])&&(r.__=e,t=typeof r.type=="function"?Lr(r,t,n):Nr(n,r,r,a,r.__e,t));return t}function B(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){B(n,t)}):t.push(e)),t}function Nr(e,t,n,r,a,i){var o,s,f;if(t.__d!==void 0)o=t.__d,t.__d=void 0;else if(n==null||a!=i||a.parentNode==null)e:if(i==null||i.parentNode!==e)e.appendChild(a),o=null;else{for(s=i,f=0;(s=s.nextSibling)&&f<r.length;f+=2)if(s==a)break e;e.insertBefore(a,i),o=i}return o!==void 0?o:a.nextSibling}function Wa(e,t,n,r,a){var i;for(i in n)i==="children"||i==="key"||i in t||Ze(e,i,null,n[i],r);for(i in t)a&&typeof t[i]!="function"||i==="children"||i==="key"||i==="value"||i==="checked"||n[i]===t[i]||Ze(e,i,t[i],n[i],r)}function wn(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Ua.test(t)?n:n+"px"}function Ze(e,t,n,r,a){var i;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||wn(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||wn(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?Cn:xn,i):e.removeEventListener(t,i?Cn:xn,i);else if(t!=="dangerouslySetInnerHTML"){if(a)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n==null?"":n;break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function xn(e){this.l[e.type+!1](_.event?_.event(e):e)}function Cn(e){this.l[e.type+!0](_.event?_.event(e):e)}function Zt(e,t,n,r,a,i,o,s,f){var c,l,d,u,m,v,k,p,b,y,x,E=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(f=n.__h,s=t.__e=n.__e,t.__h=null,i=[s]),(c=_.__b)&&c(t);try{e:if(typeof E=="function"){if(p=t.props,b=(c=E.contextType)&&r[c.__c],y=c?b?b.props.value:c.__:r,n.__c?k=(l=t.__c=n.__c).__=l.__E:("prototype"in E&&E.prototype.render?t.__c=l=new E(p,y):(t.__c=l=new z(p,y),l.constructor=E,l.render=Ya),b&&b.sub(l),l.props=p,l.state||(l.state={}),l.context=y,l.__n=r,d=l.__d=!0,l.__h=[]),l.__s==null&&(l.__s=l.state),E.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=K({},l.__s)),K(l.__s,E.getDerivedStateFromProps(p,l.__s))),u=l.props,m=l.state,d)E.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(E.getDerivedStateFromProps==null&&p!==u&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(p,y),!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(p,l.__s,y)===!1||t.__v===n.__v){l.props=p,l.state=l.__s,t.__v!==n.__v&&(l.__d=!1),l.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(C){C&&(C.__=t)}),l.__h.length&&o.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(p,l.__s,y),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(u,m,v)})}l.context=y,l.props=p,l.state=l.__s,(c=_.__r)&&c(t),l.__d=!1,l.__v=t,l.__P=e,c=l.render(l.props,l.state,l.context),l.state=l.__s,l.getChildContext!=null&&(r=K(K({},r),l.getChildContext())),d||l.getSnapshotBeforeUpdate==null||(v=l.getSnapshotBeforeUpdate(u,m)),x=c!=null&&c.type===V&&c.key==null?c.props.children:c,Pr(e,Array.isArray(x)?x:[x],t,n,r,a,i,o,s,f),l.base=t.__e,t.__h=null,l.__h.length&&o.push(l),k&&(l.__E=l.__=null),l.__e=!1}else i==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=ja(n.__e,t,n,r,a,i,o,f);(c=_.diffed)&&c(t)}catch(C){t.__v=null,(f||i!=null)&&(t.__e=s,t.__h=!!f,i[i.indexOf(s)]=null),_.__e(C,t,n)}}function Ir(e,t){_.__c&&_.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){_.__e(r,n.__v)}})}function ja(e,t,n,r,a,i,o,s){var f,c,l,d=n.props,u=t.props,m=t.type,v=0;if(m==="svg"&&(a=!0),i!=null){for(;v<i.length;v++)if((f=i[v])&&"setAttribute"in f==!!m&&(m?f.localName===m:f.nodeType===3)){e=f,i[v]=null;break}}if(e==null){if(m===null)return document.createTextNode(u);e=a?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,u.is&&u),i=null,s=!1}if(m===null)d===u||s&&e.data===u||(e.data=u);else{if(i=i&&Me.call(e.childNodes),c=(d=n.props||Ke).dangerouslySetInnerHTML,l=u.dangerouslySetInnerHTML,!s){if(i!=null)for(d={},v=0;v<e.attributes.length;v++)d[e.attributes[v].name]=e.attributes[v].value;(l||c)&&(l&&(c&&l.__html==c.__html||l.__html===e.innerHTML)||(e.innerHTML=l&&l.__html||""))}if(Wa(e,u,d,a,s),l)t.__k=[];else if(v=t.props.children,Pr(e,Array.isArray(v)?v:[v],t,n,r,a&&m!=="foreignObject",i,o,i?i[0]:n.__k&&_e(n,0),s),i!=null)for(v=i.length;v--;)i[v]!=null&&Or(i[v]);s||("value"in u&&(v=u.value)!==void 0&&(v!==e.value||m==="progress"&&!v||m==="option"&&v!==d.value)&&Ze(e,"value",v,d.value,!1),"checked"in u&&(v=u.checked)!==void 0&&v!==e.checked&&Ze(e,"checked",v,d.checked,!1))}return e}function Mr(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){_.__e(r,n)}}function $r(e,t,n){var r,a;if(_.unmount&&_.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Mr(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){_.__e(i,t)}r.base=r.__P=null}if(r=e.__k)for(a=0;a<r.length;a++)r[a]&&$r(r[a],t,typeof e.type!="function");n||e.__e==null||Or(e.__e),e.__e=e.__d=void 0}function Ya(e,t,n){return this.constructor(e,n)}function be(e,t,n){var r,a,i;_.__&&_.__(e,t),a=(r=typeof n=="function")?null:n&&n.__k||t.__k,i=[],Zt(t,e=(!r&&n||t).__k=U(V,null,[e]),a||Ke,Ke,t.ownerSVGElement!==void 0,!r&&n?[n]:a?null:t.firstChild?Me.call(t.childNodes):null,i,!r&&n?n:a?a.__e:t.firstChild,r),Ir(i,e)}function it(e,t){be(e,t,it)}function Rr(e,t,n){var r,a,i,o=K({},e.props);for(i in t)i=="key"?r=t[i]:i=="ref"?a=t[i]:o[i]=t[i];return arguments.length>2&&(o.children=arguments.length>3?Me.call(arguments,2):n),Oe(e.type,o,r||e.key,a||e.ref,null)}function Dr(e,t){var n={__c:t="__cC"+Ar++,__:e,Consumer:function(r,a){return r.children(a)},Provider:function(r){var a,i;return this.getChildContext||(a=[],(i={})[t]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(o){this.props.value!==o.value&&a.some(Tt)},this.sub=function(o){a.push(o);var s=o.componentWillUnmount;o.componentWillUnmount=function(){a.splice(a.indexOf(o),1),s&&s.call(o)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}Me=Er.slice,_={__e:function(e,t,n,r){for(var a,i,o;t=t.__;)if((a=t.__c)&&!a.__)try{if((i=a.constructor)&&i.getDerivedStateFromError!=null&&(a.setState(i.getDerivedStateFromError(e)),o=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,r||{}),o=a.__d),o)return a.__E=a}catch(s){e=s}throw e}},wr=0,xr=function(e){return e!=null&&e.constructor===void 0},z.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=K({},this.state),typeof e=="function"&&(e=e(K({},n),this.props)),e&&K(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),Tt(this))},z.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Tt(this))},z.prototype.render=V,Ee=[],Cr=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Je.__r=0,Ar=0;var Ba=Object.freeze(Object.defineProperty({__proto__:null,render:be,hydrate:it,createElement:U,h:U,Fragment:V,createRef:Sr,get isValidElement(){return xr},Component:z,cloneElement:Rr,createContext:Dr,toChildArray:B,get options(){return _}},Symbol.toStringTag,{value:"Module"}));const Va="_toc_1lnsy_1",Ga="_part_1lnsy_16",qa="_dropdown_1lnsy_16",Xa="_book_title_1lnsy_24",Ka="_part_title_1lnsy_24",Ja="_part_title_rest_1lnsy_32",Za="_chapter_title_1lnsy_32",Qa="_part_title_first_1lnsy_59";const ei="Experimentology",ti="An Open Science Approach to Experimental Psychology Methods",ni=[{first:"Preliminaries",rest:"",chapters:[{title:"Experiments",href:"1-experiments"},{title:"Theories",href:"2-theories"},{title:"Replication and reproducibility",href:"3-replication"},{title:"Ethics",href:"4-ethics"}]},{first:"Statistics",rest:"",chapters:[{title:"Estimation",href:"5-estimation"},{title:"Inference",href:"6-inference"},{title:"Models",href:"7-models"}]},{first:"Design",rest:" and Planning",chapters:[{title:"Measurement",href:"8-measurement"},{title:"Design of experiments",href:"9-design"},{title:"Sampling",href:"10-sampling"},{title:"Experimental strategy",href:"11-strategy"}]},{first:"Execution",rest:"",chapters:[{title:"Preregistration",href:"12-prereg"},{title:"Recruitment and Consent",href:"13-consent"},{title:"Data collection",href:"14-collection"},{title:"Project management",href:"15-management"}]},{first:"Analysis",rest:" and Reporting",chapters:[{title:"Visualization",href:"16-viz"},{title:"Exploratory data analysis",href:"17-eda"},{title:"Writing",href:"18-writing"},{title:"Meta-analysis",href:"19-meta"},{title:"Conclusions",href:"20-conclusions"}]},{first:"Appendices",rest:"",chapters:[{title:"GitHub Tutorial",href:"A-git"},{title:"R Markdown Tutorial",href:"B-rmarkdown"},{title:"Tidyverse Tutorial",href:"C-tidyverse"},{title:"ggplot Tutorial",href:"D-ggplot"},{title:"Instructor\u2019s guide",href:"E-instructors"}]}];var ye,$,An,ge=0,Fr=[],En=_.__b,On=_.__r,Sn=_.diffed,Tn=_.__c,Pn=_.unmount;function $e(e,t){_.__h&&_.__h($,e,ge||t),ge=0;var n=$.__H||($.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function Hr(e){return ge=1,zr(Wr,e)}function zr(e,t,n){var r=$e(ye++,2);return r.t=e,r.__c||(r.__=[n?n(t):Wr(void 0,t),function(a){var i=r.t(r.__[0],a);r.__[0]!==i&&(r.__=[i,r.__[1]],r.__c.setState({}))}],r.__c=$),r.__}function Qt(e,t){var n=$e(ye++,3);!_.__s&&tn(n.__H,t)&&(n.__=e,n.__H=t,$.__H.__h.push(n))}function Ur(e,t){var n=$e(ye++,4);!_.__s&&tn(n.__H,t)&&(n.__=e,n.__H=t,$.__h.push(n))}function Pe(e){return ge=5,en(function(){return{current:e}},[])}function ri(e,t,n){ge=6,Ur(function(){return typeof e=="function"?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0},n==null?n:n.concat(e))}function en(e,t){var n=$e(ye++,7);return tn(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function ai(e,t){return ge=8,en(function(){return e},t)}function ii(e){var t=$.context[e.__c],n=$e(ye++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub($)),t.props.value):e.__}function oi(e,t){_.useDebugValue&&_.useDebugValue(t?t(e):e)}function si(){for(var e;e=Fr.shift();)if(e.__P)try{e.__H.__h.forEach(Be),e.__H.__h.forEach(Pt),e.__H.__h=[]}catch(t){e.__H.__h=[],_.__e(t,e.__v)}}_.__b=function(e){$=null,En&&En(e)},_.__r=function(e){On&&On(e),ye=0;var t=($=e.__c).__H;t&&(t.__h.forEach(Be),t.__h.forEach(Pt),t.__h=[])},_.diffed=function(e){Sn&&Sn(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(Fr.push(t)!==1&&An===_.requestAnimationFrame||((An=_.requestAnimationFrame)||function(n){var r,a=function(){clearTimeout(i),Ln&&cancelAnimationFrame(r),setTimeout(n)},i=setTimeout(a,100);Ln&&(r=requestAnimationFrame(a))})(si)),$=null},_.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Be),n.__h=n.__h.filter(function(r){return!r.__||Pt(r)})}catch(r){t.some(function(a){a.__h&&(a.__h=[])}),t=[],_.__e(r,n.__v)}}),Tn&&Tn(e,t)},_.unmount=function(e){Pn&&Pn(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{Be(r)}catch(a){t=a}}),t&&_.__e(t,n.__v))};var Ln=typeof requestAnimationFrame=="function";function Be(e){var t=$,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),$=t}function Pt(e){var t=$;e.__c=e.__(),$=t}function tn(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Wr(e,t){return typeof t=="function"?t(e):t}function li(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}),t}var fi=li(Ba),jr,Yr,Br,Lt=fi,ci=0;function Nn(e,t,n,r,a){var i,o,s={};for(o in t)o=="ref"?i=t[o]:s[o]=t[o];var f={type:e,props:s,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--ci,__source:a,__self:r};if(typeof e=="function"&&(i=e.defaultProps))for(o in i)s[o]===void 0&&(s[o]=i[o]);return Lt.options.vnode&&Lt.options.vnode(f),f}Br=Lt.Fragment,Yr=Nn,jr=Nn;const M=Yr,Le=jr,ui=Br,di=()=>Le("header",{class:Va,id:"toc",children:[M("a",{class:Xa,href:"/",children:`${ei}: ${ti}`}),M("nav",{children:ni.map(e=>M(mi,W({},e)))})]}),mi=({first:e,rest:t,chapters:n})=>{const[r,a]=Hr(!0),i=Pe(),o=Pe(),s=o.current,f={width:0};return Qt(()=>{const{width:c}=i.current.getBoundingClientRect();o.current={width:c},a(!1)},[]),Le("div",{class:Ga,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[Le("div",{class:Ka,children:[M("div",{class:Qa,children:e}),M("div",{class:Ja,ref:i,style:r?s:f,children:t})]}),M("div",{class:qa,children:n.map(c=>M(pi,W({hover:r},c)))})]})},pi=({title:e,href:t,hover:n})=>{const r=Pe(),a=Pe(),i=a.current,o={width:0,height:0};return Qt(()=>{const{width:s,height:f}=r.current.getBoundingClientRect();a.current={width:s,height:f}},[]),M("a",{class:Za,ref:r,href:t,style:n?i:o,children:e})};/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function In(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?In(Object(n),!0).forEach(function(r){_i(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):In(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Qe(e){return Qe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Qe(e)}function vi(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Mn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function hi(e,t,n){return t&&Mn(e.prototype,t),n&&Mn(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function nn(e,t){return gi(e)||ki(e,t)||Vr(e,t)||xi()}function ot(e){return bi(e)||yi(e)||Vr(e)||wi()}function bi(e){if(Array.isArray(e))return Nt(e)}function gi(e){if(Array.isArray(e))return e}function yi(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ki(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(f){i=!0,s=f}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Vr(e,t){if(!!e){if(typeof e=="string")return Nt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Nt(e,t)}}function Nt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function wi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xi(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var $n=function(){},rn={},Gr={},qr=null,Xr={mark:$n,measure:$n};try{typeof window!="undefined"&&(rn=window),typeof document!="undefined"&&(Gr=document),typeof MutationObserver!="undefined"&&(qr=MutationObserver),typeof performance!="undefined"&&(Xr=performance)}catch{}var Ci=rn.navigator||{},Rn=Ci.userAgent,Dn=Rn===void 0?"":Rn,ie=rn,T=Gr,Fn=qr,We=Xr;ie.document;var te=!!T.documentElement&&!!T.head&&typeof T.addEventListener=="function"&&typeof T.createElement=="function",Kr=~Dn.indexOf("MSIE")||~Dn.indexOf("Trident/"),Z="___FONT_AWESOME___",It=16,Jr="fa",Zr="svg-inline--fa",fe="data-fa-i2svg",Mt="data-fa-pseudo-element",Ai="data-fa-pseudo-element-pending",an="data-prefix",on="data-icon",Hn="fontawesome-i2svg",Ei="async",Oi=["HTML","HEAD","STYLE","SCRIPT"],Qr=function(){try{return!0}catch{return!1}}(),sn={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},et={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},ea={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Si={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Ti=/fa[srltdbk\-\ ]/,ta="fa-layers-text",Pi=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Li={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},na=[1,2,3,4,5,6,7,8,9,10],Ni=na.concat([11,12,13,14,15,16,17,18,19,20]),Ii=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],le={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Mi=[].concat(ot(Object.keys(et)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",le.GROUP,le.SWAP_OPACITY,le.PRIMARY,le.SECONDARY]).concat(na.map(function(e){return"".concat(e,"x")})).concat(Ni.map(function(e){return"w-".concat(e)})),ra=ie.FontAwesomeConfig||{};function $i(e){var t=T.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ri(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(T&&typeof T.querySelector=="function"){var Di=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Di.forEach(function(e){var t=nn(e,2),n=t[0],r=t[1],a=Ri($i(n));a!=null&&(ra[r]=a)})}var Fi={familyPrefix:Jr,styleDefault:"solid",replacementClass:Zr,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Se=h(h({},Fi),ra);Se.autoReplaceSvg||(Se.observeMutations=!1);var g={};Object.keys(Se).forEach(function(e){Object.defineProperty(g,e,{enumerable:!0,set:function(n){Se[e]=n,Ve.forEach(function(r){return r(g)})},get:function(){return Se[e]}})});ie.FontAwesomeConfig=g;var Ve=[];function Hi(e){return Ve.push(e),function(){Ve.splice(Ve.indexOf(e),1)}}var re=It,j={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function zi(e){if(!(!e||!te)){var t=T.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=T.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return T.head.insertBefore(t,r),e}}var Ui="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ne(){for(var e=12,t="";e-- >0;)t+=Ui[Math.random()*62|0];return t}function ke(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ln(e){return e.classList?ke(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function aa(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Wi(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(aa(e[n]),'" ')},"").trim()}function st(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function fn(e){return e.size!==j.size||e.x!==j.x||e.y!==j.y||e.rotate!==j.rotate||e.flipX||e.flipY}function ji(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:f,path:c}}function Yi(e){var t=e.transform,n=e.width,r=n===void 0?It:n,a=e.height,i=a===void 0?It:a,o=e.startCentered,s=o===void 0?!1:o,f="";return s&&Kr?f+="translate(".concat(t.x/re-r/2,"em, ").concat(t.y/re-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(t.x/re,"em), calc(-50% + ").concat(t.y/re,"em)) "):f+="translate(".concat(t.x/re,"em, ").concat(t.y/re,"em) "),f+="scale(".concat(t.size/re*(t.flipX?-1:1),", ").concat(t.size/re*(t.flipY?-1:1),") "),f+="rotate(".concat(t.rotate,"deg) "),f}var Bi=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ia(){var e=Jr,t=Zr,n=g.familyPrefix,r=g.replacementClass,a=Bi;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var zn=!1;function xt(){g.autoAddCss&&!zn&&(zi(ia()),zn=!0)}var Vi={mixout:function(){return{dom:{css:ia,insertCss:xt}}},hooks:function(){return{beforeDOMElementCreation:function(){xt()},beforeI2svg:function(){xt()}}}},Q=ie||{};Q[Z]||(Q[Z]={});Q[Z].styles||(Q[Z].styles={});Q[Z].hooks||(Q[Z].hooks={});Q[Z].shims||(Q[Z].shims=[]);var H=Q[Z],oa=[],Gi=function e(){T.removeEventListener("DOMContentLoaded",e),tt=1,oa.map(function(t){return t()})},tt=!1;te&&(tt=(T.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(T.readyState),tt||T.addEventListener("DOMContentLoaded",Gi));function qi(e){!te||(tt?setTimeout(e,0):oa.push(e))}function Re(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?aa(e):"<".concat(t," ").concat(Wi(r),">").concat(i.map(Re).join(""),"</").concat(t,">")}function Un(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Xi=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Ct=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Xi(n,a):n,f,c,l;for(r===void 0?(f=1,l=t[i[0]]):(f=0,l=r);f<o;f++)c=i[f],l=s(l,t[c],c,t);return l};function Ki(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function $t(e){var t=Ki(e);return t.length===1?t[0].toString(16):null}function Ji(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Wn(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Rt(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Wn(t);typeof H.hooks.addPack=="function"&&!a?H.hooks.addPack(e,Wn(t)):H.styles[e]=h(h({},H.styles[e]||{}),i),e==="fas"&&Rt("fa",t)}var Te=H.styles,Zi=H.shims,Qi=Object.values(ea),cn=null,sa={},la={},fa={},ca={},ua={},eo=Object.keys(sn);function to(e){return~Mi.indexOf(e)}function no(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!to(a)?a:null}var da=function(){var t=function(i){return Ct(Te,function(o,s,f){return o[f]=Ct(s,i,{}),o},{})};sa=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){a[f.toString(16)]=o})}return a}),la=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){a[f]=o})}return a}),ua=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(f){a[f]=o}),a});var n="far"in Te||g.autoFetchSvg,r=Ct(Zi,function(a,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:f}),a},{names:{},unicodes:{}});fa=r.names,ca=r.unicodes,cn=lt(g.styleDefault)};Hi(function(e){cn=lt(e.styleDefault)});da();function un(e,t){return(sa[e]||{})[t]}function ro(e,t){return(la[e]||{})[t]}function me(e,t){return(ua[e]||{})[t]}function ma(e){return fa[e]||{prefix:null,iconName:null}}function ao(e){var t=ca[e],n=un("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function oe(){return cn}var dn=function(){return{prefix:null,iconName:null,rest:[]}};function lt(e){var t=sn[e],n=et[e]||et[t],r=e in H.styles?e:null;return n||r||null}function ft(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var f=no(g.familyPrefix,s);if(Te[s]?(s=Qi.includes(s)?Si[s]:s,a=s,o.prefix=s):eo.indexOf(s)>-1?(a=s,o.prefix=lt(s)):f?o.iconName=f:s!==g.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var c=a==="fa"?ma(o.iconName):{},l=me(o.prefix,o.iconName);c.prefix&&(a=null),o.iconName=c.iconName||l||o.iconName,o.prefix=c.prefix||o.prefix,o.prefix==="far"&&!Te.far&&Te.fas&&!g.autoFetchSvg&&(o.prefix="fas")}return o},dn());return(i.prefix==="fa"||a==="fa")&&(i.prefix=oe()||"fas"),i}var io=function(){function e(){vi(this,e),this.definitions={}}return hi(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=h(h({},n.definitions[s]||{}),o[s]),Rt(s,o[s]);var f=ea[s];f&&Rt(f,o[s]),da()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,f=o.iconName,c=o.icon,l=c[2];n[s]||(n[s]={}),l.length>0&&l.forEach(function(d){typeof d=="string"&&(n[s][d]=c)}),n[s][f]=c}),n}}]),e}(),jn=[],pe={},he={},oo=Object.keys(he);function so(e,t){var n=t.mixoutsTo;return jn=e,pe={},Object.keys(he).forEach(function(r){oo.indexOf(r)===-1&&delete he[r]}),jn.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Qe(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){pe[o]||(pe[o]=[]),pe[o].push(i[o])})}r.provides&&r.provides(he)}),n}function Dt(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=pe[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ce(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=pe[e]||[];a.forEach(function(i){i.apply(null,n)})}function ee(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return he[e]?he[e].apply(null,t):void 0}function Ft(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||oe();if(!!t)return t=me(n,t)||t,Un(pa.definitions,n,t)||Un(H.styles,n,t)}var pa=new io,lo=function(){g.autoReplaceSvg=!1,g.observeMutations=!1,ce("noAuto")},fo={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return te?(ce("beforeI2svg",t),ee("pseudoElements2svg",t),ee("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;g.autoReplaceSvg===!1&&(g.autoReplaceSvg=!0),g.observeMutations=!0,qi(function(){uo({autoReplaceSvgRoot:n}),ce("watch",t)})}},co={icon:function(t){if(t===null)return null;if(Qe(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:me(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=lt(t[0]);return{prefix:r,iconName:me(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(g.familyPrefix,"-"))>-1||t.match(Ti))){var a=ft(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||oe(),iconName:me(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=oe();return{prefix:i,iconName:me(i,t)||t}}}},R={noAuto:lo,config:g,dom:fo,parse:co,library:pa,findIconDefinition:Ft,toHtml:Re},uo=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?T:n;(Object.keys(H.styles).length>0||g.autoFetchSvg)&&te&&g.autoReplaceSvg&&R.dom.i2svg({node:r})};function ct(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Re(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!te){var r=T.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function mo(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(fn(o)&&n.found&&!r.found){var s=n.width,f=n.height,c={x:s/f/2,y:.5};a.style=st(h(h({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function po(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(g.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:h(h({},a),{},{id:o}),children:r}]}]}function mn(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,f=e.title,c=e.maskId,l=e.titleId,d=e.extra,u=e.watchable,m=u===void 0?!1:u,v=r.found?r:n,k=v.width,p=v.height,b=a==="fak",y=[g.replacementClass,i?"".concat(g.familyPrefix,"-").concat(i):""].filter(function(F){return d.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(d.classes).join(" "),x={children:[],attributes:h(h({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:y,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(k," ").concat(p)})},E=b&&!~d.classes.indexOf("fa-fw")?{width:"".concat(k/p*16*.0625,"em")}:{};m&&(x.attributes[fe]=""),f&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(l||Ne())},children:[f]}),delete x.attributes.title);var C=h(h({},x),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:h(h({},E),d.styles)}),P=r.found&&n.found?ee("generateAbstractMask",C)||{children:[],attributes:{}}:ee("generateAbstractIcon",C)||{children:[],attributes:{}},D=P.children,G=P.attributes;return C.children=D,C.attributes=G,s?po(C):mo(C)}function Yn(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,f=s===void 0?!1:s,c=h(h(h({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(c[fe]="");var l=h({},o.styles);fn(a)&&(l.transform=Yi({transform:a,startCentered:!0,width:n,height:r}),l["-webkit-transform"]=l.transform);var d=st(l);d.length>0&&(c.style=d);var u=[];return u.push({tag:"span",attributes:c,children:[t]}),i&&u.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),u}function vo(e){var t=e.content,n=e.title,r=e.extra,a=h(h(h({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=st(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var At=H.styles;function Ht(e){var t=e[0],n=e[1],r=e.slice(4),a=nn(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(g.familyPrefix,"-").concat(le.GROUP)},children:[{tag:"path",attributes:{class:"".concat(g.familyPrefix,"-").concat(le.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(g.familyPrefix,"-").concat(le.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var ho={found:!1,width:512,height:512};function _o(e,t){!Qr&&!g.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function zt(e,t){var n=t;return t==="fa"&&g.styleDefault!==null&&(t=oe()),new Promise(function(r,a){if(ee("missingIconAbstract"),n==="fa"){var i=ma(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&At[t]&&At[t][e]){var o=At[t][e];return r(Ht(o))}_o(e,t),r(h(h({},ho),{},{icon:g.showMissingIcons&&e?ee("missingIconAbstract")||{}:{}}))})}var Bn=function(){},Ut=g.measurePerformance&&We&&We.mark&&We.measure?We:{mark:Bn,measure:Bn},we='FA "6.1.1"',bo=function(t){return Ut.mark("".concat(we," ").concat(t," begins")),function(){return va(t)}},va=function(t){Ut.mark("".concat(we," ").concat(t," ends")),Ut.measure("".concat(we," ").concat(t),"".concat(we," ").concat(t," begins"),"".concat(we," ").concat(t," ends"))},pn={begin:bo,end:va},Ge=function(){};function Vn(e){var t=e.getAttribute?e.getAttribute(fe):null;return typeof t=="string"}function go(e){var t=e.getAttribute?e.getAttribute(an):null,n=e.getAttribute?e.getAttribute(on):null;return t&&n}function yo(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(g.replacementClass)}function ko(){if(g.autoReplaceSvg===!0)return qe.replace;var e=qe[g.autoReplaceSvg];return e||qe.replace}function wo(e){return T.createElementNS("http://www.w3.org/2000/svg",e)}function xo(e){return T.createElement(e)}function ha(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?wo:xo:n;if(typeof e=="string")return T.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(ha(o,{ceFn:r}))}),a}function Co(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var qe={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(ha(a),n)}),n.getAttribute(fe)===null&&g.keepOriginalSource){var r=T.createComment(Co(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ln(n).indexOf(g.replacementClass))return qe.replace(t);var a=new RegExp("".concat(g.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,f){return f===g.replacementClass||f.match(a)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Re(s)}).join(`
`);n.setAttribute(fe,""),n.innerHTML=o}};function Gn(e){e()}function _a(e,t){var n=typeof t=="function"?t:Ge;if(e.length===0)n();else{var r=Gn;g.mutateApproach===Ei&&(r=ie.requestAnimationFrame||Gn),r(function(){var a=ko(),i=pn.begin("mutate");e.map(a),i(),n()})}}var vn=!1;function ba(){vn=!0}function Wt(){vn=!1}var nt=null;function qn(e){if(!!Fn&&!!g.observeMutations){var t=e.treeCallback,n=t===void 0?Ge:t,r=e.nodeCallback,a=r===void 0?Ge:r,i=e.pseudoElementsCallback,o=i===void 0?Ge:i,s=e.observeMutationsRoot,f=s===void 0?T:s;nt=new Fn(function(c){if(!vn){var l=oe();ke(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Vn(d.addedNodes[0])&&(g.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&g.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Vn(d.target)&&~Ii.indexOf(d.attributeName))if(d.attributeName==="class"&&go(d.target)){var u=ft(ln(d.target)),m=u.prefix,v=u.iconName;d.target.setAttribute(an,m||l),v&&d.target.setAttribute(on,v)}else yo(d.target)&&a(d.target)})}}),te&&nt.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ao(){!nt||nt.disconnect()}function Eo(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Oo(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=ft(ln(e));return a.prefix||(a.prefix=oe()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||a.prefix&&r.length>0&&(a.iconName=ro(a.prefix,e.innerText)||un(a.prefix,$t(e.innerText))),a}function So(e){var t=ke(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return g.autoA11y&&(n?t["aria-labelledby"]="".concat(g.replacementClass,"-title-").concat(r||Ne()):(t["aria-hidden"]="true",t.focusable="false")),t}function To(){return{iconName:null,title:null,titleId:null,prefix:null,transform:j,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Xn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Oo(e),r=n.iconName,a=n.prefix,i=n.rest,o=So(e),s=Dt("parseNodeAttributes",{},e),f=t.styleParser?Eo(e):[];return h({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:j,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var Po=H.styles;function ga(e){var t=g.autoReplaceSvg==="nest"?Xn(e,{styleParser:!1}):Xn(e);return~t.extra.classes.indexOf(ta)?ee("generateLayersText",e,t):ee("generateSvgReplacementMutation",e,t)}function Kn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!te)return Promise.resolve();var n=T.documentElement.classList,r=function(d){return n.add("".concat(Hn,"-").concat(d))},a=function(d){return n.remove("".concat(Hn,"-").concat(d))},i=g.autoFetchSvg?Object.keys(sn):Object.keys(Po),o=[".".concat(ta,":not([").concat(fe,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(fe,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=ke(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var f=pn.begin("onTree"),c=s.reduce(function(l,d){try{var u=ga(d);u&&l.push(u)}catch(m){Qr||m.name==="MissingIcon"&&console.error(m)}return l},[]);return new Promise(function(l,d){Promise.all(c).then(function(u){_a(u,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),f(),l()})}).catch(function(u){f(),d(u)})})}function Lo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ga(e).then(function(n){n&&_a([n],t)})}function No(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Ft(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Ft(a||{})),e(r,h(h({},n),{},{mask:a}))}}var Io=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?j:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,f=s===void 0?null:s,c=n.maskId,l=c===void 0?null:c,d=n.title,u=d===void 0?null:d,m=n.titleId,v=m===void 0?null:m,k=n.classes,p=k===void 0?[]:k,b=n.attributes,y=b===void 0?{}:b,x=n.styles,E=x===void 0?{}:x;if(!!t){var C=t.prefix,P=t.iconName,D=t.icon;return ct(h({type:"icon"},t),function(){return ce("beforeDOMElementCreation",{iconDefinition:t,params:n}),g.autoA11y&&(u?y["aria-labelledby"]="".concat(g.replacementClass,"-title-").concat(v||Ne()):(y["aria-hidden"]="true",y.focusable="false")),mn({icons:{main:Ht(D),mask:f?Ht(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:P,transform:h(h({},j),a),symbol:o,title:u,maskId:l,titleId:v,extra:{attributes:y,styles:E,classes:p}})})}},Mo={mixout:function(){return{icon:No(Io)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Kn,n.nodeCallback=Lo,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?T:r,i=n.callback,o=i===void 0?function(){}:i;return Kn(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,f=r.transform,c=r.symbol,l=r.mask,d=r.maskId,u=r.extra;return new Promise(function(m,v){Promise.all([zt(a,s),l.iconName?zt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(k){var p=nn(k,2),b=p[0],y=p[1];m([n,mn({icons:{main:b,mask:y},prefix:s,iconName:a,transform:f,symbol:c,maskId:d,title:i,titleId:o,extra:u,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,f=st(s);f.length>0&&(a.style=f);var c;return fn(o)&&(c=ee("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},$o={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return ct({type:"layer"},function(){ce("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(g.familyPrefix,"-layers")].concat(ot(i)).join(" ")},children:o}]})}}}},Ro={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,f=r.attributes,c=f===void 0?{}:f,l=r.styles,d=l===void 0?{}:l;return ct({type:"counter",content:n},function(){return ce("beforeDOMElementCreation",{content:n,params:r}),vo({content:n.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat(g.familyPrefix,"-layers-counter")].concat(ot(s))}})})}}}},Do={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?j:a,o=r.title,s=o===void 0?null:o,f=r.classes,c=f===void 0?[]:f,l=r.attributes,d=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return ct({type:"text",content:n},function(){return ce("beforeDOMElementCreation",{content:n,params:r}),Yn({content:n,transform:h(h({},j),i),title:s,extra:{attributes:d,styles:m,classes:["".concat(g.familyPrefix,"-layers-text")].concat(ot(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,f=null;if(Kr){var c=parseInt(getComputedStyle(n).fontSize,10),l=n.getBoundingClientRect();s=l.width/c,f=l.height/c}return g.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Yn({content:n.innerHTML,width:s,height:f,transform:i,title:a,extra:o,watchable:!0})])}}},Fo=new RegExp('"',"ug"),Jn=[1105920,1112319];function Ho(e){var t=e.replace(Fo,""),n=Ji(t,0),r=n>=Jn[0]&&n<=Jn[1],a=t.length===2?t[0]===t[1]:!1;return{value:$t(a?t[0]:t),isSecondary:r||a}}function Zn(e,t){var n="".concat(Ai).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=ke(e.children),o=i.filter(function(P){return P.getAttribute(Mt)===t})[0],s=ie.getComputedStyle(e,t),f=s.getPropertyValue("font-family").match(Pi),c=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(o&&!f)return e.removeChild(o),r();if(f&&l!=="none"&&l!==""){var d=s.getPropertyValue("content"),u=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?et[f[2].toLowerCase()]:Li[c],m=Ho(d),v=m.value,k=m.isSecondary,p=f[0].startsWith("FontAwesome"),b=un(u,v),y=b;if(p){var x=ao(v);x.iconName&&x.prefix&&(b=x.iconName,u=x.prefix)}if(b&&!k&&(!o||o.getAttribute(an)!==u||o.getAttribute(on)!==y)){e.setAttribute(n,y),o&&e.removeChild(o);var E=To(),C=E.extra;C.attributes[Mt]=t,zt(b,u).then(function(P){var D=mn(h(h({},E),{},{icons:{main:P,mask:dn()},prefix:u,iconName:y,extra:C,watchable:!0})),G=T.createElement("svg");t==="::before"?e.insertBefore(G,e.firstChild):e.appendChild(G),G.outerHTML=D.map(function(F){return Re(F)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function zo(e){return Promise.all([Zn(e,"::before"),Zn(e,"::after")])}function Uo(e){return e.parentNode!==document.head&&!~Oi.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Mt)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Qn(e){if(!!te)return new Promise(function(t,n){var r=ke(e.querySelectorAll("*")).filter(Uo).map(zo),a=pn.begin("searchPseudoElements");ba(),Promise.all(r).then(function(){a(),Wt(),t()}).catch(function(){a(),Wt(),n()})})}var Wo={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Qn,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?T:r;g.searchPseudoElements&&Qn(a)}}},er=!1,jo={mixout:function(){return{dom:{unwatch:function(){ba(),er=!0}}}},hooks:function(){return{bootstrap:function(){qn(Dt("mutationObserverCallbacks",{}))},noAuto:function(){Ao()},watch:function(n){var r=n.observeMutationsRoot;er?Wt():qn(Dt("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},tr=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Yo={mixout:function(){return{parse:{transform:function(n){return tr(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=tr(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(f," ").concat(c," ").concat(l)},u={transform:"translate(".concat(o/2*-1," -256)")},m={outer:s,inner:d,path:u};return{tag:"g",attributes:h({},m.outer),children:[{tag:"g",attributes:h({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:h(h({},r.icon.attributes),m.path)}]}]}}}},Et={x:0,y:0,width:"100%",height:"100%"};function nr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Bo(e){return e.tag==="g"?e.children:[e]}var Vo={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?ft(a.split(" ").map(function(o){return o.trim()})):dn();return i.prefix||(i.prefix=oe()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,f=n.transform,c=i.width,l=i.icon,d=o.width,u=o.icon,m=ji({transform:f,containerWidth:d,iconWidth:c}),v={tag:"rect",attributes:h(h({},Et),{},{fill:"white"})},k=l.children?{children:l.children.map(nr)}:{},p={tag:"g",attributes:h({},m.inner),children:[nr(h({tag:l.tag,attributes:h(h({},l.attributes),m.path)},k))]},b={tag:"g",attributes:h({},m.outer),children:[p]},y="mask-".concat(s||Ne()),x="clip-".concat(s||Ne()),E={tag:"mask",attributes:h(h({},Et),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,b]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:Bo(u)},E]};return r.push(C,{tag:"rect",attributes:h({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(y,")")},Et)}),{children:r,attributes:a}}}},Go={provides:function(t){var n=!1;ie.matchMedia&&(n=ie.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:h(h({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=h(h({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:h(h({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:h(h({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:h(h({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:h(h({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:h(h({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:h(h({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:h(h({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},qo={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Xo=[Vi,Mo,$o,Ro,Do,Wo,jo,Yo,Vo,Go,qo];so(Xo,{mixoutsTo:R});R.noAuto;R.config;R.library;R.dom;var jt=R.parse;R.findIconDefinition;R.toHtml;var Ko=R.icon;R.layer;R.text;R.counter;var ya={exports:{}},Jo="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Zo=Jo,Qo=Zo;function ka(){}function wa(){}wa.resetWarningCache=ka;var es=function(){function e(r,a,i,o,s,f){if(f!==Qo){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:wa,resetWarningCache:ka};return n.PropTypes=n,n};ya.exports=es();var w=ya.exports;function xa(e,t){for(var n in t)e[n]=t[n];return e}function Yt(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function Bt(e){this.props=e}function ts(e,t){function n(a){var i=this.props.ref,o=i==a.ref;return!o&&i&&(i.call?i(null):i.current=null),t?!t(this.props,a)||!o:Yt(this.props,a)}function r(a){return this.shouldComponentUpdate=n,U(e,a)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(Bt.prototype=new z).isPureReactComponent=!0,Bt.prototype.shouldComponentUpdate=function(e,t){return Yt(this.props,e)||Yt(this.state,t)};var rr=_.__b;_.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),rr&&rr(e)};var ns=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function rs(e){function t(n){var r=xa({},n);return delete r.ref,e(r,n.ref||null)}return t.$$typeof=ns,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var ar=function(e,t){return e==null?null:B(B(e).map(t))},as={map:ar,forEach:ar,count:function(e){return e?B(e).length:0},only:function(e){var t=B(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:B},is=_.__e;_.__e=function(e,t,n,r){if(e.then){for(var a,i=t;i=i.__;)if((a=i.__c)&&a.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),a.__c(e,t)}is(e,t,n,r)};var ir=_.unmount;function Xe(){this.__u=0,this.t=null,this.__b=null}function Ca(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function os(e){var t,n,r;function a(i){if(t||(t=e()).then(function(o){n=o.default||o},function(o){r=o}),r)throw r;if(!n)throw t;return U(n,i)}return a.displayName="Lazy",a.__f=!0,a}function xe(){this.u=null,this.o=null}_.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),ir&&ir(e)},(Xe.prototype=new z).__c=function(e,t){var n=t.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var a=Ca(r.__v),i=!1,o=function(){i||(i=!0,n.__R=null,a?a(s):s())};n.__R=o;var s=function(){if(!--r.__u){if(r.state.__e){var c=r.state.__e;r.__v.__k[0]=function d(u,m,v){return u&&(u.__v=null,u.__k=u.__k&&u.__k.map(function(k){return d(k,m,v)}),u.__c&&u.__c.__P===m&&(u.__e&&v.insertBefore(u.__e,u.__d),u.__c.__e=!0,u.__c.__P=v)),u}(c,c.__c.__P,c.__c.__O)}var l;for(r.setState({__e:r.__b=null});l=r.t.pop();)l.forceUpdate()}},f=t.__h===!0;r.__u++||f||r.setState({__e:r.__b=r.__v.__k[0]}),e.then(o,o)},Xe.prototype.componentWillUnmount=function(){this.t=[]},Xe.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function i(o,s,f){return o&&(o.__c&&o.__c.__H&&(o.__c.__H.__.forEach(function(c){typeof c.__c=="function"&&c.__c()}),o.__c.__H=null),(o=xa({},o)).__c!=null&&(o.__c.__P===f&&(o.__c.__P=s),o.__c=null),o.__k=o.__k&&o.__k.map(function(c){return i(c,s,f)})),o}(this.__b,n,r.__O=r.__P)}this.__b=null}var a=t.__e&&U(V,null,e.fallback);return a&&(a.__h=null),[U(V,null,t.__e?null:e.children),a]};var or=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};function ss(e){return this.getChildContext=function(){return e.context},e.children}function ls(e){var t=this,n=e.i;t.componentWillUnmount=function(){be(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),e.__v?(t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),t.i.appendChild(r)},insertBefore:function(r,a){this.childNodes.push(r),t.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),t.i.removeChild(r)}}),be(U(ss,{context:t.context},e.__v),t.l)):t.l&&t.componentWillUnmount()}function fs(e,t){var n=U(ls,{__v:e,i:t});return n.containerInfo=t,n}(xe.prototype=new z).__e=function(e){var t=this,n=Ca(t.__v),r=t.o.get(e);return r[0]++,function(a){var i=function(){t.props.revealOrder?(r.push(a),or(t,e,r)):a()};n?n(i):i()}},xe.prototype.render=function(e){this.u=null,this.o=new Map;var t=B(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},xe.prototype.componentDidUpdate=xe.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){or(e,n,t)})};var Aa=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.element")||60103,cs=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,us=typeof document!="undefined",ds=function(e){return(typeof Symbol!="undefined"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};function ms(e,t,n){return t.__k==null&&(t.textContent=""),be(e,t),typeof n=="function"&&n(),e?e.__c:null}function ps(e,t,n){return it(e,t),typeof n=="function"&&n(),e?e.__c:null}z.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(z.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var sr=_.event;function vs(){}function hs(){return this.cancelBubble}function _s(){return this.defaultPrevented}_.event=function(e){return sr&&(e=sr(e)),e.persist=vs,e.isPropagationStopped=hs,e.isDefaultPrevented=_s,e.nativeEvent=e};var Ea,lr={configurable:!0,get:function(){return this.class}},fr=_.vnode;_.vnode=function(e){var t=e.type,n=e.props,r=n;if(typeof t=="string"){var a=t.indexOf("-")===-1;for(var i in r={},n){var o=n[i];us&&i==="children"&&t==="noscript"||i==="value"&&"defaultValue"in n&&o==null||(i==="defaultValue"&&"value"in n&&n.value==null?i="value":i==="download"&&o===!0?o="":/ondoubleclick/i.test(i)?i="ondblclick":/^onchange(textarea|input)/i.test(i+t)&&!ds(n.type)?i="oninput":/^onfocus$/i.test(i)?i="onfocusin":/^onblur$/i.test(i)?i="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i)?i=i.toLowerCase():a&&cs.test(i)?i=i.replace(/[A-Z0-9]/,"-$&").toLowerCase():o===null&&(o=void 0),r[i]=o)}t=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=B(n.children).forEach(function(s){s.props.selected=r.value.indexOf(s.props.value)!=-1})),t=="select"&&r.defaultValue!=null&&(r.value=B(n.children).forEach(function(s){s.props.selected=r.multiple?r.defaultValue.indexOf(s.props.value)!=-1:r.defaultValue==s.props.value})),e.props=r,n.class!=n.className&&(lr.enumerable="className"in n,n.className!=null&&(r.class=n.className),Object.defineProperty(r,"className",lr))}e.$$typeof=Aa,fr&&fr(e)};var cr=_.__r;_.__r=function(e){cr&&cr(e),Ea=e.__c};var bs={ReactCurrentDispatcher:{current:{readContext:function(e){return Ea.__n[e.__c].props.value}}}};function gs(e){return U.bind(null,e)}function Oa(e){return!!e&&e.$$typeof===Aa}function ys(e){return Oa(e)?Rr.apply(null,arguments):e}function ks(e){return!!e.__k&&(be(null,e),!0)}function ws(e){return e&&(e.base||e.nodeType===1&&e)||null}var xs=function(e,t){return e(t)},Cs=function(e,t){return e(t)},J={useState:Hr,useReducer:zr,useEffect:Qt,useLayoutEffect:Ur,useRef:Pe,useImperativeHandle:ri,useMemo:en,useCallback:ai,useContext:ii,useDebugValue:oi,version:"17.0.2",Children:as,render:ms,hydrate:ps,unmountComponentAtNode:ks,createPortal:fs,createElement:U,createContext:Dr,createFactory:gs,cloneElement:ys,createRef:Sr,Fragment:V,isValidElement:Oa,findDOMNode:ws,Component:z,PureComponent:Bt,memo:ts,forwardRef:rs,flushSync:Cs,unstable_batchedUpdates:xs,StrictMode:V,Suspense:Xe,SuspenseList:xe,lazy:os,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:bs};function ur(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ur(Object(n),!0).forEach(function(r){ve(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ur(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function rt(e){return rt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},rt(e)}function ve(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function As(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Sa(e,t){if(e==null)return{};var n=As(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Vt(e){return Es(e)||Os(e)||Ss(e)||Ts()}function Es(e){if(Array.isArray(e))return Gt(e)}function Os(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ss(e,t){if(!!e){if(typeof e=="string")return Gt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gt(e,t)}}function Gt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ts(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ps(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,f=e.spin,c=e.spinPulse,l=e.spinReverse,d=e.pulse,u=e.fixedWidth,m=e.inverse,v=e.border,k=e.listItem,p=e.flip,b=e.size,y=e.rotation,x=e.pull,E=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":l,"fa-spin-pulse":c,"fa-pulse":d,"fa-fw":u,"fa-inverse":m,"fa-border":v,"fa-li":k,"fa-flip-horizontal":p==="horizontal"||p==="both","fa-flip-vertical":p==="vertical"||p==="both"},ve(t,"fa-".concat(b),typeof b!="undefined"&&b!==null),ve(t,"fa-rotate-".concat(y),typeof y!="undefined"&&y!==null&&y!==0),ve(t,"fa-pull-".concat(x),typeof x!="undefined"&&x!==null),ve(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(E).map(function(C){return E[C]?C:null}).filter(function(C){return C})}function Ls(e){return e=e-0,e===e}function Ta(e){return Ls(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Ns=["style"];function Is(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Ms(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Ta(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[Is(a)]=i:t[a]=i,t},{})}function Pa(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(f){return Pa(e,f)}),a=Object.keys(t.attributes||{}).reduce(function(f,c){var l=t.attributes[c];switch(c){case"class":f.attrs.className=l,delete t.attributes.class;break;case"style":f.attrs.style=Ms(l);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?f.attrs[c.toLowerCase()]=l:f.attrs[Ta(c)]=l}return f},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=Sa(n,Ns);return a.attrs.style=ae(ae({},a.attrs.style),o),e.apply(void 0,[t.tag,ae(ae({},a.attrs),s)].concat(Vt(r)))}var La=!1;try{La=!0}catch{}function $s(){if(!La&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function dr(e){if(e&&rt(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(jt.icon)return jt.icon(e);if(e===null)return null;if(e&&rt(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Ot(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ve({},e,t):{}}var Rs=["forwardedRef"];function De(e){var t=e.forwardedRef,n=Sa(e,Rs),r=n.icon,a=n.mask,i=n.symbol,o=n.className,s=n.title,f=n.titleId,c=n.maskId,l=dr(r),d=Ot("classes",[].concat(Vt(Ps(n)),Vt(o.split(" ")))),u=Ot("transform",typeof n.transform=="string"?jt.transform(n.transform):n.transform),m=Ot("mask",dr(a)),v=Ko(l,ae(ae(ae(ae({},d),u),m),{},{symbol:i,title:s,titleId:f,maskId:c}));if(!v)return $s("Could not find icon",l),null;var k=v.abstract,p={ref:t};return Object.keys(n).forEach(function(b){De.defaultProps.hasOwnProperty(b)||(p[b]=n[b])}),Ds(k[0],p)}De.displayName="FontAwesomeIcon";De.propTypes={beat:w.bool,border:w.bool,bounce:w.bool,className:w.string,fade:w.bool,flash:w.bool,mask:w.oneOfType([w.object,w.array,w.string]),maskId:w.string,fixedWidth:w.bool,inverse:w.bool,flip:w.oneOf(["horizontal","vertical","both"]),icon:w.oneOfType([w.object,w.array,w.string]),listItem:w.bool,pull:w.oneOf(["right","left"]),pulse:w.bool,rotation:w.oneOf([0,90,180,270]),shake:w.bool,size:w.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:w.bool,spinPulse:w.bool,spinReverse:w.bool,symbol:w.oneOfType([w.bool,w.string]),title:w.string,titleId:w.string,transform:w.oneOfType([w.string,w.object]),swapOpacity:w.bool};De.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Ds=Pa.bind(null,J.createElement);const A=1,Na=1<<1,Ia=1<<2,I=1<<3,qt=1<<4,je=1<<5,Y=1<<6,Xt={a:{content:A|I,self:!1,type:A|I|je|Y},address:{invalid:["h1","h2","h3","h4","h5","h6","address","article","aside","section","div","header","footer"],self:!1},audio:{children:["track","source"]},br:{type:A|I,void:!0},body:{content:A|Na|Ia|I|qt|je|Y},button:{content:I,type:A|I|je|Y},caption:{content:A,parent:["table"]},col:{parent:["colgroup"],void:!0},colgroup:{children:["col"],parent:["table"]},details:{children:["summary"],type:A|je|Y},dd:{content:A,parent:["dl"]},dl:{children:["dt","dd"],type:A},dt:{content:A,invalid:["footer","header"],parent:["dl"]},figcaption:{content:A,parent:["figure"]},footer:{invalid:["footer","header"]},header:{invalid:["footer","header"]},hr:{type:A,void:!0},img:{void:!0},li:{content:A,parent:["ul","ol","menu"]},main:{self:!1},ol:{children:["li"],type:A},picture:{children:["source","img"],type:A|I|qt},rb:{parent:["ruby","rtc"]},rp:{parent:["ruby","rtc"]},rt:{content:I,parent:["ruby","rtc"]},rtc:{content:I,parent:["ruby"]},ruby:{children:["rb","rp","rt","rtc"]},source:{parent:["audio","video","picture"],void:!0},summary:{content:I,parent:["details"]},table:{children:["caption","colgroup","thead","tbody","tfoot","tr"],type:A},tbody:{parent:["table"],children:["tr"]},td:{content:A,parent:["tr"]},tfoot:{parent:["table"],children:["tr"]},th:{content:A,parent:["tr"]},thead:{parent:["table"],children:["tr"]},tr:{parent:["table","tbody","thead","tfoot"],children:["th","td"]},track:{parent:["audio","video"],void:!0},ul:{children:["li"],type:A},video:{children:["track","source"]},wbr:{type:A|I,void:!0}};function ue(e){return t=>{Xt[t]=W(W({},e),Xt[t])}}["address","main","div","figure","p","pre"].forEach(ue({content:A,type:A|Y}));["abbr","b","bdi","bdo","cite","code","data","dfn","em","i","kbd","mark","q","ruby","samp","strong","sub","sup","time","u","var"].forEach(ue({content:I,type:A|I|Y}));["p","pre"].forEach(ue({content:I,type:A|Y}));["s","small","span","del","ins"].forEach(ue({content:I,type:A|I}));["article","aside","footer","header","nav","section","blockquote"].forEach(ue({content:A,type:A|Na|Y}));["h1","h2","h3","h4","h5","h6"].forEach(ue({content:I,type:A|Ia|Y}));["audio","canvas","iframe","img","video"].forEach(ue({type:A|I|qt|Y}));const Kt=Object.freeze(Xt),Fs=["applet","base","body","command","embed","frame","frameset","head","html","link","meta","noscript","object","script","style","title"],Hs=Object.keys(Kt).filter(e=>e!=="canvas"&&e!=="iframe"),S=1,zs=2,Ce=3,de=4,Ma=5,mr=Object.freeze({alt:S,cite:S,class:S,colspan:Ce,controls:de,datetime:S,default:de,disabled:de,dir:S,height:S,href:S,id:S,kind:S,label:S,lang:S,loading:S,loop:de,media:S,muted:de,poster:S,rel:S,role:S,rowspan:Ce,scope:S,sizes:S,span:Ce,start:Ce,style:Ma,src:S,srclang:S,srcset:S,target:S,title:S,type:S,width:S}),Us=Object.freeze({class:"className",colspan:"colSpan",datetime:"dateTime",rowspan:"rowSpan",srclang:"srcLang",srcset:"srcSet"});function at(){return at=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},at.apply(this,arguments)}function $a({attributes:e={},className:t,children:n=null,selfClose:r=!1,tagName:a}){const i=a;return r?J.createElement(i,at({className:t},e)):J.createElement(i,at({className:t},e),n)}class Ws{attribute(t,n){return n}node(t,n){return n}}/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */var js=/["'&<>]/,Ys=Bs;function Bs(e){var t=""+e,n=js.exec(t);if(!n)return t;var r,a="",i=0,o=0;for(i=n.index;i<t.length;i++){switch(t.charCodeAt(i)){case 34:r="&quot;";break;case 38:r="&amp;";break;case 39:r="&#39;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}o!==i&&(a+=t.substring(o,i)),o=i+1,a+=r}return o!==i?a+t.substring(o,i):a}function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Vs=/(url|image|image-set)\(/i;class Gs extends Ws{attribute(t,n){return t==="style"&&Object.keys(n).forEach(r=>{String(n[r]).match(Vs)&&delete n[r]}),n}}const pr=1,qs=3,Xs=/^<(!doctype|(html|head|body)(\s|>))/i,Ks=/^(aria-|data-|\w+:)/iu,Js=/{{{(\w+)\/?}}}/;function Zs(){if(!(typeof window=="undefined"||typeof document=="undefined"))return document.implementation.createHTMLDocument("Interweave")}class Ra{constructor(t,n={},r=[],a=[]){var i;X(this,"allowed",void 0),X(this,"banned",void 0),X(this,"blocked",void 0),X(this,"container",void 0),X(this,"content",[]),X(this,"props",void 0),X(this,"matchers",void 0),X(this,"filters",void 0),X(this,"keyIndex",void 0),this.props=n,this.matchers=r,this.filters=[...a,new Gs],this.keyIndex=-1,this.container=this.createContainer(t||""),this.allowed=new Set((i=n.allowList)!==null&&i!==void 0?i:Hs),this.banned=new Set(Fs),this.blocked=new Set(n.blockList)}applyAttributeFilters(t,n){return this.filters.reduce((r,a)=>r!==null&&typeof a.attribute=="function"?a.attribute(t,r):r,n)}applyNodeFilters(t,n){return this.filters.reduce((r,a)=>r!==null&&typeof a.node=="function"?a.node(t,r):r,n)}applyMatchers(t,n){const r={},{props:a}=this;let i=t,o=0,s=null;return this.matchers.forEach(f=>{const c=f.asTag().toLowerCase(),l=this.getTagConfig(c);if(a[f.inverseName]||!this.isTagAllowed(c)||!this.canRenderChild(n,l))return;let d="";for(;i&&(s=f.match(i));){const u=s,{index:m,length:v,match:k,valid:p,void:b}=u,y=wt(u,["index","length","match","valid","void"]),x=f.propName+String(o);m>0&&(d+=i.slice(0,m)),p?(d+=b?`{{{${x}/}}}`:`{{{${x}}}}${k}{{{/${x}}}}`,this.keyIndex+=1,o+=1,r[x]={children:k,matcher:f,props:Ue(W(W({},a),y),{key:this.keyIndex})}):d+=k,f.greedy?(i=d+i.slice(m+v),d=""):i=i.slice(m+(v||k.length))}f.greedy||(i=d+i)}),o===0?t:this.replaceTokens(i,r)}canRenderChild(t,n){return!t.tagName||!n.tagName||t.void?!1:t.children.length>0?t.children.includes(n.tagName):t.invalid.length>0&&t.invalid.includes(n.tagName)?!1:n.parent.length>0?n.parent.includes(t.tagName):!t.self&&t.tagName===n.tagName?!1:Boolean(t&&t.content&n.type)}convertLineBreaks(t){const{noHtml:n,disableLineBreaks:r}=this.props;if(n||r||t.match(/<((?:\/[ a-z]+)|(?:[ a-z]+\/))>/gi))return t;let a=t.replace(/\r\n/g,`
`);return a=a.replace(/\n{3,}/g,`


`),a=a.replace(/\n/g,"<br/>"),a}createContainer(t){var n;const a=(typeof global!="undefined"&&global.INTERWEAVE_SSR_POLYFILL||Zs)();if(!a)return;const i=(n=this.props.containerTagName)!==null&&n!==void 0?n:"body",o=i==="body"||i==="fragment"?a.body:a.createElement(i);return t.match(Xs)||(o.innerHTML=this.convertLineBreaks(this.props.escapeHtml?Ys(t):t)),o}extractAttributes(t){const{allowAttributes:n}=this.props,r={};let a=0;return t.nodeType!==pr||!t.attributes||([...t.attributes].forEach(i=>{const{name:o,value:s}=i,f=o.toLowerCase(),c=mr[f]||mr[o];if(!this.isSafe(t)||!f.match(Ks)&&(!n&&(!c||c===zs)||f.startsWith("on")||s.replace(/(\s|\0|&#x0([9AD]);)/,"").match(/(javascript|vbscript|livescript|xss):/i)))return;let l=f==="style"?this.extractStyleAttribute(t):s;c===de?l=!0:c===Ce?l=Number.parseFloat(String(l)):c!==Ma&&(l=String(l)),r[Us[f]||f]=this.applyAttributeFilters(f,l),a+=1}),a===0)?null:r}extractStyleAttribute(t){const n={};return Array.from(t.style).forEach(r=>{const a=t.style[r];(typeof a=="string"||typeof a=="number")&&(n[r.replace(/-([a-z])/g,(i,o)=>String(o).toUpperCase())]=a)}),n}getTagConfig(t){const n={children:[],content:0,invalid:[],parent:[],self:!0,tagName:"",type:0,void:!1};return Kt[t]?Ue(W(W({},n),Kt[t]),{tagName:t}):n}isSafe(t){if(typeof HTMLAnchorElement!="undefined"&&t instanceof HTMLAnchorElement){const n=t.getAttribute("href");if(n!=null&&n.startsWith("#"))return!0;const r=t.protocol.toLowerCase();return r===":"||r==="http:"||r==="https:"||r==="mailto:"||r==="tel:"}return!0}isTagAllowed(t){return this.banned.has(t)||this.blocked.has(t)?!1:this.props.allowElements||this.allowed.has(t)}parse(){return this.container?this.parseNode(this.container,this.getTagConfig(this.container.nodeName.toLowerCase())):[]}parseNode(t,n){const{noHtml:r,noHtmlExceptMatchers:a,allowElements:i,transform:o,transformOnlyAllowList:s}=this.props;let f=[],c="";return[...t.childNodes].forEach(l=>{if(l.nodeType===pr){const u=l.nodeName.toLowerCase(),m=this.getTagConfig(u);c&&(f.push(c),c="");const v=this.applyNodeFilters(u,l);if(!v)return;let k;if(o&&!(s&&!this.isTagAllowed(u))){this.keyIndex+=1;const p=this.keyIndex;k=this.parseNode(v,m);const b=o(v,k,m);if(b===null)return;if(typeof b!="undefined"){f.push(J.cloneElement(b,{key:p}));return}this.keyIndex=p-1}if(this.banned.has(u))return;if(!(r||a&&u!=="br")&&this.isTagAllowed(u)&&(i||this.canRenderChild(n,m))){var d;this.keyIndex+=1;const p=this.extractAttributes(v),b={tagName:u};p&&(b.attributes=p),m.void&&(b.selfClose=m.void),f.push(J.createElement($a,Ue(W({},b),{key:this.keyIndex}),(d=k)!==null&&d!==void 0?d:this.parseNode(v,m)))}else f=[...f,...this.parseNode(v,m.tagName?m:n)]}else if(l.nodeType===qs){const u=r&&!a?l.textContent:this.applyMatchers(l.textContent||"",n);Array.isArray(u)?f=[...f,...u]:c+=u}}),c&&f.push(c),f}replaceTokens(t,n){if(!t.includes("{{{"))return t;const r=[];let a=t,i=null;for(;i=a.match(Js);){const[o,s]=i,f=i.index,c=o.includes("/");f>0&&(r.push(a.slice(0,f)),a=a.slice(f));const{children:l,matcher:d,props:u}=n[s];let m;if(c)m=o.length,r.push(d.createElement(l,u));else{const v=a.match(new RegExp(`{{{/${s}}}}`));m=v.index+v[0].length,r.push(d.createElement(this.replaceTokens(a.slice(o.length,v.index),n),u))}a=a.slice(m)}return a.length>0&&r.push(a),r.length===0?"":r.length===1&&typeof r[0]=="string"?r[0]:r}}function Qs(e){var t;const{attributes:n,className:r,containerTagName:a,content:i,emptyContent:o,parsedContent:s,tagName:f,noWrap:c}=e,l=(t=a!=null?a:f)!==null&&t!==void 0?t:"span",d=l==="fragment"?!0:c;let u;if(s)u=s;else{const m=new Ra(i!=null?i:"",e).parse();m.length>0&&(u=m)}return u||(u=o),d?J.createElement(J.Fragment,null,u):J.createElement($a,{attributes:n,className:r,tagName:l},u)}function el(e){const C=e,{attributes:t,className:n,content:r="",disableFilters:a=!1,disableMatchers:i=!1,emptyContent:o=null,filters:s=[],matchers:f=[],onAfterParse:c=null,onBeforeParse:l=null,tagName:d="span",noWrap:u=!1}=C,m=wt(C,["attributes","className","content","disableFilters","disableMatchers","emptyContent","filters","matchers","onAfterParse","onBeforeParse","tagName","noWrap"]),v=i?[]:f,k=a?[]:s,p=l?[l]:[],b=c?[c]:[];v.forEach(P=>{P.onBeforeParse&&p.push(P.onBeforeParse.bind(P)),P.onAfterParse&&b.push(P.onAfterParse.bind(P))});const y=p.reduce((P,D)=>D(P,e),r!=null?r:""),x=new Ra(y,m,v,k),E=b.reduce((P,D)=>D(P,e),x.parse());return J.createElement(Qs,{attributes:t,className:n,containerTagName:e.containerTagName,emptyContent:o,noWrap:u,parsedContent:E.length===0?void 0:E,tagName:d})}var tl=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,nl=/[&<>"]/;function vr(e){var t=String(e);return nl.test(t)?t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):t}var hr=function(e,t){return String(e).replace(/(\n+)/g,"$1"+(t||"	"))},_r=function(e,t,n){return String(e).length>(t||40)||!n&&String(e).indexOf(`
`)!==-1||String(e).indexOf("<")!==-1},br={};function rl(e){var t="";for(var n in e){var r=e[n];r!=null&&r!==""&&(t&&(t+=" "),t+=n[0]=="-"?n:br[n]||(br[n]=n.replace(/([A-Z])/g,"-$1").toLowerCase()),t+=": ",t+=r,typeof r=="number"&&tl.test(n)===!1&&(t+="px"),t+=";")}return t||void 0}function Ye(e,t){for(var n in t)e[n]=t[n];return e}function Jt(e,t){return Array.isArray(t)?t.reduce(Jt,e):t!=null&&t!==!1&&e.push(t),e}var al={shallow:!0},St=[],il=/^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,gr=/[\s\n\\/='"\0<>]/;function yr(){this.__d=!0}Ie.render=Ie;var ol=function(e,t){return Ie(e,t,al)},kr=[];function Ie(e,t,n){t=t||{},n=n||{};var r=_.__s;_.__s=!0;var a=Ae(e,t,n);return _.__c&&_.__c(e,kr),kr.length=0,_.__s=r,a}function Ae(e,t,n,r,a,i){if(e==null||typeof e=="boolean")return"";if(typeof e!="object")return vr(e);var o=n.pretty,s=o&&typeof o=="string"?o:"	";if(Array.isArray(e)){for(var f="",c=0;c<e.length;c++)o&&c>0&&(f+=`
`),f+=Ae(e[c],t,n,r,a,i);return f}var l,d=e.type,u=e.props,m=!1;if(typeof d=="function"){if(m=!0,!n.shallow||!r&&n.renderRootComponent!==!1){if(d===V){var v=[];return Jt(v,e.props.children),Ae(v,t,n,n.shallowHighOrder!==!1,a,i)}var k,p=e.__c={__v:e,context:t,props:e.props,setState:yr,forceUpdate:yr,__d:!0,__h:[]};_.__b&&_.__b(e);var b=_.__r;if(d.prototype&&typeof d.prototype.render=="function"){var y=d.contextType,x=y&&t[y.__c],E=y!=null?x?x.props.value:y.__:t;(p=e.__c=new d(u,E)).__v=e,p._dirty=p.__d=!0,p.props=u,p.state==null&&(p.state={}),p._nextState==null&&p.__s==null&&(p._nextState=p.__s=p.state),p.context=E,d.getDerivedStateFromProps?p.state=Ye(Ye({},p.state),d.getDerivedStateFromProps(p.props,p.state)):p.componentWillMount&&(p.componentWillMount(),p.state=p._nextState!==p.state?p._nextState:p.__s!==p.state?p.__s:p.state),b&&b(e),k=p.render(p.props,p.state,p.context)}else for(var C=d.contextType,P=C&&t[C.__c],D=C!=null?P?P.props.value:C.__:t,G=0;p.__d&&G++<25;)p.__d=!1,b&&b(e),k=d.call(e.__c,u,D);return p.getChildContext&&(t=Ye(Ye({},t),p.getChildContext())),_.diffed&&_.diffed(e),Ae(k,t,n,n.shallowHighOrder!==!1,a,i)}d=(l=d).displayName||l!==Function&&l.name||function(gt){var yt=(Function.prototype.toString.call(gt).match(/^\s*function\s+([^( ]+)/)||"")[1];if(!yt){for(var He=-1,kt=St.length;kt--;)if(St[kt]===gt){He=kt;break}He<0&&(He=St.push(gt)-1),yt="UnnamedComponent"+He}return yt}(l)}var F,ne,L="<"+d;if(u){var ut=Object.keys(u);n&&n.sortAttributes===!0&&ut.sort();for(var dt=0;dt<ut.length;dt++){var O=ut[dt],N=u[O];if(O!=="children"){if(!gr.test(O)&&(n&&n.allAttributes||O!=="key"&&O!=="ref"&&O!=="__self"&&O!=="__source")){if(O==="defaultValue")O="value";else if(O==="className"){if(u.class!==void 0)continue;O="class"}else a&&O.match(/^xlink:?./)&&(O=O.toLowerCase().replace(/^xlink:?/,"xlink:"));if(O==="htmlFor"){if(u.for)continue;O="for"}O==="style"&&N&&typeof N=="object"&&(N=rl(N)),O[0]==="a"&&O[1]==="r"&&typeof N=="boolean"&&(N=String(N));var mt=n.attributeHook&&n.attributeHook(O,N,t,n,m);if(mt||mt==="")L+=mt;else if(O==="dangerouslySetInnerHTML")ne=N&&N.__html;else if(d==="textarea"&&O==="value")F=N;else if((N||N===0||N==="")&&typeof N!="function"){if(!(N!==!0&&N!==""||(N=O,n&&n.xml))){L+=" "+O;continue}if(O==="value"){if(d==="select"){i=N;continue}d==="option"&&i==N&&u.selected===void 0&&(L+=" selected")}L+=" "+O+'="'+vr(N)+'"'}}}else F=N}}if(o){var pt=L.replace(/\n\s*/," ");pt===L||~pt.indexOf(`
`)?o&&~L.indexOf(`
`)&&(L+=`
`):L=pt}if(L+=">",gr.test(d))throw new Error(d+" is not a valid HTML tag name in "+L);var Fe,Da=il.test(d)||n.voidElements&&n.voidElements.test(d),q=[];if(ne)o&&_r(ne)&&(ne=`
`+s+hr(ne,s)),L+=ne;else if(F!=null&&Jt(Fe=[],F).length){for(var vt=o&&~L.indexOf(`
`),hn=!1,ht=0;ht<Fe.length;ht++){var _t=Fe[ht];if(_t!=null&&_t!==!1){var se=Ae(_t,t,n,!0,d==="svg"||d!=="foreignObject"&&a,i);if(o&&!vt&&_r(se)&&(vt=!0),se)if(o){var _n=se.length>0&&se[0]!="<";hn&&_n?q[q.length-1]+=se:q.push(se),hn=_n}else q.push(se)}}if(o&&vt)for(var bt=q.length;bt--;)q[bt]=`
`+s+hr(q[bt],s)}if(q.length||ne)L+=q.join("");else if(n&&n.xml)return L.substring(0,L.length-1)+" />";return!Da||Fe||ne?(o&&~L.indexOf(`
`)&&(L+=`
`),L+="</"+d+">"):L=L.replace(/>$/," />"),L}Ie.shallowRender=ol;/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var sl={prefix:"fas",iconName:"apple-whole",icon:[448,512,[127823,127822,"apple-alt"],"f5d1","M336 128c-32 0-80.02 16.03-112 32.03c-32.01-16-79.1-32.02-111.1-32.03C32 128 .4134 210.5 .0033 288c-.5313 99.97 63.99 224 159.1 224c32 0 48-16 64-16c16 0 32 16 64 16c96 0 160.4-122.8 159.1-224C447.7 211.6 416 128 336 128zM320 32V0h-32C243.8 0 208 35.82 208 80v32h32C284.2 112 320 76.18 320 32z"]},ll={prefix:"fas",iconName:"leaf",icon:[512,512,[],"f06c","M512 165.4c0 127.9-70.05 235.3-175.3 270.1c-20.04 7.938-41.83 12.46-64.69 12.46c-64.9 0-125.2-36.51-155.7-94.47c-54.13 49.93-68.71 107-68.96 108.1C44.72 472.6 34.87 480 24.02 480c-1.844 0-3.727-.2187-5.602-.6562c-12.89-3.098-20.84-16.08-17.75-28.96c9.598-39.5 90.47-226.4 335.3-226.4C344.8 224 352 216.8 352 208S344.8 192 336 192C228.6 192 151 226.6 96.29 267.6c.1934-10.82 1.242-21.84 3.535-33.05c13.47-65.81 66.04-119 131.4-134.2c28.33-6.562 55.68-6.013 80.93-.0054c56 13.32 118.2-7.412 149.3-61.24c5.664-9.828 20.02-9.516 24.66 .8282C502.7 76.76 512 121.9 512 165.4z"]},fl={prefix:"fas",iconName:"list",icon:[512,512,["list-squares"],"f03a","M88 48C101.3 48 112 58.75 112 72V120C112 133.3 101.3 144 88 144H40C26.75 144 16 133.3 16 120V72C16 58.75 26.75 48 40 48H88zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H192C174.3 128 160 113.7 160 96C160 78.33 174.3 64 192 64H480zM480 224C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H192C174.3 288 160 273.7 160 256C160 238.3 174.3 224 192 224H480zM480 384C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416C160 398.3 174.3 384 192 384H480zM16 232C16 218.7 26.75 208 40 208H88C101.3 208 112 218.7 112 232V280C112 293.3 101.3 304 88 304H40C26.75 304 16 293.3 16 280V232zM88 368C101.3 368 112 378.7 112 392V440C112 453.3 101.3 464 88 464H40C26.75 464 16 453.3 16 440V392C16 378.7 26.75 368 40 368H88z"]},cl={prefix:"fas",iconName:"microscope",icon:[512,512,[128300],"f610","M160 320h12v16c0 8.875 7.125 16 16 16h40c8.875 0 16-7.125 16-16V320H256c17.62 0 32-14.38 32-32V64c0-17.62-14.38-32-32-32V16C256 7.125 248.9 0 240 0h-64C167.1 0 160 7.125 160 16V32C142.4 32 128 46.38 128 64v224C128 305.6 142.4 320 160 320zM464 448h-1.25C493.2 414 512 369.2 512 320c0-105.9-86.13-192-192-192v64c70.63 0 128 57.38 128 128s-57.38 128-128 128H48C21.5 448 0 469.5 0 496C0 504.9 7.125 512 16 512h480c8.875 0 16-7.125 16-16C512 469.5 490.5 448 464 448zM104 416h208c4.375 0 8-3.625 8-8v-16c0-4.375-3.625-8-8-8h-208C99.63 384 96 387.6 96 392v16C96 412.4 99.63 416 104 416z"]},ul={prefix:"fas",iconName:"pen-ruler",icon:[512,512,["pencil-ruler"],"f5ae","M492.7 42.75C517.7 67.74 517.7 108.3 492.7 133.3L436.3 189.7L322.3 75.72L378.7 19.32C403.7-5.678 444.3-5.678 469.3 19.32L492.7 42.75zM44.89 353.2L299.7 98.34L413.7 212.3L158.8 467.1C152.1 473.8 143.8 478.7 134.6 481.4L30.59 511.1C22.21 513.5 13.19 511.1 7.03 504.1C.8669 498.8-1.47 489.8 .9242 481.4L30.65 377.4C33.26 368.2 38.16 359.9 44.89 353.2zM249.4 103.4L103.4 249.4L16 161.9C-2.745 143.2-2.745 112.8 16 94.06L94.06 16C112.8-2.745 143.2-2.745 161.9 16L181.7 35.76C181.4 36.05 181 36.36 180.7 36.69L116.7 100.7C110.4 106.9 110.4 117.1 116.7 123.3C122.9 129.6 133.1 129.6 139.3 123.3L203.3 59.31C203.6 58.99 203.1 58.65 204.2 58.3L249.4 103.4zM453.7 307.8C453.4 308 453 308.4 452.7 308.7L388.7 372.7C382.4 378.9 382.4 389.1 388.7 395.3C394.9 401.6 405.1 401.6 411.3 395.3L475.3 331.3C475.6 330.1 475.1 330.6 476.2 330.3L496 350.1C514.7 368.8 514.7 399.2 496 417.9L417.9 496C399.2 514.7 368.8 514.7 350.1 496L262.6 408.6L408.6 262.6L453.7 307.8z"]},dl={prefix:"fas",iconName:"person-falling-burst",icon:[640,512,[],"e547","M256 41.84C256 96.45 228.1 146.5 183.5 175.4L183.7 175.8L240.5 255.1H311.1C327.1 255.1 341.3 263.1 350.4 275.2L393.6 332.8C404.2 346.9 401.3 366.1 387.2 377.6C373.1 388.2 353 385.3 342.4 371.2L303.1 319.1H222.6L314.9 462.6C324.5 477.5 320.2 497.3 305.4 506.9C290.5 516.5 270.7 512.2 261.1 497.4L100.5 249.2C97.57 258.4 95.1 268.1 95.1 278.2V351.1C95.1 369.7 81.67 383.1 63.1 383.1C46.33 383.1 31.1 369.7 31.1 351.1V278.2C31.1 213 71.65 154.5 132.1 130.3C168.3 115.8 191.1 80.79 191.1 41.84V32C191.1 14.33 206.3 0 223.1 0C241.7 0 255.1 14.33 255.1 32L256 41.84zM96 79.1C96 106.5 74.51 127.1 48 127.1C21.49 127.1 0 106.5 0 79.1C0 53.49 21.49 31.1 48 31.1C74.51 31.1 96 53.49 96 79.1zM464 286.1L424.7 322.2C423.1 319.3 421.3 316.4 419.2 313.6L382.1 265.3L384.2 247.6L365.8 244.8C351.2 231.5 332.1 223.1 311.1 223.1H292.6C292.5 223.7 292.5 223.4 292.4 223.2C290.1 216.8 293.5 210.1 298.9 206.4L364.5 161.3L325 92.18C321.8 86.49 322.3 79.39 326.4 74.27C330.5 69.14 337.3 67.03 343.6 68.93L419.7 92.05L449.1 18.09C451.6 11.1 457.4 8 464 8C470.6 8 476.4 11.1 478.9 18.09L508.3 92.05L584.4 68.93C590.7 67.03 597.5 69.14 601.6 74.27C605.7 79.39 606.2 86.49 602.1 92.18L563.5 161.3L629.1 206.4C634.5 210.1 637 216.8 635.6 223.2C634.1 229.6 628.9 234.4 622.4 235.4L543.8 247.6L549.4 327C549.8 333.6 546.3 339.7 540.4 342.6C534.5 345.4 527.4 344.4 522.6 339.9L464 286.1z"]},ml={prefix:"fas",iconName:"wand-magic-sparkles",icon:[576,512,["magic-wand-sparkles"],"e2ca","M248.8 4.994C249.9 1.99 252.8 .0001 256 .0001C259.2 .0001 262.1 1.99 263.2 4.994L277.3 42.67L315 56.79C318 57.92 320 60.79 320 64C320 67.21 318 70.08 315 71.21L277.3 85.33L263.2 123C262.1 126 259.2 128 256 128C252.8 128 249.9 126 248.8 123L234.7 85.33L196.1 71.21C193.1 70.08 192 67.21 192 64C192 60.79 193.1 57.92 196.1 56.79L234.7 42.67L248.8 4.994zM427.4 14.06C446.2-4.686 476.6-4.686 495.3 14.06L529.9 48.64C548.6 67.38 548.6 97.78 529.9 116.5L148.5 497.9C129.8 516.6 99.38 516.6 80.64 497.9L46.06 463.3C27.31 444.6 27.31 414.2 46.06 395.4L427.4 14.06zM461.4 59.31L356.3 164.3L379.6 187.6L484.6 82.58L461.4 59.31zM7.491 117.2L64 96L85.19 39.49C86.88 34.98 91.19 32 96 32C100.8 32 105.1 34.98 106.8 39.49L128 96L184.5 117.2C189 118.9 192 123.2 192 128C192 132.8 189 137.1 184.5 138.8L128 160L106.8 216.5C105.1 221 100.8 224 96 224C91.19 224 86.88 221 85.19 216.5L64 160L7.491 138.8C2.985 137.1 0 132.8 0 128C0 123.2 2.985 118.9 7.491 117.2zM359.5 373.2L416 352L437.2 295.5C438.9 290.1 443.2 288 448 288C452.8 288 457.1 290.1 458.8 295.5L480 352L536.5 373.2C541 374.9 544 379.2 544 384C544 388.8 541 393.1 536.5 394.8L480 416L458.8 472.5C457.1 477 452.8 480 448 480C443.2 480 438.9 477 437.2 472.5L416 416L359.5 394.8C354.1 393.1 352 388.8 352 384C352 379.2 354.1 374.9 359.5 373.2z"]},pl={learning_goals:sl,case_study:cl,ethical_considerations:ll,accident_report:dl,interactive:ml,exercises:ul,examples:fl};const vl=({content:e,type:t})=>{const n=(i,[o])=>{var s;if((s=o==null?void 0:o.startsWith)!=null&&s.call(o,"(TITLE) "))return M("p",{class:"title",children:o.replace("(TITLE) ","")})},{[t]:r}=pl,a=t.replace("_"," ").replace(/^./,i=>i.toUpperCase());return Le(ui,{children:[Le("div",{class:"type",children:[M("span",{class:"icon",children:M(De,{icon:r})}),a]}),M("div",{class:"content",children:M(el,{noWrap:!0,content:e,transform:n})})]})};document.querySelectorAll(".box").forEach(e=>{const{innerHTML:t,classList:[,n]}=e;e.innerHTML=Ie(M(vl,{content:t,type:n}))});it(M(di,{}),document.querySelector("#toc").parentNode);
