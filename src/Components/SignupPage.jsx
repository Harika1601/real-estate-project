import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./SignupPage.css";

const SignupPage = () => {

const navigate = useNavigate();

const [username,setUsername] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleSignup = async (e) => {

e.preventDefault();

try{

const res = await fetch("http://localhost:5000/api/auth/signup",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
username,
email,
password
})
});

const data = await res.json();

if(res.ok){

Swal.fire({
icon:"success",
title:"Signup Successful 🎉",
text:"Your account has been created",
confirmButtonColor:"#5a46ff"
}).then(()=>{
navigate("/login");
});

}else{

Swal.fire({
icon:"error",
title:"Signup Failed",
text:data.message || "Something went wrong"
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

<button type="submit">Signup</button>

</form>

<p>
Already have an account?
<span onClick={()=>navigate("/login")}> Login</span>
</p>

</div>

</div>

)

}

export default SignupPage;