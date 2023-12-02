import { FC } from "react";
import { Link } from "react-router-dom";
import MessageItemMobile from "../messageItem";
import { MessageItemProps } from "../messageItem/MessageItem.props";
import MessagePlugMobile from "../messagePlug";
import styles from "./MessageListMobile.module.scss";
import { messagesMock } from "../../../../../mocks/messagesMock";
import { message } from "antd";

const MessageListMobile: FC = () => {
	const messages = messagesMock;

	const renderMessages = (messages: Array<MessageItemProps>): JSX.Element => {
		return (
			<>
				{messages.map(({ id, ...props }) => {
					return (
						<Link to={`${id}`} className={styles.link} key={id}>
							<MessageItemMobile id={id} {...props} />
						</Link>
					);
				})}
			</>
		);
	};

	const content =
		messages.length > 0 ? renderMessages(messages) : <MessagePlugMobile />;

	return <ul className={styles.section}>{content}</ul>;
};

export default MessageListMobile;
