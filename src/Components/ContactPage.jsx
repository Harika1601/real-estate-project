import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./ContactPage.css";

const ContactPage = () => {

  const navigate = useNavigate();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await fetch("http://localhost:5000/api/contact",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,
          email,
          message
        })
      });

      const data = await res.json();

      if(res.ok){

        await Swal.fire({
          icon:"success",
          title:"Message Sent Successfully 📩",
          text:"Our team will contact you soon.",
          confirmButtonColor:"#22c55e",
          confirmButtonText:"OK"
        });

        setName("");
        setEmail("");
        setMessage("");

      }else{

        Swal.fire({
          icon:"error",
          title:"Message Failed",
          text:data.message || "Something went wrong",
          confirmButtonColor:"#ef4444"
        });

      }

    } catch(error){

      console.error(error);

      Swal.fire({
        icon:"error",
        title:"Server Error",
        text:"Unable to connect to server",
        confirmButtonColor:"#ef4444"
      });

    }

  };

  const goHome = () => {
    navigate("/home");
  };

  return (

    <div className="contact-page">

      <button className="back-btn" onClick={goHome}>
        ⬅ Back to Home
      </button>

      <div className="contact-card">

        <h2>📞 Contact Us</h2>
        <p>We'd love to help you find your dream property.</p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            required
          />

          <button type="submit">
            🚀 Send Message
          </button>

        </form>

      </div>

    </div>

  );
};

export default ContactPage;