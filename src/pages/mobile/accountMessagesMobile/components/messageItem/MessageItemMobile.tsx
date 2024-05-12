import { FC } from "react";
import { NewMessageIcon } from "@assets/icons/Icons";
import adPhoto from "@assets/img/ad-image.png";
import classNames from "classnames";
import styles from "./MessageItemMobile.module.scss";
import { MessageItemProps } from "./MessageItem.props";
import userPhoto from "@assets/img/user.png";

const MessageItemMobile: FC<MessageItemProps> = ({
	name,
	location,
	adName,
	price,
	message,
	isRead,
}) => {
	return (
		<>
			<li className={styles.section}>
				<img
					src={userPhoto}
					alt="userPhoto"
					width={52}
					height={52}
					className={styles.image}
				/>
				<div>
					<div className={styles.line}>
						<p className={classNames(styles.text, styles.textName)}>
							{name}
						</p>
					</div>
					<div className={styles.line}>
						<p
							className={classNames(
								styles.text,
								styles.textAdName
							)}
						>
							{adName}
						</p>
					</div>
					<p className={styles.textMessage}>{message}</p>
				</div>
				<div className={styles.block}>
					<div className={classNames(styles.iconBox, styles.icon)}>
						{isRead ? null : (
							<NewMessageIcon width={20} height={20} />
						)}
					</div>

					<p className={classNames(styles.text, styles.textPrice)}>
						{price}р
					</p>
				</div>
			</li>
			<div className={styles.separator}></div>
		</>
	);
};

export default MessageItemMobile;
