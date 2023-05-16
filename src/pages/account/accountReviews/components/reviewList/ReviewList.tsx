import { FC } from "react";
import { ReviewListItem } from "../../AccountReviews";
import ReviewCard from "../reviewCard";
import styles from "./ReviewList.module.scss";

export type ReviewListProps = {
	reviews: ReviewListItem[];
};

const ReviewList: FC<ReviewListProps> = ({ reviews }) => {
	return (
		<ul className={styles.list}>
			{reviews.map((review) => (
				<ReviewCard key={review.id} {...review} />
			))}
		</ul>
	);
};

export default ReviewList;
