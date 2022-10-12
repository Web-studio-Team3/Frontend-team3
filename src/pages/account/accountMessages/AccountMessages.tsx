import "./AccountMessages.scss";
import MessageList from "@components/messageList/MessageList";
import { LogoutIcon } from "../../../resources/icons/Icons";

const AccountMessages = (): JSX.Element => {
	return (
		<div className="account-messages">
			<div className="account-messages__heading">
				<div className="account-messages__title">
					<p className="account-messages__text">СООБЩЕНИЯ</p>
				</div>
				<button type="button" className="account-messages__logout-icon">
					<LogoutIcon />
				</button>
			</div>
			<div className="account-messages__content">
				<MessageList />
			</div>
		</div>
	);
};

export default AccountMessages;
