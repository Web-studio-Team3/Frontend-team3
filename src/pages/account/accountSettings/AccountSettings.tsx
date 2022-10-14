import { LogoutIcon, ShieldDoneIcon } from "@assets/icons/Icons";
import UserData from "@components/userData";
import UserSettings from "@components/userSettings";
import styles from "./AccountSettings.module.scss";

const AccountSettings = (): JSX.Element => {
	return (
		<div className={styles.section}>
			<div className={styles.heading}>
				<div className={styles.title}>
					<p className={styles.text}>ПРОФИЛЬ</p>
					<ShieldDoneIcon />
				</div>
				<button type="button" className={styles.logoutIcon}>
					<LogoutIcon />
				</button>
			</div>
			<div className={styles.content}>
				<UserData />
				<UserSettings />
			</div>
		</div>
	);
};

export default AccountSettings;
