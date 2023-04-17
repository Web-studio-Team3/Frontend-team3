import { FC } from "react";
import { PlusIcon, ShieldDoneIcon } from "@assets/icons/Icons";
import userPhoto from "@assets/img/user-photo.png";
import RatingStars from "@components/ratingStars";
import classNames from "classnames";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import styles from "./UserCard.module.scss";
import { userCardProps } from "./UserCardProps";

const UserCard: FC<userCardProps> = ({ type, size = "m", userRating }) => {
	const currentRating = userRating || 0;
	const rating = (
		<div className={styles.rating}>
			<RatingStars currentRating={currentRating} />
			<NavLink
				to="./reviews"
				className={({ isActive }) =>
					isActive
						? classNames(styles.text, styles.textActive)
						: styles.text
				}
			>
				1 отзыв
			</NavLink>
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
					src={userPhoto}
					alt="user"
					className={styles.photo}
					width={169}
					height={169}
				/>
				{type === "my" ? (
					<button type="button" className={styles.icon}>
						<PlusIcon />
					</button>
				) : null}
			</div>
			<div className={styles.textBlock}>
				<p className={styles.name}>
					{type === "my" ? (
						"Жозефина Амарантовна"
					) : (
						<>
							Шарик Борисович
							<ShieldDoneIcon />
						</>
					)}
				</p>
				<p className={styles.text}>Общежитие 4</p>
				{type === "another" ? rating : null}
			</div>
		</div>
	);
};

export default UserCard;
