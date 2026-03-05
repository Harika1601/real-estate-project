import React from "react";
import { useNavigate } from "react-router-dom";

const OwnersPage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.wrapper}>
      {/* 🔙 Back Button */}
      <button style={styles.backBtn} onClick={() => navigate("/")}>
        ← Back to Home
      </button>

      <div style={styles.container}>
        <h1 style={styles.title}>🏡 Owners</h1>
        <p style={styles.desc}>
          List your property and connect with genuine buyers and tenants
          quickly and securely.
        </p>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Why List With Us?</h3>
          <ul style={styles.list}>
            <li>✔ Reach thousands of buyers</li>
            <li>✔ Easy property posting</li>
            <li>✔ Secure transactions</li>
            <li>✔ Dedicated support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

/* 🎨 STYLES */
const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f5f7fa, #e4ecf7)",
    padding: "30px",
  },
  backBtn: {
    background: "#198754",
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
  title: {
    marginBottom: "10px",
    color: "#1a2b49",
  },
  desc: {
    color: "#555",
    marginBottom: "25px",
  },
  card: {
    background: "#f8fff9",
    padding: "25px",
    borderRadius: "12px",
    border: "1px solid #dff3e4",
  },
  cardTitle: {
    marginBottom: "10px",
    color: "#198754",
  },
  list: {
    lineHeight: "1.9",
    color: "#444",
  },
};

export default OwnersPage;