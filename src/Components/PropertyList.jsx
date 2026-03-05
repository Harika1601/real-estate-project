import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Properties.css";

const PropertyList = ({ properties }) => {
  return (
    <div className="property-list">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

const PropertyCard = ({ property }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + property.images.length) % property.images.length
    );
  };

  const handlePayment = () => {
    navigate("/payment", {
      state: { property },
    });
  };

  return (
    <div className="property-card">

      {/* IMAGE + DETAILS */}
      <div className="property-row">

        {/* LEFT SIDE */}
        <div className="property-left">

          {/* IMAGE */}
          <div className="property-image-box">
            <img
              src={property.images[currentImage]}
              alt={property.title}
              className="property-image"
            />

            {property.images.length > 1 && (
              <>
                <button className="prev-btn" onClick={prevImage}>
                  &#10094;
                </button>

                <button className="next-btn" onClick={nextImage}>
                  &#10095;
                </button>
              </>
            )}
          </div>

          {/* CONTACT BELOW IMAGE */}
          <div className="image-contact">
            <p><b>Contact:</b> Yash</p>
            <p><b>Phone:</b> +91 9876543210</p>
            <p><b>Email:</b> yash@gmail.com</p>
          </div>

        </div>

        {/* RIGHT SIDE DETAILS */}
        <div className="property-details">

          <div className="property-header">
            <h2 className="property-title">{property.title}</h2>
            <span className="price">{property.price}</span>
          </div>

          <p className="address">{property.address}</p>

          <div className="details-grid">

            <div>
              <span className="label">BHK</span>
              <p>{property.bhk}</p>
            </div>

            <div>
              <span className="label">Bathrooms</span>
              <p>{property.bathrooms}</p>
            </div>

            <div>
              <span className="label">Area</span>
              <p>{property.area}</p>
            </div>

            <div>
              <span className="label">Property Age</span>
              <p>{property.age}</p>
            </div>

            <div>
              <span className="label">Status</span>
              <p>{property.status}</p>
            </div>

          </div>

          <p className="description">{property.description}</p>

          <button className="payment-btn" onClick={handlePayment}>
            💳 Buy / Pay Now
          </button>

        </div>

      </div>

      {/* GOOGLE MAP */}
      <div className="map-container">
        <iframe
          title="map"
          width="100%"
          height="250"
          style={{ border: 0, borderRadius: "10px" }}
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps?q=${encodeURIComponent(
            property.address
          )}&output=embed`}
        ></iframe>
      </div>

    </div>
  );
};

export default PropertyList;