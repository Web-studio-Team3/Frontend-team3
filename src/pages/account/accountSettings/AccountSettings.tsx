import UserData from "@components/userData/UserData";
import UserSettings from "@components/userSettings/UserSettings";
import { LogoutIcon, ShieldDoneIcon } from "../../../resources/icons/Icons";
import styles from "./AccountSettings.module.scss";

const AccountSettings = (): JSX.Element => {
	return (
		<div className={styles["account-settings"]}>
			<div className={styles["account-settings__heading"]}>
				<div className={styles["account-settings__title"]}>
					<p className={styles["account-settings__text"]}>ПРОФИЛЬ</p>
					<ShieldDoneIcon />
				</div>
				<button
					type="button"
					className={styles["account-settings__logout-icon"]}
				>
					<LogoutIcon />
				</button>
			</div>
			<div className={styles["account-settings__content"]}>
				<UserData />
				<UserSettings />
			</div>
		</div>
	);
};

export default AccountSettings;
