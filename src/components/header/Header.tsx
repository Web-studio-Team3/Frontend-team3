import classNames from "classnames";
import {
	ProfileIcon,
	NotificationIcon,
	BuyIcon,
	LogoIcon,
} from "../../resources/icons/Icons";
import styles from "./Header.module.scss";

const Header = (): JSX.Element => {
	return (
		<header className={classNames(styles["header"], "container")}>
			<div className={styles["header__logo"]}>
				<LogoIcon />
			</div>
			<ul className={styles["header__menu"]}>
				<li className={styles["header__item"]}>
					<a
						href="#"
						className={classNames(
							styles["header__link"],
							styles["header__link_category"]
						)}
					>
						Категории
					</a>
				</li>
				<li className={styles["header__item"]}>
					<a
						href="#"
						className={classNames(
							styles["header__link"],
							styles["header__link_create-ad"]
						)}
					>
						Разместить объявление
					</a>
				</li>
				<li className={styles["header__item"]}>
					<a
						href="#"
						className={classNames(
							styles["header__link"],
							styles["header__link_icon"]
						)}
					>
						<BuyIcon />
					</a>
				</li>
				<li className={styles["header__item"]}>
					<a
						href="#"
						className={classNames(
							styles["header__link"],
							styles["header__link_icon"],
							styles["active"]
						)}
					>
						<ProfileIcon />
					</a>
				</li>
				<li className={styles["header__item"]}>
					<a
						href="#"
						className={classNames(
							styles["header__link"],
							styles["header__link_icon"]
						)}
					>
						<NotificationIcon />
					</a>
				</li>
			</ul>
		</header>
	);
};

export default Header;
