import { FC } from "react";
import {
	CollapseArrowIcon,
	EditHomeIcon,
	PlusIcon,
	ShieldDoneIcon,
} from "@assets/icons/Icons";
import RatingStars from "@components/ratingStars";
import classNames from "classnames";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import styles from "./UserCardMobile.module.scss";
import { userCardProps } from "../../userCard/UserCardProps";
import { useSelector } from "react-redux";
import { RootState } from "src/Store/store";
import UserRating from "@pages/desktop/account/accountReviews/components/userRating";

export type sss = {
	full_name: string;
	email: string;
	picture_id: string;
};

const UserCardMobile: FC<userCardProps> = ({
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
		<div className={`${styles.userCard} ${styles.userCardMobile}`}>
			<div className={styles.mobileRow}>
				<div className={styles.mobilePhotoBlock}>
					<img
						src={`http://217.28.220.136:8000/${user_photo}/`}
						alt="user"
						className={styles.mobilePhoto}
						width={60}
						height={60}
					/>
				</div>
				<div className={styles.mobileTextBlock}>
					<p className={styles.name}>{user_name}</p>
					{rating}
				</div>
				<div className={styles.collapseArrowIconBlock}>
					<CollapseArrowIcon />
				</div>
			</div>
		</div>
	);
};

export default UserCardMobile;
