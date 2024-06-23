import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from "./styles.module.css";

const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
    const handleNavClick = () => {
        navigate('/');
    }
  return (
    <div>
      <nav className={styles.navbar}>
				<h1 onClick={handleNavClick}>NavBar</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
    </div>
  )
}

export default Navbar
