import { FC, useEffect, useState } from "react";
import FilterItem from "@components/FilterItem";
import { ShopItemSize } from "@components/ShopItem";
import ShopItemList from "@components/ShopItemList";
import { Icon1, Icon2 } from "@pages/desktop/market/components/Items/icons";
import { Controller } from "@pages/desktop/market/components/Items/Items";
import { marketItemsMock } from "../../../../mocks/marketItemsMock";
import classNames from "classnames";
import styles from "./AccountAds.module.scss";
import Button from "@components/Button";

export interface IAccountAds {
	type: "favorite" | "my";
	title: string;
	subtitle?: string;
}

const AccountAds: FC<IAccountAds> = ({ type, title, subtitle }) => {
	const [currenFilter, setFilter] = useState("Популярные");
	const [filteredItems, setFilteredItems] = useState(marketItemsMock);

	const [itemsShort, setItemsShort] = useState(ShopItemSize.short);
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
						{title}&nbsp;
						<span
							className={classNames(
								styles.text,
								styles.textAdCount
							)}
						>
							{filteredItems.length}
						</span>
					</p>
					{subtitle && (
						<p
							className={classNames(
								styles.text,
								styles.textSubtitle
							)}
						>
							{subtitle}
						</p>
					)}
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
					<Button onClick={() => {}} variant="ghost" size="xs">
						{Icon1}
					</Button>
					<Button
						onClick={() => changeItemSize()}
						variant="ghost"
						size="xs"
					>
						<div
							className={classNames({
								[styles.active]:
									itemsShort === ShopItemSize.short,
							})}
						>
							{Icon2}
						</div>
					</Button>
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

export default AccountAds;
