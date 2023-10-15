import styled from "styled-components";
import CategoryItem from "../CategoryItem";

const categories: {
	title: string;
	childrens: string[] | null;
}[] = [
	{ title: "Личные вещи", childrens: null },
	{ title: "Электроника", childrens: null },
	{ title: "Для дома и дачи", childrens: null },
	{ title: "Запчасти и аксессуары", childrens: null },
	{ title: "Хобби и отдых", childrens: null },
];

type CategoriesProps = {
	currentCategory: string;
	actionCategory: (category: string) => void;
};

const CategoriesBlock = styled.div`
	flex: none;
	margin-top: 20px;
	border: 1px solid #72757e;
	border-radius: 30px;
	padding: 18px;
	display: flex;
	flex-direction: column;
	gap: 12px;

	h5 {
		font-family: "Ubuntu", serif;
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
					key={category.title}
					text={category.title}
					currentCategory={currentCategory}
					onClick={() => {
						actionCategory(category.title);
					}}
				/>
			))}
		</CategoriesBlock>
	);
};

export default Categories;
