import { useState } from "react";

import Header from "@components/header";
import Footer from "@components/footer";
import { WelcomeBlock } from "@components/WelcomeBlock";
import classNames from "classnames";
import Categories from "./components/Categories";
import Items from "./components/Items";
import styles from "./Market.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/store";
import AccountAds from "@pages/desktop/account/accountAds";

const Market = () => {
	const [currentCategory, replaceCategory] = useState("");
	const items = useSelector((state: RootState) => state.Items.items);
	const count = items ? items.total : 0;
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
						<AccountAds type={"my"} title={"Все объявления"}></AccountAds>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Market;
