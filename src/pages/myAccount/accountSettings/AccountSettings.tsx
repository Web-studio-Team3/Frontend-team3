import { FC } from "react";
import { LogoutIcon, ShieldDoneIcon } from "@assets/icons/Icons";
import UserSettings from "@pages/myAccount/accountSettings/components/userSettings";
import { notification } from "antd";
import classNames from "classnames";
import styles from "./AccountSettings.module.scss";
import UserData from "./components/userData";

const AccountSettings: FC = () => {
	const logout = () => {
		localStorage.clear();
		notification.info({
			type: "info",
			message: "Вы вышли из аккаунта",
		});
	};

	return (
		<div className={styles.section}>
			<div className={styles.heading}>
				<div className={classNames(styles.title, styles.titleActive)}>
					<p className={styles.text}>ПРОФИЛЬ</p>
					<ShieldDoneIcon />
				</div>
				<button
					type="button"
					className={styles.logoutIcon}
					onClick={logout}
				>
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
