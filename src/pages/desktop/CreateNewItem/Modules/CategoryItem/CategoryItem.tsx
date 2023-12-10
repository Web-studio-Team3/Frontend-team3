import { ReactEventHandler } from "react";
import classNames from "classnames";
import styles from "./CategoryItem.module.scss";
import { RightArrow } from "./Icons";

type Subcategory = {
	name: string;
	isOpen: boolean;
	onClick: ReactEventHandler<Element>;
};

type CategoryItemProps = {
	text: string;
	subcategories: Subcategory[];
	currentCategory: string;
	isOpen: boolean;
	onClick: ReactEventHandler;
};

const CategoryItem: React.FC<CategoryItemProps> = ({
	text,
	currentCategory,
	subcategories,
	isOpen,
	onClick,
}) => {
	const active = currentCategory === text ? true : false;
	return (
		<p onClick={onClick} className={classNames(styles.p)}>
			<RightArrow
				active={isOpen}
				className={classNames({ [styles.svgActive]: active })}
			/>
			<span className={classNames({ [styles.active]: active })}>
				{text}
			</span>
			{isOpen && (
				<ul>
					{subcategories.map((subcategory) => (
						<li
							key={subcategory.name}
							className={classNames({
								[styles.subcategory]: true,
							})}
							onClick={subcategory.onClick}
						>
							<RightArrow
								active={subcategory.isOpen}
								className={classNames({
									[styles.svgActive]: active,
								})}
							/>
							<span
								className={classNames({
									[styles.subOpen]: active,
								})}
							>
								{subcategory.name}
							</span>
						</li>
					))}
				</ul>
			)}
		</p>
	);
};

export default CategoryItem;
