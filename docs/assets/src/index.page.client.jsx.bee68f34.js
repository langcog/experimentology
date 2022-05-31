var Ga=Object.defineProperty,Xa=Object.defineProperties;var qa=Object.getOwnPropertyDescriptors;var Be=Object.getOwnPropertySymbols;var An=Object.prototype.hasOwnProperty,En=Object.prototype.propertyIsEnumerable;var Cn=(e,t,n)=>t in e?Ga(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,V=(e,t)=>{for(var n in t||(t={}))An.call(t,n)&&Cn(e,n,t[n]);if(Be)for(var n of Be(t))En.call(t,n)&&Cn(e,n,t[n]);return e},Ve=(e,t)=>Xa(e,qa(t));var Ot=(e,t)=>{var n={};for(var r in e)An.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Be)for(var r of Be(e))t.indexOf(r)<0&&En.call(e,r)&&(n[r]=e[r]);return n};var ze,h,Pr,Nr,Pe,Lr,On,Ir,tt={},$r=[],Ka=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Q(e,t){for(var n in t)e[n]=t[n];return e}function Mr(e){var t=e.parentNode;t&&t.removeChild(e)}function Y(e,t,n){var r,a,i,o={};for(i in t)i=="key"?r=t[i]:i=="ref"?a=t[i]:o[i]=t[i];if(arguments.length>2&&(o.children=arguments.length>3?ze.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)o[i]===void 0&&(o[i]=e.defaultProps[i]);return Ne(e,o,r,a,null)}function Ne(e,t,n,r,a){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:a==null?++Pr:a};return a==null&&h.vnode!=null&&h.vnode(i),i}function Rr(){return{current:null}}function U(e){return e.children}function R(e,t){this.props=e,this.context=t}function ke(e,t){if(t==null)return e.__?ke(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?ke(e):null}function Dr(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Dr(e)}}function Mt(e){(!e.__d&&(e.__d=!0)&&Pe.push(e)&&!nt.__r++||On!==h.debounceRendering)&&((On=h.debounceRendering)||Lr)(nt)}function nt(){for(var e;nt.__r=Pe.length;)e=Pe.sort(function(t,n){return t.__v.__b-n.__v.__b}),Pe=[],e.some(function(t){var n,r,a,i,o,s;t.__d&&(o=(i=(n=t).__v).__e,(s=n.__P)&&(r=[],(a=Q({},i)).__v=i.__v+1,an(s,i,a,n.__n,s.ownerSVGElement!==void 0,i.__h!=null?[o]:null,r,o==null?ke(i):o,i.__h),Hr(r,i),i.__e!=o&&Dr(i)))})}function Fr(e,t,n,r,a,i,o,s,f,d){var c,p,l,u,m,y,v,_=r&&r.__k||$r,k=_.length;for(n.__k=[],c=0;c<t.length;c++)if((u=n.__k[c]=(u=t[c])==null||typeof u=="boolean"?null:typeof u=="string"||typeof u=="number"||typeof u=="bigint"?Ne(null,u,null,null,u):Array.isArray(u)?Ne(U,{children:u},null,null,null):u.__b>0?Ne(u.type,u.props,u.key,null,u.__v):u)!=null){if(u.__=n,u.__b=n.__b+1,(l=_[c])===null||l&&u.key==l.key&&u.type===l.type)_[c]=void 0;else for(p=0;p<k;p++){if((l=_[p])&&u.key==l.key&&u.type===l.type){_[p]=void 0;break}l=null}an(e,u,l=l||tt,a,i,o,s,f,d),m=u.__e,(p=u.ref)&&l.ref!=p&&(v||(v=[]),l.ref&&v.push(l.ref,null,u),v.push(p,u.__c||m,u)),m!=null?(y==null&&(y=m),typeof u.type=="function"&&u.__k===l.__k?u.__d=f=zr(u,f,e):f=Ur(e,u,l,_,m,f),typeof n.type=="function"&&(n.__d=f)):f&&l.__e==f&&f.parentNode!=e&&(f=ke(l))}for(n.__e=y,c=k;c--;)_[c]!=null&&(typeof n.type=="function"&&_[c].__e!=null&&_[c].__e==n.__d&&(n.__d=ke(r,c+1)),jr(_[c],_[c]));if(v)for(c=0;c<v.length;c++)Wr(v[c],v[++c],v[++c])}function zr(e,t,n){for(var r,a=e.__k,i=0;a&&i<a.length;i++)(r=a[i])&&(r.__=e,t=typeof r.type=="function"?zr(r,t,n):Ur(n,r,r,a,r.__e,t));return t}function q(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){q(n,t)}):t.push(e)),t}function Ur(e,t,n,r,a,i){var o,s,f;if(t.__d!==void 0)o=t.__d,t.__d=void 0;else if(n==null||a!=i||a.parentNode==null)e:if(i==null||i.parentNode!==e)e.appendChild(a),o=null;else{for(s=i,f=0;(s=s.nextSibling)&&f<r.length;f+=2)if(s==a)break e;e.insertBefore(a,i),o=i}return o!==void 0?o:a.nextSibling}function Ja(e,t,n,r,a){var i;for(i in n)i==="children"||i==="key"||i in t||rt(e,i,null,n[i],r);for(i in t)a&&typeof t[i]!="function"||i==="children"||i==="key"||i==="value"||i==="checked"||n[i]===t[i]||rt(e,i,t[i],n[i],r)}function Sn(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Ka.test(t)?n:n+"px"}function rt(e,t,n,r,a){var i;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Sn(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||Sn(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?Pn:Tn,i):e.removeEventListener(t,i?Pn:Tn,i);else if(t!=="dangerouslySetInnerHTML"){if(a)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n==null?"":n;break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function Tn(e){this.l[e.type+!1](h.event?h.event(e):e)}function Pn(e){this.l[e.type+!0](h.event?h.event(e):e)}function an(e,t,n,r,a,i,o,s,f){var d,c,p,l,u,m,y,v,_,k,w,x=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(f=n.__h,s=t.__e=n.__e,t.__h=null,i=[s]),(d=h.__b)&&d(t);try{e:if(typeof x=="function"){if(v=t.props,_=(d=x.contextType)&&r[d.__c],k=d?_?_.props.value:d.__:r,n.__c?y=(c=t.__c=n.__c).__=c.__E:("prototype"in x&&x.prototype.render?t.__c=c=new x(v,k):(t.__c=c=new R(v,k),c.constructor=x,c.render=Qa),_&&_.sub(c),c.props=v,c.state||(c.state={}),c.context=k,c.__n=r,p=c.__d=!0,c.__h=[]),c.__s==null&&(c.__s=c.state),x.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=Q({},c.__s)),Q(c.__s,x.getDerivedStateFromProps(v,c.__s))),l=c.props,u=c.state,p)x.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(x.getDerivedStateFromProps==null&&v!==l&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(v,k),!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(v,c.__s,k)===!1||t.__v===n.__v){c.props=v,c.state=c.__s,t.__v!==n.__v&&(c.__d=!1),c.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(A){A&&(A.__=t)}),c.__h.length&&o.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(v,c.__s,k),c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(l,u,m)})}c.context=k,c.props=v,c.state=c.__s,(d=h.__r)&&d(t),c.__d=!1,c.__v=t,c.__P=e,d=c.render(c.props,c.state,c.context),c.state=c.__s,c.getChildContext!=null&&(r=Q(Q({},r),c.getChildContext())),p||c.getSnapshotBeforeUpdate==null||(m=c.getSnapshotBeforeUpdate(l,u)),w=d!=null&&d.type===U&&d.key==null?d.props.children:d,Fr(e,Array.isArray(w)?w:[w],t,n,r,a,i,o,s,f),c.base=t.__e,t.__h=null,c.__h.length&&o.push(c),y&&(c.__E=c.__=null),c.__e=!1}else i==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Za(n.__e,t,n,r,a,i,o,f);(d=h.diffed)&&d(t)}catch(A){t.__v=null,(f||i!=null)&&(t.__e=s,t.__h=!!f,i[i.indexOf(s)]=null),h.__e(A,t,n)}}function Hr(e,t){h.__c&&h.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){h.__e(r,n.__v)}})}function Za(e,t,n,r,a,i,o,s){var f,d,c,p=n.props,l=t.props,u=t.type,m=0;if(u==="svg"&&(a=!0),i!=null){for(;m<i.length;m++)if((f=i[m])&&"setAttribute"in f==!!u&&(u?f.localName===u:f.nodeType===3)){e=f,i[m]=null;break}}if(e==null){if(u===null)return document.createTextNode(l);e=a?document.createElementNS("http://www.w3.org/2000/svg",u):document.createElement(u,l.is&&l),i=null,s=!1}if(u===null)p===l||s&&e.data===l||(e.data=l);else{if(i=i&&ze.call(e.childNodes),d=(p=n.props||tt).dangerouslySetInnerHTML,c=l.dangerouslySetInnerHTML,!s){if(i!=null)for(p={},m=0;m<e.attributes.length;m++)p[e.attributes[m].name]=e.attributes[m].value;(c||d)&&(c&&(d&&c.__html==d.__html||c.__html===e.innerHTML)||(e.innerHTML=c&&c.__html||""))}if(Ja(e,l,p,a,s),c)t.__k=[];else if(m=t.props.children,Fr(e,Array.isArray(m)?m:[m],t,n,r,a&&u!=="foreignObject",i,o,i?i[0]:n.__k&&ke(n,0),s),i!=null)for(m=i.length;m--;)i[m]!=null&&Mr(i[m]);s||("value"in l&&(m=l.value)!==void 0&&(m!==e.value||u==="progress"&&!m||u==="option"&&m!==p.value)&&rt(e,"value",m,p.value,!1),"checked"in l&&(m=l.checked)!==void 0&&m!==e.checked&&rt(e,"checked",m,p.checked,!1))}return e}function Wr(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){h.__e(r,n)}}function jr(e,t,n){var r,a;if(h.unmount&&h.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Wr(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){h.__e(i,t)}r.base=r.__P=null}if(r=e.__k)for(a=0;a<r.length;a++)r[a]&&jr(r[a],t,typeof e.type!="function");n||e.__e==null||Mr(e.__e),e.__e=e.__d=void 0}function Qa(e,t,n){return this.constructor(e,n)}function we(e,t,n){var r,a,i;h.__&&h.__(e,t),a=(r=typeof n=="function")?null:n&&n.__k||t.__k,i=[],an(t,e=(!r&&n||t).__k=Y(U,null,[e]),a||tt,tt,t.ownerSVGElement!==void 0,!r&&n?[n]:a?null:t.firstChild?ze.call(t.childNodes):null,i,!r&&n?n:a?a.__e:t.firstChild,r),Hr(i,e)}function ft(e,t){we(e,t,ft)}function Yr(e,t,n){var r,a,i,o=Q({},e.props);for(i in t)i=="key"?r=t[i]:i=="ref"?a=t[i]:o[i]=t[i];return arguments.length>2&&(o.children=arguments.length>3?ze.call(arguments,2):n),Ne(e.type,o,r||e.key,a||e.ref,null)}function Br(e,t){var n={__c:t="__cC"+Ir++,__:e,Consumer:function(r,a){return r.children(a)},Provider:function(r){var a,i;return this.getChildContext||(a=[],(i={})[t]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(o){this.props.value!==o.value&&a.some(Mt)},this.sub=function(o){a.push(o);var s=o.componentWillUnmount;o.componentWillUnmount=function(){a.splice(a.indexOf(o),1),s&&s.call(o)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}ze=$r.slice,h={__e:function(e,t,n,r){for(var a,i,o;t=t.__;)if((a=t.__c)&&!a.__)try{if((i=a.constructor)&&i.getDerivedStateFromError!=null&&(a.setState(i.getDerivedStateFromError(e)),o=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,r||{}),o=a.__d),o)return a.__E=a}catch(s){e=s}throw e}},Pr=0,Nr=function(e){return e!=null&&e.constructor===void 0},R.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Q({},this.state),typeof e=="function"&&(e=e(Q({},n),this.props)),e&&Q(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),Mt(this))},R.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Mt(this))},R.prototype.render=U,Pe=[],Lr=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,nt.__r=0,Ir=0;var ei=Object.freeze(Object.defineProperty({__proto__:null,render:we,hydrate:ft,createElement:Y,h:Y,Fragment:U,createRef:Rr,get isValidElement(){return Nr},Component:R,cloneElement:Yr,createContext:Br,toChildArray:q,get options(){return h}},Symbol.toStringTag,{value:"Module"}));typeof window!="undefined"&&window.__PREACT_DEVTOOLS__&&window.__PREACT_DEVTOOLS__.attachPreact("10.7.2",h,{Fragment:U,Component:R});var Nn={};function oe(e){return e.type===U?"Fragment":typeof e.type=="function"?e.type.displayName||e.type.name:typeof e.type=="string"?e.type:"#text"}var Le=[],ve=[];function Vr(){return Le.length>0?Le[Le.length-1]:null}var Ln=!1;function St(e){return typeof e.type=="function"&&e.type!=U}function M(e){for(var t=[e],n=e;n.__o!=null;)t.push(n.__o),n=n.__o;return t.reduce(function(r,a){r+="  in "+oe(a);var i=a.__source;return i?r+=" (at "+i.fileName+":"+i.lineNumber+")":Ln||(Ln=!0,console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.")),r+`
`},"")}var ti=typeof WeakMap=="function",ni=R.prototype.setState;R.prototype.setState=function(e,t){return this.__v==null?this.state==null&&console.warn(`Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.

`+M(Vr())):this.__P==null&&console.warn(`Can't call "this.setState" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

`+M(this.__v)),ni.call(this,e,t)};var ri=R.prototype.forceUpdate;function J(e){var t=e.props,n=oe(e),r="";for(var a in t)if(t.hasOwnProperty(a)&&a!=="children"){var i=t[a];typeof i=="function"&&(i="function "+(i.displayName||i.name)+"() {}"),i=Object(i)!==i||i.toString?i+"":Object.prototype.toString.call(i),r+=" "+a+"="+JSON.stringify(i)}var o=t.children;return"<"+n+r+(o&&o.length?">..</"+n+">":" />")}R.prototype.forceUpdate=function(e){return this.__v==null?console.warn(`Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.

`+M(Vr())):this.__P==null&&console.warn(`Can't call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

`+M(this.__v)),ri.call(this,e)},function(){(function(){var l=h.__b,u=h.diffed,m=h.__,y=h.vnode,v=h.__r;h.diffed=function(_){St(_)&&ve.pop(),Le.pop(),u&&u(_)},h.__b=function(_){St(_)&&Le.push(_),l&&l(_)},h.__=function(_,k){ve=[],m&&m(_,k)},h.vnode=function(_){_.__o=ve.length>0?ve[ve.length-1]:null,y&&y(_)},h.__r=function(_){St(_)&&ve.push(_),v&&v(_)}})();var e=!1,t=h.__b,n=h.diffed,r=h.vnode,a=h.__e,i=h.__,o=h.__h,s=ti?{useEffect:new WeakMap,useLayoutEffect:new WeakMap,lazyPropTypes:new WeakMap}:null,f=[];h.__e=function(l,u,m,y){if(u&&u.__c&&typeof l.then=="function"){var v=l;l=new Error("Missing Suspense. The throwing component was: "+oe(u));for(var _=u;_;_=_.__)if(_.__c&&_.__c.__c){l=v;break}if(l instanceof Error)throw l}try{(y=y||{}).componentStack=M(u),a(l,u,m,y),typeof l.then!="function"&&setTimeout(function(){throw l})}catch(k){throw k}},h.__=function(l,u){if(!u)throw new Error(`Undefined parent passed to render(), this is the second argument.
Check if the element is available in the DOM/has the correct id.`);var m;switch(u.nodeType){case 1:case 11:case 9:m=!0;break;default:m=!1}if(!m){var y=oe(l);throw new Error("Expected a valid HTML node as a second argument to render.	Received "+u+" instead: render(<"+y+" />, "+u+");")}i&&i(l,u)},h.__b=function(l){var u=l.type,m=function w(x){return x?typeof x.type=="function"?w(x.__):x:{}}(l.__);if(e=!0,u===void 0)throw new Error(`Undefined component passed to createElement()

You likely forgot to export your component or might have mixed up default and named imports`+J(l)+`

`+M(l));if(u!=null&&typeof u=="object")throw u.__k!==void 0&&u.__e!==void 0?new Error("Invalid type passed to createElement(): "+u+`

Did you accidentally pass a JSX literal as JSX twice?

  let My`+oe(l)+" = "+J(u)+`;
  let vnode = <My`+oe(l)+` />;

This usually happens when you export a JSX literal and not the component.

`+M(l)):new Error("Invalid type passed to createElement(): "+(Array.isArray(u)?"array":u));if(u!=="thead"&&u!=="tfoot"&&u!=="tbody"||m.type==="table"?u==="tr"&&m.type!=="thead"&&m.type!=="tfoot"&&m.type!=="tbody"&&m.type!=="table"?console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent."+J(l)+`

`+M(l)):u==="td"&&m.type!=="tr"?console.error("Improper nesting of table. Your <td> should have a <tr> parent."+J(l)+`

`+M(l)):u==="th"&&m.type!=="tr"&&console.error("Improper nesting of table. Your <th> should have a <tr>."+J(l)+`

`+M(l)):console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent."+J(l)+`

`+M(l)),l.ref!==void 0&&typeof l.ref!="function"&&typeof l.ref!="object"&&!("$$typeof"in l))throw new Error(`Component's "ref" property should be a function, or an object created by createRef(), but got [`+typeof l.ref+`] instead
`+J(l)+`

`+M(l));if(typeof l.type=="string"){for(var y in l.props)if(y[0]==="o"&&y[1]==="n"&&typeof l.props[y]!="function"&&l.props[y]!=null)throw new Error(`Component's "`+y+'" property should be a function, but got ['+typeof l.props[y]+`] instead
`+J(l)+`

`+M(l))}if(typeof l.type=="function"&&l.type.propTypes){if(l.type.displayName==="Lazy"&&s&&!s.lazyPropTypes.has(l.type)){var v="PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";try{var _=l.type();s.lazyPropTypes.set(l.type,!0),console.warn(v+"Component wrapped in lazy() is "+oe(_))}catch{console.warn(v+"We will log the wrapped component's name once it is loaded.")}}var k=l.props;l.type.__f&&delete(k=function(w,x){for(var A in x)w[A]=x[A];return w}({},k)).ref,function(w,x,A,P,z){Object.keys(w).forEach(function(W){var I;try{I=w[W](x,W,P,"prop",null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(B){I=B}!I||I.message in Nn||(Nn[I.message]=!0,console.error("Failed prop type: "+I.message+(z&&`
`+z()||"")))})}(l.type.propTypes,k,0,oe(l),function(){return M(l)})}t&&t(l)},h.__h=function(l,u,m){if(!l||!e)throw new Error("Hook can only be invoked from render methods.");o&&o(l,u,m)};var d=function(l,u){return{get:function(){var m="get"+l+u;f&&f.indexOf(m)<0&&(f.push(m),console.warn("getting vnode."+l+" is deprecated, "+u))},set:function(){var m="set"+l+u;f&&f.indexOf(m)<0&&(f.push(m),console.warn("setting vnode."+l+" is not allowed, "+u))}}},c={nodeName:d("nodeName","use vnode.type"),attributes:d("attributes","use vnode.props"),children:d("children","use vnode.props.children")},p=Object.create({},c);h.vnode=function(l){var u=l.props;if(l.type!==null&&u!=null&&("__source"in u||"__self"in u)){var m=l.props={};for(var y in u){var v=u[y];y==="__source"?l.__source=v:y==="__self"?l.__self=v:m[y]=v}}l.__proto__=p,r&&r(l)},h.diffed=function(l){if(l.__k&&l.__k.forEach(function(_){if(_&&_.type===void 0){delete _.__,delete _.__b;var k=Object.keys(_).join(",");throw new Error("Objects are not valid as a child. Encountered an object with the keys {"+k+`}.

`+M(l))}}),e=!1,n&&n(l),l.__k!=null)for(var u=[],m=0;m<l.__k.length;m++){var y=l.__k[m];if(y&&y.key!=null){var v=y.key;if(u.indexOf(v)!==-1){console.error('Following component has two or more children with the same key attribute: "'+v+`". This may cause glitches and misbehavior in rendering process. Component: 

`+J(l)+`

`+M(l));break}u.push(v)}}}}();const ai="_toc_1lnsy_1",ii="_part_1lnsy_16",oi="_dropdown_1lnsy_16",si="_book_title_1lnsy_24",li="_part_title_1lnsy_24",ci="_part_title_rest_1lnsy_32",fi="_chapter_title_1lnsy_32",ui="_part_title_first_1lnsy_59";const di="Experimentology",pi="An Open Science Approach to Experimental Psychology Methods",mi=[{first:"Preliminaries",rest:"",chapters:[{title:"Experiments",href:"1-experiments"},{title:"Theories",href:"2-theories"},{title:"Replication and reproducibility",href:"3-replication"},{title:"Ethics",href:"4-ethics"}]},{first:"Statistics",rest:"",chapters:[{title:"Estimation",href:"5-estimation"},{title:"Inference",href:"6-inference"},{title:"Models",href:"7-models"}]},{first:"Design",rest:" and Planning",chapters:[{title:"Measurement",href:"8-measurement"},{title:"Design of experiments",href:"9-design"},{title:"Sampling",href:"10-sampling"},{title:"Experimental strategy",href:"11-strategy"}]},{first:"Execution",rest:"",chapters:[{title:"Preregistration",href:"12-prereg"},{title:"Recruitment and Consent",href:"13-consent"},{title:"Data collection",href:"14-collection"},{title:"Project management",href:"15-management"}]},{first:"Analysis",rest:" and Reporting",chapters:[{title:"Visualization",href:"16-viz"},{title:"Exploratory data analysis",href:"17-eda"},{title:"Writing",href:"18-writing"},{title:"Meta-analysis",href:"19-meta"},{title:"Conclusions",href:"20-conclusions"}]},{first:"Appendices",rest:"",chapters:[{title:"GitHub Tutorial",href:"A-git"},{title:"R Markdown Tutorial",href:"B-rmarkdown"},{title:"Tidyverse Tutorial",href:"C-tidyverse"},{title:"ggplot Tutorial",href:"D-ggplot"},{title:"Instructor\u2019s guide",href:"E-instructors"}]}];var Ce,F,In,xe=0,Gr=[],$n=h.__b,Mn=h.__r,Rn=h.diffed,Dn=h.__c,Fn=h.unmount;function Ue(e,t){h.__h&&h.__h(F,e,xe||t),xe=0;var n=F.__H||(F.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function Xr(e){return xe=1,qr(Jr,e)}function qr(e,t,n){var r=Ue(Ce++,2);return r.t=e,r.__c||(r.__=[n?n(t):Jr(void 0,t),function(a){var i=r.t(r.__[0],a);r.__[0]!==i&&(r.__=[i,r.__[1]],r.__c.setState({}))}],r.__c=F),r.__}function on(e,t){var n=Ue(Ce++,3);!h.__s&&ln(n.__H,t)&&(n.__=e,n.__H=t,F.__H.__h.push(n))}function Kr(e,t){var n=Ue(Ce++,4);!h.__s&&ln(n.__H,t)&&(n.__=e,n.__H=t,F.__h.push(n))}function Me(e){return xe=5,sn(function(){return{current:e}},[])}function vi(e,t,n){xe=6,Kr(function(){return typeof e=="function"?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0},n==null?n:n.concat(e))}function sn(e,t){var n=Ue(Ce++,7);return ln(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function hi(e,t){return xe=8,sn(function(){return e},t)}function _i(e){var t=F.context[e.__c],n=Ue(Ce++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(F)),t.props.value):e.__}function bi(e,t){h.useDebugValue&&h.useDebugValue(t?t(e):e)}function yi(){for(var e;e=Gr.shift();)if(e.__P)try{e.__H.__h.forEach(Ke),e.__H.__h.forEach(Rt),e.__H.__h=[]}catch(t){e.__H.__h=[],h.__e(t,e.__v)}}h.__b=function(e){F=null,$n&&$n(e)},h.__r=function(e){Mn&&Mn(e),Ce=0;var t=(F=e.__c).__H;t&&(t.__h.forEach(Ke),t.__h.forEach(Rt),t.__h=[])},h.diffed=function(e){Rn&&Rn(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(Gr.push(t)!==1&&In===h.requestAnimationFrame||((In=h.requestAnimationFrame)||function(n){var r,a=function(){clearTimeout(i),zn&&cancelAnimationFrame(r),setTimeout(n)},i=setTimeout(a,100);zn&&(r=requestAnimationFrame(a))})(yi)),F=null},h.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Ke),n.__h=n.__h.filter(function(r){return!r.__||Rt(r)})}catch(r){t.some(function(a){a.__h&&(a.__h=[])}),t=[],h.__e(r,n.__v)}}),Dn&&Dn(e,t)},h.unmount=function(e){Fn&&Fn(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{Ke(r)}catch(a){t=a}}),t&&h.__e(t,n.__v))};var zn=typeof requestAnimationFrame=="function";function Ke(e){var t=F,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),F=t}function Rt(e){var t=F;e.__c=e.__(),F=t}function ln(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Jr(e,t){return typeof t=="function"?t(e):t}function gi(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}),t}var ki=gi(ei),Zr,Qr,ea,Dt=ki,wi=0;function Un(e,t,n,r,a){var i,o,s={};for(o in t)o=="ref"?i=t[o]:s[o]=t[o];var f={type:e,props:s,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--wi,__source:a,__self:r};if(typeof e=="function"&&(i=e.defaultProps))for(o in i)s[o]===void 0&&(s[o]=i[o]);return Dt.options.vnode&&Dt.options.vnode(f),f}ea=Dt.Fragment,Qr=Un,Zr=Un;const D=Qr,Re=Zr,xi=ea,Ci=()=>Re("header",{class:ai,id:"toc",children:[D("a",{class:si,href:"/",children:`${di}: ${pi}`}),D("nav",{children:mi.map(e=>D(Ai,V({},e)))})]}),Ai=({first:e,rest:t,chapters:n})=>{const[r,a]=Xr(!0),i=Me(),o=Me(),s=o.current,f={width:0};return on(()=>{const{width:d}=i.current.getBoundingClientRect();o.current={width:d},a(!1)},[]),Re("div",{class:ii,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[Re("div",{class:li,children:[D("div",{class:ui,children:e}),D("div",{class:ci,ref:i,style:r?s:f,children:t})]}),D("div",{class:oi,children:n.map(d=>D(Ei,V({hover:r},d)))})]})},Ei=({title:e,href:t,hover:n})=>{const r=Me(),a=Me(),i=a.current,o={width:0,height:0};return on(()=>{const{width:s,height:f}=r.current.getBoundingClientRect();a.current={width:s,height:f}},[]),D("a",{class:fi,ref:r,href:t,style:n?i:o,children:e})};/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Hn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Hn(Object(n),!0).forEach(function(r){Ti(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hn(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function at(e){return at=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},at(e)}function Oi(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Wn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Si(e,t,n){return t&&Wn(e.prototype,t),n&&Wn(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ti(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function cn(e,t){return Ni(e)||Ii(e,t)||ta(e,t)||Mi()}function ut(e){return Pi(e)||Li(e)||ta(e)||$i()}function Pi(e){if(Array.isArray(e))return Ft(e)}function Ni(e){if(Array.isArray(e))return e}function Li(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ii(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(f){i=!0,s=f}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function ta(e,t){if(!!e){if(typeof e=="string")return Ft(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ft(e,t)}}function Ft(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function $i(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Mi(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var jn=function(){},fn={},na={},ra=null,aa={mark:jn,measure:jn};try{typeof window!="undefined"&&(fn=window),typeof document!="undefined"&&(na=document),typeof MutationObserver!="undefined"&&(ra=MutationObserver),typeof performance!="undefined"&&(aa=performance)}catch{}var Ri=fn.navigator||{},Yn=Ri.userAgent,Bn=Yn===void 0?"":Yn,le=fn,T=na,Vn=ra,Ge=aa;le.document;var ae=!!T.documentElement&&!!T.head&&typeof T.addEventListener=="function"&&typeof T.createElement=="function",ia=~Bn.indexOf("MSIE")||~Bn.indexOf("Trident/"),te="___FONT_AWESOME___",zt=16,oa="fa",sa="svg-inline--fa",de="data-fa-i2svg",Ut="data-fa-pseudo-element",Di="data-fa-pseudo-element-pending",un="data-prefix",dn="data-icon",Gn="fontawesome-i2svg",Fi="async",zi=["HTML","HEAD","STYLE","SCRIPT"],la=function(){try{return!0}catch{return!1}}(),pn={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},it={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},ca={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Ui={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Hi=/fa[srltdbk\-\ ]/,fa="fa-layers-text",Wi=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,ji={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},ua=[1,2,3,4,5,6,7,8,9,10],Yi=ua.concat([11,12,13,14,15,16,17,18,19,20]),Bi=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ue={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Vi=[].concat(ut(Object.keys(it)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ue.GROUP,ue.SWAP_OPACITY,ue.PRIMARY,ue.SECONDARY]).concat(ua.map(function(e){return"".concat(e,"x")})).concat(Yi.map(function(e){return"w-".concat(e)})),da=le.FontAwesomeConfig||{};function Gi(e){var t=T.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Xi(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(T&&typeof T.querySelector=="function"){var qi=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];qi.forEach(function(e){var t=cn(e,2),n=t[0],r=t[1],a=Xi(Gi(n));a!=null&&(da[r]=a)})}var Ki={familyPrefix:oa,styleDefault:"solid",replacementClass:sa,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Ie=b(b({},Ki),da);Ie.autoReplaceSvg||(Ie.observeMutations=!1);var g={};Object.keys(Ie).forEach(function(e){Object.defineProperty(g,e,{enumerable:!0,set:function(n){Ie[e]=n,Je.forEach(function(r){return r(g)})},get:function(){return Ie[e]}})});le.FontAwesomeConfig=g;var Je=[];function Ji(e){return Je.push(e),function(){Je.splice(Je.indexOf(e),1)}}var ie=zt,G={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Zi(e){if(!(!e||!ae)){var t=T.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=T.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return T.head.insertBefore(t,r),e}}var Qi="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function De(){for(var e=12,t="";e-- >0;)t+=Qi[Math.random()*62|0];return t}function Ae(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function mn(e){return e.classList?Ae(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function pa(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function eo(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(pa(e[n]),'" ')},"").trim()}function dt(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function vn(e){return e.size!==G.size||e.x!==G.x||e.y!==G.y||e.rotate!==G.rotate||e.flipX||e.flipY}function to(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},d={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:f,path:d}}function no(e){var t=e.transform,n=e.width,r=n===void 0?zt:n,a=e.height,i=a===void 0?zt:a,o=e.startCentered,s=o===void 0?!1:o,f="";return s&&ia?f+="translate(".concat(t.x/ie-r/2,"em, ").concat(t.y/ie-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(t.x/ie,"em), calc(-50% + ").concat(t.y/ie,"em)) "):f+="translate(".concat(t.x/ie,"em, ").concat(t.y/ie,"em) "),f+="scale(".concat(t.size/ie*(t.flipX?-1:1),", ").concat(t.size/ie*(t.flipY?-1:1),") "),f+="rotate(".concat(t.rotate,"deg) "),f}var ro=`:root, :host {
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
}`;function ma(){var e=oa,t=sa,n=g.familyPrefix,r=g.replacementClass,a=ro;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Xn=!1;function Tt(){g.autoAddCss&&!Xn&&(Zi(ma()),Xn=!0)}var ao={mixout:function(){return{dom:{css:ma,insertCss:Tt}}},hooks:function(){return{beforeDOMElementCreation:function(){Tt()},beforeI2svg:function(){Tt()}}}},ne=le||{};ne[te]||(ne[te]={});ne[te].styles||(ne[te].styles={});ne[te].hooks||(ne[te].hooks={});ne[te].shims||(ne[te].shims=[]);var j=ne[te],va=[],io=function e(){T.removeEventListener("DOMContentLoaded",e),ot=1,va.map(function(t){return t()})},ot=!1;ae&&(ot=(T.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(T.readyState),ot||T.addEventListener("DOMContentLoaded",io));function oo(e){!ae||(ot?setTimeout(e,0):va.push(e))}function He(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?pa(e):"<".concat(t," ").concat(eo(r),">").concat(i.map(He).join(""),"</").concat(t,">")}function qn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var so=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Pt=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?so(n,a):n,f,d,c;for(r===void 0?(f=1,c=t[i[0]]):(f=0,c=r);f<o;f++)d=i[f],c=s(c,t[d],d,t);return c};function lo(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Ht(e){var t=lo(e);return t.length===1?t[0].toString(16):null}function co(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Kn(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Wt(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Kn(t);typeof j.hooks.addPack=="function"&&!a?j.hooks.addPack(e,Kn(t)):j.styles[e]=b(b({},j.styles[e]||{}),i),e==="fas"&&Wt("fa",t)}var $e=j.styles,fo=j.shims,uo=Object.values(ca),hn=null,ha={},_a={},ba={},ya={},ga={},po=Object.keys(pn);function mo(e){return~Vi.indexOf(e)}function vo(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!mo(a)?a:null}var ka=function(){var t=function(i){return Pt($e,function(o,s,f){return o[f]=Pt(s,i,{}),o},{})};ha=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){a[f.toString(16)]=o})}return a}),_a=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){a[f]=o})}return a}),ga=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(f){a[f]=o}),a});var n="far"in $e||g.autoFetchSvg,r=Pt(fo,function(a,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:f}),a},{names:{},unicodes:{}});ba=r.names,ya=r.unicodes,hn=pt(g.styleDefault)};Ji(function(e){hn=pt(e.styleDefault)});ka();function _n(e,t){return(ha[e]||{})[t]}function ho(e,t){return(_a[e]||{})[t]}function _e(e,t){return(ga[e]||{})[t]}function wa(e){return ba[e]||{prefix:null,iconName:null}}function _o(e){var t=ya[e],n=_n("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ce(){return hn}var bn=function(){return{prefix:null,iconName:null,rest:[]}};function pt(e){var t=pn[e],n=it[e]||it[t],r=e in j.styles?e:null;return n||r||null}function mt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var f=vo(g.familyPrefix,s);if($e[s]?(s=uo.includes(s)?Ui[s]:s,a=s,o.prefix=s):po.indexOf(s)>-1?(a=s,o.prefix=pt(s)):f?o.iconName=f:s!==g.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var d=a==="fa"?wa(o.iconName):{},c=_e(o.prefix,o.iconName);d.prefix&&(a=null),o.iconName=d.iconName||c||o.iconName,o.prefix=d.prefix||o.prefix,o.prefix==="far"&&!$e.far&&$e.fas&&!g.autoFetchSvg&&(o.prefix="fas")}return o},bn());return(i.prefix==="fa"||a==="fa")&&(i.prefix=ce()||"fas"),i}var bo=function(){function e(){Oi(this,e),this.definitions={}}return Si(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=b(b({},n.definitions[s]||{}),o[s]),Wt(s,o[s]);var f=ca[s];f&&Wt(f,o[s]),ka()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,f=o.iconName,d=o.icon,c=d[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(p){typeof p=="string"&&(n[s][p]=d)}),n[s][f]=d}),n}}]),e}(),Jn=[],be={},ge={},yo=Object.keys(ge);function go(e,t){var n=t.mixoutsTo;return Jn=e,be={},Object.keys(ge).forEach(function(r){yo.indexOf(r)===-1&&delete ge[r]}),Jn.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),at(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){be[o]||(be[o]=[]),be[o].push(i[o])})}r.provides&&r.provides(ge)}),n}function jt(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=be[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function pe(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=be[e]||[];a.forEach(function(i){i.apply(null,n)})}function re(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ge[e]?ge[e].apply(null,t):void 0}function Yt(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ce();if(!!t)return t=_e(n,t)||t,qn(xa.definitions,n,t)||qn(j.styles,n,t)}var xa=new bo,ko=function(){g.autoReplaceSvg=!1,g.observeMutations=!1,pe("noAuto")},wo={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ae?(pe("beforeI2svg",t),re("pseudoElements2svg",t),re("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;g.autoReplaceSvg===!1&&(g.autoReplaceSvg=!0),g.observeMutations=!0,oo(function(){Co({autoReplaceSvgRoot:n}),pe("watch",t)})}},xo={icon:function(t){if(t===null)return null;if(at(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:_e(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=pt(t[0]);return{prefix:r,iconName:_e(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(g.familyPrefix,"-"))>-1||t.match(Hi))){var a=mt(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||ce(),iconName:_e(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=ce();return{prefix:i,iconName:_e(i,t)||t}}}},H={noAuto:ko,config:g,dom:wo,parse:xo,library:xa,findIconDefinition:Yt,toHtml:He},Co=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?T:n;(Object.keys(j.styles).length>0||g.autoFetchSvg)&&ae&&g.autoReplaceSvg&&H.dom.i2svg({node:r})};function vt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return He(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!ae){var r=T.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Ao(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(vn(o)&&n.found&&!r.found){var s=n.width,f=n.height,d={x:s/f/2,y:.5};a.style=dt(b(b({},i),{},{"transform-origin":"".concat(d.x+o.x/16,"em ").concat(d.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Eo(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(g.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:b(b({},a),{},{id:o}),children:r}]}]}function yn(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,f=e.title,d=e.maskId,c=e.titleId,p=e.extra,l=e.watchable,u=l===void 0?!1:l,m=r.found?r:n,y=m.width,v=m.height,_=a==="fak",k=[g.replacementClass,i?"".concat(g.familyPrefix,"-").concat(i):""].filter(function(I){return p.classes.indexOf(I)===-1}).filter(function(I){return I!==""||!!I}).concat(p.classes).join(" "),w={children:[],attributes:b(b({},p.attributes),{},{"data-prefix":a,"data-icon":i,class:k,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(v)})},x=_&&!~p.classes.indexOf("fa-fw")?{width:"".concat(y/v*16*.0625,"em")}:{};u&&(w.attributes[de]=""),f&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(c||De())},children:[f]}),delete w.attributes.title);var A=b(b({},w),{},{prefix:a,iconName:i,main:n,mask:r,maskId:d,transform:o,symbol:s,styles:b(b({},x),p.styles)}),P=r.found&&n.found?re("generateAbstractMask",A)||{children:[],attributes:{}}:re("generateAbstractIcon",A)||{children:[],attributes:{}},z=P.children,W=P.attributes;return A.children=z,A.attributes=W,s?Eo(A):Ao(A)}function Zn(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,f=s===void 0?!1:s,d=b(b(b({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(d[de]="");var c=b({},o.styles);vn(a)&&(c.transform=no({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var p=dt(c);p.length>0&&(d.style=p);var l=[];return l.push({tag:"span",attributes:d,children:[t]}),i&&l.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),l}function Oo(e){var t=e.content,n=e.title,r=e.extra,a=b(b(b({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=dt(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Nt=j.styles;function Bt(e){var t=e[0],n=e[1],r=e.slice(4),a=cn(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(g.familyPrefix,"-").concat(ue.GROUP)},children:[{tag:"path",attributes:{class:"".concat(g.familyPrefix,"-").concat(ue.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(g.familyPrefix,"-").concat(ue.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var So={found:!1,width:512,height:512};function To(e,t){!la&&!g.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Vt(e,t){var n=t;return t==="fa"&&g.styleDefault!==null&&(t=ce()),new Promise(function(r,a){if(re("missingIconAbstract"),n==="fa"){var i=wa(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Nt[t]&&Nt[t][e]){var o=Nt[t][e];return r(Bt(o))}To(e,t),r(b(b({},So),{},{icon:g.showMissingIcons&&e?re("missingIconAbstract")||{}:{}}))})}var Qn=function(){},Gt=g.measurePerformance&&Ge&&Ge.mark&&Ge.measure?Ge:{mark:Qn,measure:Qn},Ee='FA "6.1.1"',Po=function(t){return Gt.mark("".concat(Ee," ").concat(t," begins")),function(){return Ca(t)}},Ca=function(t){Gt.mark("".concat(Ee," ").concat(t," ends")),Gt.measure("".concat(Ee," ").concat(t),"".concat(Ee," ").concat(t," begins"),"".concat(Ee," ").concat(t," ends"))},gn={begin:Po,end:Ca},Ze=function(){};function er(e){var t=e.getAttribute?e.getAttribute(de):null;return typeof t=="string"}function No(e){var t=e.getAttribute?e.getAttribute(un):null,n=e.getAttribute?e.getAttribute(dn):null;return t&&n}function Lo(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(g.replacementClass)}function Io(){if(g.autoReplaceSvg===!0)return Qe.replace;var e=Qe[g.autoReplaceSvg];return e||Qe.replace}function $o(e){return T.createElementNS("http://www.w3.org/2000/svg",e)}function Mo(e){return T.createElement(e)}function Aa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?$o:Mo:n;if(typeof e=="string")return T.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Aa(o,{ceFn:r}))}),a}function Ro(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Qe={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Aa(a),n)}),n.getAttribute(de)===null&&g.keepOriginalSource){var r=T.createComment(Ro(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~mn(n).indexOf(g.replacementClass))return Qe.replace(t);var a=new RegExp("".concat(g.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,f){return f===g.replacementClass||f.match(a)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return He(s)}).join(`
`);n.setAttribute(de,""),n.innerHTML=o}};function tr(e){e()}function Ea(e,t){var n=typeof t=="function"?t:Ze;if(e.length===0)n();else{var r=tr;g.mutateApproach===Fi&&(r=le.requestAnimationFrame||tr),r(function(){var a=Io(),i=gn.begin("mutate");e.map(a),i(),n()})}}var kn=!1;function Oa(){kn=!0}function Xt(){kn=!1}var st=null;function nr(e){if(!!Vn&&!!g.observeMutations){var t=e.treeCallback,n=t===void 0?Ze:t,r=e.nodeCallback,a=r===void 0?Ze:r,i=e.pseudoElementsCallback,o=i===void 0?Ze:i,s=e.observeMutationsRoot,f=s===void 0?T:s;st=new Vn(function(d){if(!kn){var c=ce();Ae(d).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!er(p.addedNodes[0])&&(g.searchPseudoElements&&o(p.target),n(p.target)),p.type==="attributes"&&p.target.parentNode&&g.searchPseudoElements&&o(p.target.parentNode),p.type==="attributes"&&er(p.target)&&~Bi.indexOf(p.attributeName))if(p.attributeName==="class"&&No(p.target)){var l=mt(mn(p.target)),u=l.prefix,m=l.iconName;p.target.setAttribute(un,u||c),m&&p.target.setAttribute(dn,m)}else Lo(p.target)&&a(p.target)})}}),ae&&st.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Do(){!st||st.disconnect()}function Fo(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function zo(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=mt(mn(e));return a.prefix||(a.prefix=ce()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||a.prefix&&r.length>0&&(a.iconName=ho(a.prefix,e.innerText)||_n(a.prefix,Ht(e.innerText))),a}function Uo(e){var t=Ae(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return g.autoA11y&&(n?t["aria-labelledby"]="".concat(g.replacementClass,"-title-").concat(r||De()):(t["aria-hidden"]="true",t.focusable="false")),t}function Ho(){return{iconName:null,title:null,titleId:null,prefix:null,transform:G,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function rr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=zo(e),r=n.iconName,a=n.prefix,i=n.rest,o=Uo(e),s=jt("parseNodeAttributes",{},e),f=t.styleParser?Fo(e):[];return b({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:G,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var Wo=j.styles;function Sa(e){var t=g.autoReplaceSvg==="nest"?rr(e,{styleParser:!1}):rr(e);return~t.extra.classes.indexOf(fa)?re("generateLayersText",e,t):re("generateSvgReplacementMutation",e,t)}function ar(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ae)return Promise.resolve();var n=T.documentElement.classList,r=function(p){return n.add("".concat(Gn,"-").concat(p))},a=function(p){return n.remove("".concat(Gn,"-").concat(p))},i=g.autoFetchSvg?Object.keys(pn):Object.keys(Wo),o=[".".concat(fa,":not([").concat(de,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(de,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ae(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var f=gn.begin("onTree"),d=s.reduce(function(c,p){try{var l=Sa(p);l&&c.push(l)}catch(u){la||u.name==="MissingIcon"&&console.error(u)}return c},[]);return new Promise(function(c,p){Promise.all(d).then(function(l){Ea(l,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),f(),c()})}).catch(function(l){f(),p(l)})})}function jo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Sa(e).then(function(n){n&&Ea([n],t)})}function Yo(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Yt(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Yt(a||{})),e(r,b(b({},n),{},{mask:a}))}}var Bo=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?G:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,f=s===void 0?null:s,d=n.maskId,c=d===void 0?null:d,p=n.title,l=p===void 0?null:p,u=n.titleId,m=u===void 0?null:u,y=n.classes,v=y===void 0?[]:y,_=n.attributes,k=_===void 0?{}:_,w=n.styles,x=w===void 0?{}:w;if(!!t){var A=t.prefix,P=t.iconName,z=t.icon;return vt(b({type:"icon"},t),function(){return pe("beforeDOMElementCreation",{iconDefinition:t,params:n}),g.autoA11y&&(l?k["aria-labelledby"]="".concat(g.replacementClass,"-title-").concat(m||De()):(k["aria-hidden"]="true",k.focusable="false")),yn({icons:{main:Bt(z),mask:f?Bt(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:P,transform:b(b({},G),a),symbol:o,title:l,maskId:c,titleId:m,extra:{attributes:k,styles:x,classes:v}})})}},Vo={mixout:function(){return{icon:Yo(Bo)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ar,n.nodeCallback=jo,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?T:r,i=n.callback,o=i===void 0?function(){}:i;return ar(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,f=r.transform,d=r.symbol,c=r.mask,p=r.maskId,l=r.extra;return new Promise(function(u,m){Promise.all([Vt(a,s),c.iconName?Vt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var v=cn(y,2),_=v[0],k=v[1];u([n,yn({icons:{main:_,mask:k},prefix:s,iconName:a,transform:f,symbol:d,maskId:p,title:i,titleId:o,extra:l,watchable:!0})])}).catch(m)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,f=dt(s);f.length>0&&(a.style=f);var d;return vn(o)&&(d=re("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(d||i.icon),{children:r,attributes:a}}}},Go={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return vt({type:"layer"},function(){pe("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(g.familyPrefix,"-layers")].concat(ut(i)).join(" ")},children:o}]})}}}},Xo={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,f=r.attributes,d=f===void 0?{}:f,c=r.styles,p=c===void 0?{}:c;return vt({type:"counter",content:n},function(){return pe("beforeDOMElementCreation",{content:n,params:r}),Oo({content:n.toString(),title:i,extra:{attributes:d,styles:p,classes:["".concat(g.familyPrefix,"-layers-counter")].concat(ut(s))}})})}}}},qo={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?G:a,o=r.title,s=o===void 0?null:o,f=r.classes,d=f===void 0?[]:f,c=r.attributes,p=c===void 0?{}:c,l=r.styles,u=l===void 0?{}:l;return vt({type:"text",content:n},function(){return pe("beforeDOMElementCreation",{content:n,params:r}),Zn({content:n,transform:b(b({},G),i),title:s,extra:{attributes:p,styles:u,classes:["".concat(g.familyPrefix,"-layers-text")].concat(ut(d))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,f=null;if(ia){var d=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/d,f=c.height/d}return g.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Zn({content:n.innerHTML,width:s,height:f,transform:i,title:a,extra:o,watchable:!0})])}}},Ko=new RegExp('"',"ug"),ir=[1105920,1112319];function Jo(e){var t=e.replace(Ko,""),n=co(t,0),r=n>=ir[0]&&n<=ir[1],a=t.length===2?t[0]===t[1]:!1;return{value:Ht(a?t[0]:t),isSecondary:r||a}}function or(e,t){var n="".concat(Di).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ae(e.children),o=i.filter(function(P){return P.getAttribute(Ut)===t})[0],s=le.getComputedStyle(e,t),f=s.getPropertyValue("font-family").match(Wi),d=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!f)return e.removeChild(o),r();if(f&&c!=="none"&&c!==""){var p=s.getPropertyValue("content"),l=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?it[f[2].toLowerCase()]:ji[d],u=Jo(p),m=u.value,y=u.isSecondary,v=f[0].startsWith("FontAwesome"),_=_n(l,m),k=_;if(v){var w=_o(m);w.iconName&&w.prefix&&(_=w.iconName,l=w.prefix)}if(_&&!y&&(!o||o.getAttribute(un)!==l||o.getAttribute(dn)!==k)){e.setAttribute(n,k),o&&e.removeChild(o);var x=Ho(),A=x.extra;A.attributes[Ut]=t,Vt(_,l).then(function(P){var z=yn(b(b({},x),{},{icons:{main:P,mask:bn()},prefix:l,iconName:k,extra:A,watchable:!0})),W=T.createElement("svg");t==="::before"?e.insertBefore(W,e.firstChild):e.appendChild(W),W.outerHTML=z.map(function(I){return He(I)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Zo(e){return Promise.all([or(e,"::before"),or(e,"::after")])}function Qo(e){return e.parentNode!==document.head&&!~zi.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ut)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function sr(e){if(!!ae)return new Promise(function(t,n){var r=Ae(e.querySelectorAll("*")).filter(Qo).map(Zo),a=gn.begin("searchPseudoElements");Oa(),Promise.all(r).then(function(){a(),Xt(),t()}).catch(function(){a(),Xt(),n()})})}var es={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=sr,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?T:r;g.searchPseudoElements&&sr(a)}}},lr=!1,ts={mixout:function(){return{dom:{unwatch:function(){Oa(),lr=!0}}}},hooks:function(){return{bootstrap:function(){nr(jt("mutationObserverCallbacks",{}))},noAuto:function(){Do()},watch:function(n){var r=n.observeMutationsRoot;lr?Xt():nr(jt("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},cr=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},ns={mixout:function(){return{parse:{transform:function(n){return cr(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=cr(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(a.x*32,", ").concat(a.y*32,") "),d="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),p={transform:"".concat(f," ").concat(d," ").concat(c)},l={transform:"translate(".concat(o/2*-1," -256)")},u={outer:s,inner:p,path:l};return{tag:"g",attributes:b({},u.outer),children:[{tag:"g",attributes:b({},u.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:b(b({},r.icon.attributes),u.path)}]}]}}}},Lt={x:0,y:0,width:"100%",height:"100%"};function fr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function rs(e){return e.tag==="g"?e.children:[e]}var as={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?mt(a.split(" ").map(function(o){return o.trim()})):bn();return i.prefix||(i.prefix=ce()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,f=n.transform,d=i.width,c=i.icon,p=o.width,l=o.icon,u=to({transform:f,containerWidth:p,iconWidth:d}),m={tag:"rect",attributes:b(b({},Lt),{},{fill:"white"})},y=c.children?{children:c.children.map(fr)}:{},v={tag:"g",attributes:b({},u.inner),children:[fr(b({tag:c.tag,attributes:b(b({},c.attributes),u.path)},y))]},_={tag:"g",attributes:b({},u.outer),children:[v]},k="mask-".concat(s||De()),w="clip-".concat(s||De()),x={tag:"mask",attributes:b(b({},Lt),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,_]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:rs(l)},x]};return r.push(A,{tag:"rect",attributes:b({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(k,")")},Lt)}),{children:r,attributes:a}}}},is={provides:function(t){var n=!1;le.matchMedia&&(n=le.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:b(b({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=b(b({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:b(b({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:b(b({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:b(b({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:b(b({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:b(b({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:b(b({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:b(b({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},os={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},ss=[ao,Vo,Go,Xo,qo,es,ts,ns,as,is,os];go(ss,{mixoutsTo:H});H.noAuto;H.config;H.library;H.dom;var qt=H.parse;H.findIconDefinition;H.toHtml;var ls=H.icon;H.layer;H.text;H.counter;var Ta={exports:{}},cs="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",fs=cs,us=fs;function Pa(){}function Na(){}Na.resetWarningCache=Pa;var ds=function(){function e(r,a,i,o,s,f){if(f!==us){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Na,resetWarningCache:Pa};return n.PropTypes=n,n};Ta.exports=ds();var C=Ta.exports;function La(e,t){for(var n in t)e[n]=t[n];return e}function Kt(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function Jt(e){this.props=e}function ps(e,t){function n(a){var i=this.props.ref,o=i==a.ref;return!o&&i&&(i.call?i(null):i.current=null),t?!t(this.props,a)||!o:Kt(this.props,a)}function r(a){return this.shouldComponentUpdate=n,Y(e,a)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(Jt.prototype=new R).isPureReactComponent=!0,Jt.prototype.shouldComponentUpdate=function(e,t){return Kt(this.props,e)||Kt(this.state,t)};var ur=h.__b;h.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),ur&&ur(e)};var ms=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function vs(e){function t(n){var r=La({},n);return delete r.ref,e(r,n.ref||null)}return t.$$typeof=ms,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var dr=function(e,t){return e==null?null:q(q(e).map(t))},hs={map:dr,forEach:dr,count:function(e){return e?q(e).length:0},only:function(e){var t=q(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:q},_s=h.__e;h.__e=function(e,t,n,r){if(e.then){for(var a,i=t;i=i.__;)if((a=i.__c)&&a.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),a.__c(e,t)}_s(e,t,n,r)};var pr=h.unmount;function et(){this.__u=0,this.t=null,this.__b=null}function Ia(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function bs(e){var t,n,r;function a(i){if(t||(t=e()).then(function(o){n=o.default||o},function(o){r=o}),r)throw r;if(!n)throw t;return Y(n,i)}return a.displayName="Lazy",a.__f=!0,a}function Oe(){this.u=null,this.o=null}h.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),pr&&pr(e)},(et.prototype=new R).__c=function(e,t){var n=t.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var a=Ia(r.__v),i=!1,o=function(){i||(i=!0,n.__R=null,a?a(s):s())};n.__R=o;var s=function(){if(!--r.__u){if(r.state.__e){var d=r.state.__e;r.__v.__k[0]=function p(l,u,m){return l&&(l.__v=null,l.__k=l.__k&&l.__k.map(function(y){return p(y,u,m)}),l.__c&&l.__c.__P===u&&(l.__e&&m.insertBefore(l.__e,l.__d),l.__c.__e=!0,l.__c.__P=m)),l}(d,d.__c.__P,d.__c.__O)}var c;for(r.setState({__e:r.__b=null});c=r.t.pop();)c.forceUpdate()}},f=t.__h===!0;r.__u++||f||r.setState({__e:r.__b=r.__v.__k[0]}),e.then(o,o)},et.prototype.componentWillUnmount=function(){this.t=[]},et.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function i(o,s,f){return o&&(o.__c&&o.__c.__H&&(o.__c.__H.__.forEach(function(d){typeof d.__c=="function"&&d.__c()}),o.__c.__H=null),(o=La({},o)).__c!=null&&(o.__c.__P===f&&(o.__c.__P=s),o.__c=null),o.__k=o.__k&&o.__k.map(function(d){return i(d,s,f)})),o}(this.__b,n,r.__O=r.__P)}this.__b=null}var a=t.__e&&Y(U,null,e.fallback);return a&&(a.__h=null),[Y(U,null,t.__e?null:e.children),a]};var mr=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};function ys(e){return this.getChildContext=function(){return e.context},e.children}function gs(e){var t=this,n=e.i;t.componentWillUnmount=function(){we(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),e.__v?(t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),t.i.appendChild(r)},insertBefore:function(r,a){this.childNodes.push(r),t.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),t.i.removeChild(r)}}),we(Y(ys,{context:t.context},e.__v),t.l)):t.l&&t.componentWillUnmount()}function ks(e,t){var n=Y(gs,{__v:e,i:t});return n.containerInfo=t,n}(Oe.prototype=new R).__e=function(e){var t=this,n=Ia(t.__v),r=t.o.get(e);return r[0]++,function(a){var i=function(){t.props.revealOrder?(r.push(a),mr(t,e,r)):a()};n?n(i):i()}},Oe.prototype.render=function(e){this.u=null,this.o=new Map;var t=q(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},Oe.prototype.componentDidUpdate=Oe.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){mr(e,n,t)})};var $a=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.element")||60103,ws=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,xs=typeof document!="undefined",Cs=function(e){return(typeof Symbol!="undefined"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};function As(e,t,n){return t.__k==null&&(t.textContent=""),we(e,t),typeof n=="function"&&n(),e?e.__c:null}function Es(e,t,n){return ft(e,t),typeof n=="function"&&n(),e?e.__c:null}R.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(R.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var vr=h.event;function Os(){}function Ss(){return this.cancelBubble}function Ts(){return this.defaultPrevented}h.event=function(e){return vr&&(e=vr(e)),e.persist=Os,e.isPropagationStopped=Ss,e.isDefaultPrevented=Ts,e.nativeEvent=e};var Ma,hr={configurable:!0,get:function(){return this.class}},_r=h.vnode;h.vnode=function(e){var t=e.type,n=e.props,r=n;if(typeof t=="string"){var a=t.indexOf("-")===-1;for(var i in r={},n){var o=n[i];xs&&i==="children"&&t==="noscript"||i==="value"&&"defaultValue"in n&&o==null||(i==="defaultValue"&&"value"in n&&n.value==null?i="value":i==="download"&&o===!0?o="":/ondoubleclick/i.test(i)?i="ondblclick":/^onchange(textarea|input)/i.test(i+t)&&!Cs(n.type)?i="oninput":/^onfocus$/i.test(i)?i="onfocusin":/^onblur$/i.test(i)?i="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i)?i=i.toLowerCase():a&&ws.test(i)?i=i.replace(/[A-Z0-9]/,"-$&").toLowerCase():o===null&&(o=void 0),r[i]=o)}t=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=q(n.children).forEach(function(s){s.props.selected=r.value.indexOf(s.props.value)!=-1})),t=="select"&&r.defaultValue!=null&&(r.value=q(n.children).forEach(function(s){s.props.selected=r.multiple?r.defaultValue.indexOf(s.props.value)!=-1:r.defaultValue==s.props.value})),e.props=r,n.class!=n.className&&(hr.enumerable="className"in n,n.className!=null&&(r.class=n.className),Object.defineProperty(r,"className",hr))}e.$$typeof=$a,_r&&_r(e)};var br=h.__r;h.__r=function(e){br&&br(e),Ma=e.__c};var Ps={ReactCurrentDispatcher:{current:{readContext:function(e){return Ma.__n[e.__c].props.value}}}};function Ns(e){return Y.bind(null,e)}function Ra(e){return!!e&&e.$$typeof===$a}function Ls(e){return Ra(e)?Yr.apply(null,arguments):e}function Is(e){return!!e.__k&&(we(null,e),!0)}function $s(e){return e&&(e.base||e.nodeType===1&&e)||null}var Ms=function(e,t){return e(t)},Rs=function(e,t){return e(t)},ee={useState:Xr,useReducer:qr,useEffect:on,useLayoutEffect:Kr,useRef:Me,useImperativeHandle:vi,useMemo:sn,useCallback:hi,useContext:_i,useDebugValue:bi,version:"17.0.2",Children:hs,render:As,hydrate:Es,unmountComponentAtNode:Is,createPortal:ks,createElement:Y,createContext:Br,createFactory:Ns,cloneElement:Ls,createRef:Rr,Fragment:U,isValidElement:Ra,findDOMNode:$s,Component:R,PureComponent:Jt,memo:ps,forwardRef:vs,flushSync:Rs,unstable_batchedUpdates:Ms,StrictMode:U,Suspense:et,SuspenseList:Oe,lazy:bs,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Ps};function yr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function se(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yr(Object(n),!0).forEach(function(r){ye(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yr(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function lt(e){return lt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},lt(e)}function ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ds(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Da(e,t){if(e==null)return{};var n=Ds(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Zt(e){return Fs(e)||zs(e)||Us(e)||Hs()}function Fs(e){if(Array.isArray(e))return Qt(e)}function zs(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Us(e,t){if(!!e){if(typeof e=="string")return Qt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Qt(e,t)}}function Qt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Hs(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ws(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,f=e.spin,d=e.spinPulse,c=e.spinReverse,p=e.pulse,l=e.fixedWidth,u=e.inverse,m=e.border,y=e.listItem,v=e.flip,_=e.size,k=e.rotation,w=e.pull,x=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":c,"fa-spin-pulse":d,"fa-pulse":p,"fa-fw":l,"fa-inverse":u,"fa-border":m,"fa-li":y,"fa-flip-horizontal":v==="horizontal"||v==="both","fa-flip-vertical":v==="vertical"||v==="both"},ye(t,"fa-".concat(_),typeof _!="undefined"&&_!==null),ye(t,"fa-rotate-".concat(k),typeof k!="undefined"&&k!==null&&k!==0),ye(t,"fa-pull-".concat(w),typeof w!="undefined"&&w!==null),ye(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(x).map(function(A){return x[A]?A:null}).filter(function(A){return A})}function js(e){return e=e-0,e===e}function Fa(e){return js(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Ys=["style"];function Bs(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Vs(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Fa(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[Bs(a)]=i:t[a]=i,t},{})}function za(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(f){return za(e,f)}),a=Object.keys(t.attributes||{}).reduce(function(f,d){var c=t.attributes[d];switch(d){case"class":f.attrs.className=c,delete t.attributes.class;break;case"style":f.attrs.style=Vs(c);break;default:d.indexOf("aria-")===0||d.indexOf("data-")===0?f.attrs[d.toLowerCase()]=c:f.attrs[Fa(d)]=c}return f},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=Da(n,Ys);return a.attrs.style=se(se({},a.attrs.style),o),e.apply(void 0,[t.tag,se(se({},a.attrs),s)].concat(Zt(r)))}var Ua=!1;try{Ua=!0}catch{}function Gs(){if(!Ua&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function gr(e){if(e&&lt(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(qt.icon)return qt.icon(e);if(e===null)return null;if(e&&lt(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function It(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ye({},e,t):{}}var Xs=["forwardedRef"];function We(e){var t=e.forwardedRef,n=Da(e,Xs),r=n.icon,a=n.mask,i=n.symbol,o=n.className,s=n.title,f=n.titleId,d=n.maskId,c=gr(r),p=It("classes",[].concat(Zt(Ws(n)),Zt(o.split(" ")))),l=It("transform",typeof n.transform=="string"?qt.transform(n.transform):n.transform),u=It("mask",gr(a)),m=ls(c,se(se(se(se({},p),l),u),{},{symbol:i,title:s,titleId:f,maskId:d}));if(!m)return Gs("Could not find icon",c),null;var y=m.abstract,v={ref:t};return Object.keys(n).forEach(function(_){We.defaultProps.hasOwnProperty(_)||(v[_]=n[_])}),qs(y[0],v)}We.displayName="FontAwesomeIcon";We.propTypes={beat:C.bool,border:C.bool,bounce:C.bool,className:C.string,fade:C.bool,flash:C.bool,mask:C.oneOfType([C.object,C.array,C.string]),maskId:C.string,fixedWidth:C.bool,inverse:C.bool,flip:C.oneOf(["horizontal","vertical","both"]),icon:C.oneOfType([C.object,C.array,C.string]),listItem:C.bool,pull:C.oneOf(["right","left"]),pulse:C.bool,rotation:C.oneOf([0,90,180,270]),shake:C.bool,size:C.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:C.bool,spinPulse:C.bool,spinReverse:C.bool,symbol:C.oneOfType([C.bool,C.string]),title:C.string,titleId:C.string,transform:C.oneOfType([C.string,C.object]),swapOpacity:C.bool};We.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var qs=za.bind(null,ee.createElement);const E=1,Ha=1<<1,Wa=1<<2,$=1<<3,en=1<<4,Xe=1<<5,X=1<<6,tn={a:{content:E|$,self:!1,type:E|$|Xe|X},address:{invalid:["h1","h2","h3","h4","h5","h6","address","article","aside","section","div","header","footer"],self:!1},audio:{children:["track","source"]},br:{type:E|$,void:!0},body:{content:E|Ha|Wa|$|en|Xe|X},button:{content:$,type:E|$|Xe|X},caption:{content:E,parent:["table"]},col:{parent:["colgroup"],void:!0},colgroup:{children:["col"],parent:["table"]},details:{children:["summary"],type:E|Xe|X},dd:{content:E,parent:["dl"]},dl:{children:["dt","dd"],type:E},dt:{content:E,invalid:["footer","header"],parent:["dl"]},figcaption:{content:E,parent:["figure"]},footer:{invalid:["footer","header"]},header:{invalid:["footer","header"]},hr:{type:E,void:!0},img:{void:!0},li:{content:E,parent:["ul","ol","menu"]},main:{self:!1},ol:{children:["li"],type:E},picture:{children:["source","img"],type:E|$|en},rb:{parent:["ruby","rtc"]},rp:{parent:["ruby","rtc"]},rt:{content:$,parent:["ruby","rtc"]},rtc:{content:$,parent:["ruby"]},ruby:{children:["rb","rp","rt","rtc"]},source:{parent:["audio","video","picture"],void:!0},summary:{content:$,parent:["details"]},table:{children:["caption","colgroup","thead","tbody","tfoot","tr"],type:E},tbody:{parent:["table"],children:["tr"]},td:{content:E,parent:["tr"]},tfoot:{parent:["table"],children:["tr"]},th:{content:E,parent:["tr"]},thead:{parent:["table"],children:["tr"]},tr:{parent:["table","tbody","thead","tfoot"],children:["th","td"]},track:{parent:["audio","video"],void:!0},ul:{children:["li"],type:E},video:{children:["track","source"]},wbr:{type:E|$,void:!0}};function me(e){return t=>{tn[t]=V(V({},e),tn[t])}}["address","main","div","figure","p","pre"].forEach(me({content:E,type:E|X}));["abbr","b","bdi","bdo","cite","code","data","dfn","em","i","kbd","mark","q","ruby","samp","strong","sub","sup","time","u","var"].forEach(me({content:$,type:E|$|X}));["p","pre"].forEach(me({content:$,type:E|X}));["s","small","span","del","ins"].forEach(me({content:$,type:E|$}));["article","aside","footer","header","nav","section","blockquote"].forEach(me({content:E,type:E|Ha|X}));["h1","h2","h3","h4","h5","h6"].forEach(me({content:$,type:E|Wa|X}));["audio","canvas","iframe","img","video"].forEach(me({type:E|$|en|X}));const nn=Object.freeze(tn),Ks=["applet","base","body","command","embed","frame","frameset","head","html","link","meta","noscript","object","script","style","title"],Js=Object.keys(nn).filter(e=>e!=="canvas"&&e!=="iframe"),S=1,Zs=2,Se=3,he=4,ja=5,kr=Object.freeze({alt:S,cite:S,class:S,colspan:Se,controls:he,datetime:S,default:he,disabled:he,dir:S,height:S,href:S,id:S,kind:S,label:S,lang:S,loading:S,loop:he,media:S,muted:he,poster:S,rel:S,role:S,rowspan:Se,scope:S,sizes:S,span:Se,start:Se,style:ja,src:S,srclang:S,srcset:S,target:S,title:S,type:S,width:S}),Qs=Object.freeze({class:"className",colspan:"colSpan",datetime:"dateTime",rowspan:"rowSpan",srclang:"srcLang",srcset:"srcSet"});function ct(){return ct=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ct.apply(this,arguments)}function Ya({attributes:e={},className:t,children:n=null,selfClose:r=!1,tagName:a}){const i=a;return r?ee.createElement(i,ct({className:t},e)):ee.createElement(i,ct({className:t},e),n)}class el{attribute(t,n){return n}node(t,n){return n}}/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */var tl=/["'&<>]/,nl=rl;function rl(e){var t=""+e,n=tl.exec(t);if(!n)return t;var r,a="",i=0,o=0;for(i=n.index;i<t.length;i++){switch(t.charCodeAt(i)){case 34:r="&quot;";break;case 38:r="&amp;";break;case 39:r="&#39;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}o!==i&&(a+=t.substring(o,i)),o=i+1,a+=r}return o!==i?a+t.substring(o,i):a}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const al=/(url|image|image-set)\(/i;class il extends el{attribute(t,n){return t==="style"&&Object.keys(n).forEach(r=>{String(n[r]).match(al)&&delete n[r]}),n}}const wr=1,ol=3,sl=/^<(!doctype|(html|head|body)(\s|>))/i,ll=/^(aria-|data-|\w+:)/iu,cl=/{{{(\w+)\/?}}}/;function fl(){if(!(typeof window=="undefined"||typeof document=="undefined"))return document.implementation.createHTMLDocument("Interweave")}class Ba{constructor(t,n={},r=[],a=[]){var i;Z(this,"allowed",void 0),Z(this,"banned",void 0),Z(this,"blocked",void 0),Z(this,"container",void 0),Z(this,"content",[]),Z(this,"props",void 0),Z(this,"matchers",void 0),Z(this,"filters",void 0),Z(this,"keyIndex",void 0),this.props=n,this.matchers=r,this.filters=[...a,new il],this.keyIndex=-1,this.container=this.createContainer(t||""),this.allowed=new Set((i=n.allowList)!==null&&i!==void 0?i:Js),this.banned=new Set(Ks),this.blocked=new Set(n.blockList)}applyAttributeFilters(t,n){return this.filters.reduce((r,a)=>r!==null&&typeof a.attribute=="function"?a.attribute(t,r):r,n)}applyNodeFilters(t,n){return this.filters.reduce((r,a)=>r!==null&&typeof a.node=="function"?a.node(t,r):r,n)}applyMatchers(t,n){const r={},{props:a}=this;let i=t,o=0,s=null;return this.matchers.forEach(f=>{const d=f.asTag().toLowerCase(),c=this.getTagConfig(d);if(a[f.inverseName]||!this.isTagAllowed(d)||!this.canRenderChild(n,c))return;let p="";for(;i&&(s=f.match(i));){const l=s,{index:u,length:m,match:y,valid:v,void:_}=l,k=Ot(l,["index","length","match","valid","void"]),w=f.propName+String(o);u>0&&(p+=i.slice(0,u)),v?(p+=_?`{{{${w}/}}}`:`{{{${w}}}}${y}{{{/${w}}}}`,this.keyIndex+=1,o+=1,r[w]={children:y,matcher:f,props:Ve(V(V({},a),k),{key:this.keyIndex})}):p+=y,f.greedy?(i=p+i.slice(u+m),p=""):i=i.slice(u+(m||y.length))}f.greedy||(i=p+i)}),o===0?t:this.replaceTokens(i,r)}canRenderChild(t,n){return!t.tagName||!n.tagName||t.void?!1:t.children.length>0?t.children.includes(n.tagName):t.invalid.length>0&&t.invalid.includes(n.tagName)?!1:n.parent.length>0?n.parent.includes(t.tagName):!t.self&&t.tagName===n.tagName?!1:Boolean(t&&t.content&n.type)}convertLineBreaks(t){const{noHtml:n,disableLineBreaks:r}=this.props;if(n||r||t.match(/<((?:\/[ a-z]+)|(?:[ a-z]+\/))>/gi))return t;let a=t.replace(/\r\n/g,`
`);return a=a.replace(/\n{3,}/g,`


`),a=a.replace(/\n/g,"<br/>"),a}createContainer(t){var n;const a=(typeof global!="undefined"&&global.INTERWEAVE_SSR_POLYFILL||fl)();if(!a)return;const i=(n=this.props.containerTagName)!==null&&n!==void 0?n:"body",o=i==="body"||i==="fragment"?a.body:a.createElement(i);return t.match(sl)||(o.innerHTML=this.convertLineBreaks(this.props.escapeHtml?nl(t):t)),o}extractAttributes(t){const{allowAttributes:n}=this.props,r={};let a=0;return t.nodeType!==wr||!t.attributes||([...t.attributes].forEach(i=>{const{name:o,value:s}=i,f=o.toLowerCase(),d=kr[f]||kr[o];if(!this.isSafe(t)||!f.match(ll)&&(!n&&(!d||d===Zs)||f.startsWith("on")||s.replace(/(\s|\0|&#x0([9AD]);)/,"").match(/(javascript|vbscript|livescript|xss):/i)))return;let c=f==="style"?this.extractStyleAttribute(t):s;d===he?c=!0:d===Se?c=Number.parseFloat(String(c)):d!==ja&&(c=String(c)),r[Qs[f]||f]=this.applyAttributeFilters(f,c),a+=1}),a===0)?null:r}extractStyleAttribute(t){const n={};return Array.from(t.style).forEach(r=>{const a=t.style[r];(typeof a=="string"||typeof a=="number")&&(n[r.replace(/-([a-z])/g,(i,o)=>String(o).toUpperCase())]=a)}),n}getTagConfig(t){const n={children:[],content:0,invalid:[],parent:[],self:!0,tagName:"",type:0,void:!1};return nn[t]?Ve(V(V({},n),nn[t]),{tagName:t}):n}isSafe(t){if(typeof HTMLAnchorElement!="undefined"&&t instanceof HTMLAnchorElement){const n=t.getAttribute("href");if(n!=null&&n.startsWith("#"))return!0;const r=t.protocol.toLowerCase();return r===":"||r==="http:"||r==="https:"||r==="mailto:"||r==="tel:"}return!0}isTagAllowed(t){return this.banned.has(t)||this.blocked.has(t)?!1:this.props.allowElements||this.allowed.has(t)}parse(){return this.container?this.parseNode(this.container,this.getTagConfig(this.container.nodeName.toLowerCase())):[]}parseNode(t,n){const{noHtml:r,noHtmlExceptMatchers:a,allowElements:i,transform:o,transformOnlyAllowList:s}=this.props;let f=[],d="";return[...t.childNodes].forEach(c=>{if(c.nodeType===wr){const l=c.nodeName.toLowerCase(),u=this.getTagConfig(l);d&&(f.push(d),d="");const m=this.applyNodeFilters(l,c);if(!m)return;let y;if(o&&!(s&&!this.isTagAllowed(l))){this.keyIndex+=1;const v=this.keyIndex;y=this.parseNode(m,u);const _=o(m,y,u);if(_===null)return;if(typeof _!="undefined"){f.push(ee.cloneElement(_,{key:v}));return}this.keyIndex=v-1}if(this.banned.has(l))return;if(!(r||a&&l!=="br")&&this.isTagAllowed(l)&&(i||this.canRenderChild(n,u))){var p;this.keyIndex+=1;const v=this.extractAttributes(m),_={tagName:l};v&&(_.attributes=v),u.void&&(_.selfClose=u.void),f.push(ee.createElement(Ya,Ve(V({},_),{key:this.keyIndex}),(p=y)!==null&&p!==void 0?p:this.parseNode(m,u)))}else f=[...f,...this.parseNode(m,u.tagName?u:n)]}else if(c.nodeType===ol){const l=r&&!a?c.textContent:this.applyMatchers(c.textContent||"",n);Array.isArray(l)?f=[...f,...l]:d+=l}}),d&&f.push(d),f}replaceTokens(t,n){if(!t.includes("{{{"))return t;const r=[];let a=t,i=null;for(;i=a.match(cl);){const[o,s]=i,f=i.index,d=o.includes("/");f>0&&(r.push(a.slice(0,f)),a=a.slice(f));const{children:c,matcher:p,props:l}=n[s];let u;if(d)u=o.length,r.push(p.createElement(c,l));else{const m=a.match(new RegExp(`{{{/${s}}}}`));u=m.index+m[0].length,r.push(p.createElement(this.replaceTokens(a.slice(o.length,m.index),n),l))}a=a.slice(u)}return a.length>0&&r.push(a),r.length===0?"":r.length===1&&typeof r[0]=="string"?r[0]:r}}function ul(e){var t;const{attributes:n,className:r,containerTagName:a,content:i,emptyContent:o,parsedContent:s,tagName:f,noWrap:d}=e,c=(t=a!=null?a:f)!==null&&t!==void 0?t:"span",p=c==="fragment"?!0:d;let l;if(s)l=s;else{const u=new Ba(i!=null?i:"",e).parse();u.length>0&&(l=u)}return l||(l=o),p?ee.createElement(ee.Fragment,null,l):ee.createElement(Ya,{attributes:n,className:r,tagName:c},l)}function dl(e){const A=e,{attributes:t,className:n,content:r="",disableFilters:a=!1,disableMatchers:i=!1,emptyContent:o=null,filters:s=[],matchers:f=[],onAfterParse:d=null,onBeforeParse:c=null,tagName:p="span",noWrap:l=!1}=A,u=Ot(A,["attributes","className","content","disableFilters","disableMatchers","emptyContent","filters","matchers","onAfterParse","onBeforeParse","tagName","noWrap"]),m=i?[]:f,y=a?[]:s,v=c?[c]:[],_=d?[d]:[];m.forEach(P=>{P.onBeforeParse&&v.push(P.onBeforeParse.bind(P)),P.onAfterParse&&_.push(P.onAfterParse.bind(P))});const k=v.reduce((P,z)=>z(P,e),r!=null?r:""),w=new Ba(k,u,m,y),x=_.reduce((P,z)=>z(P,e),w.parse());return ee.createElement(ul,{attributes:t,className:n,containerTagName:e.containerTagName,emptyContent:o,noWrap:l,parsedContent:x.length===0?void 0:x,tagName:p})}var pl=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,ml=/[&<>"]/;function xr(e){var t=String(e);return ml.test(t)?t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):t}var Cr=function(e,t){return String(e).replace(/(\n+)/g,"$1"+(t||"	"))},Ar=function(e,t,n){return String(e).length>(t||40)||!n&&String(e).indexOf(`
`)!==-1||String(e).indexOf("<")!==-1},Er={};function vl(e){var t="";for(var n in e){var r=e[n];r!=null&&r!==""&&(t&&(t+=" "),t+=n[0]=="-"?n:Er[n]||(Er[n]=n.replace(/([A-Z])/g,"-$1").toLowerCase()),t+=": ",t+=r,typeof r=="number"&&pl.test(n)===!1&&(t+="px"),t+=";")}return t||void 0}function qe(e,t){for(var n in t)e[n]=t[n];return e}function rn(e,t){return Array.isArray(t)?t.reduce(rn,e):t!=null&&t!==!1&&e.push(t),e}var hl={shallow:!0},$t=[],_l=/^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,Or=/[\s\n\\/='"\0<>]/;function Sr(){this.__d=!0}Fe.render=Fe;var bl=function(e,t){return Fe(e,t,hl)},Tr=[];function Fe(e,t,n){t=t||{},n=n||{};var r=h.__s;h.__s=!0;var a=Te(e,t,n);return h.__c&&h.__c(e,Tr),Tr.length=0,h.__s=r,a}function Te(e,t,n,r,a,i){if(e==null||typeof e=="boolean")return"";if(typeof e!="object")return xr(e);var o=n.pretty,s=o&&typeof o=="string"?o:"	";if(Array.isArray(e)){for(var f="",d=0;d<e.length;d++)o&&d>0&&(f+=`
`),f+=Te(e[d],t,n,r,a,i);return f}var c,p=e.type,l=e.props,u=!1;if(typeof p=="function"){if(u=!0,!n.shallow||!r&&n.renderRootComponent!==!1){if(p===U){var m=[];return rn(m,e.props.children),Te(m,t,n,n.shallowHighOrder!==!1,a,i)}var y,v=e.__c={__v:e,context:t,props:e.props,setState:Sr,forceUpdate:Sr,__d:!0,__h:[]};h.__b&&h.__b(e);var _=h.__r;if(p.prototype&&typeof p.prototype.render=="function"){var k=p.contextType,w=k&&t[k.__c],x=k!=null?w?w.props.value:k.__:t;(v=e.__c=new p(l,x)).__v=e,v._dirty=v.__d=!0,v.props=l,v.state==null&&(v.state={}),v._nextState==null&&v.__s==null&&(v._nextState=v.__s=v.state),v.context=x,p.getDerivedStateFromProps?v.state=qe(qe({},v.state),p.getDerivedStateFromProps(v.props,v.state)):v.componentWillMount&&(v.componentWillMount(),v.state=v._nextState!==v.state?v._nextState:v.__s!==v.state?v.__s:v.state),_&&_(e),y=v.render(v.props,v.state,v.context)}else for(var A=p.contextType,P=A&&t[A.__c],z=A!=null?P?P.props.value:A.__:t,W=0;v.__d&&W++<25;)v.__d=!1,_&&_(e),y=p.call(e.__c,l,z);return v.getChildContext&&(t=qe(qe({},t),v.getChildContext())),h.diffed&&h.diffed(e),Te(y,t,n,n.shallowHighOrder!==!1,a,i)}p=(c=p).displayName||c!==Function&&c.name||function(Ct){var At=(Function.prototype.toString.call(Ct).match(/^\s*function\s+([^( ]+)/)||"")[1];if(!At){for(var Ye=-1,Et=$t.length;Et--;)if($t[Et]===Ct){Ye=Et;break}Ye<0&&(Ye=$t.push(Ct)-1),At="UnnamedComponent"+Ye}return At}(c)}var I,B,N="<"+p;if(l){var ht=Object.keys(l);n&&n.sortAttributes===!0&&ht.sort();for(var _t=0;_t<ht.length;_t++){var O=ht[_t],L=l[O];if(O!=="children"){if(!Or.test(O)&&(n&&n.allAttributes||O!=="key"&&O!=="ref"&&O!=="__self"&&O!=="__source")){if(O==="defaultValue")O="value";else if(O==="className"){if(l.class!==void 0)continue;O="class"}else a&&O.match(/^xlink:?./)&&(O=O.toLowerCase().replace(/^xlink:?/,"xlink:"));if(O==="htmlFor"){if(l.for)continue;O="for"}O==="style"&&L&&typeof L=="object"&&(L=vl(L)),O[0]==="a"&&O[1]==="r"&&typeof L=="boolean"&&(L=String(L));var bt=n.attributeHook&&n.attributeHook(O,L,t,n,u);if(bt||bt==="")N+=bt;else if(O==="dangerouslySetInnerHTML")B=L&&L.__html;else if(p==="textarea"&&O==="value")I=L;else if((L||L===0||L==="")&&typeof L!="function"){if(!(L!==!0&&L!==""||(L=O,n&&n.xml))){N+=" "+O;continue}if(O==="value"){if(p==="select"){i=L;continue}p==="option"&&i==L&&l.selected===void 0&&(N+=" selected")}N+=" "+O+'="'+xr(L)+'"'}}}else I=L}}if(o){var yt=N.replace(/\n\s*/," ");yt===N||~yt.indexOf(`
`)?o&&~N.indexOf(`
`)&&(N+=`
`):N=yt}if(N+=">",Or.test(p))throw new Error(p+" is not a valid HTML tag name in "+N);var je,Va=_l.test(p)||n.voidElements&&n.voidElements.test(p),K=[];if(B)o&&Ar(B)&&(B=`
`+s+Cr(B,s)),N+=B;else if(I!=null&&rn(je=[],I).length){for(var gt=o&&~N.indexOf(`
`),wn=!1,kt=0;kt<je.length;kt++){var wt=je[kt];if(wt!=null&&wt!==!1){var fe=Te(wt,t,n,!0,p==="svg"||p!=="foreignObject"&&a,i);if(o&&!gt&&Ar(fe)&&(gt=!0),fe)if(o){var xn=fe.length>0&&fe[0]!="<";wn&&xn?K[K.length-1]+=fe:K.push(fe),wn=xn}else K.push(fe)}}if(o&&gt)for(var xt=K.length;xt--;)K[xt]=`
`+s+Cr(K[xt],s)}if(K.length||B)N+=K.join("");else if(n&&n.xml)return N.substring(0,N.length-1)+" />";return!Va||je||B?(o&&~N.indexOf(`
`)&&(N+=`
`),N+="</"+p+">"):N=N.replace(/>$/," />"),N}Fe.shallowRender=bl;/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var yl={prefix:"fas",iconName:"apple-whole",icon:[448,512,[127823,127822,"apple-alt"],"f5d1","M336 128c-32 0-80.02 16.03-112 32.03c-32.01-16-79.1-32.02-111.1-32.03C32 128 .4134 210.5 .0033 288c-.5313 99.97 63.99 224 159.1 224c32 0 48-16 64-16c16 0 32 16 64 16c96 0 160.4-122.8 159.1-224C447.7 211.6 416 128 336 128zM320 32V0h-32C243.8 0 208 35.82 208 80v32h32C284.2 112 320 76.18 320 32z"]},gl={prefix:"fas",iconName:"leaf",icon:[512,512,[],"f06c","M512 165.4c0 127.9-70.05 235.3-175.3 270.1c-20.04 7.938-41.83 12.46-64.69 12.46c-64.9 0-125.2-36.51-155.7-94.47c-54.13 49.93-68.71 107-68.96 108.1C44.72 472.6 34.87 480 24.02 480c-1.844 0-3.727-.2187-5.602-.6562c-12.89-3.098-20.84-16.08-17.75-28.96c9.598-39.5 90.47-226.4 335.3-226.4C344.8 224 352 216.8 352 208S344.8 192 336 192C228.6 192 151 226.6 96.29 267.6c.1934-10.82 1.242-21.84 3.535-33.05c13.47-65.81 66.04-119 131.4-134.2c28.33-6.562 55.68-6.013 80.93-.0054c56 13.32 118.2-7.412 149.3-61.24c5.664-9.828 20.02-9.516 24.66 .8282C502.7 76.76 512 121.9 512 165.4z"]},kl={prefix:"fas",iconName:"microscope",icon:[512,512,[128300],"f610","M160 320h12v16c0 8.875 7.125 16 16 16h40c8.875 0 16-7.125 16-16V320H256c17.62 0 32-14.38 32-32V64c0-17.62-14.38-32-32-32V16C256 7.125 248.9 0 240 0h-64C167.1 0 160 7.125 160 16V32C142.4 32 128 46.38 128 64v224C128 305.6 142.4 320 160 320zM464 448h-1.25C493.2 414 512 369.2 512 320c0-105.9-86.13-192-192-192v64c70.63 0 128 57.38 128 128s-57.38 128-128 128H48C21.5 448 0 469.5 0 496C0 504.9 7.125 512 16 512h480c8.875 0 16-7.125 16-16C512 469.5 490.5 448 464 448zM104 416h208c4.375 0 8-3.625 8-8v-16c0-4.375-3.625-8-8-8h-208C99.63 384 96 387.6 96 392v16C96 412.4 99.63 416 104 416z"]},wl={prefix:"fas",iconName:"pen-ruler",icon:[512,512,["pencil-ruler"],"f5ae","M492.7 42.75C517.7 67.74 517.7 108.3 492.7 133.3L436.3 189.7L322.3 75.72L378.7 19.32C403.7-5.678 444.3-5.678 469.3 19.32L492.7 42.75zM44.89 353.2L299.7 98.34L413.7 212.3L158.8 467.1C152.1 473.8 143.8 478.7 134.6 481.4L30.59 511.1C22.21 513.5 13.19 511.1 7.03 504.1C.8669 498.8-1.47 489.8 .9242 481.4L30.65 377.4C33.26 368.2 38.16 359.9 44.89 353.2zM249.4 103.4L103.4 249.4L16 161.9C-2.745 143.2-2.745 112.8 16 94.06L94.06 16C112.8-2.745 143.2-2.745 161.9 16L181.7 35.76C181.4 36.05 181 36.36 180.7 36.69L116.7 100.7C110.4 106.9 110.4 117.1 116.7 123.3C122.9 129.6 133.1 129.6 139.3 123.3L203.3 59.31C203.6 58.99 203.1 58.65 204.2 58.3L249.4 103.4zM453.7 307.8C453.4 308 453 308.4 452.7 308.7L388.7 372.7C382.4 378.9 382.4 389.1 388.7 395.3C394.9 401.6 405.1 401.6 411.3 395.3L475.3 331.3C475.6 330.1 475.1 330.6 476.2 330.3L496 350.1C514.7 368.8 514.7 399.2 496 417.9L417.9 496C399.2 514.7 368.8 514.7 350.1 496L262.6 408.6L408.6 262.6L453.7 307.8z"]},xl={prefix:"fas",iconName:"person-falling-burst",icon:[640,512,[],"e547","M256 41.84C256 96.45 228.1 146.5 183.5 175.4L183.7 175.8L240.5 255.1H311.1C327.1 255.1 341.3 263.1 350.4 275.2L393.6 332.8C404.2 346.9 401.3 366.1 387.2 377.6C373.1 388.2 353 385.3 342.4 371.2L303.1 319.1H222.6L314.9 462.6C324.5 477.5 320.2 497.3 305.4 506.9C290.5 516.5 270.7 512.2 261.1 497.4L100.5 249.2C97.57 258.4 95.1 268.1 95.1 278.2V351.1C95.1 369.7 81.67 383.1 63.1 383.1C46.33 383.1 31.1 369.7 31.1 351.1V278.2C31.1 213 71.65 154.5 132.1 130.3C168.3 115.8 191.1 80.79 191.1 41.84V32C191.1 14.33 206.3 0 223.1 0C241.7 0 255.1 14.33 255.1 32L256 41.84zM96 79.1C96 106.5 74.51 127.1 48 127.1C21.49 127.1 0 106.5 0 79.1C0 53.49 21.49 31.1 48 31.1C74.51 31.1 96 53.49 96 79.1zM464 286.1L424.7 322.2C423.1 319.3 421.3 316.4 419.2 313.6L382.1 265.3L384.2 247.6L365.8 244.8C351.2 231.5 332.1 223.1 311.1 223.1H292.6C292.5 223.7 292.5 223.4 292.4 223.2C290.1 216.8 293.5 210.1 298.9 206.4L364.5 161.3L325 92.18C321.8 86.49 322.3 79.39 326.4 74.27C330.5 69.14 337.3 67.03 343.6 68.93L419.7 92.05L449.1 18.09C451.6 11.1 457.4 8 464 8C470.6 8 476.4 11.1 478.9 18.09L508.3 92.05L584.4 68.93C590.7 67.03 597.5 69.14 601.6 74.27C605.7 79.39 606.2 86.49 602.1 92.18L563.5 161.3L629.1 206.4C634.5 210.1 637 216.8 635.6 223.2C634.1 229.6 628.9 234.4 622.4 235.4L543.8 247.6L549.4 327C549.8 333.6 546.3 339.7 540.4 342.6C534.5 345.4 527.4 344.4 522.6 339.9L464 286.1z"]},Cl={prefix:"fas",iconName:"wand-magic-sparkles",icon:[576,512,["magic-wand-sparkles"],"e2ca","M248.8 4.994C249.9 1.99 252.8 .0001 256 .0001C259.2 .0001 262.1 1.99 263.2 4.994L277.3 42.67L315 56.79C318 57.92 320 60.79 320 64C320 67.21 318 70.08 315 71.21L277.3 85.33L263.2 123C262.1 126 259.2 128 256 128C252.8 128 249.9 126 248.8 123L234.7 85.33L196.1 71.21C193.1 70.08 192 67.21 192 64C192 60.79 193.1 57.92 196.1 56.79L234.7 42.67L248.8 4.994zM427.4 14.06C446.2-4.686 476.6-4.686 495.3 14.06L529.9 48.64C548.6 67.38 548.6 97.78 529.9 116.5L148.5 497.9C129.8 516.6 99.38 516.6 80.64 497.9L46.06 463.3C27.31 444.6 27.31 414.2 46.06 395.4L427.4 14.06zM461.4 59.31L356.3 164.3L379.6 187.6L484.6 82.58L461.4 59.31zM7.491 117.2L64 96L85.19 39.49C86.88 34.98 91.19 32 96 32C100.8 32 105.1 34.98 106.8 39.49L128 96L184.5 117.2C189 118.9 192 123.2 192 128C192 132.8 189 137.1 184.5 138.8L128 160L106.8 216.5C105.1 221 100.8 224 96 224C91.19 224 86.88 221 85.19 216.5L64 160L7.491 138.8C2.985 137.1 0 132.8 0 128C0 123.2 2.985 118.9 7.491 117.2zM359.5 373.2L416 352L437.2 295.5C438.9 290.1 443.2 288 448 288C452.8 288 457.1 290.1 458.8 295.5L480 352L536.5 373.2C541 374.9 544 379.2 544 384C544 388.8 541 393.1 536.5 394.8L480 416L458.8 472.5C457.1 477 452.8 480 448 480C443.2 480 438.9 477 437.2 472.5L416 416L359.5 394.8C354.1 393.1 352 388.8 352 384C352 379.2 354.1 374.9 359.5 373.2z"]},Al={learning_goals:yl,case_study:kl,ethical_considerations:gl,accident_report:xl,interactive:Cl,exercises:wl};const El=({content:e,type:t})=>{const n=(i,[o])=>{var s;if((s=o==null?void 0:o.startsWith)!=null&&s.call(o,"(TITLE) "))return D("p",{class:"title",children:o.replace("(TITLE) ","")})},{[t]:r}=Al,a=t.replace("_"," ").replace(/^./,i=>i.toUpperCase());return Re(xi,{children:[Re("div",{class:"type",children:[D("span",{class:"icon",children:D(We,{icon:r})}),a]}),D("div",{class:"content",children:D(dl,{noWrap:!0,content:e,transform:n})})]})};document.querySelectorAll(".box").forEach(e=>{const{innerHTML:t,classList:[,n]}=e;e.innerHTML=Fe(D(El,{content:t,type:n}))});ft(D(Ci,{}),document.querySelector("#toc").parentNode);
