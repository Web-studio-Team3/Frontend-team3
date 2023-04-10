import { useState } from "react";
import FilterItem from "@components/FilterItem";
import { ShopItem, ShopItemSize } from "@components/ShopItem";
import classNames from "classnames";
import styled from "styled-components";
import { Icon1, Icon2 } from "./icons";
import styles from "./Items.module.scss";
import { MarketItems } from "./marketItems";

type ItemsProps = {
	ItemsNumber: number;
};

const Content = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	gap: 10px;
	width: 100%;
	h1 {
		color: white;
		font-weight: 700;
		font-size: 32px;
		line-height: 39px;
		span {
			color: rgba(255, 255, 255, 0.45);
			font-weight: 500;
			font-size: 18px;
			line-height: 17px;
		}
	}
`;

const ItemsBlock = styled.div`
	padding: 30px 0;
	gap: 30px;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	display: flex;
	border-top: 1px solid #72757e;
`;

export const Controller = styled.div`
	width: 100%;
	padding: 14px 16px 5px 16px;
	display: flex;
	justify-content: space-between;
	div {
		display: flex;
		gap: 20px;
		button {
			background-color: inherit;
			border: none;
		}
	}
`;

const Items: React.FC<ItemsProps> = ({ ItemsNumber }) => {
	const [currenFilter, setFilter] = useState("Популярные");

	const [itemsShort, setItemsShort] = useState(ShopItemSize.standart);
	const changeItemSize = () => {
		itemsShort === ShopItemSize.standart
			? setItemsShort(ShopItemSize.short)
			: setItemsShort(ShopItemSize.standart);
	};
	const filteredItems =
		currenFilter === "По убыванию"
			? MarketItems.sort((a, b) => b.price - a.price)
			: currenFilter === "По возрастанию"
			? MarketItems.sort((a, b) => a.price - b.price)
			: currenFilter === "Популярные"
			? MarketItems
			: MarketItems;

	return (
		<Content>
			<h1>
				Все объявления <span>{ItemsNumber}</span>
			</h1>
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
			<ItemsBlock>
				{filteredItems.map((item) => (
					<ShopItem
						id={item.id}
						image={item.image}
						title={item.title}
						price={item.price}
						information={item.information}
						phoneCall={item.phoneCall}
						size={itemsShort}
					/>
				))}
			</ItemsBlock>
		</Content>
	);
};

export default Items;
