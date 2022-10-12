import { LogoIcon } from "../../resources/icons/Icons";
import styles from "./Error.module.scss";

const Error = () => {
	return (
		<main className={styles["error__body"]}>
			<div className={"container"}>
				<LogoIcon />
			</div>
		</main>
	);
};

export default Error;
