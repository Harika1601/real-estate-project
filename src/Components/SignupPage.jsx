import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css";

const SignupPage = () => {

const navigate = useNavigate();

const [username,setUsername] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleSignup = (e) => {
e.preventDefault();

console.log(username,email,password);

alert("Signup successful!");

navigate("/login");


};

return (

<div className="signup-container">

  <div className="signup-card">

    <h2>Create Account</h2>

    <form onSubmit={handleSignup}>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        required
      />

      <button type="submit">
        Signup
      </button>

    </form>

    <p>
      Already have an account?
      <span onClick={()=>navigate("/login")}> Login</span>
    </p>

  </div>

</div>


);

};

export default SignupPage;
