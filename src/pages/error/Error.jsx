import { LogoIcon } from "@assets/icons/Icons";
import classNames from "classnames";
import styles from "./Error.module.scss";

const Error = () => {
	return (
		<main className={styles["error"]}>
			<div className={styles["error__body"]}>
				<LogoIcon />
				<p className={styles["error__warning-text"]}>404</p>
				<div className={styles["information"]}>
					<span className={styles["information__line"]}></span>
					<p className={styles["information__text"]}>
						Такой страницы пока нет, но есть много других
					</p>
				</div>
			</div>
		</main>
	);
};

export default Error;
