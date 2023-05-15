import { FC } from "react";
import ProfileMenu from "@components/profileMenu";
import UserCard from "@components/userCard";
import { Outlet } from "react-router-dom";
import styles from "./Account.module.scss";

export interface IAccount {
	type: "my" | "another";
}

const Account: FC<IAccount> = ({ type }) => {
	const userRating = 4;

	return (
		<>
			<div className={styles.menu}>
				<UserCard
					type={type}
					userRating={type === "another" ? userRating : undefined}
					reviewsCount={1}
				/>
				{type === "my" && <ProfileMenu />}
			</div>
			<Outlet />
		</>
	);
};

export default Account;
