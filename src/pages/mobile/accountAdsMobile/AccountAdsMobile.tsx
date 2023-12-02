import { FC } from "react";
import styles from "./AccountAdsMobile.module.scss";

export interface IAccountAds {
	type: "favorite" | "my";
	title: string;
	subtitle?: string;
}

const AccountAdsMobile: FC = () => {
	return (
		<div className={styles.adsList}>
			<div className={styles.item}></div>
		</div>
	);
};

export default AccountAdsMobile;
