import { FC } from "react";
import { Link } from "react-router-dom";
import MessageItem from "../messageItem";
import { MessageItemProps } from "../messageItem/MessageItem.props";
import MessagePlug from "../messagePlug";
import styles from "./MessageList.module.scss";
import { messagesMock } from "../../../../../mocks/messagesMock";

const MessageList: FC = () => {
	const messages = messagesMock;

	const renderMessages = (messages: Array<MessageItemProps>): JSX.Element => {
		return (
			<>
				{messages.map(({ id, ...props }) => {
					return (
						<Link to={`${id}`} className={styles.link} key={id}>
							<MessageItem id={id} {...props} />
						</Link>
					);
				})}
			</>
		);
	};

	const content =
		messages.length > 0 ? renderMessages(messages) : <MessagePlug />;

	return <ul className={styles.section}>{content}</ul>;
};

export default MessageList;
