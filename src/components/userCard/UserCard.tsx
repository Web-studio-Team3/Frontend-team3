import { FC } from "react";
import { PlusIcon, ShieldDoneIcon, StarIcon } from "@assets/icons/Icons";
import userPhoto from "@assets/img/user-photo.png";
import RatingStars from "@components/ratingStars";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import styles from "./UserCard.module.scss";
import { userCardProps } from "./UserCardProps";

type sss = {
	full_name: string;
};

const UserCard: FC<userCardProps> = ({ type, userRating }) => {
	let data: any = sessionStorage.getItem("userData");
	if (data) data = JSON.parse(data) as sss;
	console.log(data.full_name);
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
		<div className={styles.block}>
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
			<p className={styles.name}>
				{type === "my" ? (
					data?.full_name
				) : (
					<>
						{data?.full_name
							? data?.full_name
							: "Жозефина Амарантовна"}
						<ShieldDoneIcon />
					</>
				)}
			</p>
			<p className={styles.text}>Общежитие 4</p>
			{type === "another" ? rating : null}
		</div>
	);
};

export default UserCard;
