import { FC, useEffect, useState } from "react";
import FilterItem from "@components/FilterItem";
import { ShopItemSize } from "@components/ShopItem";
import ShopItemList from "@components/ShopItemList";
import { Icon1, Icon2 } from "@pages/market/components/Items/icons";
import { Controller } from "@pages/market/components/Items/Items";
import { MarketItems } from "@pages/market/components/Items/marketItems";
import classNames from "classnames";
import styles from "./AccountFavorites.module.scss";

const AccountFavorites: FC = () => {
	const [currenFilter, setFilter] = useState("Популярные");
	const [filteredItems, setFilteredItems] = useState(MarketItems);

	const [itemsShort, setItemsShort] = useState(ShopItemSize.standart);
	const changeItemSize = () => {
		itemsShort === ShopItemSize.standart
			? setItemsShort(ShopItemSize.short)
			: setItemsShort(ShopItemSize.standart);
	};

	useEffect(() => {
		setFilteredItems(
			currenFilter === "По убыванию"
				? filteredItems.sort((a, b) => b.price - a.price)
				: currenFilter === "По возрастанию"
				? filteredItems.sort((a, b) => a.price - b.price)
				: currenFilter === "Популярные"
				? filteredItems
				: filteredItems
		);
	}, [currenFilter]);

	return (
		<div className={styles.section}>
			<div className={styles.heading}>
				<div className={styles.title}>
					<p className={styles.text}>
						ИЗБРАННЫЕ ОБЪЯВЛЕНИЯ&nbsp;
						<span
							className={classNames(
								styles.text,
								styles.textAdCount
							)}
						>
							6
						</span>
					</p>
					<p className={classNames(styles.text, styles.textSubtitle)}>
						Здесь представленны все товары, которые тебе понравились
					</p>
				</div>
			</div>
			<Controller>
				<div>
					<FilterItem
						title="Популярные"
						currentFilter={currenFilter}
						updateCurrentFilter={setFilter}
					/>
					<FilterItem
						title="По убыванию"
						currentFilter={currenFilter}
						updateCurrentFilter={setFilter}
					/>
					<FilterItem
						title="По возрастанию"
						currentFilter={currenFilter}
						updateCurrentFilter={setFilter}
					/>
				</div>
				<div>
					<button>{Icon1}</button>
					<button
						onClick={() => changeItemSize()}
						className={classNames({
							[styles.active]: itemsShort === ShopItemSize.short,
						})}
					>
						{Icon2}
					</button>
				</div>
			</Controller>
			<div className={styles.content}>
				<ShopItemList
					itemList={filteredItems}
					itemsShort={itemsShort}
				/>
			</div>
		</div>
	);
};

export default AccountFavorites;
