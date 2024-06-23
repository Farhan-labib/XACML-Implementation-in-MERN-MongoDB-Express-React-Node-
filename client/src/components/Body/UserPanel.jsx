import React from 'react';
import styles from './styles.module.css';

const UserPanel = () => {
  return (
    <button className={`${styles.button} ${styles.design}`}>
      Design Panel
    </button>
  );
};

export default UserPanel;
