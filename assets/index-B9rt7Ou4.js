import{r as s,j as e,C as I,u as C,t as S,a as w}from"./index-BR-wLf52.js";import{C as N}from"./ComponentList-DxBM_2AI.js";const k=t=>s.createElement("svg",{height:512,viewBox:"0 0 24 24",width:512,xmlns:"http://www.w3.org/2000/svg",...t},s.createElement("path",{d:"m3.625 23h9.75a2.629 2.629 0 0 0 2.625-2.625v-12.75a2.629 2.629 0 0 0 -2.625-2.625h-9.75a2.629 2.629 0 0 0 -2.625 2.625v12.75a2.629 2.629 0 0 0 2.625 2.625zm-.625-15.375a.625.625 0 0 1 .625-.625h9.75a.625.625 0 0 1 .625.625v12.75a.625.625 0 0 1 -.625.625h-9.75a.625.625 0 0 1 -.625-.625z",fill:"#aaa"}),s.createElement("path",{d:"m20.37 1h-9.74a2.629 2.629 0 0 0 -2.421 1.61 1 1 0 1 0 1.842.78.63.63 0 0 1 .579-.39h9.74a.631.631 0 0 1 .63.63v12.74a.631.631 0 0 1 -.63.63h-2.37a1 1 0 0 0 0 2h2.37a2.633 2.633 0 0 0 2.63-2.63v-12.74a2.633 2.633 0 0 0 -2.63-2.63z",fill:"#fff"})),b=t=>s.createElement("svg",{height:"512pt",viewBox:"0 -64 512 511",width:"512pt",xmlns:"http://www.w3.org/2000/svg",...t},s.createElement("path",{d:"m512 74.011719-255.984375 237.261719-77.785156 72.09375-178.230469-190.203126 72.984375-68.390624 110.316406 117.738281 72.714844-67.449219 188.164063-174.5625zm0 0",fill:"#aaa"}),s.createElement("path",{d:"m512 74.011719-255.984375 237.261719v-136.210938l188.164063-174.5625zm0 0",fill:"#fff"})),v=(t,n)=>{s.useEffect(()=>{if(!t.current)return;const o=new IntersectionObserver(d=>{n(d[0].isIntersecting)});return o.observe(t.current),()=>{o.disconnect()}},[t,n])},y="_Contact_t3fwc_1",A="_title_t3fwc_12",$="_avatar_t3fwc_32",W="_desc_t3fwc_46",P="_mailWrapper_t3fwc_60",E="_shake_t3fwc_1",H="_mail_t3fwc_60",L="_icon_t3fwc_92",R="_svg_t3fwc_96",z="_content_t3fwc_123",T="_active_t3fwc_129",M="_bounce_t3fwc_1",B="_activeArea_t3fwc_153",r={Contact:y,title:A,avatar:$,desc:W,mailWrapper:P,shake:E,mail:H,icon:L,svg:R,content:z,active:T,bounce:M,activeArea:B},F=()=>{const t=s.useRef(null),n=s.useRef(null),[o,d]=s.useState(!1),h=s.useCallback(_=>n.current.classList.toggle(r.active,_),[]);v(t,h);const i="chu_six@yahoo.com.hk",p=()=>{document.location=`mailto:${i}`},l=()=>{(async()=>{try{await navigator.clipboard.writeText(i),d(!0),setTimeout(()=>d(!1),800)}catch(_){console.error("Failed to copy: ",_)}})()};return e.jsxs("div",{className:r.Contact,children:[e.jsx("div",{className:r.activeArea,ref:t}),e.jsxs("div",{className:r.content,ref:n,children:[e.jsx("div",{className:r.title,children:"Contact"}),e.jsx("img",{className:r.avatar,src:"/images/avatar.jpg",alt:"avatar"}),e.jsx("div",{className:r.desc,children:e.jsx("p",{children:"Have a question or want to work together?"})}),e.jsxs("div",{className:r.mailWrapper,children:[e.jsx(I,{className:r.mail,onClick:p,children:e.jsx("p",{children:i})}),o?e.jsx("div",{className:r.icon,children:e.jsx(b,{className:r.svg})}):e.jsx(I,{className:r.icon,onClick:l,children:e.jsx(k,{className:r.svg})})]})]})]})},Q="_FlatCard_1misv_1",D="_cardLabel_1misv_7",O="_itemFront_1misv_7",q="_itemBack_1misv_10",G="_cardCheckbox_1misv_15",J="_item_1misv_7",K="_row_1misv_62",U="_name_1misv_69",V="_title_1misv_74",X="_techStackWrapper_1misv_79",Y="_img_1misv_86",Z="_descWrapper_1misv_93",ee="_fullHeight_1misv_99",te="_projectDesc_1misv_102",a={FlatCard:Q,cardLabel:D,itemFront:O,itemBack:q,cardCheckbox:G,item:J,row:K,name:U,title:V,techStackWrapper:X,img:Y,descWrapper:Z,fullHeight:ee,projectDesc:te},se=({project:t})=>{const n=s.useId();return e.jsxs("div",{className:a.FlatCard,children:[e.jsx("input",{type:"checkbox",id:n,className:a.cardCheckbox}),e.jsxs("label",{htmlFor:n,className:a.cardLabel,children:[e.jsxs("div",{className:`${a.item} ${a.itemFront}`,children:[t.imgPath&&e.jsx("img",{src:t.imgPath,alt:t.imgPath,className:a.img}),e.jsx("div",{className:`${a.descWrapper} ${t.imgPath?"":a.fullHeight}`,children:e.jsx("p",{className:a.projectDesc,children:t.name})})]}),e.jsxs("div",{className:`${a.item} ${a.itemBack}`,children:[e.jsx("div",{className:a.name,children:t.name})," ",t.desc&&e.jsx("div",{className:a.row,children:t.desc}),t.techStack&&e.jsxs("div",{className:a.row,children:[e.jsx("div",{className:a.title,children:"Skill: "}),e.jsx("div",{className:a.techStackWrapper,children:t.techStack.map(o=>e.jsx("div",{children:o},o))})]}),t.others&&e.jsxs("div",{className:a.row,children:[e.jsx("div",{className:a.title,children:"Others: "}),e.jsx("div",{children:t.others.map(o=>e.jsx("div",{children:o},o))})]})]})]})]})},ce="_Projects_4azlf_1",ae="_contentWrapper_4azlf_6",ne="_projectsWrapper_4azlf_17",oe="_title_4azlf_27",ie="_desc_4azlf_47",re="_content_4azlf_6",le="_active_4azlf_69",de="_activeArea_4azlf_88",m={Projects:ce,contentWrapper:ae,projectsWrapper:ne,title:oe,desc:ie,content:re,active:le,activeArea:de},g=[{imgPath:"/images/project-qms.jpg",name:"Queue Management System",techStack:["PHP","SQL","HTML","jQuery","CSS"],desc:"Lines up customers in different queues and prints tickets through the printer driver, use polling to get the latest queues status that are updated on the staff panel."},{imgPath:"/images/project-lhg.jpg",name:"CMS website",techStack:["PHP","SQL","HTML","jQuery","Bootstrap","CSS"],desc:"A CMS website that enables admin to manage the client's UI content. Admin login to the CMS by role-based access control."},{imgPath:"/images/project-alfex.jpg",name:"E-shop website",techStack:["PHP","SQL","HTML","jQuery","Bootstrap","CSS"],desc:"A CMS e-shop website that enables admins to manage the client's UI content. Admin can login to the CMS to manage products inventory, and client can purchase products through PayPal gateway and view the purchase history."},{imgPath:"/images/project-mpower.jpg",name:"Chat App",techStack:["React","React Native","Node.js","NoSQL","WebSocket","AWS"],desc:"A Chatting mobile app that enables sales chat with customers base on sales's business logic by WebSocket."},{name:"And more ...",others:["POS","Trademark CMS","Education Web-portal","Panorama CMS","Loyalty mobile app","Hospital Web-portal","etc."]}],me=()=>{const t=s.useRef(null),n=s.useRef(null),o=s.useCallback(i=>{i&&n.current.classList.toggle(m.active,i)},[]);v(t,o);const d=s.useCallback(i=>g[i].name,[]),h=s.useCallback(i=>e.jsx(se,{project:g[i]}),[]);return e.jsxs("div",{className:m.Projects,children:[e.jsx("div",{className:m.activeArea,ref:t}),e.jsx("div",{className:m.contentWrapper,children:e.jsxs("div",{className:m.content,ref:n,children:[e.jsx("div",{className:m.title,children:"Projects"}),e.jsx("div",{className:m.desc,children:"Full stack development projects"}),e.jsx("div",{className:m.projectsWrapper,children:e.jsx(N,{array:g,getItemKey:d,renderItem:h})})]})})]})},_e="_Home_1axne_1",he={Home:_e},pe=t=>s.createElement("svg",{height:512,viewBox:"0 0 64 64",width:512,xmlns:"http://www.w3.org/2000/svg",...t},s.createElement("path",{d:"m0 43.333v-38.75c0-.688.588-1.25 1.306-1.25h61.388c.718 0 1.306.562 1.306 1.25v38.75z",fill:"#c9c9c9"}),s.createElement("path",{d:"m64 43.333v5.333c0 .734-.588 1.334-1.306 1.334h-61.388c-.718 0-1.306-.6-1.306-1.333v-5.333h64z",fill:"#d8d8d8"}),s.createElement("path",{d:"m22.667 59.333h18.666l-1.333-9.333h-16z",fill:"#c9c9c9"}),s.createElement("path",{d:"m40 50h-16l-.831 5.817 17.142-3.642z",fill:"#aaa"}),s.createElement("path",{d:"m18 59.333h28v1.333h-28z",fill:"#d8d8d8",transform:"matrix(-1 0 0 -1 64 120)"}),s.createElement("path",{d:"m24 50h16l.09.63-16.505 2.278z",fill:"#939393"}),s.createElement("path",{d:"m2.233 5.566h59.535v35.535h-59.535z",fill:"#6075e0"})),ge=()=>Math.max(document.documentElement.clientHeight||0,window.innerHeight||0),ve="_TechStack_1g1so_1",ue="_activeArea_1g1so_15",fe="_animationContainer_1g1so_21",xe="_intro_1g1so_33",je="_first_1g1so_54",Ie="_introOut_1g1so_1",Se="_accent_1g1so_59",Ce="_second_1g1so_65",we="_introSecIn_1g1so_1",Ne="_introAccentSecIn_1g1so_1",ke="_absolute_1g1so_75",be="_flexContainer_1g1so_82",ye="_lightBackground_1g1so_90",Ae="_lightColor_1g1so_1",$e="_lightSize_1g1so_1",We="_hidden_1g1so_99",Pe="_computer_1g1so_104",Ee="_code_1g1so_117",He="_screen_1g1so_128",Le="_codeIn1_1g1so_1",Re="_codeIn2_1g1so_1",ze="_codeIn3_1g1so_1",Te="_codeIn4_1g1so_1",Me="_codeIn5_1g1so_1",Be="_codeIn6_1g1so_1",Fe="_codeIn7_1g1so_1",Qe="_codeIn8_1g1so_1",De="_codeIn9_1g1so_1",Oe="_codeIn10_1g1so_1",qe="_codeIn11_1g1so_1",Ge="_codeIn12_1g1so_1",Je="_codeIn13_1g1so_1",Ke="_codeIn14_1g1so_1",Ue="_codeIn15_1g1so_1",c={TechStack:ve,activeArea:ue,animationContainer:fe,intro:xe,first:je,introOut:Ie,accent:Se,second:Ce,introSecIn:we,introAccentSecIn:Ne,absolute:ke,flexContainer:be,lightBackground:ye,lightColor:Ae,lightSize:$e,hidden:We,computer:Pe,code:Ee,screen:He,codeIn1:Le,codeIn2:Re,codeIn3:ze,codeIn4:Te,codeIn5:Me,codeIn6:Be,codeIn7:Fe,codeIn8:Qe,codeIn9:De,codeIn10:Oe,codeIn11:qe,codeIn12:Ge,codeIn13:Je,codeIn14:Ke,codeIn15:Ue},Ve=({parentRef:t})=>{const n=s.useRef(null),o=s.useRef(null),d=s.useRef(null),h=s.useRef(null),i=C(),p=s.useCallback(l=>{i(S.setIsActivated(l))},[i]);return v(n,p),s.useEffect(()=>{const l=t.current,_=o.current,u=d.current,f=h.current;if(!l||!_||!u||!f)return;const x=()=>{const j=Math.min(l.scrollTop/_.clientHeight,.99999);document.body.style.setProperty("--scroll",j.toString()),f.classList.toggle(c.hidden,j<.72),u.classList.toggle(c.absolute,l.scrollTop>=_.clientHeight-ge())};return l.addEventListener("scroll",x),()=>{l.removeEventListener("scroll",x),document.body.style.setProperty("--scroll","0"),i(S.setIsActivated(!1))}},[i,t]),e.jsx("div",{className:c.TechStack,ref:o,children:e.jsxs("div",{className:c.animationContainer,ref:d,children:[e.jsx("div",{className:c.activeArea,ref:n}),e.jsxs("div",{className:c.flexContainer,children:[e.jsx("div",{className:`${c.lightBackground} ${c.hidden}`,ref:h}),e.jsx(pe,{className:c.computer}),e.jsx("div",{className:c.screen,children:["React","ReactNative","Vue","TypeScript","Flutter","Go","NodeJS","Java","SQL","NoSQL","Docker","RESTful","GraphQL","CICD","AWS"].map(l=>e.jsx("p",{className:c.code,children:l},l))})]}),e.jsxs("div",{className:`${c.code} ${c.intro} ${c.first}`,children:["Hi, I'm ",e.jsx("span",{className:c.accent,children:"Tindy Chu"}),",",e.jsx("br",{}),"a ",e.jsx("span",{className:c.accent,children:"software engineer"}),",",e.jsx("br",{})," and ..."]}),e.jsxs("div",{className:`${c.code} ${c.intro} ${c.second}`,children:["Hi, I'm ",e.jsx("span",{className:c.accent,children:"Tindy Chu"}),",",e.jsx("br",{}),"a ",e.jsx("span",{className:c.accent,children:"software engineer"}),",",e.jsx("br",{})," and my skill set here."]})]})})},Ze=()=>{const t=s.useRef(null),n=C();return s.useEffect(()=>{n(w.setMenuKey("home"))},[n]),e.jsxs("div",{className:he.Home,ref:t,children:[e.jsx(Ve,{parentRef:t}),e.jsx(me,{}),e.jsx(F,{})]})};export{Ze as default};
