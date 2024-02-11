import styles from "./Favorites.module.scss";
import { FC, useState } from "react";
import NavBar from "@components/NavBar";
import FilterItem from "@components/FilterItem";
import { EFavoritesFilter } from "@pages/mobile/market/types";
import { marketItemsMock } from "../../../mocks/marketItemsMock";
import MobileMarketItemsList from "@components/MobileMarketItemsList";

const Favorites: FC = () => {
	const [currentFilter, setCurrentFilter] = useState(EFavoritesFilter.All);

	const items = marketItemsMock.map((item) => ({
		...item,
		isFavorite: true,
	})) as any;

	const updateCurrentFilter = (value: string) => {
		setCurrentFilter(value as EFavoritesFilter);
	};

	return (
		<>
			<NavBar title="Избранное" goBackLink />
			<main className={styles.container}>
				<div className={styles.filters_container}>
					<FilterItem
						title="Все предложения"
						value={EFavoritesFilter.All}
						currentFilter={currentFilter}
						updateCurrentFilter={updateCurrentFilter}
					/>
					<FilterItem
						title="3 активных"
						value={EFavoritesFilter.ACTIVE}
						currentFilter={currentFilter}
						updateCurrentFilter={updateCurrentFilter}
					/>
					<FilterItem
						title="1 завершенный"
						value={EFavoritesFilter.NOT_ACTIVE}
						currentFilter={currentFilter}
						updateCurrentFilter={updateCurrentFilter}
					/>
				</div>
				<MobileMarketItemsList items={items} />
			</main>
		</>
	);
};

export default Favorites;
