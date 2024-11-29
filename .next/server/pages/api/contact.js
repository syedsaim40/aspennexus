"use strict";(()=>{var e={};e.id=91,e.ids=[91],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,o){return o in t?t[o]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,o)):"function"==typeof t&&"default"===o?t:void 0}}})},3862:(e,t,o)=>{o.r(t),o.d(t,{config:()=>u,default:()=>d,routeModule:()=>c});var r={};o.r(r),o.d(r,{default:()=>p});var n=o(6794),s=o(6114),a=o(6249);let i=require("nodemailer");var l=o.n(i);async function p(e,t){if("POST"!==e.method)return t.setHeader("Allow",["POST"]),t.status(405).end(`Method ${e.method} Not Allowed`);{let{name:o,email:r,phone:n,interest:s,date:a,time:i,message:p}=e.body,d=l().createTransport({host:process.env.SMTP_HOST,port:process.env.SMTP_PORT,auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASS}}),u=`
       <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; border-radius: 5px;">
         <header style="text-align: center; padding-bottom: 10px;">
           <h1 style="color: #007BFF;">Contact Form Submission</h1>
         </header>
         <p><strong>Name:</strong> ${o}</p>
         <p><strong>Email:</strong> ${r}</p>
         <p><strong>Phone:</strong> ${n}</p>
        <p><strong>Interest:</strong> ${s}</p>
        <p><strong>Date:</strong> ${a}</p>
        <p><strong>Time:</strong> ${i}</p>
         <p><strong>Message:</strong></p>
         <p style="background-color: #fff; padding: 10px; border-radius: 3px; border: 1px solid #ddd;">${p}</p>
         <footer style="margin-top: 20px; font-size: 12px; color: #777; text-align: center;">
           <p>This message was sent from your contact form.</p>
           <p style="font-size: 10px;">&copy; ${new Date().getFullYear()} Your Company Name</p>
         </footer>
       </div>
     `;try{return console.log("Sending email..."),await d.sendMail({from:r,to:"syedsaim40@gmail.com",subject:`Contact form submission from ${o}`,text:p,html:u}),console.log("Email sent successfully"),t.status(200).json({message:"Message sent successfully!"})}catch(e){return console.error("Error sending email:",e),t.status(500).json({error:"Failed to send message"})}}}let d=(0,a.l)(r,"default"),u=(0,a.l)(r,"config"),c=new n.PagesAPIRouteModule({definition:{kind:s.x.PAGES_API,page:"/api/contact",pathname:"/api/contact",bundlePath:"",filename:""},userland:r})},6114:(e,t)=>{var o;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return o}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE",e.IMAGE="IMAGE"}(o||(o={}))},6794:(e,t,o)=>{e.exports=o(145)}};var t=require("../../webpack-api-runtime.js");t.C(e);var o=t(t.s=3862);module.exports=o})();