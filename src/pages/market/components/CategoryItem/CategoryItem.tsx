import { ReactEventHandler } from "react";
import classNames from "classnames";
import styled from "styled-components";
import styles from "./CategoryItem.module.scss";
import { RightArrow } from "./Icons";

type CategoryItemProps = {
	text: string;
	currentCategory: string;
	onClick: ReactEventHandler;
};

const CategoryItem: React.FC<CategoryItemProps> = ({
	text,
	currentCategory,
	onClick,
}) => {
	const active = currentCategory === text ? true : false;
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
