import { FC } from "react";
import Header from "@components/header/Header";
import { CreateNewItemProps } from "./index";
import styles from "./CreateNewItem.module.scss";
import { Content } from "./Modules/Content";
import Footer from "@components/footer";
// import { Header } from "./Modules/Header";

export const CreateNewItem: FC<CreateNewItemProps> = (props) => {
	return (
		<div className={styles.wrapper}>
			{/* TODO в нести в layouts folder */}
			<Header />
			<Content />
			<Footer />
		</div>
	);
};
