import { FC } from "react";
import styles from "./BottomNavigator.module.scss";
import classNames from "classnames";
import {
	ChatIcon,
	HeartIcon,
	HomeIcon,
	PlusIcon,
	ProfileIcon,
} from "@assets/icons/Icons";
import { NavLink } from "react-router-dom";
import { mobileRoutes } from "../../../constants/routes";
import Button from "@components/Button";
import cc from "classnames";

const BottomNavigator: FC = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				<div className={styles.icons_block}>
					<li>
						<NavLink
							to="/"
							end
							className={({ isActive }) =>
								classNames(
									styles.linkIcon,
									styles.linkIconFill,
									{
										[styles.linkIconActiveFill]: isActive,
									}
								)
							}
						>
							<HomeIcon width={28} height={28} />
							<p className={styles.linkText}>Главная</p>
						</NavLink>
					</li>
					<li className={styles.item}>
						<NavLink
							to={mobileRoutes.FAVORITES}
							end
							className={({ isActive }) =>
								classNames(styles.linkIcon, {
									[styles.linkIconActive]: isActive,
								})
							}
						>
							<HeartIcon width={28} height={28} />
							<p className={styles.linkText}>Избранное</p>
						</NavLink>
					</li>
				</div>
				<li className={cc(styles.item, styles.plus_button)}>
					<Button
						variant="purple"
						rounded
						isLink
						to={mobileRoutes.CREATE_NEW_ITEM}
					>
						<PlusIcon width={38} height={38} />
					</Button>
				</li>
				<div className={styles.icons_block}>
					<li>
						<NavLink
							to={mobileRoutes.MESSAGES}
							className={({ isActive }) =>
								classNames(styles.linkIcon, {
									[styles.linkIconActive]: isActive,
								})
							}
						>
							<ChatIcon width={28} height={28} />
							<p className={styles.linkText}>Сообщения</p>
						</NavLink>
					</li>
					<li className={styles.item}>
						<NavLink
							to={mobileRoutes.PROFILE}
							className={({ isActive }) =>
								classNames(styles.linkIcon, {
									[styles.linkIconActive]: isActive,
								})
							}
						>
							<ProfileIcon height={28} />
							<p className={styles.linkText}>Профиль</p>
						</NavLink>
					</li>
				</div>
			</ul>
		</nav>
	);
};

export default BottomNavigator;
