import React from "react";
import { useNavigate } from "react-router-dom";

const BuyersPage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.wrapper}>
      <button style={styles.backBtn} onClick={() => navigate("/home")}>
        ← Back to Home
      </button>

      <div style={styles.container}>
        <h1 style={styles.title}>🏠 Buyers</h1>
        <p style={styles.desc}>
          Discover your dream property from thousands of verified listings
          across top locations.
        </p>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Why Buy With Us?</h3>
          <ul style={styles.list}>
            <li>✔ Verified property listings</li>
            <li>✔ Best price deals</li>
            <li>✔ Easy EMI options</li>
            <li>✔ Trusted sellers</li>
            <li>✔ Smooth documentation support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f5f7fa, #e4ecf7)",
    padding: "30px",
  },
  backBtn: {
    background: "#ff6b35",
    color: "#fff",
    border: "none",
    padding: "10px 18px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  container: {
    maxWidth: "900px",
    margin: "auto",
    background: "#ffffff",
    padding: "35px",
    borderRadius: "14px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  },
  title: { marginBottom: "10px", color: "#1a2b49" },
  desc: { color: "#555", marginBottom: "25px" },
  card: {
    background: "#fff7f3",
    padding: "25px",
    borderRadius: "12px",
    border: "1px solid #ffe2d6",
  },
  cardTitle: { marginBottom: "10px", color: "#ff6b35" },
  list: { lineHeight: "1.9", color: "#444" },
};

export default BuyersPage;