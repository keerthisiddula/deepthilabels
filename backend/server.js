// server.js or index.js

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require('dotenv').config(); // Load environment variables

const app = express();

// CORS setup - allow your frontend URL(s)
app.use(cors({
  origin: ['https://deepthilabels.netlify.app'], // add localhost for testing if needed
}));

app.use(express.json());

const PORT = process.env.PORT || 5000;

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// POST /send-email route
app.post("/send-email", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    console.log("Received email request:", req.body);

    // Validate input fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // your email to receive contact form messages
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
      from: process.env.EMAIL_USER,
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

    // Send email to admin
    await transporter.sendMail(adminMailOptions);
    console.log("Admin email sent successfully.");

    // Send thank-you email to user (don't block if this fails)
    transporter.sendMail(userMailOptions)
      .then(() => console.log("Thank-you email sent successfully."))
      .catch(err => console.error("Error sending thank-you email to user:", err));

    // Respond success
    res.status(200).json({ message: "Emails sent successfully" });

  } catch (error) {
    console.error("Error in /send-email route:", error);
    res.status(500).json({ error: "Server error while sending email" });
  }
});

// Root route to verify backend is live
app.get("/", (req, res) => {
  res.send("Deepthi Labels backend is live ✅");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
