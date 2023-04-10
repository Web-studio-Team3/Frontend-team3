import { FC, useState } from "react";
import Breadcrumbs from "@components/breadcrumbs/Breadcrumbs";
import Header from "@components/header";
import Categories from "@pages/market/components/Categories";
import cn from "classnames";
import styles from "./MarketItemPage.module.scss";

const MarketItemPage: FC = () => {
	const [currentCategory, replaceCategory] = useState("");
	return (
		<>
			<Header />
			<main className={styles.layout}>
				<div className={cn(styles.body, "container")}>
					<Breadcrumbs />
					<div className={styles.content}>
						<Categories
							currentCategory={currentCategory}
							actionCategory={replaceCategory}
						/>
					</div>
				</div>
			</main>
		</>
	);
};

export default MarketItemPage;
