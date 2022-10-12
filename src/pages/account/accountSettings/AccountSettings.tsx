import "./AccountSettings.scss";
import UserData from "@components/userData/UserData";
import UserSettings from "@components/userSettings/UserSettings";
import { LogoutIcon, ShieldDoneIcon } from "../../../resources/icons/Icons";

const AccountSettings = (): JSX.Element => {
	return (
		<div className="account-settings">
			<div className="account-settings__heading">
				<div className="account-settings__title">
					<p className="account-settings__text">ПРОФИЛЬ</p>
					<ShieldDoneIcon />
				</div>
				<button type="button" className="account-settings__logout-icon">
					<LogoutIcon />
				</button>
			</div>
			<div className="account-settings__content">
				<UserData />
				<UserSettings />
			</div>
		</div>
	);
};

export default AccountSettings;
