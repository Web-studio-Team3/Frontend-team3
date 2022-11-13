import { useState } from "react";

import Header from "@components/header";
import classNames from "classnames";
import Categories from "./components/Categories";
import Items from "./components/Items";
import styles from "./Market.module.scss";

const Market = () => {
	const [currentCategory, replaceCategory] = useState("");
	return (
		<>
			<Header />
			<main className={styles.layout}>
				<div className={classNames(styles.body, "container")}>
					<div className={styles.mainContent}>
						<Categories
							currentCategory={currentCategory}
							actionCategory={replaceCategory}
						/>
						<Items ItemsNumber={3091} />
					</div>
				</div>
			</main>
		</>
	);
};

export default Market;
