import { ReactEventHandler } from "react";
import classNames from "classnames";
import styled from "styled-components";
import { RightArrow } from "./Icons";

const Category = styled.p`
	font-family: "Ubuntu";
	font-size: 16px;
	cursor: pointer;
	color: white;

	&:hover {
		color: green;
		svg path {
			stroke: green;
		}
	}
	span {
		padding-left: 10px;
	}
	.active {
		color: green;
	}
	.svgActive {
		transform: rotate(90deg);
		transition: 0.5s;
	}
`;

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
		<Category onClick={onClick}>
			<RightArrow
				active={active}
				className={classNames({ svgActive: active })}
			/>
			<span className={classNames({ active: active })}>{text}</span>
		</Category>
	);
};

export default CategoryItem;
