import { FC } from "react";
import RatingStars from "@components/ratingStars";
import classNames from "classnames";
import styles from "./UserRatingMobile.module.scss";

const UserRatingMobile: FC = () => {
	return (
		<div className={styles.block}>
			<div className={styles.line}>
				<p className={classNames(styles.text, styles.textRating)}>
					4,5
				</p>
				<RatingStars currentRating={5} />
			</div>
			<p className={styles.text}>на основании 2 оценок</p>
		</div>
	);
};

export default UserRatingMobile;
