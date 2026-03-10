import React from "react";
import { useNavigate } from "react-router-dom";

const TenantsPage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.wrapper}>
      <button style={styles.backBtn} onClick={() => navigate("/home")}>
        ← Back to Home
      </button>

      <div style={styles.container}>
        <h1 style={styles.title}>🏢 Tenants</h1>
        <p style={styles.desc}>
          Find comfortable rental homes and apartments.
        </p>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Why Rent With Us?</h3>
          <ul style={styles.list}>
            <li>✔ Affordable rental options</li>
            <li>✔ Verified landlords</li>
            <li>✔ Flexible lease terms</li>
            <li>✔ Easy move-in process</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper:{minHeight:"100vh",background:"linear-gradient(135deg,#f5f7fa,#e4ecf7)",padding:"30px"},
  backBtn:{background:"#0d6efd",color:"#fff",border:"none",padding:"10px 18px",borderRadius:"8px",cursor:"pointer",fontWeight:"bold",marginBottom:"20px"},
  container:{maxWidth:"900px",margin:"auto",background:"#fff",padding:"35px",borderRadius:"14px",boxShadow:"0 10px 25px rgba(0,0,0,0.08)"},
  title:{marginBottom:"10px",color:"#1a2b49"},
  desc:{color:"#555",marginBottom:"25px"},
  card:{background:"#f8fbff",padding:"25px",borderRadius:"12px",border:"1px solid #e3ecf5"},
  cardTitle:{marginBottom:"10px",color:"#0d6efd"},
  list:{lineHeight:"1.9",color:"#444"}
};

export default TenantsPage;