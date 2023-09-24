import classNames from "classnames";
import styles from "./FilterItem.module.scss";
import Button from "@components/Button";
import { FC } from "react";

type FilterItemProps = {
	currentFilter: string;
	title: string;
	updateCurrentFilter: (string: string) => void;
};

const FilterItem: FC<FilterItemProps> = ({
	currentFilter,
	title,
	updateCurrentFilter,
}) => {
	return (
		<Button
			onClick={() => updateCurrentFilter(title)}
			variant="ghost"
			size="xs"
		>
			<p
				className={classNames(styles.filter, {
					[styles.active]: currentFilter === title,
				})}
			>
				{title}
			</p>
		</Button>
	);
};

export default FilterItem;
