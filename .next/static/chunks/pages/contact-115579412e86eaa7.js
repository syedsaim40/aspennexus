(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{8105:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return a(1486)}])},1486:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u});var n=a(5893),r=a(7294);let u=()=>{let[e,t]=(0,r.useState)(""),[a,u]=(0,r.useState)(""),[l,s]=(0,r.useState)(""),[i,o]=(0,r.useState)("+1"),[c,d]=(0,r.useState)(""),[h,p]=(0,r.useState)(""),[v,x]=(0,r.useState)(""),[j,g]=(0,r.useState)(""),[S,y]=(0,r.useState)(""),_=async n=>{n.preventDefault(),y("Sending...");let r=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:a,phone:"".concat(i," ").concat(l),interest:h,date:v,time:j,message:c})}),o=await r.json();r.ok?(y("Message sent successfully!"),t(""),u(""),s(""),p(""),x(""),g(""),d("")):y("Error: ".concat(o.error))};return(0,n.jsxs)("div",{className:"contact_form",children:[(0,n.jsx)("h1",{children:"Contact Us"}),(0,n.jsxs)("form",{onSubmit:_,children:[(0,n.jsx)("input",{type:"text",placeholder:"Your Name",value:e,onChange:e=>t(e.target.value),required:!0}),(0,n.jsx)("input",{type:"email",placeholder:"Your Email",value:a,onChange:e=>u(e.target.value),required:!0}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("select",{value:i,onChange:e=>o(e.target.value),style:{marginRight:"10px"},children:[(0,n.jsx)("option",{value:"+1",children:"+1 (USA)"}),(0,n.jsx)("option",{value:"+44",children:"+44 (UK)"}),(0,n.jsx)("option",{value:"+91",children:"+91 (India)"}),(0,n.jsx)("option",{value:"+61",children:"+61 (Australia)"})]}),(0,n.jsx)("input",{type:"tel",placeholder:"Your Phone Number",value:l,onChange:e=>s(e.target.value),required:!0})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("select",{value:h,onChange:e=>p(e.target.value),required:!0,children:[(0,n.jsx)("option",{value:"",children:"Select Your Interest"}),(0,n.jsx)("option",{value:"Product Inquiry",children:"Product Inquiry"}),(0,n.jsx)("option",{value:"Support",children:"Support"}),(0,n.jsx)("option",{value:"Feedback",children:"Feedback"}),(0,n.jsx)("option",{value:"General Inquiry",children:"General Inquiry"})]})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("input",{type:"date",value:v,onChange:e=>x(e.target.value),required:!0}),(0,n.jsx)("input",{type:"time",value:j,onChange:e=>g(e.target.value),required:!0})]}),(0,n.jsx)("textarea",{placeholder:"Your Message",value:c,onChange:e=>d(e.target.value),required:!0}),(0,n.jsx)("button",{type:"submit",children:"Send Message"})]}),S&&(0,n.jsx)("p",{children:S})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[888,774,179],()=>t(8105)),_N_E=e.O()}]);