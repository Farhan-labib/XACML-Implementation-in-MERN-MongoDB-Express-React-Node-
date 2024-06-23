// frontend/src/components/UserPanelButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const UserPanelButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className={`${styles.button} ${styles.design}`}
      onClick={() => {
        navigate('/user-panel');
      }}
    >
      User Panel
    </button>
  );
};

export default UserPanelButton;
