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
      const res = await fetch("http://localhost:5000/send-email", {
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
      <h2 style={styles.heading}>Contact Us</h2>
      <p style={styles.subheading}>
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
  heading: {
    fontSize: "2.2rem",
    marginBottom: "10px",
    textAlign: "center",
    color: "white",
    fontWeight: 700,
  },
  subheading: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#555",
    fontSize: "1.1rem",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    justifyContent: "space-between",
  },
  contactCard: {
    flex: "0 1 40%", // don't grow
    alignSelf: "flex-start", // align to top
    backgroundColor: "#f0f8ff",
    border: "1px solid #cce0ff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    minWidth: "280px",
    marginTop: "140px",
    marginRight: "20px",
  },
  cardTitle: {
    fontSize: "1.3rem",
    marginBottom: "15px",
    color: "#003366",
  },
  form: {
    flex: "1 1 55%",
    display: "flex",
    flexDirection: "column",
    minWidth: "280px",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
    fontWeight: "600",
    color: "#003366",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    marginTop: "8px",
    transition: "border-color 0.3s",
  },
  textarea: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    marginTop: "8px",
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

export default ContactUs;
