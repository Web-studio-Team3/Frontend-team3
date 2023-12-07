import { FC, ReactNode } from "react";
import styles from "./CategoryCard.module.scss";
import { NavLink } from "react-router-dom";

export interface ICategoryCardProps {
	icon: ReactNode;
	title: string;
	linkTo?: string;
}
const CategoryCard: FC<ICategoryCardProps> = ({ icon, title, linkTo }) => {
	return (
		<NavLink to={linkTo || "#"} className={styles.link}>
			<div className={styles.card_body}>{icon}</div>
			<p className={styles.text}>{title}</p>
		</NavLink>
	);
};

export default CategoryCard;
