import { LogoIcon } from "@assets/icons/Icons";
import classNames from "classnames";
import styles from "./Error.module.scss";

const Error = () => {
	return (
		<main className={styles.page}>
			<div className={styles.body}>
				<LogoIcon />
				<p className={styles.warningText}>404</p>
				<div className={styles.information}>
					<span className={styles.line}></span>
					<p className={styles.text}>
						Такой страницы пока нет, но есть много других
					</p>
				</div>
			</div>
		</main>
	);
};

export default Error;
