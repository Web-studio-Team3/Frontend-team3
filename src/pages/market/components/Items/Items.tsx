import { useState } from "react";
import img from "@assets/img/market.png";
import classNames from "classnames";
import styled from "styled-components";
import FilterItem from "../FilterItem";
import MarketItem from "../marketItem";

import MarketItemShort from "../marketItemShort";
import { Icon1, Icon2 } from "./icons";
import styles from "./Items.module.scss";

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
	flex-direction: column;
	display: flex;

	border-top: 1px solid #72757e;
`;

const Controller = styled.div`
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
	const [itemsShort, setItemsShort] = useState(false);

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
						onClick={() => setItemsShort(!itemsShort)}
						className={classNames({ [styles.active]: itemsShort })}
					>
						{Icon2}
					</button>
				</div>
			</Controller>
			<ItemsBlock>
				{!itemsShort ? (
					<>
						<MarketItem
							image={img}
							title="Playstation 4 + The last of us и джойстик"
							price={25999}
							information="Игровая приставка в идеальном состоянии (покупал для прохождения Tlou 2). Полный комплект, любые проверки, уместный торг."
							phoneCall={true}
						></MarketItem>
						<MarketItem
							image={img}
							title="Фигурки Funko Pop"
							price={1900}
							information='"Funko Pop и amiibo 1900 каждая. Фигурки персонажей игр "убей софт" 4000 каждая. Раритетные фигурки Токсина, Расомахи и Байонетты 8000 каждая."'
							phoneCall={false}
						></MarketItem>
						<MarketItem
							image={img}
							title="iPhone 11 128gb"
							price={5000}
							information="Реально крутой тренинг Реально крутой трг тренинг Реально крутой трг тренинг Реально крутой трг"
							phoneCall={false}
						></MarketItem>
						<MarketItem
							image={img}
							title="БИЗНЕС тренинг"
							price={28000}
							information="Пользовалась сестра. В очень хорошем состоянии. Из недостатков, еле заметные коцки по корпусу, в остальном все как с завода. Пользовалась с января 2020. Ростест. Чек прилагается. Все родное, ничего не меняло.."
							phoneCall={false}
						></MarketItem>
					</>
				) : (
					<>
						<MarketItemShort
							image={img}
							title="БИЗНЕС тренинг"
							price={28000}
						/>
					</>
				)}
			</ItemsBlock>
		</Content>
	);
};

export default Items;
