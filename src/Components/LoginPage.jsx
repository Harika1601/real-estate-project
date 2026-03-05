import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {

const navigate = useNavigate();

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleLogin = (e) => {
e.preventDefault();

console.log(email,password);

alert("Login successful!");

navigate("/");


};

return (


<div className="login-container">

  <div className="login-card">

    <h2>Login</h2>

    <form onSubmit={handleLogin}>

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
        Login
      </button>

    </form>

    <p>
      Don't have an account?
      <span onClick={()=>navigate("/signup")}> Signup</span>
    </p>

  </div>

</div>


);

};

export default LoginPage;
