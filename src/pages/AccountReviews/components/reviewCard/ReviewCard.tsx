import { FC } from "react";
import userPhoto from "@assets/img/user.png";
import RatingStars from "@components/ratingStars";
import classNames from "classnames";
import styles from "./ReviewCard.module.scss";

const ReviewCard: FC = () => {
	return (
		<div className={styles.block}>
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
						Вася
					</p>
					<div className={styles.line}>
						<RatingStars currentRating={5} />
						<p className={styles.text}>
							Сделка состоялась: “Худи оверсайз”
						</p>
					</div>
				</div>
			</div>
			<p className={styles.text}>
				Очень ответсвенный продавец, хорошая коммуникация по сделкам,
				внимательная и хорошая упаковка товара.
			</p>
		</div>
	);
};

export default ReviewCard;
