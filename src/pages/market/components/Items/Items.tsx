import img from "@assets/img/market.jpg";
import styled from "styled-components";
import MarketItem from "../marketItem";

// const

const Content = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	gap: 20px;
	width: 100%;
	h1 {
		color: white;
		font-weight: 700;
		font-size: 32px;
		line-height: 39px;
	}
`;

const ItemsBlock = styled.div`
	padding: 20px 0;
	gap: 30px;
	flex-direction: column;
	display: flex;
	margin-top: 45px;
	border-top: 1px solid #72757e;
`;

const Items = () => {
	return (
		<Content>
			<h1>ВСЕ ОБЪЯВЛЕНИЯ</h1>
			<ItemsBlock>
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
			</ItemsBlock>
		</Content>
	);
};

export default Items;
