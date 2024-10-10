import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as i}from"./index-RYns6xqu.js";const I=({value:l,minimum:r=0,maximum:d=100,children:t})=>{const[s,o]=i.useState(8),m=i.useRef(null);i.useEffect(()=>{const c=m.current,T=new ResizeObserver(()=>{if(c){const{width:M,height:W}=c.getBoundingClientRect();o(Math.min(M,W))}});return c&&T.observe(c),()=>{c&&T.unobserve(c)}},[]);const a=s/2-8/2,n=a*2*Math.PI,x=(Math.max(r,Math.min(l,d))-r)/(d-r)*100,k=n-x/100*n,N=x===100?"progress-circle-fg progress-circle-anim":"progress-circle-fg";return e.jsxs("div",{className:"circular-progress-bar",ref:m,children:[e.jsxs("svg",{viewBox:`0 0 ${s} ${s}`,style:{transform:"rotate(-90deg)"},children:[e.jsx("circle",{className:"progress-circle-bg",fill:"transparent",strokeWidth:8,r:a,cx:s/2,cy:s/2}),e.jsx("circle",{className:N,fill:"transparent",strokeWidth:8,strokeDasharray:n,strokeDashoffset:k,r:a,cx:s/2,cy:s/2})]}),e.jsx("div",{className:"content",children:t})]})};I.__docgenInfo={description:`Circular progress bar

@remarks It was easier to install an already existing library, but
that library would ruin my CSS and made it impossible to work with children
components, so I made my own.

@param {ICircularProgressBarProps} props Component properties 
@returns {React.FC<ICircularProgressBarProps>} Circular progress bar`,methods:[],displayName:"CircularProgressBar",props:{value:{required:!0,tsType:{name:"number"},description:"Progress value"},minimum:{required:!1,tsType:{name:"number"},description:"Minimum value, default is 0",defaultValue:{value:"0",computed:!1}},maximum:{required:!1,tsType:{name:"number"},description:"Maximum value, default is 100",defaultValue:{value:"100",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children nodes"}}};const R=({title:l,endTime:r,elapsedTime:d})=>{const[t,p]=i.useState(d??0),[s,o]=i.useState(!1);if(t>r)throw new Error("elapsedTime can't be greater than endTime");if(r>3599)throw new Error("endTime can't be more than 59:59 (3599 seconds)");if(r<0||t<0)throw new Error("Time value can't be negative");function m(a){const n=Math.floor(a/60),h=a%60;return`${n.toString().padStart(2,"0")}:${h.toString().padStart(2,"0")}`}return i.useEffect(()=>{let a;return s&&(a=setInterval(()=>{p(n=>n+1)},1e3)),()=>{a&&clearInterval(a)}},[s]),i.useEffect(()=>{t>=r&&o(!1)},[t,r]),e.jsxs("div",{className:"timer",children:[e.jsx("div",{className:"timer-progress",children:e.jsxs(I,{value:t,maximum:r,children:[e.jsx("h4",{children:l}),e.jsx("h1",{children:m(t)}),e.jsxs("h4",{children:[m(r-t)," left"]})]})}),e.jsxs("div",{className:"timer-buttons",children:[e.jsx("button",{onClick:()=>{t===r&&p(0),o(!0)},disabled:s,children:"Start"}),e.jsx("button",{onClick:()=>o(!1),disabled:!s,children:"Pause"}),e.jsx("button",{onClick:()=>{p(0),o(!1)},children:"Reset"})]})]})};R.__docgenInfo={description:`Simple Timer component
@param {ITimerProps} props Timer properties
@returns {React.FC<ITimerProps>} Timer component`,methods:[],displayName:"Timer"};const _={component:R,decorators:[l=>e.jsx("div",{style:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",padding:"20px"},children:l()})],title:"Components/Timer",parameters:{layout:["centered"]},tags:["autodocs"],argTypes:{title:{control:"text",type:{name:"string",required:!0},description:"The title of the timer"},endTime:{control:{type:"number",min:0,max:3599},type:{name:"number",required:!0},description:"End time of the timer in seconds"},elapsedTime:{control:"number",type:"number",description:"Initial time of the timer in seconds"}}},u={args:{title:"Title from Props",endTime:10,elapsedTime:0}},f={args:{title:"With elapsed time",elapsedTime:15,endTime:30}},g={args:{title:"Very long timer",endTime:3599,elapsedTime:0}};var b,y,v;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: "Title from Props",
    endTime: 10,
    elapsedTime: 0
  }
}`,...(v=(y=u.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var j,C,P;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: "With elapsed time",
    elapsedTime: 15,
    endTime: 30
  }
}`,...(P=(C=f.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var S,w,E;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: "Very long timer",
    endTime: 3599,
    elapsedTime: 0
  }
}`,...(E=(w=g.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};const z=["Default","ElapsedTimeSet","VeryLongTimer"];export{u as Default,f as ElapsedTimeSet,g as VeryLongTimer,z as __namedExportsOrder,_ as default};
