import UserData from "@components/userData";
import UserSettings from "@pages/myAccount/accountSettings/components/userSettings";
import styles from "./AccountAds.module.scss";

const AccountAds = (): JSX.Element => {
	return (
		<div className={styles.section}>
			<div className={styles.heading}>
				<div className={styles.title}>
					<p className={styles.text}>ОБЪЯВЛЕНИЯ</p>
				</div>
			</div>
			<div className={styles.content}>
				<UserData />
				<UserSettings />
			</div>
		</div>
	);
};

export default AccountAds;
