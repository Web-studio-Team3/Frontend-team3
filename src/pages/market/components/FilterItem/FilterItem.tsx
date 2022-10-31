import classNames from "classnames";
import styles from "./FilterItem.module.scss";

type FilterItemProps = {
	currentFilter: string;
	title: string;
	updateCurrentFilter: (string: string) => void;
};

const FilterItem: React.FC<FilterItemProps> = ({
	currentFilter,
	title,
	updateCurrentFilter,
}) => {
	return (
		<button
			className={classNames(styles.filter, {
				[styles.active]: currentFilter === title,
			})}
			onClick={() => updateCurrentFilter(title)}
		>
			{title}
		</button>
	);
};

export default FilterItem;
