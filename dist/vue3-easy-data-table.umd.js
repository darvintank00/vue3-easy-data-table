(function(e,I){typeof exports=="object"&&typeof module!="undefined"?module.exports=I(require("vue")):typeof define=="function"&&define.amd?define(["vue"],I):(e=typeof globalThis!="undefined"?globalThis:e||self,e["vue3-easy-data-table"]=I(e.Vue))})(this,function(e){"use strict";var Yt=Object.defineProperty,Zt=Object.defineProperties;var ea=Object.getOwnPropertyDescriptors;var Re=Object.getOwnPropertySymbols;var ta=Object.prototype.hasOwnProperty,aa=Object.prototype.propertyIsEnumerable;var Le=(e,I,C)=>I in e?Yt(e,I,{enumerable:!0,configurable:!0,writable:!0,value:C}):e[I]=C,F=(e,I)=>{for(var C in I||(I={}))ta.call(I,C)&&Le(e,C,I[C]);if(Re)for(var C of Re(I))aa.call(I,C)&&Le(e,C,I[C]);return e},le=(e,I)=>Zt(e,ea(I));var I="",C=(r,i)=>{const t=r.__vccOpts||r;for(const[a,f]of i)t[a]=f;return t};const ve=r=>(e.pushScopeId("data-v-d2dabfba"),r=r(),e.popScopeId(),r),Te=["onClick"],Fe=["checked"],De=ve(()=>e.createElementVNode("label",{for:"checbox"},null,-1));var ze=C(e.defineComponent({__name:"MultipleSelectCheckBox",props:{status:{type:String,required:!0}},emits:["change"],setup(r,{emit:i}){const t=r;e.useCssVars(m=>({"3130275e":e.unref(c)}));const a=e.computed(()=>t.status==="allSelected"),f=()=>{i("change",!a.value)},c=e.inject("themeColor");return(m,o)=>(e.openBlock(),e.createElementBlock("div",{class:"easy-checkbox",onClick:e.withModifiers(f,["stop","prevent"])},[e.createElementVNode("input",{type:"checkbox",checked:e.unref(a),class:e.normalizeClass(r.status)},null,10,Fe),De],8,Te))}}),[["__scopeId","data-v-d2dabfba"]]),ra="";const He=r=>(e.pushScopeId("data-v-2ead2f52"),r=r(),e.popScopeId(),r),Me=["checked"],Oe=He(()=>e.createElementVNode("label",{for:"checbox"},null,-1));var je=C(e.defineComponent({__name:"SingleSelectCheckBox",props:{checked:{type:Boolean,required:!0}},emits:["change"],setup(r,{emit:i}){e.useCssVars(a=>({"3d992bb7":e.unref(t)}));const t=e.inject("themeColor");return(a,f)=>(e.openBlock(),e.createElementBlock("div",{class:"easy-checkbox",onClick:f[0]||(f[0]=e.withModifiers(c=>i("change"),["stop","prevent"]))},[e.createElementVNode("input",{type:"checkbox",checked:r.checked},null,8,Me),Oe]))}}),[["__scopeId","data-v-2ead2f52"]]),la="";const We=r=>(e.pushScopeId("data-v-ad570e66"),r=r(),e.popScopeId(),r),qe={class:"easy-data-table__rows-selector"},Je={class:"rows-input"},Ue=We(()=>e.createElementVNode("div",{class:"triangle"},null,-1)),Ge=["onClick"];var Ke=C(e.defineComponent({__name:"RowsSelector",props:{modelValue:{type:Number,required:!0},rowsItems:{type:Array,required:!0}},emits:["update:modelValue"],setup(r,{emit:i}){const t=r;e.useCssVars(_=>({"1c19d84a":e.unref(h)}));const a=e.ref(!1),f=e.ref(!1),c=e.inject("dataTable");e.watch(a,_=>{if(_&&c){const g=window.innerHeight,b=c.value.getBoundingClientRect().height,L=c.value.getBoundingClientRect().top;g-(b+L)<=100?f.value=!0:f.value=!1}});const m=e.computed({get:()=>t.modelValue,set:_=>{i("update:modelValue",_)}}),o=_=>{m.value=_,a.value=!1},n=(_,g)=>{let b=_.parentNode;for(;b!=null;){if(b.classList&&b.classList.contains(g))return!0;b=b.parentNode}return!1},l=_=>{n(_.target,"easy-data-table__rows-selector")||(a.value=!1)};e.onMounted(()=>{document.addEventListener("click",l)}),e.onBeforeUnmount(()=>{document.removeEventListener("click",l)});const h=e.inject("themeColor");return(_,g)=>(e.openBlock(),e.createElementBlock("div",qe,[e.createElementVNode("div",{class:"rows-input__wrapper",onClick:g[0]||(g[0]=b=>a.value=!a.value)},[e.createElementVNode("div",Je,e.toDisplayString(e.unref(m)),1),Ue]),e.createElementVNode("ul",{class:e.normalizeClass(["select-items",{show:a.value,inside:f.value}])},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(r.rowsItems,b=>(e.openBlock(),e.createElementBlock("li",{key:b,class:e.normalizeClass({selected:b===e.unref(m)}),onClick:L=>o(b)},e.toDisplayString(b),11,Ge))),128))],2)]))}}),[["__scopeId","data-v-ad570e66"]]),ia="";const se=r=>(e.pushScopeId("data-v-5c7f0e2c"),r=r(),e.popScopeId(),r),Qe={class:"lds-ring"},Xe=[se(()=>e.createElementVNode("div",null,null,-1)),se(()=>e.createElementVNode("div",null,null,-1)),se(()=>e.createElementVNode("div",null,null,-1)),se(()=>e.createElementVNode("div",null,null,-1))];var Ye=C(e.defineComponent({__name:"Loading",setup(r){e.useCssVars(t=>({"52363113":e.unref(i)}));const i=e.inject("themeColor");return(t,a)=>(e.openBlock(),e.createElementBlock("div",Qe,Xe))}}),[["__scopeId","data-v-5c7f0e2c"]]),ma="";const Ze={class:"loader-line"};var et=C(e.defineComponent({__name:"LoadingLine",setup(r){e.useCssVars(t=>({"958a6284":e.unref(i)}));const i=e.inject("themeColor");return(t,a)=>(e.openBlock(),e.createElementBlock("div",Ze))}}),[["__scopeId","data-v-3b55e6f4"]]),ya="";const tt={class:"buttons-pagination"},at=["onClick"];var nt=C(e.defineComponent({__name:"ButtonsPagination",props:{maxPaginationNumber:{type:Number,required:!0},currentPaginationNumber:{type:Number,required:!0}},emits:["updatePage"],setup(r,{emit:i}){const t=r;e.useCssVars(o=>({"0ff2ee61":e.unref(m)}));const a=7,f=o=>{o.type==="button"&&!o.active&&i("updatePage",o.page)},c=e.computed(()=>{const o=[];if(t.maxPaginationNumber<=a)for(let n=1;n<=t.maxPaginationNumber;n+=1)o.push({type:"button",page:n,active:n===t.currentPaginationNumber,activePrev:n+1===t.currentPaginationNumber});else if([1,2,t.maxPaginationNumber,t.maxPaginationNumber-1].includes(t.currentPaginationNumber))for(let n=1;n<=a;n+=1)if(n<=3)o.push({type:"button",page:n,active:n===t.currentPaginationNumber,activePrev:n+1===t.currentPaginationNumber});else if(n===4)o.push({type:"omission"});else{const l=t.maxPaginationNumber-(a-n);o.push({type:"button",page:l,active:l===t.currentPaginationNumber,activePrev:l+1===t.currentPaginationNumber})}else if([3,4].includes(t.currentPaginationNumber))for(let n=1;n<=a;n+=1)n<=5?o.push({type:"button",page:n,active:n===t.currentPaginationNumber,activePrev:n+1===t.currentPaginationNumber}):n===6?o.push({type:"omission"}):o.push({type:"button",page:t.maxPaginationNumber,active:t.maxPaginationNumber===t.currentPaginationNumber,activePrev:n+1===t.currentPaginationNumber});else if([t.maxPaginationNumber-2,t.maxPaginationNumber-3].includes(t.currentPaginationNumber))for(let n=1;n<=a;n+=1)if(n===1)o.push({type:"button",page:1,active:t.currentPaginationNumber===1,activePrev:n+1===t.currentPaginationNumber});else if(n===2)o.push({type:"omission"});else{const l=t.maxPaginationNumber-(a-n);o.push({type:"button",page:l,active:l===t.currentPaginationNumber,activePrev:l+1===t.currentPaginationNumber})}else for(let n=1;n<=a;n+=1)if(n===1)o.push({type:"button",page:1,active:t.currentPaginationNumber===1,activePrev:n+1===t.currentPaginationNumber});else if(n===2||n===6)o.push({type:"omission"});else if(n===7)o.push({type:"button",page:t.maxPaginationNumber,active:t.maxPaginationNumber===t.currentPaginationNumber,activePrev:n+1===t.currentPaginationNumber});else{const l=4-n,h=t.currentPaginationNumber-l;o.push({type:"button",page:h,active:h===t.currentPaginationNumber,activePrev:h+1===t.currentPaginationNumber})}return o}),m=e.inject("themeColor");return(o,n)=>(e.openBlock(),e.createElementBlock("div",tt,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(c),(l,h)=>(e.openBlock(),e.createElementBlock("div",{key:h,class:e.normalizeClass(["item",{button:l.type==="button",active:l.type==="button"&&l.active,"active-prev":l.type==="button"&&l.activePrev,omission:l.type==="omission"}]),onClick:_=>f(l)},e.toDisplayString(l.type==="button"?l.page:"..."),11,at))),128))]))}}),[["__scopeId","data-v-9256cb80"]]),_a="";const me=r=>(e.pushScopeId("data-v-ef6a54e2"),r=r(),e.popScopeId(),r),rt=[me(()=>e.createElementVNode("span",{class:"arrow arrow-right"},null,-1))],ot=[me(()=>e.createElementVNode("span",{class:"arrow arrow-left"},null,-1))];var lt=C(e.defineComponent({__name:"PaginationArrows",props:{isFirstPage:{type:Boolean,required:!1},isLastPage:{type:Boolean,required:!1}},emits:["clickPrevPage","clickNextPage"],setup(r,{emit:i}){const t=e.useSlots();return(a,f)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createElementVNode("div",{class:e.normalizeClass(["previous-page__click-button",{"first-page":r.isFirstPage}]),onClick:f[0]||(f[0]=c=>i("clickPrevPage"))},rt,2),e.unref(t).buttonsPagination?e.renderSlot(a.$slots,"buttonsPagination",{key:0},void 0,!0):e.createCommentVNode("",!0),e.createElementVNode("div",{class:e.normalizeClass(["next-page__click-button",{"last-page":r.isLastPage}]),onClick:f[1]||(f[1]=c=>i("clickNextPage"))},ot,2)],64))}}),[["__scopeId","data-v-ef6a54e2"]]);function st(r,i,t,a){return{clickRow:(c,m,o)=>{if(r.value!==m)return;const n=F({},c);if(i.value){const{checkbox:l}=c;delete n.checkbox,n.isSelected=l}if(t.value){const{index:l}=c;delete n.index,n.indexInCurrentPage=l}a("clickRow",n,o)}}}function it(r,i,t){const a=e.ref([]);return{expandingItemIndexList:a,updateExpandingItemIndexList:(m,o,n)=>{n.stopPropagation();const l=a.value.indexOf(m);if(l!==-1)a.value.splice(l,1);else{const h=r.value.findIndex(_=>JSON.stringify(_)===JSON.stringify(o));t("expandRow",i.value+h,o),a.value.push(i.value+h)}},clearExpandingItemIndexList:()=>{a.value=[]}}}function ct(r){const i=e.computed(()=>r.value.filter(f=>f.fixed)),t=e.computed(()=>i.value.length?i.value[i.value.length-1].value:""),a=e.computed(()=>{if(!i.value.length)return[];const f=i.value.map(c=>{var m;return(m=c.width)!=null?m:100});return i.value.map((c,m)=>{var o,n;return{value:c.value,fixed:(o=c.fixed)!=null?o:!0,width:(n=c.width)!=null?n:100,distance:m===0?0:f.reduce((l,h,_)=>{let g=l;return _<m&&(g+=h),g})}})});return{fixedHeaders:i,lastFixedColumn:t,fixedColumnsInfos:a}}function dt(r,i,t,a,f,c,m,o,n,l,h,_,g,b,L,k,$,D,z){const u=e.computed(()=>m.value.findIndex(y=>y.fixed)!==-1),P=e.computed(()=>u.value?m.value.filter(y=>y.fixed):[]),S=e.computed(()=>m.value.filter(y=>!y.fixed)),w=(y,H)=>Array.isArray(y)&&Array.isArray(H)?{sortBy:y,sortDesc:H.map(N=>N==="desc")}:y!==""?{sortBy:L.value,sortDesc:k.value==="desc"}:null,p=e.ref(w(L.value,k.value)),B=e.computed(()=>{var ie;const H=[...P.value,...S.value].map(Q=>{const R=Object.assign(Q);if(R.sortable&&(R.sortType="none"),g.value)if(Array.isArray(g.value.sortBy)&&Array.isArray(g.value.sortType)&&g.value.sortBy.includes(R.value)){const Y=g.value.sortBy.indexOf(R.value);R.sortType=g.value.sortType[Y]}else R.value===g.value.sortBy&&g.value.sortType&&(R.sortType=g.value.sortType);if(p.value&&Array.isArray(p.value.sortBy)&&Array.isArray(p.value.sortDesc)&&p.value.sortBy.includes(R.value)){const Y=p.value.sortBy.indexOf(R.value);R.sortType=p.value.sortDesc[Y]?"desc":"asc"}else p.value&&R.value===p.value.sortBy&&(R.sortType=p.value.sortDesc?"desc":"asc");return R});let N=[];o.value?N=[f.value||u.value?{text:"",value:"expand",fixed:!0,width:t.value}:{text:"",value:"expand"},...H]:N=H;let v=[];b.value?v=[c.value||u.value?{text:r.value,value:"index",fixed:!0,width:n.value}:{text:r.value,value:"index"},...N]:v=N;let X=[];return l.value?X=[a.value||u.value?{text:"checkbox",value:"checkbox",fixed:!0,width:(ie=i.value)!=null?ie:36}:{text:"checkbox",value:"checkbox"},...v]:X=v,X}),A=e.computed(()=>B.value.map(y=>y.value));return{clientSortOptions:p,headerColumns:A,headersForRender:B,updateSortField:(y,H)=>{let N=null;if(H==="none"?N="asc":H==="asc"?N="desc":N=_.value?"asc":null,h.value&&D(y,N),p.value&&Array.isArray(p.value.sortBy)&&Array.isArray(p.value.sortDesc)){const v=p.value.sortBy.indexOf(y);v===-1?N!==null&&(p.value.sortBy.push(y),p.value.sortDesc.push(N==="desc")):N===null?(p.value.sortDesc.splice(v,1),p.value.sortBy.splice(v,1)):p.value.sortDesc[v]=N==="desc"}else N===null?p.value=null:p.value={sortBy:y,sortDesc:N==="desc"};z("updateSort",{sortType:N,sortBy:y})},isMultiSorting:y=>g.value&&Array.isArray(g.value.sortBy)?g.value.sortBy.includes(y):p.value&&Array.isArray(p.value.sortBy)?p.value.sortBy.includes(y):!1,getMultiSortNumber:y=>g.value&&Array.isArray(g.value.sortBy)?g.value.sortBy.indexOf(y)+1:p.value&&Array.isArray(p.value.sortBy)?p.value.sortBy.indexOf(y)+1:!1}}function ut(r,i,t,a,f,c,m,o,n){const l=e.computed(()=>(r.value-1)*f.value+1),h=e.computed(()=>t.value?Math.min(n.value,r.value*f.value):Math.min(o.value.length,r.value*f.value)),_=e.computed(()=>t.value?a.value:o.value.slice(l.value-1,h.value)),g=e.computed(()=>m.value?_.value.map((k,$)=>F({index:l.value+$},k)):_.value),b=e.computed(()=>c.value.length===0||c.value.every($=>o.value.findIndex(D=>JSON.stringify($)===JSON.stringify(D))===-1)?"noneSelected":c.value.length===o.value.length&&c.value.every(D=>o.value.findIndex(z=>JSON.stringify(D)===JSON.stringify(z))!==-1)?"allSelected":"partSelected"),L=e.computed(()=>i.value?b.value==="allSelected"?g.value.map(k=>F({checkbox:!0},k)):b.value==="noneSelected"?g.value.map(k=>F({checkbox:!1},k)):g.value.map(k=>{const $=c.value.findIndex(D=>{const z=F({},k);return delete z.index,JSON.stringify(D)===JSON.stringify(z)})!==-1;return F({checkbox:$},k)}):g.value);return{currentPageFirstIndex:l,currentPageLastIndex:h,multipleSelectStatus:b,pageItems:L}}function pt(r,i,t,a,f,c,m){const o=e.ref(c.value?c.value.page:r.value),n=e.computed(()=>Math.ceil(a.value/f.value)),l=e.computed(()=>n.value===0||o.value===n.value),h=e.computed(()=>o.value===1);return{currentPaginationNumber:o,maxPaginationNumber:n,isLastPage:l,isFirstPage:h,nextPage:()=>{if(a.value!==0&&!l.value&&!t.value)if(i.value){const k=o.value+1;m(k)}else o.value+=1},prevPage:()=>{if(a.value!==0&&!h.value&&!t.value)if(i.value){const k=o.value-1;m(k)}else o.value-=1},updatePage:k=>{t.value||(i.value?m(k):o.value=k)},updateCurrentPaginationNumber:k=>{o.value=k}}}function ft(r,i,t,a){const f=e.computed(()=>!r.value&&i.value.findIndex(o=>o===a.value)===-1?[a.value,...i.value]:i.value),c=e.ref(t.value?t.value.rowsPerPage:a.value);return{rowsItemsComputed:f,rowsPerPageRef:c,updateRowsPerPage:o=>{c.value=o}}}function mt(r,i,t){const a=e.computed({get:()=>{if(r.value){const{page:o,rowsPerPage:n,sortBy:l,sortType:h}=r.value;return{page:o,rowsPerPage:n,sortBy:l!=null?l:null,sortType:h!=null?h:null}}return null},set:o=>{t("update:serverOptions",o)}});return{serverOptionsComputed:a,updateServerOptionsPage:o=>{a.value&&(a.value=le(F({},a.value),{page:o}))},updateServerOptionsSort:(o,n)=>{if(a.value)if(i.value&&Array.isArray(a.value.sortBy)&&Array.isArray(a.value.sortType)){const l=a.value.sortBy.findIndex(h=>h===o);l===-1&&n!==null&&(a.value.sortBy.push(o),a.value.sortType.push(n)),n===null?(a.value.sortBy.splice(l,1),a.value.sortType.splice(l,1)):a.value.sortType[l]=n}else a.value=le(F({},a.value),{sortBy:n!==null?o:null,sortType:n})},updateServerOptionsRowsPerPage:o=>{a.value&&(a.value=le(F({},a.value),{page:1,rowsPerPage:o}))}}}function V(r,i){var t;if(r.includes(".")){const a=r.split("."),{length:f}=a;let c,m=0;for(;m<f;){if(m===0)c=i[a[0]];else if(c&&typeof c=="object")c=c[a[m]];else{c="";break}m+=1}return c!=null?c:""}return(t=i[r])!=null?t:""}function gt(r,i){const t=V(r,i);return Array.isArray(t)?t.join(","):t}function yt(r,i,t,a,f,c,m,o,n,l){const h=u=>{if(typeof c.value=="string"&&c.value!=="")return V(c.value,u);if(Array.isArray(c.value)){let P="";return c.value.forEach(S=>{P+=V(S,u)}),P}return Object.values(u).join(" ")},_=e.computed(()=>{if(!t.value&&m.value!==""){const u=new RegExp(m.value,"i");return a.value.filter(P=>u.test(h(P)))}return a.value}),g=e.computed(()=>{let u=[..._.value];return i.value?(i.value.forEach(P=>{u=u.filter(S=>{const{field:w,comparison:p,criteria:B}=P;if(typeof p=="function")return p(V(w,S),B);const A=V(w,S);switch(p){case"=":return A===B;case"!=":return A!==B;case">":return A>B;case"<":return A<B;case"<=":return A<=B;case">=":return A>=B;case"between":return A>=Math.min(...B)&&A<=Math.max(...B);case"in":return B.includes(A);default:return A===B}})}),u):_.value});e.watch(g,u=>{i.value&&l("updateFilter",u)},{immediate:!0,deep:!0});function b(u,P,S,w){const p=u[w],B=P[w];return(w===0?S:b(u,P,S,w-1)).sort((j,K)=>{let W=!0;for(let y=0;y<w;y+=1)if(V(u[y],j)!==V(u[y],K)){W=!1;break}return W?V(p,j)<V(p,K)?B?1:-1:V(p,j)>V(p,K)?B?-1:1:0:0})}const L=e.computed(()=>{if(t.value)return a.value;if(r.value===null)return g.value;const{sortBy:u,sortDesc:P}=r.value,S=[...g.value];return n&&Array.isArray(u)&&Array.isArray(P)?u.length===0?S:b(u,P,S,u.length-1):S.sort((w,p)=>V(u,w)<V(u,p)?P?1:-1:V(u,w)>V(u,p)?P?-1:1:0)}),k=e.computed(()=>t.value?o.value:L.value.length),$=e.computed({get:()=>{var u;return(u=f.value)!=null?u:[]},set:u=>{l("update:itemsSelected",u)}});return{totalItems:L,selectItemsComputed:$,totalItemsLength:k,toggleSelectAll:u=>{$.value=u?L.value:[],u&&l("selectAll")},toggleSelectItem:u=>{const P=u.checkbox;if(delete u.checkbox,delete u.index,P)$.value=$.value.filter(S=>JSON.stringify(S)!==JSON.stringify(u)),l("deselectRow",u);else{const S=$.value;S.unshift(u),$.value=S,l("selectRow",u)}}}}var ht={alternating:{type:Boolean,default:!1},buttonsPagination:{type:Boolean,default:!1},checkboxColumnWidth:{type:Number,default:null},currentPage:{type:Number,default:1},emptyMessage:{type:String,default:"No Available Data"},expandColumnWidth:{type:Number,default:36},filterOptions:{type:Array,default:null},fixedExpand:{type:Boolean,default:!1},fixedHeader:{type:Boolean,default:!0},fixedCheckbox:{type:Boolean,default:!1},fixedIndex:{type:Boolean,default:!1},headerTextDirection:{type:String,default:"left"},bodyTextDirection:{type:String,default:"left"},hideFooter:{type:Boolean,default:!1},hideRowsPerPage:{type:Boolean,default:!1},hideHeader:{type:Boolean,default:!1},indexColumnWidth:{type:Number,default:60},itemsSelected:{type:Array,default:null},loading:{type:Boolean,deault:!1},rowsPerPage:{type:Number,default:25},rowsItems:{type:Array,default:()=>[25,50,100]},rowsPerPageMessage:{type:String,default:"rows per page:"},searchField:{type:[String,Array],default:""},searchValue:{type:String,default:""},serverOptions:{type:Object,default:null},serverItemsLength:{type:Number,default:0},showIndex:{type:Boolean,default:!1},sortBy:{type:[String,Array],default:""},sortType:{type:[String,Array],default:"asc"},multiSort:{type:Boolean,default:!1},tableMinHeight:{type:Number,default:180},tableHeight:{type:Number,default:null},themeColor:{type:String,default:"#42b883"},tableClassName:{type:String,default:""},headerClassName:{type:String,default:""},headerItemClassName:{type:[Function,String],default:""},bodyRowClassName:{type:[Function,String],default:""},bodyExpandRowClassName:{type:[Function,String],default:""},bodyItemClassName:{type:[Function,String],default:""},noHover:{type:Boolean,default:!1},borderCell:{type:Boolean,default:!1},mustSort:{type:Boolean,default:!1},rowsOfPageSeparatorMessage:{type:String,default:"of"},clickEventType:{type:String,default:"single"},clickRowToExpand:{type:Boolean,default:!1},tableNodeId:{type:String,default:""},showIndexSymbol:{type:String,default:"#"}},xa="",Sa="";const _t=r=>(e.pushScopeId("data-v-35be89f9"),r=r(),e.popScopeId(),r),bt=["id"],kt=["onClick"],Pt={key:3,class:"header-text"},xt={key:5,class:"multi-sort__number"},St=["onClick","onDblclick","onContextmenu"],Nt=["onClick"],Ct=["colspan"],Bt={key:0,class:"vue3-easy-data-table__loading"},wt=_t(()=>e.createElementVNode("div",{class:"vue3-easy-data-table__loading-mask"},null,-1)),It={class:"loading-entity"},Et={key:1,class:"vue3-easy-data-table__message"},$t={key:0,class:"vue3-easy-data-table__footer"},At={key:0,class:"pagination__rows-per-page"},Vt={class:"pagination__items-index"},Rt=e.defineComponent({__name:"DataTable",props:le(F({},ht),{items:{type:Array,required:!0},headers:{type:Array,required:!0}}),emits:["clickRow","contextmenuRow","selectRow","deselectRow","expandRow","updateSort","updateFilter","update:itemsSelected","update:serverOptions","updatePageItems","updateTotalItems","selectAll"],setup(r,{expose:i,emit:t}){const a=r;e.useCssVars(d=>({dd69477c:e.unref(Lt),"198ca6ee":e.unref(Y)}));const{tableNodeId:f,clickEventType:c,bodyTextDirection:m,checkboxColumnWidth:o,currentPage:n,expandColumnWidth:l,filterOptions:h,fixedCheckbox:_,fixedExpand:g,fixedHeader:b,fixedIndex:L,headers:k,headerTextDirection:$,indexColumnWidth:D,items:z,itemsSelected:u,loading:P,mustSort:S,multiSort:w,rowsItems:p,rowsPerPage:B,searchField:A,searchValue:j,serverItemsLength:K,serverOptions:W,showIndex:y,sortBy:H,sortType:N,tableHeight:v,tableMinHeight:X,themeColor:ie,rowsOfPageSeparatorMessage:Q,showIndexSymbol:R}=e.toRefs(a),Y=e.computed(()=>v.value?`${v.value}px`:null),Lt=e.computed(()=>`${X.value}px`);e.provide("themeColor",ie.value);const T=e.useSlots(),vt=e.computed(()=>!!T.pagination),Tt=e.computed(()=>!!T.loading),ye=e.computed(()=>!!T.expand),Ft=e.computed(()=>!!T.body),he=e.ref(),de=e.ref();e.provide("dataTable",he);const _e=e.ref(!1);e.onMounted(()=>{de.value.addEventListener("scroll",()=>{_e.value=de.value.scrollLeft>0})});const ue=e.computed(()=>u.value!==null),J=e.computed(()=>W.value!==null),{serverOptionsComputed:pe,updateServerOptionsPage:Dt,updateServerOptionsSort:zt,updateServerOptionsRowsPerPage:Ht}=mt(W,w,t),{clientSortOptions:be,headerColumns:ke,headersForRender:U,updateSortField:Mt,isMultiSorting:Ot,getMultiSortNumber:jt}=dt(R,o,l,_,g,L,k,ye,D,ue,J,S,pe,y,H,N,w,zt,t),{rowsItemsComputed:Pe,rowsPerPageRef:q,updateRowsPerPage:Wt}=ft(J,p,W,B),{totalItems:xe,selectItemsComputed:qt,totalItemsLength:ce,toggleSelectAll:Jt,toggleSelectItem:Ut}=yt(be,h,J,z,u,A,j,K,w,t),{currentPaginationNumber:O,maxPaginationNumber:Z,isLastPage:ee,isFirstPage:te,nextPage:ae,prevPage:ne,updatePage:re,updateCurrentPaginationNumber:Gt}=pt(n,J,P,ce,q,W,Dt),{currentPageFirstIndex:Se,currentPageLastIndex:Ne,multipleSelectStatus:Ce,pageItems:G}=ut(O,ue,J,z,q,qt,y,xe,ce),oe=e.computed(()=>O.value===0?0:(O.value-1)*q.value),{expandingItemIndexList:Be,updateExpandingItemIndexList:we,clearExpandingItemIndexList:Ie}=it(G,oe,t),{fixedHeaders:fe,lastFixedColumn:Ee,fixedColumnsInfos:Kt}=ct(U),{clickRow:$e}=st(c,ue,y,t),Qt=d=>{var s;const M=(s=d.width)!=null?s:fe.value.length?100:null;if(M)return`width: ${M}px; min-width: ${M}px;`},Ae=(d,M="th")=>{if(!fe.value.length)return;const s=Kt.value.find(E=>E.value===d);if(s)return`left: ${s.distance}px;z-index: ${M==="th"?3:1};position: sticky;`};return e.watch(P,(d,M)=>{pe.value&&d===!1&&M===!0&&(Gt(pe.value.page),Ie())}),e.watch(q,d=>{J.value?Ht(d):re(1)}),e.watch([j,h],()=>{J.value||re(1)}),e.watch([O,be,A,j,h],()=>{Ie()},{deep:!0}),e.watch(G,d=>{t("updatePageItems",d)},{deep:!0}),e.watch(xe,d=>{t("updateTotalItems",d)},{deep:!0}),i({currentPageFirstIndex:Se,currentPageLastIndex:Ne,clientItemsLength:ce,maxPaginationNumber:Z,currentPaginationNumber:O,isLastPage:ee,isFirstPage:te,nextPage:ae,prevPage:ne,updatePage:re,rowsPerPageOptions:Pe,rowsPerPageActiveOption:q,updateRowsPerPageActiveOption:Wt}),(d,M)=>(e.openBlock(),e.createElementBlock("div",{ref_key:"dataTable",ref:he,class:e.normalizeClass(["vue3-easy-data-table",[d.tableClassName]])},[e.createElementVNode("div",{ref_key:"tableBody",ref:de,class:e.normalizeClass(["vue3-easy-data-table__main",{"fixed-header":e.unref(b),"fixed-height":e.unref(v),"show-shadow":_e.value,"table-fixed":e.unref(fe).length,hoverable:!d.noHover,"border-cell":d.borderCell}])},[e.createElementVNode("table",{id:e.unref(f)},[e.createElementVNode("colgroup",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(U),(s,E)=>(e.openBlock(),e.createElementBlock("col",{key:E,style:e.normalizeStyle(Qt(s))},null,4))),128))]),e.unref(T)["customize-headers"]?e.renderSlot(d.$slots,"customize-headers",{key:0},void 0,!0):e.unref(U).length&&!d.hideHeader?(e.openBlock(),e.createElementBlock("thead",{key:1,class:e.normalizeClass(["vue3-easy-data-table__header",[d.headerClassName]])},[e.createElementVNode("tr",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(U),(s,E)=>(e.openBlock(),e.createElementBlock("th",{key:E,class:e.normalizeClass([{sortable:s.sortable,none:s.sortable&&s.sortType==="none",desc:s.sortable&&s.sortType==="desc",asc:s.sortable&&s.sortType==="asc",shadow:s.value===e.unref(Ee)},typeof d.headerItemClassName=="string"?d.headerItemClassName:d.headerItemClassName(s,E+1)]),style:e.normalizeStyle(Ae(s.value)),onClick:e.withModifiers(x=>s.sortable&&s.sortType?e.unref(Mt)(s.value,s.sortType):null,["stop"])},[s.text==="checkbox"?(e.openBlock(),e.createBlock(ze,{key:e.unref(Ce),status:e.unref(Ce),onChange:e.unref(Jt)},null,8,["status","onChange"])):(e.openBlock(),e.createElementBlock("span",{key:1,class:e.normalizeClass(["header",`direction-${e.unref($)}`])},[e.unref(T)[`header-${s.value}`]?e.renderSlot(d.$slots,`header-${s.value}`,e.normalizeProps(e.mergeProps({key:0},s)),void 0,!0):e.unref(T)[`header-${s.value.toLowerCase()}`]?e.renderSlot(d.$slots,`header-${s.value.toLowerCase()}`,e.normalizeProps(e.mergeProps({key:1},s)),void 0,!0):e.unref(T).header?e.renderSlot(d.$slots,"header",e.normalizeProps(e.mergeProps({key:2},s)),void 0,!0):(e.openBlock(),e.createElementBlock("span",Pt,e.toDisplayString(s.text),1)),s.sortable?(e.openBlock(),e.createElementBlock("i",{key:s.sortType?s.sortType:"none",class:e.normalizeClass(["sortType-icon",{desc:s.sortType==="desc"}])},null,2)):e.createCommentVNode("",!0),e.unref(w)&&e.unref(Ot)(s.value)?(e.openBlock(),e.createElementBlock("span",xt,e.toDisplayString(e.unref(jt)(s.value)),1)):e.createCommentVNode("",!0)],2))],14,kt))),128))])],2)):e.createCommentVNode("",!0),e.unref(Ft)?e.renderSlot(d.$slots,"body",e.normalizeProps(e.mergeProps({key:2},e.unref(G))),void 0,!0):e.unref(ke).length?(e.openBlock(),e.createElementBlock("tbody",{key:3,class:e.normalizeClass(["vue3-easy-data-table__body",{"row-alternation":d.alternating}])},[e.renderSlot(d.$slots,"body-prepend",e.normalizeProps(e.guardReactiveProps({items:e.unref(G),pagination:{isFirstPage:e.unref(te),isLastPage:e.unref(ee),currentPaginationNumber:e.unref(O),maxPaginationNumber:e.unref(Z),nextPage:e.unref(ae),prevPage:e.unref(ne)},headers:e.unref(U)})),void 0,!0),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(G),(s,E)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:E},[e.createElementVNode("tr",{class:e.normalizeClass([{"even-row":(E+1)%2===0},typeof d.bodyRowClassName=="string"?d.bodyRowClassName:d.bodyRowClassName(s,E+1)]),onClick:x=>{e.unref($e)(s,"single",x),d.clickRowToExpand&&e.unref(we)(E+e.unref(oe),s,x)},onDblclick:x=>{e.unref($e)(s,"double",x)},onContextmenu:e.withModifiers(x=>{t("contextmenuRow",s,x)},["prevent"])},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(ke),(x,Xt)=>(e.openBlock(),e.createElementBlock("td",{key:Xt,style:e.normalizeStyle(Ae(x,"td")),class:e.normalizeClass([{shadow:x===e.unref(Ee),"can-expand":x==="expand"},typeof d.bodyItemClassName=="string"?d.bodyItemClassName:d.bodyItemClassName(x,E+1),`direction-${e.unref(m)}`]),onClick:Ve=>x==="expand"?e.unref(we)(E+e.unref(oe),s,Ve):null},[e.unref(T)[`item-${x}`]?e.renderSlot(d.$slots,`item-${x}`,e.normalizeProps(e.mergeProps({key:0},s)),void 0,!0):e.unref(T)[`item-${x.toLowerCase()}`]?e.renderSlot(d.$slots,`item-${x.toLowerCase()}`,e.normalizeProps(e.mergeProps({key:1},s)),void 0,!0):x==="expand"?(e.openBlock(),e.createElementBlock("i",{key:2,class:e.normalizeClass(["expand-icon",{expanding:e.unref(Be).includes(e.unref(oe)+E)}])},null,2)):x==="checkbox"?(e.openBlock(),e.createBlock(je,{key:3,checked:s[x],onChange:Ve=>e.unref(Ut)(s)},null,8,["checked","onChange"])):e.unref(T).item?e.renderSlot(d.$slots,"item",e.normalizeProps(e.mergeProps({key:4},{column:x,item:s})),void 0,!0):(e.openBlock(),e.createElementBlock(e.Fragment,{key:5},[e.createTextVNode(e.toDisplayString(e.unref(gt)(x,s)),1)],64))],14,Nt))),128))],42,St),e.unref(ye)&&e.unref(Be).includes(E+e.unref(oe))?(e.openBlock(),e.createElementBlock("tr",{key:0,class:e.normalizeClass([{"even-row":(E+1)%2===0},typeof d.bodyExpandRowClassName=="string"?d.bodyExpandRowClassName:d.bodyExpandRowClassName(s,E+1)])},[e.createElementVNode("td",{colspan:e.unref(U).length,class:"expand"},[s.expandLoading?(e.openBlock(),e.createBlock(et,{key:0,class:"expand-loading"})):e.createCommentVNode("",!0),e.renderSlot(d.$slots,"expand",e.normalizeProps(e.guardReactiveProps(s)),void 0,!0)],8,Ct)],2)):e.createCommentVNode("",!0)],64))),128)),e.renderSlot(d.$slots,"body-append",e.normalizeProps(e.guardReactiveProps({items:e.unref(G),pagination:{isFirstPage:e.unref(te),isLastPage:e.unref(ee),currentPaginationNumber:e.unref(O),maxPaginationNumber:e.unref(Z),nextPage:e.unref(ae),prevPage:e.unref(ne),updatePage:e.unref(re)},headers:e.unref(U)})),void 0,!0)],2)):e.createCommentVNode("",!0)],8,bt),e.unref(P)?(e.openBlock(),e.createElementBlock("div",Bt,[wt,e.createElementVNode("div",It,[e.unref(Tt)?e.renderSlot(d.$slots,"loading",{key:0},void 0,!0):(e.openBlock(),e.createBlock(Ye,{key:1}))])])):e.createCommentVNode("",!0),!e.unref(G).length&&!e.unref(P)?(e.openBlock(),e.createElementBlock("div",Et,[e.renderSlot(d.$slots,"empty-message",{},()=>[e.createTextVNode(e.toDisplayString(d.emptyMessage),1)],!0)])):e.createCommentVNode("",!0)],2),d.hideFooter?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("div",$t,[d.hideRowsPerPage?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("div",At,[e.createTextVNode(e.toDisplayString(d.rowsPerPageMessage)+" ",1),e.createVNode(Ke,{modelValue:e.unref(q),"onUpdate:modelValue":M[0]||(M[0]=s=>e.isRef(q)?q.value=s:null),"rows-items":e.unref(Pe)},null,8,["modelValue","rows-items"])])),e.createElementVNode("div",Vt,e.toDisplayString(`${e.unref(Se)}\u2013${e.unref(Ne)}`)+" "+e.toDisplayString(e.unref(Q))+" "+e.toDisplayString(e.unref(ce)),1),e.unref(vt)?e.renderSlot(d.$slots,"pagination",e.normalizeProps(e.mergeProps({key:1},{isFirstPage:e.unref(te),isLastPage:e.unref(ee),currentPaginationNumber:e.unref(O),maxPaginationNumber:e.unref(Z),nextPage:e.unref(ae),prevPage:e.unref(ne)})),void 0,!0):(e.openBlock(),e.createBlock(lt,{key:2,"is-first-page":e.unref(te),"is-last-page":e.unref(ee),onClickNextPage:e.unref(ae),onClickPrevPage:e.unref(ne)},e.createSlots({_:2},[d.buttonsPagination?{name:"buttonsPagination",fn:e.withCtx(()=>[e.createVNode(nt,{"current-pagination-number":e.unref(O),"max-pagination-number":e.unref(Z),onUpdatePage:e.unref(re)},null,8,["current-pagination-number","max-pagination-number","onUpdatePage"])]),key:"0"}:void 0]),1032,["is-first-page","is-last-page","onClickNextPage","onClickPrevPage"]))]))],2))}});var ge=C(Rt,[["__scopeId","data-v-35be89f9"]]);return typeof window!="undefined"&&window.Vue&&window.Vue.createApp({}).component("Vue3EasyDataTable",ge),ge});
