import { LogoIcon } from "@assets/icons/Icons";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

export const Header = () => {
	return (
		<header className={styles.wrapper}>
			<div>
				<Link to="/">
					<LogoIcon />
				</Link>
			</div>
			<div className={styles.titleBlock}>
				<h1>Страница создания нового товара</h1>
			</div>
			<div></div>
		</header>
	);
};
