import {
	CalendarIcon,
	StarIcon,
	HeartIcon,
	ChatIcon,
	SettingIcon,
	HelpIcon,
} from "@assets/icons/Icons";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import styles from "./ProfileMenu.module.scss";

const ProfileMenu = (): JSX.Element => {
	return (
		<div className={styles.section}>
			<ul className={styles.list}>
				<li className={styles.item}>
					<NavLink
						to="./my-ads"
						className={({ isActive }) =>
							isActive
								? classNames(styles.link, styles.linkActive)
								: styles.link
						}
					>
						<div className={styles.icon}>
							<CalendarIcon />
						</div>
						<p className={styles.text}>Мои объявления</p>
					</NavLink>
				</li>
				<li className={styles.item}>
					<NavLink
						to="./reviews"
						className={({ isActive }) =>
							isActive
								? classNames(styles.link, styles.linkActive)
								: styles.link
						}
					>
						<div className={styles.icon}>
							<StarIcon />
						</div>
						<p className={styles.text}>Отзывы</p>
					</NavLink>
				</li>
				<li className={styles.item}>
					<NavLink
						to="./favorites"
						className={({ isActive }) =>
							isActive
								? classNames(styles.link, styles.linkActive)
								: styles.link
						}
					>
						<div className={styles.icon}>
							<HeartIcon />
						</div>
						<p className={styles.text}>Избранное</p>
					</NavLink>
				</li>
				<li className={styles.item}>
					<NavLink
						to="./messages"
						className={({ isActive }) =>
							isActive
								? classNames(styles.link, styles.linkActive)
								: styles.link
						}
					>
						<div className={styles.icon}>
							<ChatIcon />
						</div>
						<p className={styles.text}>Сообщения</p>
					</NavLink>
				</li>
			</ul>
			<ul className={classNames(styles.list, styles.listActive)}>
				<li className={styles.item}>
					<NavLink
						end
						to="../account/me"
						className={({ isActive }) =>
							isActive
								? classNames(styles.link, styles.linkActive)
								: styles.link
						}
					>
						<div className={styles.icon}>
							<SettingIcon />
						</div>
						<p className={styles.text}>Настройки</p>
					</NavLink>
				</li>
				<li className={styles.item}>
					<NavLink
						to="./help"
						className={({ isActive }) =>
							isActive
								? classNames(styles.link, styles.linkActive)
								: styles.link
						}
					>
						<div className={styles.icon}>
							<HelpIcon />
						</div>
						<p className={styles.text}>Помощь</p>
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default ProfileMenu;
