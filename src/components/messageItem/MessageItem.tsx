import classNames from "classnames";
import { NewMessageIcon } from "../../resources/icons/Icons";
import adPhoto from "../../resources/img/ad-image.png";
import styles from "./MessageItem.module.scss";
import { MessageItemProps } from "./MessageItem.props";

const MessageItem = ({
	name,
	location,
	adName,
	price,
	message,
	isRead,
}: MessageItemProps): JSX.Element => {
	return (
		<div className={styles["message-item"]}>
			<img
				src={adPhoto}
				alt="ad"
				className={styles["message-item__image"]}
			/>
			<div className={styles["message-item__block"]}>
				<div className={styles["message-item__line"]}>
					<p
						className={classNames(
							styles["message-item__text"],
							styles["message-item__text_name"]
						)}
					>
						{name}
					</p>
					<p
						className={classNames(
							styles["message-item__text"],
							styles["message-item__text_location"]
						)}
					>
						{location}
					</p>
				</div>
				<div className={styles["message-item__line"]}>
					<p
						className={classNames(
							styles["message-item__text"],
							styles["message-item__text_ad-name"]
						)}
					>
						{adName}
					</p>
					<p
						className={classNames(
							styles["message-item__text"],
							styles["message-item__text_price"]
						)}
					>
						{price}р
					</p>
				</div>
				<p className={styles["message-item__text"]}>{message}</p>
			</div>
			<div className={styles["message-item__icon"]}>
				{isRead ? null : <NewMessageIcon />}
			</div>
		</div>
	);
};

export default MessageItem;
