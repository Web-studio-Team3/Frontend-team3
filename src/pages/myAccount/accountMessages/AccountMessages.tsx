import styles from "./AccountMessages.module.scss";
import MessageList from "./components/messageList";

const AccountMessages = (): JSX.Element => {
	return (
		<div className={styles.section}>
			<div className={styles.heading}>
				<div className={styles.title}>
					<p className={styles.text}>СООБЩЕНИЯ</p>
				</div>
			</div>
			<div className={styles.content}>
				<MessageList />
			</div>
		</div>
	);
};

export default AccountMessages;
