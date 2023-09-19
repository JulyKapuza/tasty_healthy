import{_ as O,u as N,a as P}from"./recipe-dd76402f.js";import{o as m,c as v,a as o,t as f,b as g,w as $,d as q,u as h,R as T,r as w,n as V,g as z,e as D,f as E,h as A,i as I,j as C,k as K,T as W,F as B,l as M,m as H,p as Q,q as U,S as G}from"./index-30996afc.js";const J={class:"flex flex-col border bg-main/[.5] border-white/[.1] rounded-[20px] w-[300px] hover:scale-105 hover:text-dark"},X=["src"],Y={class:"flex items-center py-2 px-4 border-t border-b border-white/[.1] grow text-sm text-lg font-semibold"},Z={class:"flex"},ee={class:"grow border-e border-white/[.1] p-4 text-white/[.3] text-sm"},te={__name:"Item",props:{img:{type:String,default:""},title:{type:String,default:""},index:{type:Number},data:{type:Object},query:{type:String,default:""}},emits:["clickBtn"],setup(e,{emit:i}){const t=localStorage.getItem("query"),s=()=>{i("clickBtn")};return(l,a)=>(m(),v("div",J,[o("img",{src:e.img,class:"w-[300px] h-[300px] rounded-tl-[20px] rounded-tr-[20px]"},null,8,X),o("div",Y,f(e.title),1),o("div",Z,[o("div",ee,[g(h(T),{to:`/recipe/${e.query?e.query:h(t)}/${e.index}`,class:"p-3 text-white/[.3] text-[20px] hover:text-white cursor-pointer"},{default:$(()=>[q(f(l.$t("view_more")),1)]),_:1},8,["to"])]),o("button",{class:"px-2 text-green text-lg cursor-pointer",onClick:a[0]||(a[0]=c=>s(e.data))},f(l.$t("short_info")),1)])]))}};const ne={class:"relative flex items-center px-0 h-full"},se=["value","type"],oe={__name:"Field",props:{modelValue:{type:String,required:!0},label:{type:String,default:""},type:{type:String,default:"text"},nameIcon:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:i}){const t=e,s=w(!1),l=w(null),a=()=>{t.modelValue||(s.value=!0)},c=u=>{i("update:modelValue",u.target.value)};return(u,x)=>(m(),v("div",{class:V([{"!border-main border-b-2 transition":s.value||e.modelValue},"block mx-auto w-[80%] border-b border-white/[.1] transition mb-8"])},[o("div",ne,[o("input",{value:e.modelValue,class:"px-4 w-full md:min-w-[450px] md:text-[20px] py-3 h-full bg-transparent outline-none transition",type:e.type,ref_key:"input",ref:l,onFocus:a,onBlur:x[0]||(x[0]=_=>s.value=!1),onInput:c},null,40,se),o("span",{class:V([{" text-main -translate-y-6 transition px-0 !text-base":s.value||e.modelValue},"flex-shrink-0 absolute pointer-events-none md:text-base"])},f(e.label),3)])],2))}},ie=O(oe,[["__scopeId","data-v-00a4d04d"]]);function le(e){return z()?(D(e),!0):!1}function F(e){return typeof e=="function"?e():h(e)}const R=typeof window<"u"&&typeof document<"u",re=Object.prototype.toString,ae=e=>re.call(e)==="[object Object]",S=()=>{},ce=de();function de(){var e;return R&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function b(e){var i;const t=F(e);return(i=t==null?void 0:t.$el)!=null?i:t}const L=R?window:void 0;function k(...e){let i,t,s,l;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,s,l]=e,i=L):[i,t,s,l]=e,!i)return S;Array.isArray(t)||(t=[t]),Array.isArray(s)||(s=[s]);const a=[],c=()=>{a.forEach(d=>d()),a.length=0},u=(d,y,n,r)=>(d.addEventListener(y,n,r),()=>d.removeEventListener(y,n,r)),x=E(()=>[b(i),F(l)],([d,y])=>{if(c(),!d)return;const n=ae(y)?{...y}:y;a.push(...t.flatMap(r=>s.map(p=>u(d,r,p,n))))},{immediate:!0,flush:"post"}),_=()=>{x(),c()};return le(_),_}let j=!1;function ue(e,i,t={}){const{window:s=L,ignore:l=[],capture:a=!0,detectIframe:c=!1}=t;if(!s)return;ce&&!j&&(j=!0,Array.from(s.document.body.children).forEach(n=>n.addEventListener("click",S)),s.document.documentElement.addEventListener("click",S));let u=!0;const x=n=>l.some(r=>{if(typeof r=="string")return Array.from(s.document.querySelectorAll(r)).some(p=>p===n.target||n.composedPath().includes(p));{const p=b(r);return p&&(n.target===p||n.composedPath().includes(p))}}),d=[k(s,"click",n=>{const r=b(e);if(!(!r||r===n.target||n.composedPath().includes(r))){if(n.detail===0&&(u=!x(n)),!u){u=!0;return}i(n)}},{passive:!0,capture:a}),k(s,"pointerdown",n=>{const r=b(e);r&&(u=!n.composedPath().includes(r)&&!x(n))},{passive:!0}),c&&k(s,"blur",n=>{setTimeout(()=>{var r;const p=b(e);((r=s.document.activeElement)==null?void 0:r.tagName)==="IFRAME"&&!(p!=null&&p.contains(s.document.activeElement))&&i(n)},0)})].filter(Boolean);return()=>d.forEach(n=>n())}const pe={key:0,class:"fixed top-0 left-0 w-full h-full z-50 min-h-screen p-3 flex items-center justify-center bg-black bg-opacity-50"},fe={class:"flex justify-center items-center gap-5 px-4 bg-main rounded-tl-[20px] rounded-tr-[20px] border border-white/[.1]"},me={key:0,class:"flex grow border-e border-white/[.1] py-4 text-2xl text-dark font-bold"},_e={class:"px-4 py-4 sm:px-8 sm:pt-5 sm:pb-8"},xe={__name:"Modal",props:{isOpen:{type:Boolean,default:!1,required:!0},title:{type:String,delault:""}},emits:["modalClose"],setup(e,{emit:i}){const t=w(null),s=()=>{i("modalClose")};return ue(t,()=>{i("modalClose")}),(l,a)=>{const c=A("MdIcon");return m(),I(W,{appear:"",name:"fade"},{default:$(()=>[e.isOpen?(m(),v("div",pe,[o("div",{ref_key:"modal",ref:t,class:"bg-gradient h-fit relative w-full rounded-[20px] md:w-auto"},[o("div",fe,[e.title?(m(),v("span",me,f(e.title),1)):C("",!0),g(c,{name:"window-close",width:"26",height:"26",class:"cursor-pointer hover:text-dark",onClick:s})]),o("div",_e,[K(l.$slots,"default",{},void 0,!0)])],512)])):C("",!0)]),_:3})}}},ye=O(xe,[["__scopeId","data-v-829b6e3e"]]),ve={class:"flex w-[300px] sm:w-[500px] mb-4 text-white/[.3] text-lg"},he={class:"flex w-1/3 items-center justify-center"},ge={class:"flex w-1/3 items-center justify-center"},we={class:"flex w-1/3 items-center justify-center"},be={class:"flex w-1/3 items-center justify-start capitalize"},$e={class:"flex w-1/3 items-center justify-center text-green"},ke={class:"flex w-1/3 items-center justify-center text-blue"},Se={__name:"RecipeModal",props:{isOpen:{type:Boolean,required:!0},selectedItem:{type:Array,default:()=>[]},title:{type:String}},emits:["update:modelValue"],setup(e,{emit:i}){return(t,s)=>(m(),I(ye,{isOpen:e.isOpen,title:e.title},{default:$(()=>[o("div",ve,[o("div",he,f(t.$t("name")),1),o("div",ge,f(t.$t("quantity")),1),o("div",we,f(t.$t("weight")),1)]),(m(!0),v(B,null,M(e.selectedItem,l=>(m(),v("div",{key:l.food,class:"flex w-[300px] sm:w-[500px] text-[20px]"},[o("div",be,f(l.food),1),o("div",$e,f(l.quantity),1),o("div",ke,f(l.weight.toFixed()),1)]))),128))]),_:1},8,["isOpen","title"]))}},Ie={class:"3xl:container xl:px-4"},Ve={class:"text-[20px] text-center md:flex items-center justify-center mb-5"},Ce=o("span",{class:"font-logo text-[50px]"},"Tasty&Healthy",-1),je={class:"relative mt-5"},Oe={class:"absolute top-1/4 -translate-y-1/2 md:-translate-y-1/3 end-10 lg:end-40 text-white/[.3]"},qe={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"},Ee={__name:"Recipe",setup(e){const{notify:i}=G();let t=w("");const s=w(!1);let l=w([]),a=w("");const c=N();t.value&&c.getRecipe(t.value);const u=()=>{t.value===""&&i({title:U.t("warning_not_enough_dish"),type:"warning",ignoreDuplicates:!0}),t.value.trim()!==""&&c.getRecipe(t.value)},x=_=>{l.value=_.recipe.ingredients,a.value=_.recipe.label,s.value=!0};return E(t,()=>{t.value===""&&(c.recipe=[])}),(_,d)=>{const y=A("MdIcon");return m(),v("div",Ie,[o("div",Ve,[Ce,q(" - "+f(_.$t("quick_healthy")),1)]),o("div",je,[g(ie,{modelValue:h(t),"onUpdate:modelValue":d[0]||(d[0]=n=>H(t)?t.value=n:t=n),onKeydown:Q(u,["enter"]),label:_.$t("enter")},null,8,["modelValue","onKeydown","label"]),o("button",{onClick:u},[o("div",Oe,[g(y,{name:"magnify",size:"32"})])])]),o("div",qe,[(m(!0),v(B,null,M(h(c).recipe,(n,r)=>(m(),v("div",{key:n.recipe.yield,class:"flex justify-center"},[g(te,{img:n.recipe.image,title:n.recipe.label,"info-about-recipe":n.recipe.ingredients,data:n,query:h(t),index:r,onClickBtn:p=>x(n)},null,8,["img","title","info-about-recipe","data","query","index","onClickBtn"])]))),128))]),g(Se,{"is-open":s.value,onModalClose:d[1]||(d[1]=n=>s.value=!1),selectedItem:h(l),title:h(a)},null,8,["is-open","selectedItem","title"])])}}},Me={__name:"HomeView",setup(e){return(i,t)=>(m(),I(P,null,{default:$(()=>[g(Ee)]),_:1}))}};export{Me as default};
