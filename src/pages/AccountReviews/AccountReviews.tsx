import { FC } from "react";
import styles from "./AccountReviews.module.scss";
import { AccountReviewsProps } from "./AccountReviews.props";
import FilterItem from "./components/FilterItem";
import GradeDistribution from "./components/gradeDistribution";
import ReviewCard from "./components/reviewCard";
import UserRating from "./components/userRating";

const AccountReviews: FC<AccountReviewsProps> = ({ title }) => {
	return (
		<div className={styles.section}>
			<div className={styles.heading}>
				<div className={styles.title}>
					<p className={styles.text}>{title}</p>
				</div>
				<div className={styles.filters}>
					<FilterItem currentFilter="Популярные" title="Популярные" />
					<FilterItem
						currentFilter="Популярные"
						title="Сначала хорошие"
					/>
					<FilterItem
						currentFilter="Популярные"
						title="Сначала плохие"
					/>
				</div>
			</div>
			<div className={styles.content}>
				<UserRating />
				<GradeDistribution />
				<ReviewCard />
			</div>
		</div>
	);
};

export default AccountReviews;
