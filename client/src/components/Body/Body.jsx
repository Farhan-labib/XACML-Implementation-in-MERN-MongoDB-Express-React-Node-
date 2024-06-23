import React from 'react';
import AdminPanelButton from './AdminPanelButton';
import UserPanelButton from './UserPanelButton';
import styles from './styles.module.css';

const Body = () => {
  return (
    <div className={styles.container}>
      <AdminPanelButton />
      <UserPanelButton />
    </div>
  );
};

export default Body;
