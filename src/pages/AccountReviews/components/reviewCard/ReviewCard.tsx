import { FC } from "react";
import userPhoto from "@assets/img/user.png";
import RatingStars from "@components/ratingStars";
import classNames from "classnames";
import styles from "./ReviewCard.module.scss";
import { ReviewCardProps } from "./ReviewCard.props";

const ReviewCard: FC<ReviewCardProps> = ({
	id,
	userName,
	ad,
	reviewText,
	rate,
}) => {
	return (
		<li className={styles.block}>
			<div className={styles.userInfo}>
				<img
					src={userPhoto}
					width={66}
					height={66}
					className={styles.image}
					alt=""
				/>
				<div className={styles.textBlock}>
					<p className={classNames(styles.text, styles.textName)}>
						{userName}
					</p>
					<div className={styles.line}>
						<RatingStars currentRating={rate} />
						<p className={styles.text}>Сделка состоялась: “{ad}”</p>
					</div>
				</div>
			</div>
			<p className={styles.text}>{reviewText}</p>
		</li>
	);
};

export default ReviewCard;
