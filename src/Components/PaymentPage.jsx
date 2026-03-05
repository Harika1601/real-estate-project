import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const property = location.state?.property;

  if (!property) {
    return <h2 style={{ padding: "20px" }}>No property selected</h2>;
  }

  // ✅ NOW JUST NAVIGATE TO OPTIONS PAGE
  const handlePay = () => {
    navigate("/payment-options", {
      state: { property },
    });
  };

  return (
    <div style={{ padding: "30px", maxWidth: "600px", margin: "auto" }}>
      <h2>💳 Payment Page</h2>

      <div style={{ marginBottom: "20px" }}>
        <h3>{property.title}</h3>
        <p><strong>Price:</strong> {property.price}</p>
        <p><strong>Location:</strong> {property.address}</p>
      </div>

      <button
        onClick={handlePay}
        style={{
          padding: "12px 25px",
          backgroundColor: "#28a745",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        ➡️ Continue to Payment Options
      </button>
    </div>
  );
};

export default PaymentPage;