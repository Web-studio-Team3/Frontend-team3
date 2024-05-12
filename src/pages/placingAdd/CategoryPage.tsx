import styled from "styled-components";
import CategoryItem from "../market/components/CategoryItem";
import {useState,} from "react";
import Header from "@components/header";
import {useNavigate} from "react-router-dom";

type Subcategory = {
    name: string;
    isOpen: boolean;
    onClick?: () => void;

};
type Category = {
    name: string;
    subcategories: Subcategory[];
};


type CategoriesProps = {
    currentCategory: string;
    actionCategory: (category: string) => void;
};

const TitleText = styled.h1`
  width: 868px;
  height: 43px;
  color: #FFFFFE;
  font-size: 32px;
  font-family: 'Inter';
  font-weight: 700;
  word-wrap: break-word;
  position: absolute;
  top: 25%
`;
const CategoriesBlock = styled.div`
  border-radius: 23px;
  width: 529px;
  height: 30%;
  margin: 11% 33%;
  //position: absolute;
  top: 50%;
  background-color: #2D2D33;;
  border: 1px solid #72757e;
  padding: 27px 34px 36px 34px;
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

const CategoryPage: React.FC<CategoriesProps> = ({
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

    const navigate = useNavigate()

    const categories: Category[] = [
        {
            name: "Личные вещи",
            subcategories: [
                {
                    name: "Одежда ", isOpen: false, onClick: () => {
                        navigate('/filling')
                    }
                },

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
                {name: "Запчасти на машину", isOpen: false},
            ],
        },
        {
            name: "Хобби и отдых",
            subcategories: [
                {name: "Книги и журналы", isOpen: false},
            ],
        },
        {
            name: "Красота и здоровье",
            subcategories: [
                {name: "Косметика", isOpen: false},
                {name: "Парфюмерия", isOpen: false},
            ],
        },
        {
            name: "Услуги",
            subcategories: [
                {name: "Ремонт техники", isOpen: false},
                {name: "Уборка", isOpen: false},
            ],
        },
        {
            name: "В общагу",
            subcategories: [
                {name: "Декор", isOpen: false},
            ],
        }
    ];

    return (
        <>
            <Header/>
            <CategoriesBlock>
                <TitleText>Размещение объявления</TitleText>
                <h5 style={{
                    color: '#FFFFFE',
                    fontSize: 16,
                    fontFamily: 'Inter',
                    fontWeight: '400',
                    wordWrap: 'break-word',
                    marginBottom: "10px"
                }}>Выберите категорию</h5>

                {categories.map((category) => (
                    <CategoryItem
                        key={category.name}
                        text={category.name}
                        currentCategory={currentCategory}
                        subcategories={category.subcategories as Array<Subcategory & { onClick: React.MouseEventHandler<Element> }>}
                        isOpen={openCategories.includes(category.name)}
                        onClick={(e) => {
                            e.stopPropagation()
                            handleCategoryClick(category.name);
                            actionCategory(category.name);
                        }}
                    />
                ))}
            </CategoriesBlock>
        </>
    );
};

export default CategoryPage;
