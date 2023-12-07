import {
	BeautyAndHealthIcon,
	ClothesAndShoesIcon,
	DormitoryIcon,
	ElectronicsIcon,
	ServicesIcon,
} from "@assets/icons/categories";
import { ICategoryCardProps } from "@pages/mobile/market/components/CategoryCard/CategoryCard";

export const categories: ICategoryCardProps[] = [
	{
		title: "Услуги",
		icon: <ServicesIcon />,
		linkTo: "#",
	},
	{
		title: "Одежда и обувь",
		icon: <ClothesAndShoesIcon />,
		linkTo: "#",
	},
	{
		title: "Электроника",
		icon: <ElectronicsIcon />,
		linkTo: "#",
	},
	{
		title: "Красота и здоровье",
		icon: <BeautyAndHealthIcon />,
		linkTo: "#",
	},
	{
		title: "В общагу",
		icon: <DormitoryIcon />,
		linkTo: "#",
	},
];
