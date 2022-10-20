import ProfileMenu from "@components/profileMenu";
import UserCard from "@components/userCard";
import { Outlet } from "react-router-dom";
import styles from "./MyAccount.module.scss";

const MyAccount = (): JSX.Element => {
	return (
		<>
			<div className={styles.menu}>
				<UserCard type="my" />
				<ProfileMenu />
			</div>
			<Outlet />
		</>
	);
};

export default MyAccount;
