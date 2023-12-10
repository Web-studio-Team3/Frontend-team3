import { useContext, useEffect, useState } from "react";
import FilterItem from "@components/FilterItem";
import { ShopItem, ShopItemSize } from "@components/ShopItem";
import classNames from "classnames";
import styled from "styled-components";
import { Icon1, Icon2 } from "./icons";
import styles from "./Items.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../Store/store";
import { Actions } from "../../../../../Store/actions";
import { useDispatch } from "react-redux";
import {
	BreadcrumbsContext,
	IBreadcrumbsContext,
} from "@pages/layouts/MainLayout";

type ItemsProps = {
	ItemsNumber: number;
};

const Content = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	gap: 10px;
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

export const ItemsBlock = styled.div`
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
	const dispatch = useDispatch();
	const [currenFilter, setFilter] = useState("Популярные");
	const items = useSelector((state: RootState) => state.Items.items);

	const [itemsShort, setItemsShort] = useState(ShopItemSize.standart);

	const { setBreadcrumbs } = useContext(
		BreadcrumbsContext
	) as IBreadcrumbsContext;
	const changeItemSize = () => {
		itemsShort === ShopItemSize.standart
			? setItemsShort(ShopItemSize.short)
			: setItemsShort(ShopItemSize.standart);
	};

	useEffect(() => {
		dispatch(Actions.Items.getItems());
	}, []);

	const handleShopItemClick = (id: string, title: string) => {
		setBreadcrumbs({
			[`/advert/${id}`]: title,
		});
	};
	if (!items.length) return null;
	const FilteredItems = [...items];
	const filteredItems =
		currenFilter === "По убыванию"
			? FilteredItems.sort((a, b) => Number(b.cost) - Number(a.cost))
			: currenFilter === "По возрастанию"
			? FilteredItems.sort((a, b) => Number(a.cost) - Number(b.cost))
			: currenFilter === "Популярные"
			? FilteredItems
			: FilteredItems;

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
				<div
					style={{ justifyContent: "space-between", width: "100%" }}
				></div>
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
			{filteredItems.length === 0 ? (
				<p className={styles.text}>
					Не найдено ни одного объявления...
				</p>
			) : (
				<ItemsBlock>
					{filteredItems.map((item) => (
						<ShopItem
							id={item.id}
							key={item.id}
							title={item.title}
							price={item.cost}
							information={item.description}
							size={itemsShort}
							onClick={() =>
								handleShopItemClick(item.id, item.title)
							}
						/>
					))}
				</ItemsBlock>
			)}
		</Content>
	);
};

export default Items;
