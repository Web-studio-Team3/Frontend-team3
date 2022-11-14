import { FC } from "react";
import UserCard from "@components/userCard";
import { Outlet } from "react-router-dom";
import styles from "./AnotherAccount.module.scss";

const AnotherAccount: FC = () => {
	return (
		<>
			<div className={styles.menu}>
				<UserCard type="another" userRating={5} />
			</div>
			<Outlet />
		</>
	);
};

export default AnotherAccount;
