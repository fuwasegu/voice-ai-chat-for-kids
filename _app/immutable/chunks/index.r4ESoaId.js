import{u as $,n as _,R as y,b as S,f as b,S as E,T as w,U as C,V as p,W as I,X as O,Y as x,Z as R,_ as U,$ as V,a0 as j,a1 as B}from"./scheduler.ZZvfSGQU.js";const o=new Set;let f;function X(){f={r:0,c:[],p:f}}function Y(){f.r||$(f.c),f=f.p}function L(t,e){t&&t.i&&(o.delete(t),t.i(e))}function Z(t,e,n,a){if(t&&t.o){if(o.has(t))return;o.add(t),f.c.push(()=>{o.delete(t),a&&(n&&t.d(1),a())}),t.o(e)}else a&&a()}function z(t){t&&t.c()}function A(t,e){t&&t.l(e)}function M(t,e,n){const{fragment:a,after_update:i}=t.$$;a&&a.m(e,n),p(()=>{const d=t.$$.on_mount.map(R).filter(w);t.$$.on_destroy?t.$$.on_destroy.push(...d):$(d),t.$$.on_mount=[]}),i.forEach(p)}function N(t,e){const n=t.$$;n.fragment!==null&&(I(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function P(t,e){t.$$.dirty[0]===-1&&(U.push(t),V(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(t,e,n,a,i,d,c=null,v=[-1]){const u=O;x(t);const s=t.$$={fragment:null,ctx:[],props:d,update:_,not_equal:i,bound:y(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:y(),dirty:v,skip_bound:!1,root:e.target||u.$$.root};c&&c(s.root);let l=!1;if(s.ctx=n?n(t,e.props||{},(r,h,...g)=>{const m=g.length?g[0]:h;return s.ctx&&i(s.ctx[r],s.ctx[r]=m)&&(!s.skip_bound&&s.bound[r]&&s.bound[r](m),l&&P(t,r)),h}):[],s.update(),l=!0,$(s.before_update),s.fragment=a?a(s.ctx):!1,e.target){if(e.hydrate){j();const r=S(e.target);s.fragment&&s.fragment.l(r),r.forEach(b)}else s.fragment&&s.fragment.c();e.intro&&L(t.$$.fragment),M(t,e.target,e.anchor),B(),E()}x(u)}class F{$$=void 0;$$set=void 0;$destroy(){N(this,1),this.$destroy=_}$on(e,n){if(!w(n))return _;const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(n),()=>{const i=a.indexOf(n);i!==-1&&a.splice(i,1)}}$set(e){this.$$set&&!C(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const T="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(T);export{F as S,A as a,Z as b,z as c,N as d,Y as e,X as g,D as i,M as m,L as t};
