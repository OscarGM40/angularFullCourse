(()=>{"use strict";var e,v={},m={};function r(e){var n=m[e];if(void 0!==n)return n.exports;var t=m[e]={exports:{}};return v[e].call(t.exports,t,t.exports,r),t.exports}r.m=v,e=[],r.O=(n,t,u,l)=>{if(!t){var a=1/0;for(i=0;i<e.length;i++){for(var[t,u,l]=e[i],d=!0,o=0;o<t.length;o++)(!1&l||a>=l)&&Object.keys(r.O).every(b=>r.O[b](t[o]))?t.splice(o--,1):(d=!1,l<a&&(a=l));if(d){e.splice(i--,1);var s=u();void 0!==s&&(n=s)}}return n}l=l||0;for(var i=e.length;i>0&&e[i-1][2]>l;i--)e[i]=e[i-1];e[i]=[t,u,l]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((n,t)=>(r.f[t](e,n),n),[])),r.u=e=>e+"."+{168:"7072e742809ba1075e72",682:"eee4cb0f72781f2d5eb6"}[e]+".js",r.miniCssF=e=>"styles.2b9d20750734b3c00b85.css",r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={},n="auth-client-app:";r.l=(t,u,l,i)=>{if(e[t])e[t].push(u);else{var a,d;if(void 0!==l)for(var o=document.getElementsByTagName("script"),s=0;s<o.length;s++){var f=o[s];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==n+l){a=f;break}}a||(d=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",n+l),a.src=r.tu(t)),e[t]=[u];var c=(_,b)=>{a.onerror=a.onload=null,clearTimeout(p);var g=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),g&&g.forEach(h=>h(b)),_)return _(b)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=c.bind(null,a.onerror),a.onload=c.bind(null,a.onload),d&&document.head.appendChild(a)}}})(),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.tu=n=>(void 0===e&&(e={createScriptURL:t=>t},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e.createScriptURL(n))})(),r.p="",(()=>{var e={666:0};r.f.j=(u,l)=>{var i=r.o(e,u)?e[u]:void 0;if(0!==i)if(i)l.push(i[2]);else if(666!=u){var a=new Promise((f,c)=>i=e[u]=[f,c]);l.push(i[2]=a);var d=r.p+r.u(u),o=new Error;r.l(d,f=>{if(r.o(e,u)&&(0!==(i=e[u])&&(e[u]=void 0),i)){var c=f&&("load"===f.type?"missing":f.type),p=f&&f.target&&f.target.src;o.message="Loading chunk "+u+" failed.\n("+c+": "+p+")",o.name="ChunkLoadError",o.type=c,o.request=p,i[1](o)}},"chunk-"+u,u)}else e[u]=0},r.O.j=u=>0===e[u];var n=(u,l)=>{var o,s,[i,a,d]=l,f=0;for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(d)var c=d(r);for(u&&u(l);f<i.length;f++)r.o(e,s=i[f])&&e[s]&&e[s][0](),e[i[f]]=0;return r.O(c)},t=self.webpackChunkauth_client_app=self.webpackChunkauth_client_app||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})()})();