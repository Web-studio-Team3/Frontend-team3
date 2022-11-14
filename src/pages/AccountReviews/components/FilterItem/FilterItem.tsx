import classNames from "classnames";
import styles from "./FilterItem.module.scss";

type FilterItemProps = {
	currentFilter: string;
	title: string;
};

const FilterItem: React.FC<FilterItemProps> = ({ currentFilter, title }) => {
	return (
		<button
			className={classNames(styles.filter, {
				[styles.active]: currentFilter === title,
			})}
		>
			{title}
		</button>
	);
};

export default FilterItem;
