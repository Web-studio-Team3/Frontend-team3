import styled from "styled-components";
const InfoBlock = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	gap: 10px;
	color: white;
	p {
	}
	button {
		cursor: pointer;
		color: orange;
		border: none;
		background-color: inherit;
	}
`;

type InformationBlockProps = {
	currentLocation: number;
};

const InformationBlock: React.FC<InformationBlockProps> = ({
	currentLocation,
}) => {
	return (
		<InfoBlock>
			<p>Вы находитесь в Общежитии №{currentLocation}</p>
			<button>Поменять местоположение?</button>
		</InfoBlock>
	);
};

export default InformationBlock;
