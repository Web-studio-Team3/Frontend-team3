import {
	ProfileIcon,
	LogoIcon,
	HeartIcon,
	SearchIcon,
	CategoryIcon,
} from "@assets/icons/Icons";
import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = (): JSX.Element => {
	return (
		<header className={classNames(styles.section, "container")}>
			<Link to="/" className={styles.logo}>
				<LogoIcon />
			</Link>
			<form method="POST" className={styles.form}>
				<button
					type="button"
					className={classNames(styles.button, styles.buttonCategory)}
				>
					<CategoryIcon />
				</button>
				<div className={styles.search}>
					<input
						type="text"
						className={styles.input}
						placeholder="Поиск по объялениям"
					/>
					<button
						type="button"
						className={classNames(
							styles.button,
							styles.buttonSearch
						)}
					>
						<SearchIcon />
					</button>
				</div>
			</form>
			<ul className={styles.menu}>
				<li className={styles.item}>
					<Link
						to="/#"
						className={classNames(styles.link, styles.linkCreateAd)}
					>
						Разместить объявление
					</Link>
				</li>
				<li className={styles.item}>
					<NavLink
						to="/account/me/favorites"
						className={({ isActive }) =>
							isActive
								? classNames(
										styles.linkIcon,
										styles.linkIconActive
								  )
								: styles.linkIcon
						}
					>
						<HeartIcon />
					</NavLink>
				</li>
				<li className={styles.item}>
					<NavLink
						to="/account/me"
						className={({ isActive }) =>
							isActive
								? classNames(
										styles.linkIcon,
										styles.linkIconActive
								  )
								: styles.linkIcon
						}
					>
						<ProfileIcon />
					</NavLink>
				</li>
			</ul>
		</header>
	);
};

export default Header;
