import { FC, useState } from "react";
import styles from "./Market.module.scss";
import Input from "@components/Input";
import {
	CategoriesMobileIcon,
	FiltersIcon,
	SearchIcon,
} from "@assets/icons/Icons";
import Button from "@components/Button";

const Market: FC = () => {
	const [searchValue, setSearchValue] = useState("");
	const renderInputSearchIcon = () => {
		return (
			<div className={styles.search_icon}>
				<SearchIcon width={16} height={16} fill="#5D616F" />
			</div>
		);
	};

	return (
		<>
			<div className={styles.header_wrapper}>
				<header className={styles.header}>
					<div className={styles.search_input_container}>
						<Input
							value={searchValue}
							placeholder="Найти"
							sizing="sm"
							extraRounded
							fluid
							renderInputIcon={renderInputSearchIcon}
						/>
					</div>
					<Button onClick={() => {}} variant="ghost" size="xs">
						<FiltersIcon />
					</Button>
					<Button onClick={() => {}} variant="ghost" size="xs">
						<CategoriesMobileIcon />
					</Button>
				</header>
			</div>
		</>
	);
};

export default Market;
