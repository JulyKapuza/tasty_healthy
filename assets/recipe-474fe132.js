import{o as M,c as V,a as L,j as w,y as Ne,z as Fe,n as I,F as ge,l as Le,k as $,p as xe,d as el,t as te,A as Q,B as ke,r as K,x as h,f as x,C as Ie,D as ll,E as wl,b as He,u as Pl,G as Tl,H as ql,I as El,q as Il,S as Cl}from"./index-7960afe8.js";function ae(e){return[null,void 0].indexOf(e)!==-1}function Dl(e,r,a){const{object:i,valueProp:n,mode:g}=Q(e),t=ke().proxy,d=a.iv,E=(y,D=!0)=>{d.value=c(y);const S=b(y);r.emit("change",S,t),D&&(r.emit("input",S),r.emit("update:modelValue",S))},b=y=>i.value||ae(y)?y:Array.isArray(y)?y.map(D=>D[n.value]):y[n.value],c=y=>ae(y)?g.value==="single"?{}:[]:y;return{update:E}}function Bl(e,r){const{value:a,modelValue:i,mode:n,valueProp:g}=Q(e),t=K(n.value!=="single"?[]:{}),d=i&&i.value!==void 0?i:a,E=h(()=>n.value==="single"?t.value[g.value]:t.value.map(c=>c[g.value])),b=h(()=>n.value!=="single"?t.value.map(c=>c[g.value]).join(","):t.value[g.value]);return{iv:t,internalValue:t,ev:d,externalValue:d,textValue:b,plainValue:E}}function Al(e,r,a){const{regex:i}=Q(e),n=ke().proxy,g=a.isOpen,t=a.open,d=K(null),E=K(null),b=()=>{d.value=""},c=S=>{d.value=S.target.value},y=S=>{if(i&&i.value){let P=i.value;typeof P=="string"&&(P=new RegExp(P)),S.key.match(P)||S.preventDefault()}},D=S=>{if(i&&i.value){let R=(S.clipboardData||window.clipboardData).getData("Text"),B=i.value;typeof B=="string"&&(B=new RegExp(B)),R.split("").every(m=>!!m.match(B))||S.preventDefault()}r.emit("paste",S,n)};return x(d,S=>{!g.value&&S&&t(),r.emit("search-change",S,n)}),{search:d,input:E,clearSearch:b,handleSearchInput:c,handleKeypress:y,handlePaste:D}}function Rl(e,r,a){const{groupSelect:i,mode:n,groups:g,disabledProp:t}=Q(e),d=K(null),E=c=>{c===void 0||c!==null&&c[t.value]||g.value&&c&&c.group&&(n.value==="single"||!i.value)||(d.value=c)};return{pointer:d,setPointer:E,clearPointer:()=>{E(null)}}}function Ke(e,r=!0){return r?String(e).toLowerCase().trim():String(e).toLowerCase().normalize("NFD").trim().replace(new RegExp(/æ/g),"ae").replace(new RegExp(/œ/g),"oe").replace(new RegExp(/ø/g),"o").replace(/\p{Diacritic}/gu,"")}function jl(e){return Object.prototype.toString.call(e)==="[object Object]"}function Ml(e,r){const a=r.slice().sort();return e.length===r.length&&e.slice().sort().every(function(i,n){return i===a[n]})}function Vl(e,r,a){const{options:i,mode:n,trackBy:g,limit:t,hideSelected:d,createTag:E,createOption:b,label:c,appendNewTag:y,appendNewOption:D,multipleLabel:S,object:P,loading:R,delay:B,resolveOnLoad:m,minChars:o,filterResults:C,clearOnSearch:N,clearOnSelect:z,valueProp:p,allowAbsent:H,groupLabel:_,canDeselect:G,max:Y,strict:X,closeOnSelect:v,closeOnDeselect:k,groups:Z,reverse:ne,infinite:be,groupOptions:U,groupHideEmpty:we,groupSelect:T,onCreate:A,disabledProp:j,searchStart:ie,searchFilter:me}=Q(e),W=ke().proxy,q=a.iv,s=a.ev,f=a.search,J=a.clearSearch,se=a.update,al=a.pointer,de=a.clearPointer,tl=a.focus,nl=a.deactivate,ve=a.close,sl=a.localize,ye=K([]),oe=K([]),ee=K(!1),Ce=K(null),De=K(be.value&&t.value===-1?10:t.value),_e=h(()=>E.value||b.value||!1),ul=h(()=>y.value!==void 0?y.value:D.value!==void 0?D.value:!0),ce=h(()=>{if(Z.value){let l=Pe.value||[],u=[];return l.forEach(O=>{Ve(O[U.value]).forEach(F=>{u.push(Object.assign({},F,O[j.value]?{[j.value]:!0}:{}))})}),u}else{let l=Ve(oe.value||[]);return ye.value.length&&(l=l.concat(ye.value)),l}}),Ue=h(()=>{let l=ce.value;return ne.value&&(l=l.reverse()),fe.value.length&&(l=fe.value.concat(l)),Me(l)}),Oe=h(()=>{let l=Ue.value;return De.value>0&&(l=l.slice(0,De.value)),l}),Pe=h(()=>{if(!Z.value)return[];let l=[],u=oe.value||[];return ye.value.length&&l.push({[_.value]:" ",[U.value]:[...ye.value],__CREATE__:!0}),l.concat(u)}),rl=h(()=>{let l=[...Pe.value].map(u=>({...u}));return fe.value.length&&(l[0]&&l[0].__CREATE__?l[0][U.value]=[...fe.value,...l[0][U.value]]:l=[{[_.value]:" ",[U.value]:[...fe.value],__CREATE__:!0}].concat(l)),l}),We=h(()=>{if(!Z.value)return[];let l=rl.value;return Ll((l||[]).map((u,O)=>{const F=Ve(u[U.value]);return{...u,index:O,group:!0,[U.value]:Me(F,!1).map(Se=>Object.assign({},Se,u[j.value]?{[j.value]:!0}:{})),__VISIBLE__:Me(F).map(Se=>Object.assign({},Se,u[j.value]?{[j.value]:!0}:{}))}}))}),Be=h(()=>{switch(n.value){case"single":return!ae(q.value[p.value]);case"multiple":case"tags":return!ae(q.value)&&q.value.length>0}}),il=h(()=>S!==void 0&&S.value!==void 0?S.value(q.value,W):q.value&&q.value.length>1?`${q.value.length} options selected`:"1 option selected"),ol=h(()=>!ce.value.length&&!ee.value&&!fe.value.length),cl=h(()=>ce.value.length>0&&Oe.value.length==0&&(f.value&&Z.value||!Z.value)),fe=h(()=>_e.value===!1||!f.value?[]:yl(f.value)!==-1?[]:[{[p.value]:f.value,[le.value]:f.value,[c.value]:f.value,__CREATE__:!0}]),le=h(()=>g.value||c.value),dl=h(()=>{switch(n.value){case"single":return null;case"multiple":case"tags":return[]}}),vl=h(()=>R.value||ee.value),pe=l=>{switch(typeof l!="object"&&(l=re(l)),n.value){case"single":se(l);break;case"multiple":case"tags":se(q.value.concat(l));break}r.emit("select",$e(l),l,W)},he=l=>{switch(typeof l!="object"&&(l=re(l)),n.value){case"single":Je();break;case"tags":case"multiple":se(Array.isArray(l)?q.value.filter(u=>l.map(O=>O[p.value]).indexOf(u[p.value])===-1):q.value.filter(u=>u[p.value]!=l[p.value]));break}r.emit("deselect",$e(l),l,W)},$e=l=>P.value?l:l[p.value],Ye=l=>{he(l)},fl=(l,u)=>{if(u.button!==0){u.preventDefault();return}Ye(l)},Je=()=>{r.emit("clear",W),se(dl.value)},ue=l=>{if(l.group!==void 0)return n.value==="single"?!1:ml(l[U.value])&&l[U.value].length;switch(n.value){case"single":return!ae(q.value)&&q.value[p.value]==l[p.value];case"tags":case"multiple":return!ae(q.value)&&q.value.map(u=>u[p.value]).indexOf(l[p.value])!==-1}},Ae=l=>l[j.value]===!0,Re=()=>Y===void 0||Y.value===-1||!Be.value&&Y.value>0?!1:q.value.length>=Y.value,pl=l=>{if(!Ae(l)){if(A&&A.value&&!ue(l)&&l.__CREATE__&&(l={...l},delete l.__CREATE__,l=A.value(l,W),l instanceof Promise)){ee.value=!0,l.then(u=>{ee.value=!1,Qe(u)});return}Qe(l)}},Qe=l=>{switch(l.__CREATE__&&(l={...l},delete l.__CREATE__),n.value){case"single":if(l&&ue(l)){G.value&&he(l),k.value&&(de(),ve());return}l&&je(l),z.value&&J(),v.value&&(de(),ve()),l&&pe(l);break;case"multiple":if(l&&ue(l)){he(l),k.value&&(de(),ve());return}if(Re()){r.emit("max",W);return}l&&(je(l),pe(l)),z.value&&J(),d.value&&de(),v.value&&ve();break;case"tags":if(l&&ue(l)){he(l),k.value&&(de(),ve());return}if(Re()){r.emit("max",W);return}l&&je(l),z.value&&J(),l&&pe(l),d.value&&de(),v.value&&ve();break}v.value||tl()},hl=l=>{if(!(Ae(l)||n.value==="single"||!T.value)){switch(n.value){case"multiple":case"tags":bl(l[U.value])?he(l[U.value]):pe(l[U.value].filter(u=>q.value.map(O=>O[p.value]).indexOf(u[p.value])===-1).filter(u=>!u[j.value]).filter((u,O)=>q.value.length+1+O<=Y.value||Y.value===-1));break}v.value&&nl()}},je=l=>{re(l[p.value])===void 0&&_e.value&&(r.emit("tag",l[p.value],W),r.emit("option",l[p.value],W),r.emit("create",l[p.value],W),ul.value&&Sl(l),J())},gl=()=>{n.value!=="single"&&pe(Oe.value.filter(l=>!l.disabled&&!ue(l)))},bl=l=>l.find(u=>!ue(u)&&!u[j.value])===void 0,ml=l=>l.find(u=>!ue(u))===void 0,re=l=>ce.value[ce.value.map(u=>String(u[p.value])).indexOf(String(l))],yl=(l,u=!0)=>ce.value.map(O=>parseInt(O[le.value])==O[le.value]?parseInt(O[le.value]):O[le.value]).indexOf(parseInt(l)==l?parseInt(l):l),Ol=l=>["tags","multiple"].indexOf(n.value)!==-1&&d.value&&ue(l),Sl=l=>{ye.value.push(l)},Ll=l=>we.value?l.filter(u=>f.value?u.__VISIBLE__.length:u[U.value].length):l.filter(u=>f.value?u.__VISIBLE__.length:!0),Me=(l,u=!0)=>{let O=l;if(f.value&&C.value){let F=me.value;F||(F=(Se,Ba)=>{let Ze=Ke(sl(Se[le.value]),X.value);return ie.value?Ze.startsWith(Ke(f.value,X.value)):Ze.indexOf(Ke(f.value,X.value))!==-1}),O=O.filter(F)}return d.value&&u&&(O=O.filter(F=>!Ol(F))),O},Ve=l=>{let u=l;return jl(u)&&(u=Object.keys(u).map(O=>{let F=u[O];return{[p.value]:O,[le.value]:F,[c.value]:F}})),u=u.map(O=>typeof O=="object"?O:{[p.value]:O,[le.value]:O,[c.value]:O}),u},Te=()=>{ae(s.value)||(q.value=Ee(s.value))},qe=l=>(ee.value=!0,new Promise((u,O)=>{i.value(f.value,W).then(F=>{oe.value=F||[],typeof l=="function"&&l(F),ee.value=!1}).catch(F=>{console.error(F),oe.value=[],ee.value=!1}).finally(()=>{u()})})),Ge=()=>{if(Be.value)if(n.value==="single"){let l=re(q.value[p.value]);if(l!==void 0){let u=l[c.value];q.value[c.value]=u,P.value&&(s.value[c.value]=u)}}else q.value.forEach((l,u)=>{let O=re(q.value[u][p.value]);if(O!==void 0){let F=O[c.value];q.value[u][c.value]=F,P.value&&(s.value[u][c.value]=F)}})},kl=l=>{qe(l)},Ee=l=>ae(l)?n.value==="single"?{}:[]:P.value?l:n.value==="single"?re(l)||(H.value?{[c.value]:l,[p.value]:l,[le.value]:l}:{}):l.filter(u=>!!re(u)||H.value).map(u=>re(u)||{[c.value]:u,[p.value]:u,[le.value]:u}),Xe=()=>{Ce.value=x(f,l=>{l.length<o.value||!l&&o.value!==0||(ee.value=!0,N.value&&(oe.value=[]),setTimeout(()=>{l==f.value&&i.value(f.value,W).then(u=>{(l==f.value||!f.value)&&(oe.value=u,al.value=Oe.value.filter(O=>O[j.value]!==!0)[0]||null,ee.value=!1)}).catch(u=>{console.error(u)})},B.value))},{flush:"sync"})};if(n.value!=="single"&&!ae(s.value)&&!Array.isArray(s.value))throw new Error(`v-model must be an array when using "${n.value}" mode`);return i&&typeof i.value=="function"?m.value?qe(Te):P.value==!0&&Te():(oe.value=i.value,Te()),B.value>-1&&Xe(),x(B,(l,u)=>{Ce.value&&Ce.value(),l>=0&&Xe()}),x(s,l=>{if(ae(l)){se(Ee(l),!1);return}switch(n.value){case"single":(P.value?l[p.value]!=q.value[p.value]:l!=q.value[p.value])&&se(Ee(l),!1);break;case"multiple":case"tags":Ml(P.value?l.map(u=>u[p.value]):l,q.value.map(u=>u[p.value]))||se(Ee(l),!1);break}},{deep:!0}),x(i,(l,u)=>{typeof e.options=="function"?m.value&&(!u||l&&l.toString()!==u.toString())&&qe():(oe.value=e.options,Object.keys(q.value).length||Te(),Ge())}),x(c,Ge),{pfo:Ue,fo:Oe,filteredOptions:Oe,hasSelected:Be,multipleLabelText:il,eo:ce,extendedOptions:ce,eg:Pe,extendedGroups:Pe,fg:We,filteredGroups:We,noOptions:ol,noResults:cl,resolving:ee,busy:vl,offset:De,select:pe,deselect:he,remove:Ye,selectAll:gl,clear:Je,isSelected:ue,isDisabled:Ae,isMax:Re,getOption:re,handleOptionClick:pl,handleGroupClick:hl,handleTagRemove:fl,refreshOptions:kl,resolveOptions:qe,refreshLabels:Ge}}function Gl(e,r,a){const{valueProp:i,showOptions:n,searchable:g,groupLabel:t,groups:d,mode:E,groupSelect:b,disabledProp:c,groupOptions:y}=Q(e),D=a.fo,S=a.fg,P=a.handleOptionClick,R=a.handleGroupClick,B=a.search,m=a.pointer,o=a.setPointer,C=a.clearPointer,N=a.multiselect,z=a.isOpen,p=h(()=>D.value.filter(s=>!s[c.value])),H=h(()=>S.value.filter(s=>!s[c.value])),_=h(()=>E.value!=="single"&&b.value),G=h(()=>m.value&&m.value.group),Y=h(()=>W(m.value)),X=h(()=>{const s=G.value?m.value:W(m.value),f=H.value.map(se=>se[t.value]).indexOf(s[t.value]);let J=H.value[f-1];return J===void 0&&(J=k.value),J}),v=h(()=>{let s=H.value.map(f=>f.label).indexOf(G.value?m.value[t.value]:W(m.value)[t.value])+1;return H.value.length<=s&&(s=0),H.value[s]}),k=h(()=>[...H.value].slice(-1)[0]),Z=h(()=>m.value.__VISIBLE__.filter(s=>!s[c.value])[0]),ne=h(()=>{const s=Y.value.__VISIBLE__.filter(f=>!f[c.value]);return s[s.map(f=>f[i.value]).indexOf(m.value[i.value])-1]}),be=h(()=>{const s=W(m.value).__VISIBLE__.filter(f=>!f[c.value]);return s[s.map(f=>f[i.value]).indexOf(m.value[i.value])+1]}),U=h(()=>[...X.value.__VISIBLE__.filter(s=>!s[c.value])].slice(-1)[0]),we=h(()=>[...k.value.__VISIBLE__.filter(s=>!s[c.value])].slice(-1)[0]),T=s=>m.value&&(!s.group&&m.value[i.value]===s[i.value]||s.group!==void 0&&m.value[t.value]===s[t.value])?!0:void 0,A=()=>{o(p.value[0]||null)},j=()=>{!m.value||m.value[c.value]===!0||(G.value?R(m.value):P(m.value))},ie=()=>{if(m.value===null)o((d.value&&_.value?H.value[0].__CREATE__?p.value[0]:H.value[0]:p.value[0])||null);else if(d.value&&_.value){let s=G.value?Z.value:be.value;s===void 0&&(s=v.value,s.__CREATE__&&(s=s[y.value][0])),o(s||null)}else{let s=p.value.map(f=>f[i.value]).indexOf(m.value[i.value])+1;p.value.length<=s&&(s=0),o(p.value[s]||null)}Ie(()=>{q()})},me=()=>{if(m.value===null){let s=p.value[p.value.length-1];d.value&&_.value&&(s=we.value,s===void 0&&(s=k.value)),o(s||null)}else if(d.value&&_.value){let s=G.value?U.value:ne.value;s===void 0&&(s=G.value?X.value:Y.value,s.__CREATE__&&(s=U.value,s===void 0&&(s=X.value))),o(s||null)}else{let s=p.value.map(f=>f[i.value]).indexOf(m.value[i.value])-1;s<0&&(s=p.value.length-1),o(p.value[s]||null)}Ie(()=>{q()})},W=s=>H.value.find(f=>f.__VISIBLE__.map(J=>J[i.value]).indexOf(s[i.value])!==-1),q=()=>{let s=N.value.querySelector("[data-pointed]");if(!s)return;let f=s.parentElement.parentElement;d.value&&(f=G.value?s.parentElement.parentElement.parentElement:s.parentElement.parentElement.parentElement.parentElement),s.offsetTop+s.offsetHeight>f.clientHeight+f.scrollTop&&(f.scrollTop=s.offsetTop+s.offsetHeight-f.clientHeight),s.offsetTop<f.scrollTop&&(f.scrollTop=s.offsetTop)};return x(B,s=>{g.value&&(s.length&&n.value?A():C())}),x(z,s=>{if(s){let f=N.value.querySelectorAll("[data-selected]")[0];if(!f)return;let J=f.parentElement.parentElement;Ie(()=>{J.scrollTop>0||(J.scrollTop=f.offsetTop)})}}),{pointer:m,canPointGroups:_,isPointed:T,setPointerFirst:A,selectPointer:j,forwardPointer:ie,backwardPointer:me}}function Nl(e,r,a){const{disabled:i}=Q(e),n=ke().proxy,g=K(!1);return{isOpen:g,open:()=>{g.value||i.value||(g.value=!0,r.emit("open",n))},close:()=>{g.value&&(g.value=!1,r.emit("close",n))}}}function Fl(e,r,a){const{searchable:i,disabled:n,clearOnBlur:g}=Q(e),t=a.input,d=a.open,E=a.close,b=a.clearSearch,c=a.isOpen,y=K(null),D=K(null),S=K(null),P=K(!1),R=K(!1),B=h(()=>i.value||n.value?-1:0),m=()=>{i.value&&t.value.blur(),D.value.blur()},o=()=>{i.value&&!n.value&&t.value.focus()},C=(G=!0)=>{n.value||(P.value=!0,G&&d())},N=()=>{P.value=!1,setTimeout(()=>{P.value||(E(),g.value&&b())},1)};return{multiselect:y,wrapper:D,tags:S,tabindex:B,isActive:P,mouseClicked:R,blur:m,focus:o,activate:C,deactivate:N,handleFocusIn:G=>{G.target.closest("[data-tags]")&&G.target.nodeName!=="INPUT"||G.target.closest("[data-clear]")||C(R.value)},handleFocusOut:()=>{N()},handleCaretClick:()=>{N(),m()},handleMousedown:G=>{R.value=!0,c.value&&(G.target.isEqualNode(D.value)||G.target.isEqualNode(S.value))?setTimeout(()=>{N()},0):document.activeElement.isEqualNode(D.value)&&!c.value&&C(),setTimeout(()=>{R.value=!1},0)}}}function Kl(e,r,a){const{mode:i,addTagOn:n,openDirection:g,searchable:t,showOptions:d,valueProp:E,groups:b,addOptionOn:c,createTag:y,createOption:D,reverse:S}=Q(e),P=ke().proxy,R=a.iv,B=a.update,m=a.search,o=a.setPointer,C=a.selectPointer,N=a.backwardPointer,z=a.forwardPointer,p=a.multiselect,H=a.wrapper,_=a.tags,G=a.isOpen,Y=a.open,X=a.blur,v=a.fo,k=h(()=>y.value||D.value||!1),Z=h(()=>n.value!==void 0?n.value:c.value!==void 0?c.value:["enter"]),ne=()=>{i.value==="tags"&&!d.value&&k.value&&t.value&&!b.value&&o(v.value[v.value.map(T=>T[E.value]).indexOf(m.value)])},be=T=>{let A=T.length-1;for(;A>=0&&(T[A].remove===!1||T[A].disabled);)A--;return A<0||T.splice(A,1),T};return{handleKeydown:T=>{r.emit("keydown",T,P);let A,j;switch(["ArrowLeft","ArrowRight","Enter"].indexOf(T.key)!==-1&&i.value==="tags"&&(A=[...p.value.querySelectorAll("[data-tags] > *")].filter(ie=>ie!==_.value),j=A.findIndex(ie=>ie===document.activeElement)),T.key){case"Backspace":if(i.value==="single"||t.value&&[null,""].indexOf(m.value)===-1||R.value.length===0)return;B(be([...R.value]));break;case"Enter":if(T.preventDefault(),T.keyCode===229)return;if(j!==-1&&j!==void 0){B([...R.value].filter((ie,me)=>me!==j)),j===A.length-1&&(A.length-1?A[A.length-2].focus():t.value?_.value.querySelector("input").focus():H.value.focus());return}if(Z.value.indexOf("enter")===-1&&k.value)return;ne(),C();break;case" ":if(!k.value&&!t.value){T.preventDefault(),ne(),C();return}if(!k.value)return!1;if(Z.value.indexOf("space")===-1&&k.value)return;T.preventDefault(),ne(),C();break;case"Tab":case";":case",":if(Z.value.indexOf(T.key.toLowerCase())===-1||!k.value)return;ne(),C(),T.preventDefault();break;case"Escape":X();break;case"ArrowUp":if(T.preventDefault(),!d.value)return;G.value||Y(),N();break;case"ArrowDown":if(T.preventDefault(),!d.value)return;G.value||Y(),z();break;case"ArrowLeft":if(t.value&&_.value&&_.value.querySelector("input").selectionStart||T.shiftKey||i.value!=="tags"||!R.value||!R.value.length)return;T.preventDefault(),j===-1?A[A.length-1].focus():j>0&&A[j-1].focus();break;case"ArrowRight":if(j===-1||T.shiftKey||i.value!=="tags"||!R.value||!R.value.length)return;T.preventDefault(),A.length>j+1?A[j+1].focus():t.value?_.value.querySelector("input").focus():t.value||H.value.focus();break}},handleKeyup:T=>{r.emit("keyup",T,P)},preparePointer:ne}}function Hl(e,r,a){const{classes:i,disabled:n,openDirection:g,showOptions:t}=Q(e),d=a.isOpen,E=a.isPointed,b=a.isSelected,c=a.isDisabled,y=a.isActive,D=a.canPointGroups,S=a.resolving,P=a.fo,R=h(()=>({container:"multiselect",containerDisabled:"is-disabled",containerOpen:"is-open",containerOpenTop:"is-open-top",containerActive:"is-active",wrapper:"multiselect-wrapper",singleLabel:"multiselect-single-label",singleLabelText:"multiselect-single-label-text",multipleLabel:"multiselect-multiple-label",search:"multiselect-search",tags:"multiselect-tags",tag:"multiselect-tag",tagDisabled:"is-disabled",tagRemove:"multiselect-tag-remove",tagRemoveIcon:"multiselect-tag-remove-icon",tagsSearchWrapper:"multiselect-tags-search-wrapper",tagsSearch:"multiselect-tags-search",tagsSearchCopy:"multiselect-tags-search-copy",placeholder:"multiselect-placeholder",caret:"multiselect-caret",caretOpen:"is-open",clear:"multiselect-clear",clearIcon:"multiselect-clear-icon",spinner:"multiselect-spinner",inifinite:"multiselect-inifite",inifiniteSpinner:"multiselect-inifite-spinner",dropdown:"multiselect-dropdown",dropdownTop:"is-top",dropdownHidden:"is-hidden",options:"multiselect-options",optionsTop:"is-top",group:"multiselect-group",groupLabel:"multiselect-group-label",groupLabelPointable:"is-pointable",groupLabelPointed:"is-pointed",groupLabelSelected:"is-selected",groupLabelDisabled:"is-disabled",groupLabelSelectedPointed:"is-selected is-pointed",groupLabelSelectedDisabled:"is-selected is-disabled",groupOptions:"multiselect-group-options",option:"multiselect-option",optionPointed:"is-pointed",optionSelected:"is-selected",optionDisabled:"is-disabled",optionSelectedPointed:"is-selected is-pointed",optionSelectedDisabled:"is-selected is-disabled",noOptions:"multiselect-no-options",noResults:"multiselect-no-results",fakeInput:"multiselect-fake-input",assist:"multiselect-assistive-text",spacer:"multiselect-spacer",...i.value})),B=h(()=>!!(d.value&&t.value&&(!S.value||S.value&&P.value.length)));return{classList:h(()=>{const o=R.value;return{container:[o.container].concat(n.value?o.containerDisabled:[]).concat(B.value&&g.value==="top"?o.containerOpenTop:[]).concat(B.value&&g.value!=="top"?o.containerOpen:[]).concat(y.value?o.containerActive:[]),wrapper:o.wrapper,spacer:o.spacer,singleLabel:o.singleLabel,singleLabelText:o.singleLabelText,multipleLabel:o.multipleLabel,search:o.search,tags:o.tags,tag:[o.tag].concat(n.value?o.tagDisabled:[]),tagDisabled:o.tagDisabled,tagRemove:o.tagRemove,tagRemoveIcon:o.tagRemoveIcon,tagsSearchWrapper:o.tagsSearchWrapper,tagsSearch:o.tagsSearch,tagsSearchCopy:o.tagsSearchCopy,placeholder:o.placeholder,caret:[o.caret].concat(d.value?o.caretOpen:[]),clear:o.clear,clearIcon:o.clearIcon,spinner:o.spinner,inifinite:o.inifinite,inifiniteSpinner:o.inifiniteSpinner,dropdown:[o.dropdown].concat(g.value==="top"?o.dropdownTop:[]).concat(!d.value||!t.value||!B.value?o.dropdownHidden:[]),options:[o.options].concat(g.value==="top"?o.optionsTop:[]),group:o.group,groupLabel:C=>{let N=[o.groupLabel];return E(C)?N.push(b(C)?o.groupLabelSelectedPointed:o.groupLabelPointed):b(C)&&D.value?N.push(c(C)?o.groupLabelSelectedDisabled:o.groupLabelSelected):c(C)&&N.push(o.groupLabelDisabled),D.value&&N.push(o.groupLabelPointable),N},groupOptions:o.groupOptions,option:(C,N)=>{let z=[o.option];return E(C)?z.push(b(C)?o.optionSelectedPointed:o.optionPointed):b(C)?z.push(c(C)?o.optionSelectedDisabled:o.optionSelected):(c(C)||N&&c(N))&&z.push(o.optionDisabled),z},noOptions:o.noOptions,noResults:o.noResults,assist:o.assist,fakeInput:o.fakeInput}}),showDropdown:B}}function zl(e,r,a){const{limit:i,infinite:n}=Q(e),g=a.isOpen,t=a.offset,d=a.search,E=a.pfo,b=a.eo,c=K(null),y=K(null),D=h(()=>t.value<E.value.length),S=R=>{const{isIntersecting:B,target:m}=R[0];if(B){const o=m.offsetParent,C=o.scrollTop;t.value+=i.value==-1?10:i.value,Ie(()=>{o.scrollTop=C})}},P=()=>{g.value&&t.value<E.value.length?c.value.observe(y.value):!g.value&&c.value&&c.value.disconnect()};return x(g,()=>{n.value&&P()}),x(d,()=>{n.value&&(t.value=i.value,P())},{flush:"post"}),x(b,()=>{n.value&&P()},{immediate:!1,flush:"post"}),ll(()=>{window&&window.IntersectionObserver&&(c.value=new IntersectionObserver(S))}),{hasMore:D,infiniteLoader:y}}function _l(e,r,a){const{placeholder:i,id:n,valueProp:g,label:t,mode:d,groupLabel:E,aria:b,searchable:c}=Q(e),y=a.pointer,D=a.iv,S=a.hasSelected,P=a.multipleLabelText,R=K(null),B=h(()=>{let v=[];return n&&n.value&&v.push(n.value),v.push("assist"),v.join("-")}),m=h(()=>{let v=[];return n&&n.value&&v.push(n.value),v.push("multiselect-options"),v.join("-")}),o=h(()=>{let v=[];if(n&&n.value&&v.push(n.value),y.value)return v.push(y.value.group?"multiselect-group":"multiselect-option"),v.push(y.value.group?y.value.index:y.value[g.value]),v.join("-")}),C=h(()=>i.value),N=h(()=>d.value!=="single"),z=h(()=>{let v="";return d.value==="single"&&S.value&&(v+=D.value[t.value]),d.value==="multiple"&&S.value&&(v+=P.value),d.value==="tags"&&S.value&&(v+=D.value.map(k=>k[t.value]).join(", ")),v}),p=h(()=>{let v={...b.value};return c.value&&(v["aria-labelledby"]=v["aria-labelledby"]?`${B.value} ${v["aria-labelledby"]}`:B.value,z.value&&v["aria-label"]&&(v["aria-label"]=`${z.value}, ${v["aria-label"]}`)),v}),H=v=>{let k=[];return n&&n.value&&k.push(n.value),k.push("multiselect-option"),k.push(v[g.value]),k.join("-")},_=v=>{let k=[];return n&&n.value&&k.push(n.value),k.push("multiselect-group"),k.push(v.index),k.join("-")},G=v=>{let k=[];return k.push(v),k.join(" ")},Y=v=>{let k=[];return k.push(v),k.join(" ")},X=v=>`${v} ❎`;return ll(()=>{if(n&&n.value&&document&&document.querySelector){let v=document.querySelector(`[for="${n.value}"]`);R.value=v?v.innerText:null}}),{arias:p,ariaLabel:z,ariaAssist:B,ariaControls:m,ariaPlaceholder:C,ariaMultiselectable:N,ariaActiveDescendant:o,ariaOptionId:H,ariaOptionLabel:G,ariaGroupId:_,ariaGroupLabel:Y,ariaTagLabel:X}}function Ul(e,r,a){const{locale:i,fallbackLocale:n}=Q(e);return{localize:t=>!t||typeof t!="object"?t:t&&t[i.value]?t[i.value]:t&&i.value&&t[i.value.toUpperCase()]?t[i.value.toUpperCase()]:t&&t[n.value]?t[n.value]:t&&n.value&&t[n.value.toUpperCase()]?t[n.value.toUpperCase()]:t&&Object.keys(t)[0]?t[Object.keys(t)[0]]:""}}function Wl(e,r,a,i={}){return a.forEach(n=>{n&&(i={...i,...n(e,r,i)})}),i}var ze={name:"Multiselect",emits:["paste","open","close","select","deselect","input","search-change","tag","option","update:modelValue","change","clear","keydown","keyup","max","create"],props:{value:{required:!1},modelValue:{required:!1},options:{type:[Array,Object,Function],required:!1,default:()=>[]},id:{type:[String,Number],required:!1},name:{type:[String,Number],required:!1,default:"multiselect"},disabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:"label"},trackBy:{type:String,required:!1,default:void 0},valueProp:{type:String,required:!1,default:"value"},placeholder:{type:String,required:!1,default:null},mode:{type:String,required:!1,default:"single"},searchable:{type:Boolean,required:!1,default:!1},limit:{type:Number,required:!1,default:-1},hideSelected:{type:Boolean,required:!1,default:!0},createTag:{type:Boolean,required:!1,default:void 0},createOption:{type:Boolean,required:!1,default:void 0},appendNewTag:{type:Boolean,required:!1,default:void 0},appendNewOption:{type:Boolean,required:!1,default:void 0},addTagOn:{type:Array,required:!1,default:void 0},addOptionOn:{type:Array,required:!1,default:void 0},caret:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},noOptionsText:{type:[String,Object],required:!1,default:"The list is empty"},noResultsText:{type:[String,Object],required:!1,default:"No results found"},multipleLabel:{type:Function,required:!1},object:{type:Boolean,required:!1,default:!1},delay:{type:Number,required:!1,default:-1},minChars:{type:Number,required:!1,default:0},resolveOnLoad:{type:Boolean,required:!1,default:!0},filterResults:{type:Boolean,required:!1,default:!0},clearOnSearch:{type:Boolean,required:!1,default:!1},clearOnSelect:{type:Boolean,required:!1,default:!0},canDeselect:{type:Boolean,required:!1,default:!0},canClear:{type:Boolean,required:!1,default:!0},max:{type:Number,required:!1,default:-1},showOptions:{type:Boolean,required:!1,default:!0},required:{type:Boolean,required:!1,default:!1},openDirection:{type:String,required:!1,default:"bottom"},nativeSupport:{type:Boolean,required:!1,default:!1},classes:{type:Object,required:!1,default:()=>({})},strict:{type:Boolean,required:!1,default:!0},closeOnSelect:{type:Boolean,required:!1,default:!0},closeOnDeselect:{type:Boolean,required:!1,default:!1},autocomplete:{type:String,required:!1},groups:{type:Boolean,required:!1,default:!1},groupLabel:{type:String,required:!1,default:"label"},groupOptions:{type:String,required:!1,default:"options"},groupHideEmpty:{type:Boolean,required:!1,default:!1},groupSelect:{type:Boolean,required:!1,default:!0},inputType:{type:String,required:!1,default:"text"},attrs:{required:!1,type:Object,default:()=>({})},onCreate:{required:!1,type:Function},disabledProp:{type:String,required:!1,default:"disabled"},searchStart:{type:Boolean,required:!1,default:!1},reverse:{type:Boolean,required:!1,default:!1},regex:{type:[Object,String,RegExp],required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},infinite:{type:Boolean,required:!1,default:!1},aria:{required:!1,type:Object,default:()=>({})},clearOnBlur:{required:!1,type:Boolean,default:!0},locale:{required:!1,type:String,default:null},fallbackLocale:{required:!1,type:String,default:"en"},searchFilter:{required:!1,type:Function,default:null},allowAbsent:{required:!1,type:Boolean,default:!1}},setup(e,r){return Wl(e,r,[Ul,Bl,Rl,Nl,Al,Dl,Fl,Vl,zl,Gl,Kl,Hl,_l])}};const $l=["id","dir"],Yl=["tabindex","aria-controls","aria-placeholder","aria-expanded","aria-activedescendant","aria-multiselectable","role"],Jl=["type","modelValue","value","autocomplete","id","aria-controls","aria-placeholder","aria-expanded","aria-activedescendant","aria-multiselectable"],Ql=["onKeyup","aria-label"],Xl=["onClick"],Zl=["type","modelValue","value","id","autocomplete","aria-controls","aria-placeholder","aria-expanded","aria-activedescendant","aria-multiselectable"],xl=["innerHTML"],ea=["id"],la=["id","aria-label","aria-selected"],aa=["data-pointed","onMouseenter","onClick"],ta=["innerHTML"],na=["aria-label"],sa=["data-pointed","data-selected","onMouseenter","onClick","id","aria-selected","aria-label"],ua=["data-pointed","data-selected","onMouseenter","onClick","id","aria-selected","aria-label"],ra=["innerHTML"],ia=["innerHTML"],oa=["value"],ca=["name","value"],da=["name","value"],va=["id"];function fa(e,r,a,i,n,g){return M(),V("div",{ref:"multiselect",class:I(e.classList.container),id:a.searchable?void 0:a.id,dir:a.rtl?"rtl":void 0,onFocusin:r[10]||(r[10]=(...t)=>e.handleFocusIn&&e.handleFocusIn(...t)),onFocusout:r[11]||(r[11]=(...t)=>e.handleFocusOut&&e.handleFocusOut(...t)),onKeyup:r[12]||(r[12]=(...t)=>e.handleKeyup&&e.handleKeyup(...t)),onKeydown:r[13]||(r[13]=(...t)=>e.handleKeydown&&e.handleKeydown(...t))},[L("div",Ne({class:e.classList.wrapper,onMousedown:r[9]||(r[9]=(...t)=>e.handleMousedown&&e.handleMousedown(...t)),ref:"wrapper",tabindex:e.tabindex,"aria-controls":a.searchable?void 0:e.ariaControls,"aria-placeholder":a.searchable?void 0:e.ariaPlaceholder,"aria-expanded":a.searchable?void 0:e.isOpen,"aria-activedescendant":a.searchable?void 0:e.ariaActiveDescendant,"aria-multiselectable":a.searchable?void 0:e.ariaMultiselectable,role:a.searchable?void 0:"combobox"},a.searchable?{}:e.arias),[w(" Search "),a.mode!=="tags"&&a.searchable&&!a.disabled?(M(),V("input",Ne({key:0,type:a.inputType,modelValue:e.search,value:e.search,class:e.classList.search,autocomplete:a.autocomplete,id:a.searchable?a.id:void 0,onInput:r[0]||(r[0]=(...t)=>e.handleSearchInput&&e.handleSearchInput(...t)),onKeypress:r[1]||(r[1]=(...t)=>e.handleKeypress&&e.handleKeypress(...t)),onPaste:r[2]||(r[2]=Fe((...t)=>e.handlePaste&&e.handlePaste(...t),["stop"])),ref:"input","aria-controls":e.ariaControls,"aria-placeholder":e.ariaPlaceholder,"aria-expanded":e.isOpen,"aria-activedescendant":e.ariaActiveDescendant,"aria-multiselectable":e.ariaMultiselectable,role:"combobox"},{...a.attrs,...e.arias}),null,16,Jl)):w("v-if",!0),w(" Tags (with search) "),a.mode=="tags"?(M(),V("div",{key:1,class:I(e.classList.tags),"data-tags":""},[(M(!0),V(ge,null,Le(e.iv,(t,d,E)=>$(e.$slots,"tag",{option:t,handleTagRemove:e.handleTagRemove,disabled:a.disabled},()=>[(M(),V("span",{class:I([e.classList.tag,t.disabled?e.classList.tagDisabled:null]),tabindex:"-1",onKeyup:xe(b=>e.handleTagRemove(t,b),["enter"]),key:E,"aria-label":e.ariaTagLabel(e.localize(t[a.label]))},[el(te(e.localize(t[a.label]))+" ",1),!a.disabled&&!t.disabled?(M(),V("span",{key:0,class:I(e.classList.tagRemove),onClick:Fe(b=>e.handleTagRemove(t,b),["stop"])},[L("span",{class:I(e.classList.tagRemoveIcon)},null,2)],10,Xl)):w("v-if",!0)],42,Ql))])),256)),L("div",{class:I(e.classList.tagsSearchWrapper),ref:"tags"},[w(" Used for measuring search width "),L("span",{class:I(e.classList.tagsSearchCopy)},te(e.search),3),w(" Actual search input "),a.searchable&&!a.disabled?(M(),V("input",Ne({key:0,type:a.inputType,modelValue:e.search,value:e.search,class:e.classList.tagsSearch,id:a.searchable?a.id:void 0,autocomplete:a.autocomplete,onInput:r[3]||(r[3]=(...t)=>e.handleSearchInput&&e.handleSearchInput(...t)),onKeypress:r[4]||(r[4]=(...t)=>e.handleKeypress&&e.handleKeypress(...t)),onPaste:r[5]||(r[5]=Fe((...t)=>e.handlePaste&&e.handlePaste(...t),["stop"])),ref:"input","aria-controls":e.ariaControls,"aria-placeholder":e.ariaPlaceholder,"aria-expanded":e.isOpen,"aria-activedescendant":e.ariaActiveDescendant,"aria-multiselectable":e.ariaMultiselectable,role:"combobox"},{...a.attrs,...e.arias}),null,16,Zl)):w("v-if",!0)],2)],2)):w("v-if",!0),w(" Single label "),a.mode=="single"&&e.hasSelected&&!e.search&&e.iv?$(e.$slots,"singlelabel",{key:2,value:e.iv},()=>[L("div",{class:I(e.classList.singleLabel)},[L("span",{class:I(e.classList.singleLabelText)},te(e.localize(e.iv[a.label])),3)],2)]):w("v-if",!0),w(" Multiple label "),a.mode=="multiple"&&e.hasSelected&&!e.search?$(e.$slots,"multiplelabel",{key:3,values:e.iv},()=>[L("div",{class:I(e.classList.multipleLabel),innerHTML:e.multipleLabelText},null,10,xl)]):w("v-if",!0),w(" Placeholder "),a.placeholder&&!e.hasSelected&&!e.search?$(e.$slots,"placeholder",{key:4},()=>[L("div",{class:I(e.classList.placeholder),"aria-hidden":"true"},te(a.placeholder),3)]):w("v-if",!0),w(" Spinner "),a.loading||e.resolving?$(e.$slots,"spinner",{key:5},()=>[L("span",{class:I(e.classList.spinner),"aria-hidden":"true"},null,2)]):w("v-if",!0),w(" Clear "),e.hasSelected&&!a.disabled&&a.canClear&&!e.busy?$(e.$slots,"clear",{key:6,clear:e.clear},()=>[L("span",{"aria-hidden":"true",tabindex:"0",role:"button","data-clear":"","aria-roledescription":"❎",class:I(e.classList.clear),onClick:r[6]||(r[6]=(...t)=>e.clear&&e.clear(...t)),onKeyup:r[7]||(r[7]=xe((...t)=>e.clear&&e.clear(...t),["enter"]))},[L("span",{class:I(e.classList.clearIcon)},null,2)],34)]):w("v-if",!0),w(" Caret "),a.caret&&a.showOptions?$(e.$slots,"caret",{key:7},()=>[L("span",{class:I(e.classList.caret),onClick:r[8]||(r[8]=(...t)=>e.handleCaretClick&&e.handleCaretClick(...t)),"aria-hidden":"true"},null,2)]):w("v-if",!0)],16,Yl),w(" Options "),L("div",{class:I(e.classList.dropdown),tabindex:"-1"},[$(e.$slots,"beforelist",{options:e.fo}),L("ul",{class:I(e.classList.options),id:e.ariaControls,role:"listbox"},[a.groups?(M(!0),V(ge,{key:0},Le(e.fg,(t,d,E)=>(M(),V("li",{class:I(e.classList.group),key:E,id:e.ariaGroupId(t),"aria-label":e.ariaGroupLabel(e.localize(t[a.groupLabel])),"aria-selected":e.isSelected(t),role:"option"},[t.__CREATE__?w("v-if",!0):(M(),V("div",{key:0,class:I(e.classList.groupLabel(t)),"data-pointed":e.isPointed(t),onMouseenter:b=>e.setPointer(t,d),onClick:b=>e.handleGroupClick(t)},[$(e.$slots,"grouplabel",{group:t,isSelected:e.isSelected,isPointed:e.isPointed},()=>[L("span",{innerHTML:e.localize(t[a.groupLabel])},null,8,ta)])],42,aa)),L("ul",{class:I(e.classList.groupOptions),"aria-label":e.ariaGroupLabel(e.localize(t[a.groupLabel])),role:"group"},[(M(!0),V(ge,null,Le(t.__VISIBLE__,(b,c,y)=>(M(),V("li",{class:I(e.classList.option(b,t)),"data-pointed":e.isPointed(b),"data-selected":e.isSelected(b)||void 0,key:y,onMouseenter:D=>e.setPointer(b),onClick:D=>e.handleOptionClick(b),id:e.ariaOptionId(b),"aria-selected":e.isSelected(b),"aria-label":e.ariaOptionLabel(e.localize(b[a.label])),role:"option"},[$(e.$slots,"option",{option:b,isSelected:e.isSelected,isPointed:e.isPointed,search:e.search},()=>[L("span",null,te(e.localize(b[a.label])),1)])],42,sa))),128))],10,na)],10,la))),128)):(M(!0),V(ge,{key:1},Le(e.fo,(t,d,E)=>(M(),V("li",{class:I(e.classList.option(t)),"data-pointed":e.isPointed(t),"data-selected":e.isSelected(t)||void 0,key:E,onMouseenter:b=>e.setPointer(t),onClick:b=>e.handleOptionClick(t),id:e.ariaOptionId(t),"aria-selected":e.isSelected(t),"aria-label":e.ariaOptionLabel(e.localize(t[a.label])),role:"option"},[$(e.$slots,"option",{option:t,isSelected:e.isSelected,isPointed:e.isPointed,search:e.search},()=>[L("span",null,te(e.localize(t[a.label])),1)])],42,ua))),128))],10,ea),e.noOptions?$(e.$slots,"nooptions",{key:0},()=>[L("div",{class:I(e.classList.noOptions),innerHTML:e.localize(a.noOptionsText)},null,10,ra)]):w("v-if",!0),e.noResults?$(e.$slots,"noresults",{key:1},()=>[L("div",{class:I(e.classList.noResults),innerHTML:e.localize(a.noResultsText)},null,10,ia)]):w("v-if",!0),a.infinite&&e.hasMore?(M(),V("div",{key:2,class:I(e.classList.inifinite),ref:"infiniteLoader"},[$(e.$slots,"infinite",{},()=>[L("span",{class:I(e.classList.inifiniteSpinner)},null,2)])],2)):w("v-if",!0),$(e.$slots,"afterlist",{options:e.fo})],2),w(" Hacky input element to show HTML5 required warning "),a.required?(M(),V("input",{key:0,class:I(e.classList.fakeInput),tabindex:"-1",value:e.textValue,required:""},null,10,oa)):w("v-if",!0),w(" Native input support "),a.nativeSupport?(M(),V(ge,{key:1},[a.mode=="single"?(M(),V("input",{key:0,type:"hidden",name:a.name,value:e.plainValue!==void 0?e.plainValue:""},null,8,ca)):(M(!0),V(ge,{key:1},Le(e.plainValue,(t,d)=>(M(),V("input",{type:"hidden",name:`${a.name}[]`,value:t,key:d},null,8,da))),128))],64)):w("v-if",!0),w(" Screen reader assistive text "),a.searchable&&e.hasSelected?(M(),V("div",{key:2,class:I(e.classList.assist),id:e.ariaAssist,"aria-hidden":"true"},te(e.ariaLabel),11,va)):w("v-if",!0),w(" Create height for empty input "),L("div",{class:I(e.classList.spacer)},null,2)],42,$l)}ze.render=fa;ze.__file="src/Multiselect.vue";const pa={class:"sticky top-0 pt-0 xl:-top-5 xl:pt-5 z-50 3xl:container xl:px-4"},ha={class:"h-[80px] bg-main flex items-center justify-between px-5 rounded-[20px]"},ga=L("div",{class:"font-logo text-[50px]"},"Tasty&Healthy",-1),ba={class:"w-[250px]"},ma={__name:"Header",setup(e){const{locale:r}=wl({useScope:"global"}),a=K(r),i=n=>{a.value=n};return(n,g)=>(M(),V("header",pa,[L("div",ha,[ga,L("div",ba,[He(Pl(ze),{modelValue:a.value,"onUpdate:modelValue":g[0]||(g[0]=t=>a.value=t),onClick:g[1]||(g[1]=t=>i(a.value)),searchable:!1,options:[{title:"English",value:"en"},{title:"Ukranian",value:"uk"}],label:"title",optionLabel:"title","clear-on-select":!1},null,8,["modelValue"])])])]))}};const ya=(e,r)=>{const a=e.__vccOpts||e;for(const[i,n]of r)a[i]=n;return a},Oa=e=>(Tl("data-v-ccfaae88"),e=e(),ql(),e),Sa={class:"3xl:container xl:px-4 w-full mt-5"},La={class:"flex flex-col items-center rounded-tl-[20px] rounded-tr-[20px] md:flex-row bg-main py-4 px-4 border-t xl:border-x border-white/[.1]"},ka={class:"flex grow"},wa=Oa(()=>L("span",{class:"font-logo"},"Tasty&Healthy",-1)),Pa={class:"flex flex-col flex-shrink-0 md:flex-row md:gap-5 items-center"},Ta={href:"#",target:"blank",class:"link"},qa={href:"#",target:"blank",class:"link"},Ea={__name:"Footer",setup(e){const r=h(()=>new Date().getFullYear());return(a,i)=>(M(),V("footer",null,[L("div",Sa,[L("div",La,[L("div",ka,[el(te(r.value)+" - ",1),wa]),L("div",Pa,[L("a",Ta,te(a.$t("terms")),1),L("a",qa,te(a.$t("privacy")),1)])])])]))}},Ia=ya(Ea,[["__scopeId","data-v-ccfaae88"]]);const Ca={class:"flex flex-col h-full w-full absolute top-0 start-0 bg-gradient text-white overflow-auto"},Da={class:"grow flex flex-col pt-4"},Ra={__name:"DefaultLayout",setup(e){return(r,a)=>(M(),V("div",Ca,[He(ma),L("main",Da,[$(r.$slots,"default")]),He(Ia)]))}},ja=El("recipeStore",()=>{const e=K([]),r="3b276331",a="bae8af78b98ebdc942515c5e2ae6d26b",{notify:i}=Cl();return{recipe:e,getRecipe:async g=>{const d=await(await fetch(`https://api.edamam.com/search?q=${g}&app_id=${r}&app_key=${a}`)).json();e.value=d.hits||[],e.value.length||i({title:Il.t("warning_not_dish"),type:"warning",ignoreDuplicates:!0})}}});export{ya as _,Ra as a,ja as u};