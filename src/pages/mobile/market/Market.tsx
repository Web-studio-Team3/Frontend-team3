import {
	CategoriesMobileIcon,
	FiltersIcon,
	SearchIcon,
} from "@assets/icons/Icons";
import Button from "@components/Button";
import FilterItem from "@components/FilterItem";
import MobileMarketItemsList from "@components/MobileMarketItemsList";
import { categories } from "@pages/desktop/market/helpers";
import CategoryCard from "@pages/mobile/market/components/CategoryCard";
import { EMarketFilter } from "@pages/mobile/market/types";
import Input from "@ui-kit/Input";
import { sortItems } from "@utils/commonHelpers";
import { FC, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { Actions } from "../../../Store/actions";
import { marketItemsMock } from "../../../mocks/marketItemsMock";
import styles from "./Market.module.scss";

const Market: FC = () => {
	const dispatch = useDispatch();

	// const items = useSelector(foundItemsSelector);
	const items = marketItemsMock as any;

	const [searchValue, setSearchValue] = useState("");
	const [currentFilter, setCurrentFilter] = useState(EMarketFilter.All);

	const filteredItems = useMemo(() => {
		return sortItems(items, currentFilter);
	}, [items, currentFilter]);

	useEffect(() => {
		dispatch(Actions.Items.getItems());
	}, []);
	const renderInputSearchIcon = () => {
		return (
			<div className={styles.search_icon}>
				<SearchIcon width={16} height={16} fill="#5D616F" />
			</div>
		);
	};

	const updateCurrentFilter = (value: string) => {
		setCurrentFilter(value as EMarketFilter);
	};

	return (
		<>
			<div className={styles.header_wrapper}>
				<header className={styles.header}>
					<div className={styles.search_input_container}>
						<Input
							value={searchValue}
							placeholder="Найти"
							sizing="sm"
							extraRounded
							fluid
							renderInputIcon={renderInputSearchIcon}
						/>
					</div>
					<Button onClick={() => { }} variant="ghost" size="xs">
						<FiltersIcon />
					</Button>
					<Button onClick={() => { }} variant="ghost" size="xs">
						<CategoriesMobileIcon />
					</Button>
				</header>
			</div>
			<main className={styles.main}>
				<ul className={styles.categories_container}>
					{categories.map((category) => (
						<li className={styles.categories_item}>
							<CategoryCard key={category.title} {...category} />
						</li>
					))}
				</ul>
				<div className={styles.filters_container}>
					<FilterItem
						title="Все"
						value={EMarketFilter.All}
						currentFilter={currentFilter}
						updateCurrentFilter={updateCurrentFilter}
					/>
					<FilterItem
						title="Цена min"
						value={EMarketFilter.PRICE_MIN}
						currentFilter={currentFilter}
						updateCurrentFilter={updateCurrentFilter}
					/>
					<FilterItem
						title="Цена max"
						value={EMarketFilter.PRICE_MAX}
						currentFilter={currentFilter}
						updateCurrentFilter={updateCurrentFilter}
					/>
				</div>
				<MobileMarketItemsList items={filteredItems} />
			</main>
		</>
	);
};

export default Market;
