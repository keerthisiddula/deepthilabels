import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitStatus(
          "Message sent successfully! Deepthi Labels will get back to you soon."
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        setSubmitStatus(`Error: ${data.error || "Failed to send message"}`);
      }
    } catch (error) {
      setSubmitStatus("Network error: Unable to send message.");
    }
  };

  return (
    <section style={styles.section}>
      <h2 className="text-3xl font-extrabold mt-10 mb-4 text-center text-gradient bg-gradient-to-r from-green-400 to-teal-600">
        Contact Us
      </h2>
      <div className="w-24 h-1 mx-auto mb-5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500"></div>
      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-5 leading-relaxed text-[17px]">
        Have questions or need assistance? Send us a message and we'll respond
        promptly.
      </p>
      <div style={styles.container}>
        {/* Business Details Card */}
        <div style={styles.contactCard}>
          <h3 style={styles.cardTitle}>Business Details</h3>
          <p>
            <strong>Name:</strong> Mr. Raju Siddula
          </p>
          <p>
            <strong>Mobile:</strong> +91 9849030367
          </p>
          <p>
            <strong>Address:</strong> Flat No.302, Gurukrupa Nilayam, H.No
            4-7-12/67 Ravindra Nagar, Nacharam, Hyderabad 500076
          </p>
          <p>
            <strong>Email:</strong> deepthilabels@gmail.com
          </p>
          <p>
            <strong>Available Timings:</strong> Mon - Sat: 9:00 AM - 6:00 PM
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} style={styles.form} noValidate>
          <label htmlFor="name" style={styles.label}>
            Name
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              style={{
                ...styles.input,
                borderColor: errors.name ? "#d9534f" : "#ccc",
              }}
            />
            {errors.name && <span style={styles.error}>{errors.name}</span>}
          </label>

          <label htmlFor="email" style={styles.label}>
            Email
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              style={{
                ...styles.input,
                borderColor: errors.email ? "#d9534f" : "#ccc",
              }}
            />
            {errors.email && <span style={styles.error}>{errors.email}</span>}
          </label>

          <label htmlFor="subject" style={styles.label}>
            Subject
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject of your message"
              value={formData.subject}
              onChange={handleChange}
              style={{
                ...styles.input,
                borderColor: errors.subject ? "#d9534f" : "#ccc",
              }}
            />
            {errors.subject && (
              <span style={styles.error}>{errors.subject}</span>
            )}
          </label>

          <label htmlFor="message" style={styles.label}>
            Message
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              style={{
                ...styles.textarea,
                borderColor: errors.message ? "#d9534f" : "#ccc",
              }}
            />
            {errors.message && (
              <span style={styles.error}>{errors.message}</span>
            )}
          </label>

          <button type="submit" style={styles.button}>
            Send Message
          </button>

          {submitStatus && <p style={styles.success}>{submitStatus}</p>}
        </form>
      </div>
      <ResponsiveStyle />
    </section>
  );
};

const styles = {
  section: {
    maxWidth: "1100px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
  },
  container: {
    display: "flex",
    flexDirection: "row", // Default direction: side-by-side
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "2rem",
    flexWrap: "wrap", // Allows wrapping on small screens
    width: "100%",
    marginBottom: "2rem",
  },
  contactCard: {
    flex: "0 1 40%",
    alignSelf: "flex-start",
    backgroundColor: "#f0f8ff",
    border: "1px solid #cce0ff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    minWidth: "240px",
    marginTop: "0",
    marginLeft: "40px", // Added left margin here
    marginRight: "20px",
  },
  cardTitle: {
    fontSize: "1.3rem",
    marginBottom: "15px",
    color: "#003366",
  },
  form: {
    flex: "1 1 45%",
    display: "flex",
    flexDirection: "column",
    gap: "0.8rem",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "18px",
    fontWeight: "600",
    color: "#38B2AC",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    marginTop: "2px",
    transition: "border-color 0.3s",
  },
  textarea: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    marginTop: "6px",
    resize: "vertical",
    transition: "border-color 0.3s",
  },
  button: {
    backgroundColor: "#004080",
    color: "#fff",
    padding: "12px",
    fontSize: "1.1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "background-color 0.3s",
  },
  error: {
    color: "#d9534f",
    marginTop: "5px",
    fontSize: "0.875rem",
  },
  success: {
    marginTop: "20px",
    color: "#28a745",
    fontWeight: "600",
    textAlign: "center",
  },
};

const ResponsiveStyle = () => (
  <style>{`
    @media (max-width: 768px) {
      div[style*="display: flex"][style*="flex-wrap: wrap"] {
        flex-direction: column !important;
        align-items: center !important;
      }
      div[style*="flex: 0 1 40%"] {
        flex: 1 1 100% !important;
        max-width: 100% !important;
        margin-right: 0 !important;
        margin-left: 0 !important;
        margin-top: 20px !important;
      }
      form[style*="flex: 1 1 45%"] {
        flex: 1 1 100% !important;
        max-width: 100% !important;
      }
    }

    @media (min-width: 1024px) {
      div[style*="display: flex"][style*="flex-wrap: wrap"] {
        flex-direction: row !important;
        align-items: flex-start !important;
        justify-content: space-between !important;
      }
      div[style*="flex: 0 1 40%"] {
        flex: 0 1 40% !important;
        max-width: 40% !important;
        margin-left: 0 !important;
        margin-right: 30px !important;
      }
      form[style*="flex: 1 1 45%"] {
        flex: 1 1 45% !important;
        max-width: 45% !important;
      }
    }
  `}</style>
);

export default ContactUs;
