import styled from "styled-components";
import { RightArrow } from "./Icons";

const Category = styled.p`
	padding-left: 20px;
	cursor: pointer;
	color: orange;
	&:hover {
		color: white;
	}
`;

type CategoryItemProps = {
	text: string;
};

const CategoryItem: React.FC<CategoryItemProps> = ({ text }) => {
	// console.log(text);
	return (
		<Category>
			<RightArrow /> {text}
		</Category>
	);
};

export default CategoryItem;
