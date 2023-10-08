import { FC } from "react";
import { BackArrowIcon, SendIcon, UploadIcon } from "@assets/icons/Icons";
import UserImage from "@assets/img/user2.png";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./AccountSingleChat.module.scss";
import MessageList from "./components/MessageList";

type AccountSingleChatProps = {
	user: User;
};

type User = {
	first_name: string;
	last_name: string;
	was_active_at: string;
};

export type Message = {
	text: string;
	sent_at: string;
	date: string;
	from_us: boolean;
};

const messages: Message[] = [
	{
		text: "Привет, где встретимся?",
		sent_at: "15:06",
		date: "28 ноября 2022",
		from_us: true,
	},
	{
		text: "Привет, давай на пряниках",
		sent_at: "15:06",
		date: "28 ноября 2022",
		from_us: false,
	},
	{
		text: "Окей, сможешь во вторник в коворкинге?",
		sent_at: "15:06",
		date: "28 ноября 2022",
		from_us: true,
	},
	{
		text: "Да, давай",
		sent_at: "15:06",
		date: "28 ноября 2022",
		from_us: false,
	},
];

const AccountSingleChat: FC<AccountSingleChatProps> = ({ user }) => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<Link to={"../messages"} className={styles.button}>
					<BackArrowIcon />
				</Link>

				<div className={styles.userInfo}>
					<div className={styles.textBlock}>
						<p className={cn(styles.text, styles.username)}>
							{user.first_name} {user.last_name}
						</p>
						<p className={styles.text}>
							Был в сети {user.was_active_at}
						</p>
					</div>
				</div>
			</div>
			<div className={styles.body}>
				<MessageList messages={messages} />
				<div className={styles.inputBlock}>
					<button className={styles.button}>
						<UploadIcon />
					</button>
					<input
						type="text"
						className={styles.input}
						placeholder="Напишите сообщение"
					/>
					<button className={styles.button}>
						<SendIcon />
					</button>
				</div>
			</div>
		</div>
	);
};

export default AccountSingleChat;
