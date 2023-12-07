import React, { FC } from "react";
import styles from "./SettingsMessagesMobile.module.scss";
import BreadcrumbsMobile from "@components/mobile/breadcrumbsMobile";
import { NavLink } from "react-router-dom";
import { CollapseArrowIcon } from "@assets/icons/Icons";
import UserCardMobile from "@components/mobile/userCardMobile";
import ToggleButton from "@components/ToggleButton";

const AccountMessagesMobile: FC = () => {
	return (
		<>
			<BreadcrumbsMobile></BreadcrumbsMobile>
			<div className={styles.line}>
				<p className={styles.text}>Разрешить писать мне</p>
				<ToggleButton></ToggleButton>
			</div>
		</>
	);
};

export default AccountMessagesMobile;
