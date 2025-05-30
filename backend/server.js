const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "deepthilabels@gmail.com",
    pass: "sifv enal recd ulwj", // Use your actual app password here
  },
});

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
    console.log("Founder email sent successfully.");
  } catch (error) {
    console.error("Error sending email to founder:", error);
    return res.status(500).json({ error: "Error sending email to founder" });
  }

  try {
    console.log("Sending thank-you email to user:", email);
    await transporter.sendMail(userMailOptions);
    console.log("Thank-you email sent successfully.");
  } catch (error) {
    console.error("Error sending thank-you email to user:", error);
    // Optional: still send success response to user
  }

  res.status(200).json({ message: "Emails sent successfully" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
