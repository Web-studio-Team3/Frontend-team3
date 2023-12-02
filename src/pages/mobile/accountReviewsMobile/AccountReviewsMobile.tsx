import { FC, useState } from "react";
import styles from "./AccountReviewsMobile.module.scss";
import ReviewListMobile from "./components/reviewList";
import { reviews as ReviewsData } from "../../desktop/account/accountReviews/ReviewsData";
import BreadcrumbsMobile from "@components/mobile/breadcrumbsMobile";

export type ReviewListItem = {
	id: number | string;
	userName: string;
	ad: string;
	reviewText: string;
	rate: number;
};

const AccountReviewsMobile: FC = () => {
	const [currenFilter, setFilter] = useState("Популярные");
	const [reviews, setReviews] = useState<ReviewListItem[]>(ReviewsData);
	return (
		<div className={styles.section}>
			<BreadcrumbsMobile></BreadcrumbsMobile>
			<div className={styles.content}>
				<ReviewListMobile reviews={[...reviews]} />
			</div>
		</div>
	);
};

export default AccountReviewsMobile;
