import MessageList from "@components/messageList/MessageList";
import { LogoutIcon } from "../../../resources/icons/Icons";
import styles from "./AccountMessages.module.scss";

const AccountMessages = (): JSX.Element => {
	return (
		<div className={styles["account-messages"]}>
			<div className={styles["account-messages__heading"]}>
				<div className={styles["account-messages__title"]}>
					<p className={styles["account-messages__text"]}>
						СООБЩЕНИЯ
					</p>
				</div>
				<button
					type="button"
					className={styles["account-messages__logout-icon"]}
				>
					<LogoutIcon />
				</button>
			</div>
			<div className={styles["account-messages__content"]}>
				<MessageList />
			</div>
		</div>
	);
};

export default AccountMessages;
