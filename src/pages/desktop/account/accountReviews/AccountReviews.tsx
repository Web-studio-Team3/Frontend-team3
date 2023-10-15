import { FC, useState } from "react";
import FilterItem from "@components/FilterItem";
import styles from "./AccountReviews.module.scss";
import GradeDistribution from "./components/gradeDistribution";
import ReviewList from "./components/reviewList";
import UserRating from "./components/userRating";
import { reviews as ReviewsData } from "./ReviewsData";

export type ReviewListItem = {
	id: number | string;
	userName: string;
	ad: string;
	reviewText: string;
	rate: number;
};

const AccountReviews: FC = () => {
	const [currenFilter, setFilter] = useState("Популярные");
	const [reviews, setReviews] = useState<ReviewListItem[]>(ReviewsData);

	const filterReviews = (): ReviewListItem[] => {
		if (currenFilter === "Сначала хорошие") {
			return [...reviews].sort((a, b) => b.rate - a.rate);
		}

		if (currenFilter === "Сначала плохие") {
			return [...reviews].sort((a, b) => a.rate - b.rate);
		}

		return reviews;
	};

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
				<ReviewList reviews={filterReviews()} />
			</div>
		</div>
	);
};

export default AccountReviews;
