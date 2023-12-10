import { FC } from "react";
import { CollapseArrowIcon, StarIcon } from "@assets/icons/Icons";
import RatingStars from "@components/ratingStars";
import styles from "./ProfileCardMobile.module.scss";
import { userCardProps } from "../../userCard/UserCardProps";
import { useSelector } from "react-redux";
import { RootState } from "src/Store/store";
import classNames from "classnames";

export type sss = {
	full_name: string;
	email: string;
	picture_id: string;
};

const ProfileCardMobile: FC<userCardProps> = ({
	type,
	reviewsCount,
	size = "m",
	userRating,
}) => {
	const user_photo = useSelector(
		(state: RootState) => state.User.user_picture
	);
	const user_name = useSelector(
		(state: RootState) => state.User.user?.full_name
	);
	const currentRating = userRating || 5;
	reviewsCount = 1;
	const rating = (
		<div className={styles.rating}>
			<RatingStars currentRating={currentRating} />
			<p className={styles.text}>{reviewsCount} отзыв</p>
		</div>
	);

	return (
		<div className={styles.userCard}>
			<div className={styles.mobilePhotoBlock}>
				<img
					src={`http://217.28.220.136:8000/${user_photo}/`}
					alt="user"
					className={styles.mobilePhoto}
					width={60}
					height={60}
				/>
				<p className={styles.name}>{user_name}</p>
				<p className={styles.text}>Общежитие 4</p>
			</div>

			<div className={styles.blocksWrapper}>
				<div className={styles.ratingBlock}>
					<div className={styles.block}>
						<StarIcon width={20} height={20} />
						<p className={classNames(styles.text, styles.main)}>
							{currentRating}
						</p>
					</div>
					<p className={classNames(styles.text, styles.secondary)}>
						{reviewsCount} отзыв
					</p>
				</div>
				<div className={styles.subscriberBlock}>
					<p className={classNames(styles.text, styles.main)}>1</p>
					<p className={classNames(styles.text, styles.secondary)}>
						подписчик
					</p>
				</div>
				<div className={styles.subscriberBlock}>
					<p className={classNames(styles.text, styles.main)}>2</p>
					<p className={classNames(styles.text, styles.secondary)}>
						подписки
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProfileCardMobile;
