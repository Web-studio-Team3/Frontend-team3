import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { CollapseArrowIcon } from "@assets/icons/Icons";
import styles from "./NavigationList.module.scss";

const NavigationList: FC = () => {
	return (
		<nav className={styles.navigationList}>
			<NavLink to="/safe-deal" className={styles.navLinkFirst}>
				Безопасная сделка
				<CollapseArrowIcon />
			</NavLink>

			<div className={styles.separator}></div>

			<div>
				<NavLink to="/archive" className={styles.navLink}>
					Архив
					<span className={styles.counter}>3</span>
					<CollapseArrowIcon />
				</NavLink>
			</div>

			<div className={styles.separator}></div>

			<div>
				<NavLink to="/sold" className={styles.navLinkLast}>
					Продано
					<span className={styles.counter}>7</span>
					<CollapseArrowIcon />
				</NavLink>
			</div>
		</nav>
	);
};

export default NavigationList;
