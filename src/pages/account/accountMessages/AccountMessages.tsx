import { LogoutIcon } from "@assets/icons/Icons";
import MessageList from "@components/messageList";
import styles from "./AccountMessages.module.scss";

const AccountMessages = (): JSX.Element => {
	return (
		<div className={styles.section}>
			<div className={styles.heading}>
				<div className={styles.title}>
					<p className={styles.text}>СООБЩЕНИЯ</p>
				</div>
				<button type="button" className={styles.logoutIcon}>
					<LogoutIcon />
				</button>
			</div>
			<div className={styles.content}>
				<MessageList />
			</div>
		</div>
	);
};

export default AccountMessages;
