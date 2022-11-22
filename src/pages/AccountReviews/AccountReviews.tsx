import { FC, useState } from "react";
import FilterItem from "@components/FilterItem";
import styles from "./AccountReviews.module.scss";
import GradeDistribution from "./components/gradeDistribution";
import ReviewList from "./components/reviewList";
import UserRating from "./components/userRating";

const AccountReviews: FC = () => {
	const [currenFilter, setFilter] = useState("Популярные");

	return (
		<div className={styles.section}>
			<div className={styles.heading}>
				<div className={styles.title}>
					<p className={styles.text}>ОТЗЫВЫ</p>
				</div>
				<ul className={styles.filters}>
					<FilterItem
						currentFilter={currenFilter}
						title="Популярные"
						updateCurrentFilter={setFilter}
					/>
					<FilterItem
						currentFilter={currenFilter}
						title="Сначала хорошие"
						updateCurrentFilter={setFilter}
					/>
					<FilterItem
						currentFilter={currenFilter}
						title="Сначала плохие"
						updateCurrentFilter={setFilter}
					/>
				</ul>
			</div>
			<div className={styles.content}>
				<UserRating />
				<GradeDistribution />
				<ReviewList />
			</div>
		</div>
	);
};

export default AccountReviews;
