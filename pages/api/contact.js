// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, interest, date, time, message } = req.body;

    // Configure the email transport using nodemailer
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

       // HTML email template
       const htmlContent = `
       <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; border-radius: 5px;">
         <header style="text-align: center; padding-bottom: 10px;">
           <h1 style="color: #007BFF;">Contact Form Submission</h1>
         </header>
         <p><strong>Name:</strong> ${name}</p>
         <p><strong>Email:</strong> ${email}</p>
         <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Interest:</strong> ${interest}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
         <p><strong>Message:</strong></p>
         <p style="background-color: #fff; padding: 10px; border-radius: 3px; border: 1px solid #ddd;">${message}</p>
         <footer style="margin-top: 20px; font-size: 12px; color: #777; text-align: center;">
           <p>This message was sent from your contact form.</p>
           <p style="font-size: 10px;">&copy; ${new Date().getFullYear()} Your Company Name</p>
         </footer>
       </div>
     `;

    try {
      console.log('Sending email...');
      await transporter.sendMail({
        from: email,
        to: 'syedsaim40@gmail.com', // Replace with the recipient's email
        subject: `Contact form submission from ${name}`,
        text: message,
        html: htmlContent,
      });
      
      console.log('Email sent successfully');
      return res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send message' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
