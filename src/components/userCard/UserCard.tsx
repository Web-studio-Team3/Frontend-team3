import { FC } from "react";
import { EditHomeIcon, PlusIcon, ShieldDoneIcon } from "@assets/icons/Icons";
import RatingStars from "@components/ratingStars";
import classNames from "classnames";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import styles from "./UserCard.module.scss";
import { userCardProps } from "./UserCardProps";
import { useSelector } from "react-redux";
import { RootState } from "src/Store/store";
import UserRating from "@pages/desktop/account/accountReviews/components/userRating";

export type sss = {
	full_name: string;
	email: string;
	picture_id: string;
};

const UserCard: FC<userCardProps> = ({
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
	const currentRating = userRating || 0;
	const rating = (
		<div className={styles.rating}>
			<RatingStars currentRating={currentRating} />
			{size === "s" ? (
				<p className={styles.text}>{reviewsCount} отзыв</p>
			) : (
				<NavLink
					to="./reviews"
					className={({ isActive }) =>
						isActive
							? classNames(styles.text, styles.textActive)
							: styles.text
					}
				>
					{reviewsCount} отзыв
				</NavLink>
			)}
		</div>
	);

	return (
		<div
			className={cn(styles.block, {
				[styles.small]: size === "s",
			})}
		>
			<div className={styles.photoBlock}>
				<img
					src={`http://82.146.43.171:8000/${user_photo}/`}
					alt="user"
					className={styles.photo}
					width={169}
					height={169}
				/>
				{type === "my" ? (
					<div className={styles.iconBlock}>
						<button type="button" className={styles.icon}>
							<PlusIcon />
						</button>
					</div>
				) : null}
			</div>
			<div className={styles.textBlock}>
				<div className={styles.ratingBlock}>
					<RatingStars currentRating={5}></RatingStars>
					<div className={styles.reviewBlock}>
						{" "}
						<p className={styles.ratingTextNum}>4.67</p>
						<p className={styles.ratingText}>1 отзыв</p>
					</div>
				</div>

				<p className={styles.name}>
					{type === "my" ? (
						user_name
					) : (
						<>
							{user_name}
							<ShieldDoneIcon />
						</>
					)}
				</p>
				<div className={styles.homeBlock}>
					<EditHomeIcon></EditHomeIcon>
					<p className={styles.homeText}>Общежитие №4</p>
					{type === "another" ? rating : null}
				</div>
			</div>
		</div>
	);
};

export default UserCard;
