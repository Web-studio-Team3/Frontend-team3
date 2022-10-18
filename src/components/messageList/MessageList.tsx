import MessageItem from "@components/messageItem";
import { MessageItemProps } from "@components/messageItem/MessageItem.props";
import MessagePlug from "@components/messagePlug";
import styles from "./MessageList.module.scss";

const MessageList = (): JSX.Element => {
	const messages = [
		{
			name: "Петров Петр",
			location: "Общежитие 4",
			adName: "Бюст Ленина",
			price: 2300,
			message: "У меня только сталина остался...",
			isRead: false,
		},
		{
			name: "Петров Петр",
			adName: "Бюст Ленина",
			price: 2300,
			message: "У меня только сталина остался...",
			isRead: true,
		},
		{
			name: "Петров Петр",
			adName: "Бюст Ленина",
			price: 2300,
			message: "У меня только сталина остался...",
			isRead: true,
		},
		{
			name: "Петров Петр",
			adName: "Бюст Ленина",
			price: 2300,
			message: "У меня только сталина остался...",
			isRead: true,
		},
		{
			name: "Петров Петр",
			adName: "Бюст Ленина",
			price: 2300,
			message: "У меня только сталина остался...",
			isRead: true,
		},
	];

	const renderMessages = (messages: Array<MessageItemProps>): JSX.Element => {
		return (
			<>
				{messages.map((item) => {
					return <MessageItem {...item} />;
				})}
			</>
		);
	};

	const content =
		messages.length > 0 ? renderMessages(messages) : <MessagePlug />;

	return <div className={styles.section}>{content}</div>;
};

export default MessageList;
