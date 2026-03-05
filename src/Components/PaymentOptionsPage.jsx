import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PaymentOptionsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const property = location.state?.property;
  const paymentType = location.state?.paymentType;

  const [selectedMethod, setSelectedMethod] = useState("CARD");
  const [loading, setLoading] = useState(false);

  if (!property) {
    return <h2 style={{ padding: "20px" }}>❌ No property selected</h2>;
  }

  const handlePay = async () => {
    try {
      setLoading(true);

      const cleanAmount = Number(
        String(property.price).replace(/[^0-9]/g, "")
      );

      const res = await fetch("http://localhost:5000/api/payments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          propertyId: property._id || property.id,
          propertyTitle: property.title,
          amount: cleanAmount,
          paymentType: paymentType || "FULL",
          paymentMethod: selectedMethod,
          userEmail: "test@gmail.com",
        }),
      });

      const data = await res.json();

      if (res.ok) {

        // ⭐ PROFESSIONAL SUCCESS POPUP
        await Swal.fire({
          icon: "success",
          title: "Payment Successful 🎉",
          text: "Your payment has been completed successfully.",
          confirmButtonColor: "#16a34a",
          confirmButtonText: "Go Home",
        });

        navigate("/");

      } else {

        Swal.fire({
          icon: "error",
          title: "Payment Failed",
          text: data.message || "Something went wrong",
        });

      }

    } catch (err) {

      console.error("Payment error:", err);

      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: "Please try again later.",
      });

    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={{ marginBottom: 10 }}>💳 Payment Options</h2>

        <h3>{property.title}</h3>
        <p><strong>Price:</strong> {property.price}</p>
        <p><strong>Location:</strong> {property.address}</p>
        <p><strong>Payment Type:</strong> {paymentType}</p>

        <h4 style={{ marginTop: 20 }}>Select Payment Method</h4>

        <div style={styles.methodBox}>
          <button
            style={{
              ...styles.methodBtn,
              background: selectedMethod === "CARD" ? "#2ecc71" : "#eee",
              color: selectedMethod === "CARD" ? "#fff" : "#333",
            }}
            onClick={() => setSelectedMethod("CARD")}
          >
            💳 Card
          </button>

          <button
            style={{
              ...styles.methodBtn,
              background: selectedMethod === "UPI" ? "#2ecc71" : "#eee",
              color: selectedMethod === "UPI" ? "#fff" : "#333",
            }}
            onClick={() => setSelectedMethod("UPI")}
          >
            📱 UPI
          </button>

          <button
            style={{
              ...styles.methodBtn,
              background: selectedMethod === "CASH" ? "#2ecc71" : "#eee",
              color: selectedMethod === "CASH" ? "#fff" : "#333",
            }}
            onClick={() => setSelectedMethod("CASH")}
          >
            💵 Cash
          </button>
        </div>

        <button
          onClick={handlePay}
          disabled={loading}
          style={styles.payBtn}
        >
          {loading ? "Processing..." : "💰 Confirm Payment"}
        </button>

        <button
          onClick={() => navigate("/")}
          style={styles.backBtn}
        >
          ⬅ Back to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentOptionsPage;

const styles = {
  container: {
    padding: "40px 20px",
    background: "#f4f6fb",
    minHeight: "100vh",
  },
  card: {
    maxWidth: 520,
    margin: "auto",
    background: "#fff",
    padding: 30,
    borderRadius: 14,
    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
    textAlign: "center",
  },
  methodBox: {
    display: "flex",
    gap: 10,
    margin: "15px 0 25px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  methodBtn: {
    padding: "10px 18px",
    borderRadius: 8,
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
  },
  payBtn: {
    width: "100%",
    padding: "14px",
    background: "linear-gradient(135deg,#16a34a,#22c55e)",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    fontSize: 16,
    fontWeight: "bold",
    cursor: "pointer",
  },
  backBtn: {
    marginTop: 12,
    width: "100%",
    padding: "10px",
    background: "#e5e7eb",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: 600,
  },
};