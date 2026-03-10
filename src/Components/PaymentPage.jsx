import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentPage = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const property = location.state?.property;

  // If user opens /payment directly
  if (!property) {
    return (
      <div style={styles.center}>
        <h2>⚠ No property selected</h2>
        <p>Please select a property first.</p>

        <button
          onClick={() => navigate("/")}
          style={styles.btn}
        >
          ⬅ Go Back Home
        </button>
      </div>
    );
  }

  const handlePay = () => {
    navigate("/payment-options", {
      state: { property }
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        <h2>💳 Payment Page</h2>

        <h3>{property.title}</h3>

        <p><strong>Price:</strong> {property.price}</p>

        <p><strong>Location:</strong> {property.address}</p>

        <button
          onClick={handlePay}
          style={styles.payBtn}
        >
          ➡ Continue to Payment Options
        </button>

      </div>
    </div>
  );
};

export default PaymentPage;

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f6fb"
  },

  center: {
    textAlign: "center",
    marginTop: "100px"
  },

  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "420px"
  },

  payBtn: {
    marginTop: "20px",
    padding: "12px 25px",
    background: "#16a34a",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold"
  },

  btn: {
    marginTop: "20px",
    padding: "10px 20px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }
};