const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require('dotenv').config(); // Load environment variables

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

// POST /send-email route
app.post("/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const adminMailOptions = {
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

  const userMailOptions = {
    from: "deepthilabels@gmail.com",
    to: email,
    subject: "Thank you for contacting Deepthi Labels!",
    text: `
Hi ${name},

Thank you for reaching out to Deepthi Labels. We have received your message and our team will get back to you shortly.

Here’s a copy of your message:
Subject: ${subject}
Message:
${message}

If you have any urgent queries, feel free to contact us at +91 9849030367.

Best regards,
Mr. Raju Siddula
Business Head, Deepthi Labels
    `,
  };

  try {
    await transporter.sendMail(adminMailOptions);
    console.log("Admin email sent successfully.");
  } catch (error) {
    console.error("Error sending email to admin:", error);
    return res.status(500).json({ error: "Error sending email to admin" });
  }

  try {
    console.log("Sending thank-you email to user:", email);
    await transporter.sendMail(userMailOptions);
    console.log("Thank-you email sent successfully.");
  } catch (error) {
    console.error("Error sending thank-you email to user:", error);
    // Still continue
  }

  res.status(200).json({ message: "Emails sent successfully" });
});

// ✅ Root route to avoid 404 on Render homepage
app.get("/", (req, res) => {
  res.send("Deepthi Labels backend is live ✅");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
