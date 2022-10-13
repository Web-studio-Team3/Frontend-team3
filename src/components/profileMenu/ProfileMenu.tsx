import classNames from "classnames";
import { NavLink } from "react-router-dom";
import {
	CalendarIcon,
	BagIcon,
	StarIcon,
	HeartIcon,
	ChatIcon,
	WalletIcon,
	SettingIcon,
	SearchIcon,
} from "../../resources/icons/Icons";
import styles from "./ProfileMenu.module.scss";

const ProfileMenu = (): JSX.Element => {
	return (
		<div className={styles["profile-menu"]}>
			<ul className={styles["profile-menu__list"]}>
				<li className={styles["profile-menu__item"]}>
					<NavLink
						to="./my-ads"
						className={({ isActive }) =>
							isActive
								? classNames(
										styles["profile-menu__link"],
										styles["active"]
								  )
								: styles["profile-menu__link"]
						}
					>
						<div className={styles["profile-menu__icon"]}>
							<CalendarIcon />
						</div>
						<p className={styles["profile-menu__text"]}>
							Мои объявления
						</p>
					</NavLink>
				</li>
				<li className={styles["profile-menu__item"]}>
					<NavLink
						to="./orders"
						className={({ isActive }) =>
							isActive
								? classNames(
										styles["profile-menu__link"],
										styles["active"]
								  )
								: styles["profile-menu__link"]
						}
					>
						<div className={styles["profile-menu__icon"]}>
							<BagIcon />
						</div>
						<p className={styles["profile-menu__text"]}>Заказы</p>
					</NavLink>
				</li>
				<li className={styles["profile-menu__item"]}>
					<NavLink
						to="./reviews"
						className={({ isActive }) =>
							isActive
								? classNames(
										styles["profile-menu__link"],
										styles["active"]
								  )
								: styles["profile-menu__link"]
						}
					>
						<div className={styles["profile-menu__icon"]}>
							<StarIcon />
						</div>
						<p className={styles["profile-menu__text"]}>Отзывы</p>
					</NavLink>
				</li>
				<li className={styles["profile-menu__item"]}>
					<NavLink
						to="./favorites"
						className={({ isActive }) =>
							isActive
								? classNames(
										styles["profile-menu__link"],
										styles["active"]
								  )
								: styles["profile-menu__link"]
						}
					>
						<div className={styles["profile-menu__icon"]}>
							<HeartIcon />
						</div>
						<p className={styles["profile-menu__text"]}>
							Избранное
						</p>
					</NavLink>
				</li>
				<li className={styles["profile-menu__item"]}>
					<NavLink
						to="./messages"
						className={({ isActive }) =>
							isActive
								? classNames(
										styles["profile-menu__link"],
										styles["active"]
								  )
								: styles["profile-menu__link"]
						}
					>
						<div className={styles["profile-menu__icon"]}>
							<ChatIcon />
						</div>
						<p className={styles["profile-menu__text"]}>
							Сообщения
						</p>
					</NavLink>
				</li>
				<li className={styles["profile-menu__item"]}>
					<NavLink
						to="./wallet"
						className={({ isActive }) =>
							isActive
								? classNames(
										styles["profile-menu__link"],
										styles["active"]
								  )
								: styles["profile-menu__link"]
						}
					>
						<div className={styles["profile-menu__icon"]}>
							<WalletIcon />
						</div>
						<p className={styles["profile-menu__text"]}>Кошелёк</p>
					</NavLink>
				</li>
			</ul>
			<ul
				className={classNames(
					styles["profile-menu__list"],
					styles["active"]
				)}
			>
				<li className={styles["profile-menu__item"]}>
					<NavLink
						to="./settings"
						className={({ isActive }) =>
							isActive
								? classNames(
										styles["profile-menu__link"],
										styles["active"]
								  )
								: styles["profile-menu__link"]
						}
					>
						<div className={styles["profile-menu__icon"]}>
							<SettingIcon />
						</div>
						<p className={styles["profile-menu__text"]}>
							Настройки
						</p>
					</NavLink>
				</li>
				<li className={styles["profile-menu__item"]}>
					<NavLink
						to="./help"
						className={({ isActive }) =>
							isActive
								? classNames(
										styles["profile-menu__link"],
										styles["active"]
								  )
								: styles["profile-menu__link"]
						}
					>
						<div className={styles["profile-menu__icon"]}>
							<SearchIcon />
						</div>
						<p className={styles["profile-menu__text"]}>Помощь</p>
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default ProfileMenu;
