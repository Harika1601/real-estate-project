import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Properties from "./properties";
import "./HomePage.css";

const HomePage = () => {

const navigate = useNavigate();

const [imageIndex,setImageIndex] = useState({});
const [search,setSearch] = useState("");
const [filter,setFilter] = useState("all");

const nextImage = (id,length) => {
setImageIndex(prev=>({
...prev,
[id]: prev[id] === length-1 ? 0 : (prev[id] || 0) + 1
}));
};

const prevImage = (id,length) => {
setImageIndex(prev=>({
...prev,
[id]: prev[id] === 0 ? length-1 : (prev[id] || 0) - 1
}));
};

const filteredProperties = Properties.filter((property)=>{

const matchesSearch =
property.title.toLowerCase().includes(search.toLowerCase()) ||
property.address.toLowerCase().includes(search.toLowerCase());

const matchesFilter =
filter === "all" || property.category === filter;

return matchesSearch && matchesFilter;

});

return (

<div>

<Header
search={search}
setSearch={setSearch}
setFilter={setFilter}
/>

<div className="property-container">

{filteredProperties.map((property)=>{

const currentIndex = imageIndex[property.id] || 0;

return(

<div className="property-card" key={property.id}>

<div className="property-top">

{/* LEFT */}

<div className="property-left">

<div className="image-slider">

<button
className="arrow left"
onClick={()=>prevImage(property.id,property.images.length)}
>
❮
</button>

<img
src={property.images[currentIndex]}
alt={property.title}
className="slider-image"
/>

<button
className="arrow right"
onClick={()=>nextImage(property.id,property.images.length)}
>
❯
</button>

</div>

<div className="contact-box">

<h4>Contact</h4>

<p><b>{property.contact.name}</b></p>
<p>{property.contact.phone}</p>
<p>{property.contact.email}</p>

</div>

</div>

{/* RIGHT */}

<div className="property-right">

<h2>{property.title}</h2>

<p className="price">{property.price}</p>

<p>{property.address}</p>

<p><b>{property.bhk}</b></p>

<p>{property.bathrooms}</p>

<p>{property.area}</p>

<p><b>Status:</b> {property.status}</p>

<p>{property.description}</p>

<h4>Payment Options</h4>

<ul>
{property.paymentOptions.map((option,index)=>(
<li key={index}>{option}</li>
))}
</ul>

<button
className="pay-btn"
onClick={()=>navigate("/payment",{state:{property}})}
>
Proceed to Payment
</button>

</div>

</div>

<div className="map-section">

<iframe
title="map"
width="100%"
height="300"
style={{border:0}}
loading="lazy"
allowFullScreen
src={`https://www.google.com/maps?q=${encodeURIComponent(property.address)}&output=embed`}
></iframe>

</div>

</div>

)

})}

</div>

</div>

)

}

export default HomePage;