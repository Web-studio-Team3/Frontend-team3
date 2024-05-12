import { ReactEventHandler } from "react";
import classNames from "classnames";
import styles from "./CategoryItem.module.scss";
import { RightArrow } from "./Icons";
type Subcategory = {
	name: string;
	isOpen: boolean;
};
type CategoryItemProps = {
	text: string;
	currentCategory: string;
	onClick: ReactEventHandler;
	subcategories?: Array<
		Subcategory & {
			onClick: React.MouseEventHandler<Element>;
		}
	>;
	isOpen?: boolean;
};

const CategoryItem: React.FC<CategoryItemProps> = ({
	text,
	currentCategory,
	onClick,
}) => {
	const active = currentCategory === text;
	return (
		<p onClick={onClick} className={classNames(styles.p)}>
			<RightArrow
				active={active}
				className={classNames({ [styles.svgActive]: active })}
			/>
			<span className={classNames({ [styles.active]: active })}>
				{text}
			</span>
		</p>
	);
};

export default CategoryItem;
