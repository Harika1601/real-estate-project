import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./LoginPage.css";

const LoginPage = () => {

const navigate = useNavigate();

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleLogin = async (e) => {

e.preventDefault();

try{

const res = await fetch("http://localhost:5000/api/auth/login",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
email,
password
})
});

const data = await res.json();

if(res.ok){

await Swal.fire({
icon:"success",
title:"Login Successful 🎉",
text:"Welcome back!",
confirmButtonColor:"#5a46ff"
});

navigate("/home");

}else{

Swal.fire({
icon:"error",
title:"Login Failed",
text:data.message || "Invalid credentials"
});

}

}catch(error){

console.error(error);

Swal.fire({
icon:"error",
title:"Server Error",
text:"Unable to connect to server"
});

}

};

return(

<div className="login-page">

<div className="login-card">

<h2>Login Account</h2>

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