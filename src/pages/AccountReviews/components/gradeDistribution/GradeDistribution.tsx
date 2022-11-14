import { FC } from "react";
import RatingStars from "@components/ratingStars";
import styles from "./GradeDistribution.module.scss";

const GradeDistribution: FC = () => {
	return (
		<ul className={styles.list}>
			<li className={styles.item}>
				<RatingStars currentRating={5} />
				<span className={styles.ratingLine}>
					<span
						className={styles.ratingLineFilled}
						style={{ width: `${Math.floor((1 / 1) * 100)}%` }}
					></span>
				</span>
				<p className={styles.text}>1</p>
			</li>
			<li className={styles.item}>
				<RatingStars currentRating={4} />
				<span className={styles.ratingLine}></span>
				<p className={styles.text}>0</p>
			</li>
			<li className={styles.item}>
				<RatingStars currentRating={3} />
				<span className={styles.ratingLine}></span>
				<p className={styles.text}>0</p>
			</li>
			<li className={styles.item}>
				<RatingStars currentRating={2} />
				<span className={styles.ratingLine}></span>
				<p className={styles.text}>0</p>
			</li>
			<li className={styles.item}>
				<RatingStars currentRating={1} />
				<span className={styles.ratingLine}></span>
				<p className={styles.text}>0</p>
			</li>
		</ul>
	);
};

export default GradeDistribution;
