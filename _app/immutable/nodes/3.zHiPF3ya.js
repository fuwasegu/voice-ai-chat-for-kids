import{s as G,e as i,a as B,t as J,c,b as g,l as P,g as D,f as _,d as Q,m as e,o as W,i as X,h as t,p as H,q as S,r as j,n as z,u as Y,k as Z,v as $,w as ee}from"../chunks/scheduler.ZZvfSGQU.js";import{S as te,i as se}from"../chunks/index.r4ESoaId.js";import{s as O}from"../chunks/store.g2_QKCx6.js";import{c as A,a as ae}from"../chunks/center.P_nAeEF8.js";function le(m){let u,s,r,a,d='<label for="api-key">API Key</label>',T,h,l,w,o,b,N='<label for="age">ユーザーの年齢</label>',L,x,n,q,I,y,v,R="保存",M,U;return{c(){u=i("div"),s=i("table"),r=i("tr"),a=i("th"),a.innerHTML=d,T=B(),h=i("td"),l=i("input"),w=B(),o=i("tr"),b=i("th"),b.innerHTML=N,L=B(),x=i("td"),n=i("input"),q=J(" 歳"),I=B(),y=i("div"),v=i("button"),v.textContent=R,this.h()},l(p){u=c(p,"DIV",{class:!0});var f=g(u);s=c(f,"TABLE",{class:!0});var C=g(s);r=c(C,"TR",{class:!0});var E=g(r);a=c(E,"TH",{class:!0,"data-svelte-h":!0}),P(a)!=="svelte-1el8bi0"&&(a.innerHTML=d),T=D(E),h=c(E,"TD",{class:!0});var F=g(h);l=c(F,"INPUT",{type:!0,id:!0,placeholder:!0,class:!0}),F.forEach(_),E.forEach(_),w=D(C),o=c(C,"TR",{class:!0});var k=g(o);b=c(k,"TH",{class:!0,"data-svelte-h":!0}),P(b)!=="svelte-q23zbo"&&(b.innerHTML=N),L=D(k),x=c(k,"TD",{class:!0});var K=g(x);n=c(K,"INPUT",{type:!0,id:!0,placeholder:!0,min:!0,class:!0}),q=Q(K," 歳"),K.forEach(_),k.forEach(_),C.forEach(_),I=D(f),y=c(f,"DIV",{class:!0});var V=g(y);v=c(V,"BUTTON",{class:!0,"data-svelte-h":!0}),P(v)!=="svelte-16sf6vd"&&(v.textContent=R),V.forEach(_),f.forEach(_),this.h()},h(){e(a,"class","svelte-189wm77"),e(l,"type","text"),e(l,"id","api-key"),e(l,"placeholder","xxx"),l.required=!0,e(l,"class","svelte-189wm77"),e(h,"class","svelte-189wm77"),e(r,"class","svelte-189wm77"),e(b,"class","svelte-189wm77"),e(n,"type","number"),e(n,"id","age"),e(n,"placeholder","5"),e(n,"min",0),n.required=!0,e(n,"class","svelte-189wm77"),e(x,"class","svelte-189wm77"),e(o,"class","svelte-189wm77"),e(s,"class",W(A({borderCollapse:"collapse",borderSpacing:"0 15px",tableLayout:"fixed"}))+" svelte-189wm77"),e(v,"class",A({color:"#fff",backgroundColor:"#eb6100",borderBottom:"5px solid #b84c00",_hover:{marginTop:"3px",color:"#fff",background:"#f56500",borderBottom:"2px solid #b84c00"},boxShadow:"0 3px 5px rgba(0, 0, 0, .3)",padding:"8px 20px",borderRadius:"25%",cursor:"pointer"})),e(y,"class",A({marginTop:"100px"})),e(u,"class",ae({marginTop:"80px",display:"flex",flexDirection:"column"}))},m(p,f){X(p,u,f),t(u,s),t(s,r),t(r,a),t(r,T),t(r,h),t(h,l),H(l,m[0]),t(s,w),t(s,o),t(o,b),t(o,L),t(o,x),t(x,n),H(n,m[1]),t(x,q),t(u,I),t(u,y),t(y,v),M||(U=[S(l,"input",m[3]),S(n,"input",m[4]),S(v,"click",m[5])],M=!0)},p(p,[f]){f&1&&l.value!==p[0]&&H(l,p[0]),f&2&&j(n.value)!==p[1]&&H(n,p[1])},i:z,o:z,d(p){p&&_(u),M=!1,Y(U)}}}function re(m,u,s){let r;Z(m,O,o=>s(6,r=o));let a="",d=5;$(()=>{const o=r;s(0,a=o.apiKey),s(1,d=o.age)});const T=()=>{if(!d||!a){alert("全フィールド入力してください");return}ee(O,r={age:d??5,apiKey:a??""},r)};function h(){a=this.value,s(0,a)}function l(){d=j(this.value),s(1,d)}return[a,d,T,h,l,()=>{T(),alert("保存しました")}]}class ce extends te{constructor(u){super(),se(this,u,re,le,G,{})}}export{ce as component};
