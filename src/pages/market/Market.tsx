import { useState } from "react";

import Header from "@components/header";
import { WelcomeBlock } from "@components/WelcomeBlock";
import classNames from "classnames";
import Categories from "./components/Categories";
import Items from "./components/Items";
import styles from "./Market.module.scss";

const Market = () => {
	const [currentCategory, replaceCategory] = useState("");
	const [upd, setUpd] = useState("");
	setInterval(() => {
		if (localStorage.getItem("Login") !== "true") {
			setUpd("  ");
		}
	}, 1000);
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
							{localStorage.getItem("Login") !== "true" ? (
								<WelcomeBlock />
							) : (
								<></>
							)}
							<Items ItemsNumber={3091} />
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Market;
