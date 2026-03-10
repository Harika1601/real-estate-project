import React from "react";
import Properties from "./properties";
import "./Properties.css";

const PropertyList = () => {

return (

<div className="property-container">

{Properties.map((property)=> (

<div className="property-card" key={property.id}>

{/* PROPERTY IMAGE */}

<img
src={property.images[0]}
alt={property.title}
className="property-image"
/>

{/* BASIC DETAILS */}

<h2>{property.title}</h2>

<p className="price">{property.price}</p>

<p>{property.address}</p>

<p><strong>{property.bhk}</strong></p>

<p>{property.bathrooms}</p>

<p>{property.area}</p>

<p>{property.age}</p>

<p><strong>Status:</strong> {property.status}</p>

{/* DESCRIPTION */}

<p className="description">
{property.description}
</p>

{/* PAYMENT OPTIONS */}

<h4>Payment Options</h4>

<ul>
{property.paymentOptions.map((option,index)=>(
<li key={index}>{option}</li>
))}
</ul>

{/* CONTACT */}

<h4>Contact</h4>

<p><strong>Name:</strong> {property.contact.name}</p>
<p><strong>Phone:</strong> {property.contact.phone}</p>
<p><strong>Email:</strong> {property.contact.email}</p>

{/* GOOGLE MAP */}

<div className="map-container">

<iframe
title="map"
width="100%"
height="250"
style={{border:0}}
loading="lazy"
allowFullScreen
src={`https://www.google.com/maps?q=${encodeURIComponent(property.address)}&output=embed`}
></iframe>

</div>

</div>

))}

</div>

)

}

export default PropertyList;