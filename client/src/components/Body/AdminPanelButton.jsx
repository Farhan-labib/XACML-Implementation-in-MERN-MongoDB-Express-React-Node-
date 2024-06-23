// frontend/src/components/AdminPanelButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const AdminPanelButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className={styles.button}
      onClick={() => {
        navigate('/admin-panel');
      }}
    >
      Admin Panel
    </button>
  );
};

export default AdminPanelButton;
