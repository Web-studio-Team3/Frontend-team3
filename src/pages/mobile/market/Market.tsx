import { FC, useEffect, useMemo, useState } from "react";
import styles from "./Market.module.scss";
import Input from "@components/Input";
import {
	CategoriesMobileIcon,
	FiltersIcon,
	SearchIcon,
} from "@assets/icons/Icons";
import Button from "@components/Button";
import FilterItem from "@components/FilterItem";
import { EFilters } from "@pages/mobile/market/types";
import { useDispatch } from "react-redux";
import { ShopItem, ShopItemSize } from "@components/ShopItem";
import { sortItems } from "@utils/commonHelpers";
import { Actions } from "../../../Store/actions";
import { marketItemsMock } from "../../../mocks/marketItemsMock";
import { categories } from "@pages/desktop/market/helpers";
import CategoryCard from "@pages/mobile/market/components/CategoryCard";

const Market: FC = () => {
	const dispatch = useDispatch();

	// const items = useSelector(foundItemsSelector);
	const items = marketItemsMock as any;

	const [searchValue, setSearchValue] = useState("");
	const [currentFilter, setCurrentFilter] = useState(EFilters.All);

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
		setCurrentFilter(value as EFilters);
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
					<Button onClick={() => {}} variant="ghost" size="xs">
						<FiltersIcon />
					</Button>
					<Button onClick={() => {}} variant="ghost" size="xs">
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
						currentFilter={currentFilter}
						updateCurrentFilter={updateCurrentFilter}
					/>
					<FilterItem
						title="Цена min"
						currentFilter={currentFilter}
						updateCurrentFilter={updateCurrentFilter}
					/>
					<FilterItem
						title="Цена max"
						currentFilter={currentFilter}
						updateCurrentFilter={updateCurrentFilter}
					/>
				</div>
				{filteredItems.length === 0 ? (
					<p className={styles.text}>
						Не найдено ни одного объявления...
					</p>
				) : (
					<ul className={styles.items_list}>
						{filteredItems.map((item) => (
							<li className={styles.shop_item}>
								<ShopItem
									id={item.id}
									key={item.id}
									//@ts-ignore
									image={item.image}
									title={item.title}
									price={item.cost}
									information={item.description}
									size={ShopItemSize.shortXs}
								/>
							</li>
						))}
					</ul>
				)}
			</main>
		</>
	);
};

export default Market;
