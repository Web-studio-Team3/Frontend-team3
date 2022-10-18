import Header from "@components/header";
import classNames from "classnames";
import CategoryItem from "./components/CategoryItem";
import InformationBlock from "./components/InformationBlock";
import styles from "./Market.module.scss";

const Market = () => {
	return (
		<>
			<Header />
			<main className={styles.layout}>
				<div className={classNames(styles.body, "container")}>
					<InformationBlock currentLocation={4} />

					<div className={styles.categoriesBlock}>
						<p className={styles.counterItems}>
							Все объявления <span>2501</span>
						</p>
						<div className={styles.categories}>
							<h5>По категориям</h5>
							<CategoryItem text="Личные Вещи" />
							<CategoryItem text="Для дома и дачи" />
							<CategoryItem text="Авто" />
							<CategoryItem text="Запчасти" />
							<CategoryItem text="Услуги" />
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Market;
