import { FC } from "react";
import RatingStars from "@components/ratingStars";
import classNames from "classnames";
import styles from "./UserRating.module.scss";

const UserRating: FC = () => {
	return (
		<div className={styles.block}>
			<div className={styles.line}>
				<p className={classNames(styles.text, styles.textRating)}>
					5,0
				</p>
				<RatingStars currentRating={5} />
			</div>
			<p className={styles.text}>на основании 1 оценки</p>
		</div>
	);
};

export default UserRating;
