import { FC } from "react";
import styles from "./AccountAds.module.scss";

const AccountAds: FC = () => {
	return (
		<div className={styles.section}>
			<div className={styles.heading}>
				<div className={styles.title}>
					<p className={styles.text}>ОБЪЯВЛЕНИЯ</p>
				</div>
			</div>
			<div className={styles.content}></div>
		</div>
	);
};

export default AccountAds;
