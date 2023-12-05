import classNames from "classnames";
import styles from "./FilterItem.module.scss";
import Button from "@components/Button";
import { FC } from "react";

type FilterItemProps = {
	currentFilter: string;
	title: string;
	value?: string;
	updateCurrentFilter: (string: string) => void;
};

const FilterItem: FC<FilterItemProps> = ({
	currentFilter,
	title,
	value,
	updateCurrentFilter,
}) => {
	return (
		<Button
			onClick={() => updateCurrentFilter(value || title)}
			variant="ghost"
			size="xs"
		>
			<p
				className={classNames(styles.filter, {
					[styles.active]: currentFilter === value,
				})}
			>
				{title}
			</p>
		</Button>
	);
};

export default FilterItem;
