import{j as t}from"./jsx-runtime-DEdD30eg.js";import{ai as x,aj as f,ak as j,al as y,am as w,an as g,ao as h}from"./index-BGlvaDjn.js";import"./index-RYns6xqu.js";import"./iframe-CKYXPs6B.js";import"../sb-preview/runtime.js";import"./index-DAfSkmQi.js";import"./index-D-8MO0q_.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";const D=e=>{var s,i,o,c,a,m,p,d;switch(e.type){case"story":return((i=(s=e.story.parameters.docs)==null?void 0:s.description)==null?void 0:i.story)||null;case"meta":{const{parameters:r,component:n}=e.preparedMeta,l=(c=(o=r.docs)==null?void 0:o.description)==null?void 0:c.component;return l||((m=(a=r.docs)==null?void 0:a.extractComponentDescription)==null?void 0:m.call(a,n,{component:n,parameters:r}))||null}case"component":{const{component:r,projectAnnotations:{parameters:n}}=e;return((d=(p=n.docs)==null?void 0:p.extractComponentDescription)==null?void 0:d.call(p,r,{component:r,parameters:n}))||null}default:throw new Error(`Unrecognized module type resolved from 'useOf', got: ${e.type}`)}},u=e=>{const{of:s}=e;if("of"in e&&s===void 0)throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");const i=x(s||"meta");let o=D(i);return o&&(o=o.split("@param")[0]),t.jsx(f,{children:o})};u.__docgenInfo={description:"",methods:[],displayName:"DescriptionEx"};const b={parameters:{docs:{page:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{}),t.jsx(y,{}),t.jsx(u,{}),t.jsx(w,{}),t.jsx(g,{}),t.jsx(h,{})]})}}};export{b as default};
