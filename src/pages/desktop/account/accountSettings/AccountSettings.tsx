import { FC } from "react";
import { LogoutIcon, ShieldDoneIcon } from "@assets/icons/Icons";
import { notification } from "antd";
import classNames from "classnames";
import styles from "./AccountSettings.module.scss";
import UserData from "./components/userData";
import UserSettings from "./components/userSettings";
import { Actions } from "../../../../Store/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AccountSettings: FC = () => {
	const dispatch = useDispatch();

	const navigate = useNavigate();
	const logout = () => {
		dispatch(Actions.User.eraseUser());
		dispatch(Actions.Auth.eraseData());
		navigate("/");
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
