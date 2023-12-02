import React, { FC } from "react";
import styles from "./AccountMessagesMobile.module.scss";
import MessageListMobile from "./components/messageList";
import BreadcrumbsMobile from "@components/mobile/breadcrumbsMobile";

const AccountMessages: FC = () => {
	return (
		<>
			<BreadcrumbsMobile></BreadcrumbsMobile>
			<div className={styles.section}>
				<div className={styles.content}>
					<MessageListMobile />
				</div>
			</div>
		</>
	);
};

export default AccountMessages;
