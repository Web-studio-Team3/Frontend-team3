import { FC } from "react";
import { CreateNewItemProps } from ".";
import styles from "./CreateNewItem.module.sass";
import { Content } from "./Modules/Content";
import { Header } from "./Modules/Header";

export const CreateNewItem: FC<CreateNewItemProps> = (props) => {
	return (
		<div className={styles.wrapper}>
			{/* TODO в нести в layouts folder */}
			<Header />
			<Content />
		</div>
	);
};
