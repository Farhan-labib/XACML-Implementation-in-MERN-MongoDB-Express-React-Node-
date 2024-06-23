import styles from "./styles.module.css";
import Body from "../Body/Body";
import Navbar from "../Navbar/Navbar";
const Main = () => {
	

	return (
		<div className={styles.main_container}>
			<Navbar/>
			<Body />
		</div>
	);
};

export default Main;
