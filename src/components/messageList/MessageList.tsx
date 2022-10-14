import MessageItem from "@components/messageItem";
import styles from "./MessageList.module.scss";

const MessageList = (): JSX.Element => {
	return (
		<div className={styles.section}>
			<MessageItem
				name="Петров Петр"
				location="Общежитие 4"
				adName="Бюст Ленина"
				price={2300}
				message="У меня только сталина остался..."
				isRead={false}
			/>
			<MessageItem
				name="Петров Петр"
				location="Общежитие 4"
				adName="Бюст Ленина"
				price={2300}
				message="У меня только сталина остался..."
				isRead={true}
			/>
			<MessageItem
				name="Петров Петр"
				location="Общежитие 4"
				adName="Бюст Ленина"
				price={2300}
				message="У меня только сталина остался..."
				isRead={true}
			/>
			<MessageItem
				name="Петров Петр"
				location="Общежитие 4"
				adName="Бюст Ленина"
				price={2300}
				message="У меня только сталина остался..."
				isRead={true}
			/>
			<MessageItem
				name="Петров Петр"
				location="Общежитие 4"
				adName="Бюст Ленина"
				price={2300}
				message="У меня только сталина остался..."
				isRead={true}
			/>
		</div>
	);
};

export default MessageList;
