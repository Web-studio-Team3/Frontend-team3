import { FC } from "react";
import MessageItem from "../messageItem";
import { MessageItemProps } from "../messageItem/MessageItem.props";
import MessagePlug from "../messagePlug";
import styles from "./MessageList.module.scss";

const MessageList: FC = () => {
	const messages = [
		{
			id: "1",
			name: "Петров Петр",
			location: "Общежитие 4",
			adName: "Бюст Ленина",
			price: 2300,
			message: "У меня только сталина остался...",
			isRead: false,
		},
		{
			id: "2",
			name: "Петров Петр",
			adName: "Бюст Ленина",
			price: 2300,
			message: "У меня только сталина остался...",
			isRead: true,
		},
		{
			id: "3",
			name: "Петров Петр",
			adName: "Бюст Ленина",
			price: 2300,
			message: "У меня только сталина остался...",
			isRead: true,
		},
		{
			id: "4",
			name: "Петров Петр",
			adName: "Бюст Ленина",
			price: 2300,
			message: "У меня только сталина остался...",
			isRead: true,
		},
		{
			id: "5",
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
				{messages.map(({ id, ...props }) => {
					return <MessageItem key={id} id={id} {...props} />;
				})}
			</>
		);
	};

	const content =
		messages.length > 0 ? renderMessages(messages) : <MessagePlug />;

	return <ul className={styles.section}>{content}</ul>;
};

export default MessageList;
