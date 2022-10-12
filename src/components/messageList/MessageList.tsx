import MessageItem from "@components/messageItem/MessageItem";
import "./MessageList.scss";

const MessageList = (): JSX.Element => {
	return (
		<div className="message-list">
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
