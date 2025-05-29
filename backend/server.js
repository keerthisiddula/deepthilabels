const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Nodemailer transporter config (same)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "deepthilabels@gmail.com",
    pass: "sifv enal recd ulwj",
  },
});

// POST route to send email (same)
app.post("/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const mailOptions = {
    from: "deepthilabels@gmail.com",
    to: "deepthilabels@gmail.com",
    replyTo: email,
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

// Serve static React files after build
app.use(express.static(path.join(__dirname, '..', 'dist')));

// Fallback to React for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

// Start server last
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
