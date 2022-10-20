import { useState } from "react";

import Header from "@components/header";
import classNames from "classnames";
import Categories from "./components/Categories";
import CategoryItem from "./components/CategoryItem";
import Items from "./components/Items";
import MarketItem from "./components/marketItem/";
import styles from "./Market.module.scss";

const categories: string[] = [
	"Личные вещи",
	"Электроника",
	"Для дома и дачи",
	"Запчасти и аксессуары",
	"Хобби и отдых",
];

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
						<Items />
					</div>
				</div>
			</main>
		</>
	);
};

export default Market;
