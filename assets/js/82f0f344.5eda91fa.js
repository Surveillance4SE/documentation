"use strict";(self.webpackChunkes_documentation=self.webpackChunkes_documentation||[]).push([[726],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8348:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1},o="IMA",s={unversionedId:"architecture/ima",id:"architecture/ima",title:"IMA",description:"Intrustion Management API.",source:"@site/docs/architecture/ima.md",sourceDirName:"architecture",slug:"/architecture/ima",permalink:"/documentation/docs/architecture/ima",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Tutorial Intro",permalink:"/documentation/docs/intro"}},c={},l=[{value:"V1",id:"v1",level:2},{value:"V2",id:"v2",level:2}],p={toc:l};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ima"},"IMA"),(0,a.kt)("p",null,"Intrustion Management API."),(0,a.kt)("p",null,"The system responsible to dispatch the intrusion response."),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This system is notified when the ",(0,a.kt)("a",{parentName:"p",href:"#"},"HDM")," detects an intrusion."),(0,a.kt)("p",null,"Upon detection, the IMA must ask the ",(0,a.kt)("a",{parentName:"p",href:"#"},"Notifications API")," to send the adequate notifications and asks the ",(0,a.kt)("a",{parentName:"p",href:"#"},"Cameras")," to make a video of the intrusion."),(0,a.kt)("h1",{id:"implementations"},"Implementations"),(0,a.kt)("h2",{id:"v1"},"V1"),(0,a.kt)("p",null,"In this phase, this module is implemented as a lambda function, and all frames are stored in an S3 bucket."),(0,a.kt)("p",null,"The IMA is triggered by the ",(0,a.kt)("a",{parentName:"p",href:"#"},"HDM"),", then notifies ",(0,a.kt)("a",{parentName:"p",href:"#"},"Notifications API")," and takes the adequate frames from S3, storing the generated video there as well."),(0,a.kt)("p",null,"This implementation was not scalable, so, it was decommissioned."),(0,a.kt)("h2",{id:"v2"},"V2"),(0,a.kt)("p",null,"In the final version, the sesrvice is implemented in an ECS image, configured for scalability.\nThis solves the innitial problems with ",(0,a.kt)("a",{parentName:"p",href:"#v1"},"V1"),"."),(0,a.kt)("p",null,"In this iteration, the ",(0,a.kt)("a",{parentName:"p",href:"#"},"HDM")," triggers the Intrustion Management API, which will request the ",(0,a.kt)("a",{parentName:"p",href:"#"},"Notifications API")," module to send the adequate notifications and request video from the ",(0,a.kt)("a",{parentName:"p",href:"#"},"Cameras"),"."),(0,a.kt)("h1",{id:"diagrams"},"Diagrams"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Class diagram",src:n(5435).Z,width:"741",height:"244"})),(0,a.kt)("p",null,"The HDM sends a request of the ",(0,a.kt)("inlineCode",{parentName:"p"},"IntrusionDetected")," class, providing the camera Id, intrusion timestamp and the timestamp in which the alert was triggered."),(0,a.kt)("p",null,"Then, the intrusion is stored as an ",(0,a.kt)("inlineCode",{parentName:"p"},"Intrusion")," object with a unique Id, so it can be differenciated from the others."),(0,a.kt)("p",null,"The requests sent are from the classes ",(0,a.kt)("inlineCode",{parentName:"p"},"NotificationRequest")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"VideoRequest"),".\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"NotificationRequest")," informs the ",(0,a.kt)("a",{parentName:"p",href:"#"},"Notifications API")," of the camera ID and timestamp, so it can infer who to notify, taking into account their preferences.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"VideoRequest")," informs the correct camera of the start and end times and identifier of the intrusion, which will be used as the video file name."),(0,a.kt)("p",null,"The flow of actions can be seen in the following flow chart."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Flow chart",src:n(6845).Z,width:"547",height:"220"})))}u.isMDXComponent=!0},5435:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ima_classes-ca554e64e3131a68fc346995f0408150.png"},6845:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ima_flowchart-13409c15dac57e7252c5298491daddeb.png"}}]);