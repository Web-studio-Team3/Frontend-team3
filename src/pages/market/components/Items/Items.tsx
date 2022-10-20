import img from "@assets/img/market.jpg";
import styled from "styled-components";
import MarketItem from "../marketItem";

// const

const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	max-width: 600px;
	width: 100%;
`;

const Items = () => {
	return (
		<Content>
			<MarketItem
				image={img}
				title="БИЗНЕС тренинг"
				price={5000}
				information="Реально крутой тренинг Реально крутой трг тренинг Реально крутой трг тренинг Реально крутой трг"
				phoneCall={false}
			></MarketItem>
		</Content>
	);
};

export default Items;
