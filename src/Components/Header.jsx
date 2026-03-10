import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = ({ setFilter, search, setSearch }) => {

const navigate = useNavigate();

const handleLogout = () => {
  navigate("/signup");
};

return(

<div className="header">

{/* NAVBAR */}

<div className="navbar">

<img src="/logo.png" alt="logo" className="logo"/>

<div className="top-buttons">
<button onClick={()=>navigate("/buyers")}>Buyers</button>
<button onClick={()=>navigate("/tenants")}>Tenants</button>
<button onClick={()=>navigate("/owners")}>Owners</button>
<button onClick={()=>navigate("/about")}>About</button>
<button onClick={()=>navigate("/contact")}>Contact</button>
</div>

<button className="logout" onClick={handleLogout}>
Logout
</button>

</div>

{/* HERO */}

<div className="hero-content">

<h1>Find Your Dream Property</h1>

<input
type="text"
placeholder="Search property, city, BHK..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="search"
/>

<div className="category-buttons">

<button onClick={()=>setFilter("residential")}>
Residential
</button>

<button onClick={()=>setFilter("commercial")}>
Commercial
</button>

<button onClick={()=>setFilter("all")}>
All Houses
</button>

</div>

</div>

</div>

);

};

export default Header;