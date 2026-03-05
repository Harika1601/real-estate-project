import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactPage.css";

const ContactPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  // handle change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("⚠️ Please fill all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      console.log("📩 Contact response:", data);

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });

    } catch (error) {
      console.error("❌ Contact error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>📞 Contact Us</h2>
        <p className="contact-sub">
          We'd love to help you find your dream property.
        </p>

        {success && (
          <div className="success-msg">
            ✅ Message sent successfully!
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit" className="send-btn">
            🚀 Send Message
          </button>
        </form>

        <button className="back-home-btn" onClick={() => navigate("/")}>
          ⬅ Back to Home
        </button>
      </div>
    </div>
  );
};

export default ContactPage;