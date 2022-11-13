import { FC } from "react";
import { NewMessageIcon } from "@assets/icons/Icons";
import adPhoto from "@assets/img/ad-image.png";
import classNames from "classnames";
import styles from "./MessageItem.module.scss";
import { MessageItemProps } from "./MessageItem.props";

const MessageItem: FC<MessageItemProps> = ({
	name,
	location,
	adName,
	price,
	message,
	isRead,
}) => {
	return (
		<li className={styles.section}>
			<img
				src={adPhoto}
				alt="ad"
				width={90}
				height={103}
				className={styles.image}
			/>
			<div className={styles.block}>
				<div className={styles.line}>
					<p className={classNames(styles.text, styles.textName)}>
						{name}
					</p>
					<p className={classNames(styles.text, styles.textLocation)}>
						{location}
					</p>
				</div>
				<div className={styles.line}>
					<p className={classNames(styles.text, styles.textAdName)}>
						{adName}
					</p>
					<p className={classNames(styles.text, styles.textPrice)}>
						{price}р
					</p>
				</div>
				<p className={styles.text}>{message}</p>
			</div>
			<div className={styles.icon}>
				{isRead ? null : <NewMessageIcon />}
			</div>
		</li>
	);
};

export default MessageItem;
