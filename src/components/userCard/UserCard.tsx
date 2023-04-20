import { FC } from "react";
import { PlusIcon, ShieldDoneIcon } from "@assets/icons/Icons";
import userPhoto from "@assets/img/user-photo.png";
import RatingStars from "@components/ratingStars";
import classNames from "classnames";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import styles from "./UserCard.module.scss";
import { userCardProps } from "./UserCardProps";

export type sss = {
	full_name: string;
	email: string;
	picture_id: string;
};

const UserCard: FC<userCardProps> = ({ type, size = "m", userRating }) => {
	let data: any = sessionStorage.getItem("userData");
	let photo: any = sessionStorage.getItem("photo");
	if (data) data = JSON.parse(data) as sss;
	console.log(data);

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
					src={`http://localhost:8000/${photo}`}
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
						data.full_name
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
