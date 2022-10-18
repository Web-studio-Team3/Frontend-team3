import {
	ProfileIcon,
	LogoIcon,
	HeartIcon,
	SearchIcon,
	CategoryIcon,
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
					<form method="POST" className={styles.form}>
						<button
							type="button"
							className={classNames(
								styles.button,
								styles.buttonCategory
							)}
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
						<HeartIcon />
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
			</ul>
		</header>
	);
};

export default Header;
