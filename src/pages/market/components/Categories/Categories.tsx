import styled from "styled-components";
import CategoryItem from "../CategoryItem";
import {useState} from "react";
// import { RightArrow } from "./Icons";

type Subcategory = {
    name: string;
    isOpen: boolean;
};
type Category = {
    name: string;
    subcategories: Subcategory[];
};

const categories: Category[] = [
    {
        name: "Личные вещи",
        subcategories: [
            { name: "Одежда и обувь", isOpen: false },
        ],
    },
    {
        name: "Электроника",
        subcategories: [
            {name: "Телефоны", isOpen: false},
            {name: "Компьютеры", isOpen: false},
        ],
    },
    {
        name: "Запчасти и аксессуары",
        subcategories: [
            { name: "Запчасти на машину", isOpen: false },
        ],
    },
    {
        name: "Хобби и отдых",
        subcategories: [
            { name: "Книги и журналы", isOpen: false },
        ],
    },
    {
        name: "Красота и здоровье",
        subcategories: [
            { name: "Косметика", isOpen: false },
                { name: "Парфюмерия", isOpen: false },
        ],
    },
    {
        name: "Услуги",
        subcategories: [
            { name: "Ремонт техники", isOpen: false },
            { name: "Уборка", isOpen: false },
        ],
    },
    {
        name: "В общагу",
        subcategories: [
            { name: "Декор", isOpen: false },
        ],
    }
    ];



type CategoriesProps = {
    currentCategory: string;
    actionCategory: (category: string) => void;
};

const CategoriesBlock = styled.div`
  flex: none;
  margin-top: 45px;
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
    const [openCategories, setOpenCategories] = useState<string[]>([]);

    const handleCategoryClick = (category: string) => {
        if (openCategories.includes(category)) {
            setOpenCategories(openCategories.filter((cat) => cat !== category));
        } else {
            setOpenCategories([...openCategories, category]);
        }
    };
    return (
        <CategoriesBlock>
            <h5>Категории</h5>
            {categories.map((category) => (
                <CategoryItem
                    key={category.name}
                    text={category.name}
                    currentCategory={currentCategory}
                    subcategories={category.subcategories as Array<Subcategory & { onClick: React.MouseEventHandler<Element> }>}
                    isOpen={openCategories.includes(category.name)}
                    onClick={() => {
                        handleCategoryClick(category.name);
                        actionCategory(category.name);
                    }}
                />
            ))}
        </CategoriesBlock>
    );
};

export default Categories;
