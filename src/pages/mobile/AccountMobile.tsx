import React, { FC } from "react";
import styles from "@pages/mobile/AccountMobile.module.scss";
import { Navigate, NavLink, Outlet } from "react-router-dom";
import UserCardMobile from "@components/mobile/userCardMobile";
import BreadcrumbsMobile from "@components/mobile/breadcrumbsMobile";
import NavigationList from "@components/mobile/navigationList";
import AccountAdsMobile from "@pages/mobile/accountAdsMobile";
import { QuestionIcon } from "@assets/icons/Icons";

export interface IAccount {
	type: "my" | "another";
}

const AccountMobile: FC<IAccount> = ({ type }) => {
	const userRating = 4;

	return (
		<>
			<BreadcrumbsMobile></BreadcrumbsMobile>
			<UserCardMobile type={"my"} reviewsCount={1}></UserCardMobile>
			<NavigationList></NavigationList>
			<AccountAdsMobile></AccountAdsMobile>
			<div>
				<NavLink to="/support" className={styles.navLink}>
					Написать в поддержку
					<QuestionIcon />
				</NavLink>
			</div>
		</>
	);
};

export default AccountMobile;
