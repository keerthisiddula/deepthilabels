// server.js
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Configure your SMTP transporter (example with Gmail)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "deepthilabels@gmail.com",       // Your email
    pass: "sifv enal recd ulwj", // Use app password if 2FA enabled
  },
});

// POST /send-email - to send/resend contact form email
app.post("/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const mailOptions = {
  from:"deepthilabels@gmail.com",  // your Gmail here
  to: "deepthilabels@gmail.com",                      // your business email (can be same)
  replyTo: email,                                     // user email from form for replies
  subject: subject,
  text: `
    You have received a new message from the contact form:

    Name: ${name}
    Email: ${email}
    Subject: ${subject}
    Message:
    ${message}
  `,
};


  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Server error while sending email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// Serve static React files after build
app.use(express.static(path.join(__dirname, '..', 'build')));

// Fallback to React for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

