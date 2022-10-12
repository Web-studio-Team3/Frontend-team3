import { NewMessageIcon } from "../../resources/icons/Icons";
import adPhoto from "../../resources/img/ad-image.png";
import { MessageItemProps } from "./MessageItem.props";
import "./MessageItem.scss";

const MessageItem = ({
	name,
	location,
	adName,
	price,
	message,
	isRead,
}: MessageItemProps): JSX.Element => {
	return (
		<div className="message-item">
			<img src={adPhoto} alt="ad" className="message-item__image" />
			<div className="message-item__block">
				<div className="message-item__line">
					<p className="message-item__text message-item__text_name">
						{name}
					</p>
					<p className="message-item__text message-item__text_location">
						{location}
					</p>
				</div>
				<div className="message-item__line">
					<p className="message-item__text message-item__text_ad-name">
						{adName}
					</p>
					<p className="message-item__text message-item__text_price">
						{price}р
					</p>
				</div>
				<p className="message-item__text">{message}</p>
			</div>
			<div className="message-item__icon">
				{isRead ? null : <NewMessageIcon />}
			</div>
		</div>
	);
};

export default MessageItem;
