(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9297:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,8173,23)),Promise.resolve().then(a.bind(a,8182)),Promise.resolve().then(a.t.bind(a,9482,23))},8182:(e,t,a)=>{"use strict";a.d(t,{default:()=>s});var r=a(7437),n=a(2265);let s=()=>{let[e,t]=(0,n.useState)(""),[a,s]=(0,n.useState)(""),[l,i]=(0,n.useState)(""),[o,u]=(0,n.useState)("+1"),[c,d]=(0,n.useState)(""),[p,h]=(0,n.useState)(""),[g,v]=(0,n.useState)(""),[x,_]=(0,n.useState)(""),[j,m]=(0,n.useState)(""),y=async r=>{r.preventDefault(),m("Sending...");let n=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:a,phone:"".concat(o," ").concat(l),interest:p,date:g,time:x,message:c})}),u=await n.json();n.ok?(m("Message sent successfully!"),t(""),s(""),i(""),h(""),v(""),_(""),d("")):m("Error: ".concat(u.error))};return(0,r.jsxs)("div",{className:"contact_form",children:[(0,r.jsx)("h1",{children:"Contact Us"}),(0,r.jsxs)("form",{onSubmit:y,children:[(0,r.jsx)("input",{type:"text",placeholder:"Your Name",value:e,onChange:e=>t(e.target.value),required:!0}),(0,r.jsx)("input",{type:"email",placeholder:"Your Email",value:a,onChange:e=>s(e.target.value),required:!0}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("select",{value:o,onChange:e=>u(e.target.value),style:{marginRight:"10px"},children:[(0,r.jsx)("option",{value:"+1",children:"+1 (USA)"}),(0,r.jsx)("option",{value:"+44",children:"+44 (UK)"}),(0,r.jsx)("option",{value:"+91",children:"+91 (India)"}),(0,r.jsx)("option",{value:"+61",children:"+61 (Australia)"})]}),(0,r.jsx)("input",{type:"tel",placeholder:"Your Phone Number",value:l,onChange:e=>i(e.target.value),required:!0})]}),(0,r.jsx)("div",{children:(0,r.jsxs)("select",{value:p,onChange:e=>h(e.target.value),required:!0,children:[(0,r.jsx)("option",{value:"",children:"Select Your Interest"}),(0,r.jsx)("option",{value:"Product Inquiry",children:"Product Inquiry"}),(0,r.jsx)("option",{value:"Support",children:"Support"}),(0,r.jsx)("option",{value:"Feedback",children:"Feedback"}),(0,r.jsx)("option",{value:"General Inquiry",children:"General Inquiry"})]})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("input",{type:"date",value:g,onChange:e=>v(e.target.value),required:!0}),(0,r.jsx)("input",{type:"time",value:x,onChange:e=>_(e.target.value),required:!0})]}),(0,r.jsx)("textarea",{placeholder:"Your Message",value:c,onChange:e=>d(e.target.value),required:!0}),(0,r.jsx)("button",{type:"submit",children:"Send Message"})]}),j&&(0,r.jsx)("p",{children:j})]})}},9482:e=>{e.exports={page:"page_page__ZU32B",main:"page_main__GlU4n",ctas:"page_ctas__g5wGe",primary:"page_primary__V8M9Y",secondary:"page_secondary__lm_PT",footer:"page_footer__sHKi3",logo:"page_logo__7fc9l"}}},e=>{var t=t=>e(e.s=t);e.O(0,[406,173,130,215,744],()=>t(9297)),_N_E=e.O()}]);