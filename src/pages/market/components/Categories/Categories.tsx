import styled from "styled-components";
import CategoryItem from "../CategoryItem";

const categories: string[] = [
	"Личные вещи",
	"Электроника",
	"Для дома и дачи",
	"Запчасти и аксессуары",
	"Хобби и отдых",
];

type CategoriesProps = {
	currentCategory: string;
	actionCategory: (category: string) => void;
};

const CategoriesBlock = styled.div`
	border: 1px solid #72757e;
	border-radius: 30px;
	padding: 41px 34px 36px 34px;
	display: flex;
	flex-direction: column;
	gap: 12px;
	h5 {
		font-family: "Ubuntu";
		font-size: 21px;
		color: white;
		font-weight: bold;
	}
`;

const Categories: React.FC<CategoriesProps> = ({
	currentCategory,
	actionCategory,
}) => {
	return (
		<CategoriesBlock>
			<h5>Категории</h5>
			{categories.map((category) => (
				<CategoryItem
					key={category}
					text={category}
					currentCategory={currentCategory}
					onClick={() => {
						actionCategory(category);
					}}
				/>
			))}
		</CategoriesBlock>
	);
};

export default Categories;
