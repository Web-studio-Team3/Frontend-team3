import {
	ProfileIcon,
	NotificationIcon,
	BuyIcon,
	LogoIcon,
} from "@assets/icons/Icons";
import classNames from "classnames";
import styles from "./Header.module.scss";

const Header = (): JSX.Element => {
	return (
		<header className={classNames(styles.section, "container")}>
			<div className={styles.logo}>
				<LogoIcon />
			</div>
			<ul className={styles.menu}>
				<li className={styles.item}>
					<a
						href="#"
						className={classNames(styles.link, styles.linkCategory)}
					>
						Категории
					</a>
				</li>
				<li className={styles.item}>
					<a
						href="#"
						className={classNames(styles.link, styles.linkCreateAd)}
					>
						Разместить объявление
					</a>
				</li>
				<li className={styles.item}>
					<a
						href="#"
						className={classNames(styles.link, styles.linkIcon)}
					>
						<BuyIcon />
					</a>
				</li>
				<li className={styles.item}>
					<a
						href="#"
						className={classNames(
							styles.link,
							styles.linkIcon,
							styles.linkIconActive
						)}
					>
						<ProfileIcon />
					</a>
				</li>
				<li className={styles.item}>
					<a
						href="#"
						className={classNames(styles.link, styles.linkIcon)}
					>
						<NotificationIcon />
					</a>
				</li>
			</ul>
		</header>
	);
};

export default Header;
