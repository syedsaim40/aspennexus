"use strict";(()=>{var e={};e.id=91,e.ids=[91],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,r)=>{Object.defineProperty(r,"l",{enumerable:!0,get:function(){return function e(r,t){return t in r?r[t]:"then"in r&&"function"==typeof r.then?r.then(r=>e(r,t)):"function"==typeof r&&"default"===t?r:void 0}}})},3862:(e,r,t)=>{t.r(r),t.d(r,{config:()=>c,default:()=>p,routeModule:()=>u});var o={};t.r(o),t.d(o,{default:()=>d});var n=t(6794),s=t(6114),a=t(6249);let i=require("nodemailer");var l=t.n(i);async function d(e,r){if("POST"!==e.method)return r.setHeader("Allow",["POST"]),r.status(405).end(`Method ${e.method} Not Allowed`);{let{name:t,email:o,phone:n,interest:s,date:a,time:i,message:d}=e.body,p=l().createTransport({host:process.env.SMTP_HOST,port:process.env.SMTP_PORT,auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASS}}),c=`
       <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; border-radius: 5px;">
         <header style="text-align: center; padding-bottom: 10px;">
           <h1 style="color: #007BFF;">Contact Form Submission</h1>
         </header>
         <p><strong>Name:</strong> ${t}</p>
         <p><strong>Email:</strong> ${o}</p>
         <p><strong>Phone:</strong> ${n}</p>
        <p><strong>Interest:</strong> ${s}</p>
        <p><strong>Date:</strong> ${a}</p>
        <p><strong>Time:</strong> ${i}</p>
         <p><strong>Message:</strong></p>
         <p style="background-color: #fff; padding: 10px; border-radius: 3px; border: 1px solid #ddd;">${d}</p>
         <footer style="margin-top: 20px; font-size: 12px; color: #777; text-align: center;">
           <p>This message was sent from your contact form.</p>
           <p style="font-size: 10px;">&copy; ${new Date().getFullYear()} Your Company Name</p>
         </footer>
       </div>
     `;try{return console.log("Sending email..."),await p.sendMail({from:o,to:"syedsaim40@gmail.com",subject:`Contact form submission from ${t}`,text:d,html:c}),console.log("Email sent successfully"),r.status(200).json({message:"Message sent successfully!"})}catch(e){return console.error("Error sending email:",e),console.error("Error details:",e.message),console.error("Stack trace:",e.stack),console.error("Error sending email:",e),r.status(500).json({error:"Failed to send message"})}}}let p=(0,a.l)(o,"default"),c=(0,a.l)(o,"config"),u=new n.PagesAPIRouteModule({definition:{kind:s.x.PAGES_API,page:"/api/contact",pathname:"/api/contact",bundlePath:"",filename:""},userland:o})},6114:(e,r)=>{var t;Object.defineProperty(r,"x",{enumerable:!0,get:function(){return t}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE",e.IMAGE="IMAGE"}(t||(t={}))},6794:(e,r,t)=>{e.exports=t(145)}};var r=require("../../webpack-api-runtime.js");r.C(e);var t=r(r.s=3862);module.exports=t})();