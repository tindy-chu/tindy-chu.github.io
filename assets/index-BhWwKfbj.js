import{r as t,j as e,C as j,u as I,t as b,a as S}from"./index-18uqM7vx.js";const N=c=>t.createElement("svg",{height:512,viewBox:"0 0 24 24",width:512,xmlns:"http://www.w3.org/2000/svg",...c},t.createElement("path",{d:"m3.625 23h9.75a2.629 2.629 0 0 0 2.625-2.625v-12.75a2.629 2.629 0 0 0 -2.625-2.625h-9.75a2.629 2.629 0 0 0 -2.625 2.625v12.75a2.629 2.629 0 0 0 2.625 2.625zm-.625-15.375a.625.625 0 0 1 .625-.625h9.75a.625.625 0 0 1 .625.625v12.75a.625.625 0 0 1 -.625.625h-9.75a.625.625 0 0 1 -.625-.625z",fill:"#aaa"}),t.createElement("path",{d:"m20.37 1h-9.74a2.629 2.629 0 0 0 -2.421 1.61 1 1 0 1 0 1.842.78.63.63 0 0 1 .579-.39h9.74a.631.631 0 0 1 .63.63v12.74a.631.631 0 0 1 -.63.63h-2.37a1 1 0 0 0 0 2h2.37a2.633 2.633 0 0 0 2.63-2.63v-12.74a2.633 2.633 0 0 0 -2.63-2.63z",fill:"#fff"})),w=c=>t.createElement("svg",{height:"512pt",viewBox:"0 -64 512 511",width:"512pt",xmlns:"http://www.w3.org/2000/svg",...c},t.createElement("path",{d:"m512 74.011719-255.984375 237.261719-77.785156 72.09375-178.230469-190.203126 72.984375-68.390624 110.316406 117.738281 72.714844-67.449219 188.164063-174.5625zm0 0",fill:"#aaa"}),t.createElement("path",{d:"m512 74.011719-255.984375 237.261719v-136.210938l188.164063-174.5625zm0 0",fill:"#fff"})),u=(c,a)=>{t.useEffect(()=>{if(!c.current)return;const o=new IntersectionObserver(d=>{a(d[0].isIntersecting)});return o.observe(c.current),()=>{o.disconnect()}},[c,a])},C="_Contact_t3fwc_1",k="_title_t3fwc_12",y="_avatar_t3fwc_32",A="_desc_t3fwc_46",$="_mailWrapper_t3fwc_60",R="_shake_t3fwc_1",W="_mail_t3fwc_60",P="_icon_t3fwc_92",E="_svg_t3fwc_96",H="_content_t3fwc_123",z="_active_t3fwc_129",L="_bounce_t3fwc_1",T="_activeArea_t3fwc_153",i={Contact:C,title:k,avatar:y,desc:A,mailWrapper:$,shake:R,mail:W,icon:P,svg:E,content:H,active:z,bounce:L,activeArea:T},M=()=>{const c=t.useRef(null),a=t.useRef(null),o=t.useRef(null),[d,_]=t.useState(!1),l=t.useCallback(p=>o.current.classList.toggle(i.active,p),[]);u(a,l);const h="chu_six@yahoo.com.hk",r=()=>{document.location=`mailto:${h}`},v=()=>{(async()=>{try{await navigator.clipboard.writeText(h),_(!0),setTimeout(()=>_(!1),800)}catch(p){console.error("Failed to copy: ",p)}})()};return e.jsxs("div",{className:i.Contact,children:[e.jsx("div",{className:"midArea",ref:c}),e.jsx("div",{className:i.activeArea,ref:a}),e.jsxs("div",{className:i.content,ref:o,children:[e.jsx("div",{className:i.title,children:"Contact"}),e.jsx("img",{className:i.avatar,src:"/images/avatar.jpg",alt:"avatar"}),e.jsx("div",{className:i.desc,children:e.jsx("p",{children:"Have a question or want to work together?"})}),e.jsxs("div",{className:i.mailWrapper,children:[e.jsx(j,{className:i.mail,onClick:r,children:e.jsx("p",{children:h})}),d?e.jsx("div",{className:i.icon,children:e.jsx(w,{className:i.svg})}):e.jsx(j,{className:i.icon,onClick:v,children:e.jsx(N,{className:i.svg})})]})]})]})},B="_FlatCard_1misv_1",F="_cardLabel_1misv_7",Q="_itemFront_1misv_7",D="_itemBack_1misv_10",O="_cardCheckbox_1misv_15",q="_item_1misv_7",G="_row_1misv_62",J="_name_1misv_69",U="_title_1misv_74",V="_techStackWrapper_1misv_79",K="_img_1misv_86",X="_descWrapper_1misv_93",Y="_fullHeight_1misv_99",Z="_projectDesc_1misv_102",n={FlatCard:B,cardLabel:F,itemFront:Q,itemBack:D,cardCheckbox:O,item:q,row:G,name:J,title:U,techStackWrapper:V,img:K,descWrapper:X,fullHeight:Y,projectDesc:Z},ee=({project:c})=>{const a=t.useId();return e.jsxs("div",{className:n.FlatCard,children:[e.jsx("input",{type:"checkbox",id:a,className:n.cardCheckbox}),e.jsxs("label",{htmlFor:a,className:n.cardLabel,children:[e.jsxs("div",{className:`${n.item} ${n.itemFront}`,children:[c.imgPath&&e.jsx("img",{src:c.imgPath,alt:c.imgPath,className:n.img}),e.jsx("div",{className:`${n.descWrapper} ${c.imgPath?"":n.fullHeight}`,children:e.jsx("p",{className:n.projectDesc,children:c.name})})]}),e.jsxs("div",{className:`${n.item} ${n.itemBack}`,children:[e.jsx("div",{className:n.name,children:c.name})," ",c.desc&&e.jsx("div",{className:n.row,children:c.desc}),c.techStack&&e.jsxs("div",{className:n.row,children:[e.jsx("div",{className:n.title,children:"Skill: "}),e.jsx("div",{className:n.techStackWrapper,children:c.techStack.map(o=>e.jsx("div",{children:o},o))})]}),c.others&&e.jsxs("div",{className:n.row,children:[e.jsx("div",{className:n.title,children:"Others: "}),e.jsx("div",{children:c.others.map(o=>e.jsx("div",{children:o},o))})]})]})]})]})},te="_Projects_4azlf_1",ce="_contentWrapper_4azlf_6",se="_projectsWrapper_4azlf_17",ne="_title_4azlf_27",ae="_desc_4azlf_47",oe="_content_4azlf_6",ie="_active_4azlf_69",re="_activeArea_4azlf_88",m={Projects:te,contentWrapper:ce,projectsWrapper:se,title:ne,desc:ae,content:oe,active:ie,activeArea:re},le=()=>{const c=t.useRef(null),a=t.useRef(null),o=t.useRef(null),d=t.useCallback(l=>{l&&o.current.classList.toggle(m.active,l)},[]);u(a,d);const _=[{imgPath:"/images/project-qms.jpg",name:"Queue Management System",techStack:["PHP","SQL","HTML","jQuery","CSS"],desc:"Lines up customers in different queues and prints tickets through the printer driver, use polling to get the latest queues status that are updated on the staff panel."},{imgPath:"/images/project-lhg.jpg",name:"CMS website",techStack:["PHP","SQL","HTML","jQuery","Bootstrap","CSS"],desc:"A CMS website that enables admin to manage the client's UI content. Admin login to the CMS by role-based access control."},{imgPath:"/images/project-alfex.jpg",name:"E-shop website",techStack:["PHP","SQL","HTML","jQuery","Bootstrap","CSS"],desc:"A CMS e-shop website that enables admins to manage the client's UI content. Admin can login to the CMS to manage products inventory, and client can purchase products through PayPal gateway and view the purchase history."},{imgPath:"/images/project-mpower.jpg",name:"Chat App",techStack:["React","React Native","Node.js","NoSQL","WebSocket","AWS"],desc:"A Chatting mobile app that enables sales chat with customers base on sales's business logic by WebSocket."},{name:"And more ...",others:["POS","Trademark CMS","Education Web-portal","Panorama CMS","Loyalty mobile app","Hospital Web-portal","etc."]}];return e.jsxs("div",{className:m.Projects,children:[e.jsx("div",{className:"midArea",ref:c}),e.jsx("div",{className:m.activeArea,ref:a}),e.jsx("div",{className:m.contentWrapper,children:e.jsxs("div",{className:m.content,ref:o,children:[e.jsx("div",{className:m.title,children:"Projects"}),e.jsx("div",{className:m.desc,children:"Full stack development projects"}),e.jsx("div",{className:m.projectsWrapper,children:_.map((l,h)=>e.jsx(ee,{project:l},h))})]})})]})},de="_Home_1axne_1",me={Home:de},_e=c=>t.createElement("svg",{height:512,viewBox:"0 0 64 64",width:512,xmlns:"http://www.w3.org/2000/svg",...c},t.createElement("path",{d:"m0 43.333v-38.75c0-.688.588-1.25 1.306-1.25h61.388c.718 0 1.306.562 1.306 1.25v38.75z",fill:"#c9c9c9"}),t.createElement("path",{d:"m64 43.333v5.333c0 .734-.588 1.334-1.306 1.334h-61.388c-.718 0-1.306-.6-1.306-1.333v-5.333h64z",fill:"#d8d8d8"}),t.createElement("path",{d:"m22.667 59.333h18.666l-1.333-9.333h-16z",fill:"#c9c9c9"}),t.createElement("path",{d:"m40 50h-16l-.831 5.817 17.142-3.642z",fill:"#aaa"}),t.createElement("path",{d:"m18 59.333h28v1.333h-28z",fill:"#d8d8d8",transform:"matrix(-1 0 0 -1 64 120)"}),t.createElement("path",{d:"m24 50h16l.09.63-16.505 2.278z",fill:"#939393"}),t.createElement("path",{d:"m2.233 5.566h59.535v35.535h-59.535z",fill:"#6075e0"})),he=()=>Math.max(document.documentElement.clientHeight||0,window.innerHeight||0),pe="_TechStack_1m62b_1",ve="_animationContainer_1m62b_15",ue="_intro_1m62b_27",fe="_first_1m62b_48",ge="_introOut_1m62b_1",xe="_accent_1m62b_53",je="_second_1m62b_59",be="_introSecIn_1m62b_1",Ie="_introAccentSecIn_1m62b_1",Se="_absolute_1m62b_69",Ne="_flexContainer_1m62b_76",we="_lightBackground_1m62b_84",Ce="_lightColor_1m62b_1",ke="_lightSize_1m62b_1",ye="_hidden_1m62b_93",Ae="_computer_1m62b_98",$e="_code_1m62b_111",Re="_screen_1m62b_122",We="_codeIn1_1m62b_1",Pe="_codeIn2_1m62b_1",Ee="_codeIn3_1m62b_1",He="_codeIn4_1m62b_1",ze="_codeIn5_1m62b_1",Le="_codeIn6_1m62b_1",Te="_codeIn7_1m62b_1",Me="_codeIn8_1m62b_1",Be="_codeIn9_1m62b_1",Fe="_codeIn10_1m62b_1",Qe="_codeIn11_1m62b_1",De="_codeIn12_1m62b_1",Oe="_codeIn13_1m62b_1",qe="_codeIn14_1m62b_1",Ge="_codeIn15_1m62b_1",s={TechStack:pe,animationContainer:ve,intro:ue,first:fe,introOut:ge,accent:xe,second:je,introSecIn:be,introAccentSecIn:Ie,absolute:Se,flexContainer:Ne,lightBackground:we,lightColor:Ce,lightSize:ke,hidden:ye,computer:Ae,code:$e,screen:Re,codeIn1:We,codeIn2:Pe,codeIn3:Ee,codeIn4:He,codeIn5:ze,codeIn6:Le,codeIn7:Te,codeIn8:Me,codeIn9:Be,codeIn10:Fe,codeIn11:Qe,codeIn12:De,codeIn13:Oe,codeIn14:qe,codeIn15:Ge},Je=({parentRef:c})=>{const a=t.useRef(null),o=t.useRef(null),d=t.useRef(null),_=t.useRef(null),l=I(),h=t.useCallback(r=>{l(b.setIsActivated(r))},[l]);return u(a,h),t.useEffect(()=>{const r=c.current,v=o.current,p=d.current,f=_.current;if(!r||!v||!p||!f)return;const g=()=>{const x=Math.min(r.scrollTop/v.clientHeight,.99999);document.body.style.setProperty("--scroll",x.toString()),f.classList.toggle(s.hidden,x<.72),p.classList.toggle(s.absolute,r.scrollTop>=v.clientHeight-he())};return r.addEventListener("scroll",g),()=>{r.removeEventListener("scroll",g),document.body.style.setProperty("--scroll","0"),l(b.setIsActivated(!1))}},[l,c]),e.jsx("div",{className:s.TechStack,ref:o,children:e.jsxs("div",{className:s.animationContainer,ref:d,children:[e.jsx("div",{className:"midArea",ref:a}),e.jsxs("div",{className:s.flexContainer,children:[e.jsx("div",{className:`${s.lightBackground} ${s.hidden}`,ref:_}),e.jsx(_e,{className:s.computer}),e.jsx("div",{className:s.screen,children:["React","ReactNative","Vue","TypeScript","Flutter","Go","NodeJS","Java","SQL","NoSQL","Docker","RESTful","GraphQL","CICD","AWS"].map(r=>e.jsx("p",{className:s.code,children:r},r))})]}),e.jsxs("div",{className:`${s.code} ${s.intro} ${s.first}`,children:["Hi, I'm ",e.jsx("span",{className:s.accent,children:"Tindy Chu"}),",",e.jsx("br",{}),"a ",e.jsx("span",{className:s.accent,children:"software engineer"}),",",e.jsx("br",{})," and ..."]}),e.jsxs("div",{className:`${s.code} ${s.intro} ${s.second}`,children:["Hi, I'm ",e.jsx("span",{className:s.accent,children:"Tindy Chu"}),",",e.jsx("br",{}),"a ",e.jsx("span",{className:s.accent,children:"software engineer"}),",",e.jsx("br",{})," and my skill set here."]})]})})},Ve=()=>{const c=t.useRef(null),a=I();return t.useEffect(()=>{a(S.setMenuKey("home"))},[a]),e.jsxs("div",{className:me.Home,ref:c,children:[e.jsx(Je,{parentRef:c}),e.jsx(le,{}),e.jsx(M,{})]})};export{Ve as default};
