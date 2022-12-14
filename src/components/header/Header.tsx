import { FC, useState } from "react";
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

const Header: FC = () => {
	const [ButtonHidden, setButtonHidden] = useState(false);
	return (
		<header className="container">
			<div className={styles.section}>
				<Link to="/" className={styles.logo}>
					<LogoIcon />
				</Link>
				<form method="POST" className={styles.form}>
					<button
						type="button"
						className={classNames(
							styles.button,
							styles.buttonCategory
						)}
					>
						<CategoryIcon />
						<p className={styles.buttonText}>Категории</p>
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
							className={classNames(
								styles.link,
								styles.linkCreateAd
							)}
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
							<p className={styles.linkText}>Избранное</p>
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
							<p className={styles.linkText}>Профиль</p>
						</NavLink>
					</li>
					{localStorage.getItem("Login") === "true" ? (
						<li>
							<button
								className={classNames(styles.exitButton, {
									[styles.exitButtonHidden]: ButtonHidden,
								})}
								onClick={() => {
									localStorage.removeItem("Login");
									setButtonHidden(true);
								}}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="48"
									height="48"
									fill="#ff3467"
								>
									<path fill="none" d="M0 0h48v48H0z" />
									<path d="M20.17 31.17 23 34l10-10-10-10-2.83 2.83L25.34 22H6v4h19.34l-5.17 5.17zM38 6H10c-2.21 0-4 1.79-4 4v8h4v-8h28v28H10v-8H6v8c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4z" />
								</svg>
							</button>
						</li>
					) : (
						<></>
					)}
				</ul>
			</div>
		</header>
	);
};

export default Header;
