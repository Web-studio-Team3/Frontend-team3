import { FC, useState } from "react";
import React from "react";
import cn from "classnames";
import { Message } from "../..";
import styles from "./MessageList.module.scss";

type MessageListProps = {
	messages: Message[];
};

const MessageList: FC<MessageListProps> = ({ messages }) => {
	const [currentDate, setCurrentDate] = useState<string>("");

	return (
		<div className={styles.container}>
			<p className={styles.date}>{currentDate}</p>
			<ul className={styles.list}>
				{messages.map((message, i) => {
					if (message.date !== currentDate) {
						setCurrentDate(message.date);
					}
					return (
						<li className={styles.item} key={i}>
							<p
								className={cn(styles.message, {
									[styles.fromUs]: message.from_us,
								})}
							>
								{message.text}
							</p>
							<p
								className={cn(styles.sentAt, {
									[styles.sentAtRight]: message.from_us,
								})}
							>
								{message.sent_at}
							</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default MessageList;
