import React, { useState } from "react";
import "./contact.css";
import contactImg from "../assets/group.jpeg"; // ✅ Banner image
import axios from "axios";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // ✅ Save form before clearing fields
    const currentForm = { ...form };

    // ✅ Clear fields immediately when Send clicked
    setForm({ name: "", email: "", subject: "", message: "" });

    try {
      const res = await axios.post("http://localhost:5000/api/auth/contact", currentForm);

      if (res.data.success) {
        setStatus("✅ Message Sent Successfully!");
      } else {
        setStatus("❌ Something went wrong.");
      }
    } catch (error) {
      setStatus("❌ Failed to send message.");
      console.error("CONTACT ERROR:", error);
    }
  };

  return (
    <div className="contact-page">

      {/* ✅ Banner */}
      <div className="contact-banner">
        <img src={contactImg} alt="Contact StyleGlanz" className="contact-banner-img" />
        <div className="contact-overlay">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you</p>
        </div>
      </div>

      {/* ✅ Main Content */}
      <div className="contact-container">

        {/* Left Info Section */}
        <div className="contact-info">
          <h2>Let's Connect</h2>
          <p>
            Have questions? Business inquiries? Brand collaborations?  
            Reach out & our team will get back to you shortly.
          </p>

          <div className="info-cards">

            <div className="info-card">
              <h3>📍 Location</h3>
              <p>Maharashtra, India</p>
            </div>

            <div className="info-card">
              <h3>📧 Email</h3>
              <p>styleglanz.support@gmail.com</p>
            </div>

            <div className="info-card">
              <h3>📞 Phone</h3>
              <p>+91 98765 43210</p>
            </div>

          </div>
        </div>

        {/* ✅ Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" name="name" value={form.name} onChange={handleChange} required />
          <input type="email" placeholder="Email Address" name="email" value={form.email} onChange={handleChange} required />
          <input type="text" placeholder="Subject" name="subject" value={form.subject} onChange={handleChange} required />
          <textarea rows="5" placeholder="Your Message" name="message" value={form.message} onChange={handleChange} required></textarea>
          <button type="submit">Send Message</button>
        </form>

      </div>

      {/* ✅ Status message */}
      {status && <p className="contact-status">{status}</p>}
    </div>
  );
};

export default Contact;
