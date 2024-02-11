import { FC, useState } from "react";
import React from "react";
import cn from "classnames";
import { Message } from "../../index";
import styles from "./MessageList.module.scss";
import UserImage from "@assets/img/user2.png";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../Store/store";
import { getBaseUrl } from "@utils/commonHelpers";

type MessageListProps = {
	messages: Message[];
};
const MessageList: FC<MessageListProps> = ({ messages }) => {
	const [currentDate, setCurrentDate] = useState<string>("");
	const user_photo = useSelector(
		(state: RootState) => state.User.user_picture
	);
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
							<div
								className={cn(styles.messageBlock, {
									[styles.messageBlockFromUs]:
										message.from_us,
								})}
							>
								<img
									src={
										message.from_us
											? `${getBaseUrl()}${user_photo}/`
											: UserImage
									}
									alt="user"
									className={styles.img}
									width={169}
									height={169}
								/>

								<p
									className={cn(styles.message, {
										[styles.fromUs]: message.from_us,
									})}
								>
									{message.text}
								</p>
							</div>
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
