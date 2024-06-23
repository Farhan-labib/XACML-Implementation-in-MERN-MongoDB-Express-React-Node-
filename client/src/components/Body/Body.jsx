import React from 'react';
import AdminPanel from './AdminPanel';
import UserPanel from './UserPanel';
import styles from './styles.module.css';

const Body = () => {
  return (
    <div className={styles.container}>
      <AdminPanel />
      <UserPanel />
    </div>
  );
};

export default Body;
