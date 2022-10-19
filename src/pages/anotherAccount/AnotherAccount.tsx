import UserCard from "@components/userCard";
import { Outlet } from "react-router-dom";
import styles from "./AnotherAccount.module.scss";

const AnotherAccount = (): JSX.Element => {
	return (
		<>
			<div className={styles.menu}>
				<UserCard type="another" />
			</div>
			<Outlet />
		</>
	);
};

export default AnotherAccount;
