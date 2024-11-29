import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, interest, date, time, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      logger: true, // Logs SMTP communication
      debug: true,  // Debug output
    });

    // Test SMTP connection
    try {
      console.log('Testing SMTP connection...');
      await transporter.verify();
      console.log('SMTP connection successful');
    } catch (smtpError) {
      console.error('SMTP connection failed:', smtpError);
      return res.status(500).json({ error: 'SMTP connection failed' });
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h1>Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Interest:</strong> ${interest}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>
    `;

    try {
      console.log('Sending email...');
      await transporter.sendMail({
        from: email,
        to: 'syedsaim40@gmail.com',
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
