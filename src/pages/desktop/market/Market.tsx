import { useState } from "react";

import Header from "@components/header";
import { WelcomeBlock } from "@components/WelcomeBlock";
import classNames from "classnames";
import Categories from "./components/Categories";
import Items from "./components/Items";
import styles from "./Market.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/store";

const Market = () => {
	const [currentCategory, replaceCategory] = useState("");
	const items = useSelector((state: RootState) => state.Items.items);
	const count = items ? items.length : 0;
	return (
		<>
			<Header />
			<main className={styles.layout}>
				<div className={classNames(styles.body, "container")}>
					<div className={styles.content}>
						<Categories
							currentCategory={currentCategory}
							actionCategory={replaceCategory}
						/>
						<div className={styles.mainContent}>
							<WelcomeBlock />
							<Items ItemsNumber={count} />
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Market;
