import styled from "styled-components";

type RightArrowProps = {
	active?: boolean;
};

const RightArrowSVG = styled.svg`
	// path:hover {
	// 	stroke: green;
	// }
`;

export const RightArrow: React.FC<RightArrowProps> = ({ active = false }) => {
	return (
		<RightArrowSVG
			width="8"
			height="12"
			viewBox="0 0 8 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M0.999999 1C0.999999 1 7 4.552 7 7C7 9.44714 1 13 1 13"
				stroke={active ? "green" : "white"}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</RightArrowSVG>
	);
};
