import { FC } from "react";
import userPhoto from "@assets/img/user.png";
import classNames from "classnames";
import styles from "./ReviewCardMobile.module.scss";
import { ReviewCardProps } from "./ReviewCard.props";
import RatingStarsMobile from "@components/mobile/ratingStarsMobile";

const ReviewCardMobile: FC<ReviewCardProps> = ({
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
					width={52}
					height={52}
					className={styles.image}
					alt=""
				/>
				<div className={styles.textBlock}>
					<div className={styles.nameLine}>
						<p className={classNames(styles.text, styles.textName)}>
							{userName}
						</p>
						<p className={classNames(styles.text, styles.textDate)}>
							12 марта 2023
						</p>
					</div>

					<div className={styles.line}>
						<RatingStarsMobile currentRating={rate} />
						<p className={classNames(styles.text, styles.textAd)}>
							“{ad}”
						</p>
					</div>
					<p className={styles.text}>{reviewText}</p>
				</div>
			</div>
		</li>
	);
};

export default ReviewCardMobile;
