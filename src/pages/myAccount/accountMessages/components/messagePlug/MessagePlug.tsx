import { FC } from "react";
import styles from "./MessagePlug.module.scss";

const MessagePlug: FC = () => {
	return (
		<p className={styles.block}>
			Здесь пока пусто. Начните общение с пользователями и здесь...
		</p>
	);
};

export default MessagePlug;
