// frontend/src/components/AdminPanelButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const AdminPanelButton = () => {
  const navigate = useNavigate();

  const handleClick = async () => {
    const url = "http://localhost:8080/api/pep";
    const userData = JSON.parse(localStorage.getItem("userData"));
    const { role } = userData;
    const action = "read";
    const resource = "admin-panel";
    
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role, action, resource }),
    };

    try {
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data.authorized) {
        navigate("/admin-panel");
      } else {
        alert("Unauthorized");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error occurred, please try again.");
    }
  };

  return (
    <button
      className={styles.button}
      onClick={handleClick}
    >
      Admin Panel
    </button>
  );
};

export default AdminPanelButton;
