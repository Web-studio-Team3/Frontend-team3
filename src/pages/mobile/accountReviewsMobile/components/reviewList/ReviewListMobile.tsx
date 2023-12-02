import { FC } from "react";
import { ReviewListItem } from "../../AccountReviewsMobile";
import ReviewCardMobile from "../reviewCard";
import styles from "./ReviewListMobile.module.scss";

export type ReviewListProps = {
	reviews: ReviewListItem[];
};

const ReviewListMobile: FC<ReviewListProps> = ({ reviews }) => {
	return (
		<ul className={styles.list}>
			{reviews.map((review) => (
				<ReviewCardMobile key={review.id} {...review} />
			))}
		</ul>
	);
};

export default ReviewListMobile;
