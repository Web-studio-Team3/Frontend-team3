// BurgerMenu.js

import React, { useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import styles from "./BurgerMenuMobile.module.scss";
import { MenuIcon } from "@assets/icons/Icons";
import { mobileRoutes } from "../../../constants/routes";

const BurgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={styles.burgerMenu}>
			<div className={styles.burgerIcon} onClick={toggleMenu}>
				<div className="bar1">
					<MenuIcon></MenuIcon>
				</div>
			</div>
			{isOpen && (
				<div className={styles.menuContent}>
					<NavLink
						to={"../account/me/settings"}
						className={styles.menuItem}
					>
						Настройки
					</NavLink>
				</div>
			)}
		</div>
	);
};

export default BurgerMenu;
