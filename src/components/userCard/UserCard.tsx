import { PlusIcon, ShieldDoneIcon, StarIcon } from "@assets/icons/Icons";
import userPhoto from "@assets/img/user-photo.png";
import classNames from "classnames";
import styles from "./UserCard.module.scss";
import { userCardProps } from "./UserCardProps";

const UserCard = ({ type }: userCardProps): JSX.Element => {
	const rating = (
		<div className={styles.rating}>
			<ul className={styles.list}>
				<li className={classNames(styles.item, styles.itemFilled)}>
					<StarIcon />
				</li>
				<li className={classNames(styles.item, styles.itemFilled)}>
					<StarIcon />
				</li>
				<li className={classNames(styles.item, styles.itemFilled)}>
					<StarIcon />
				</li>
				<li className={classNames(styles.item, styles.itemFilled)}>
					<StarIcon />
				</li>
				<li className={styles.item}>
					<StarIcon />
				</li>
			</ul>
			<p className={classNames(styles.text, styles.textReviews)}>
				3 отзыва
			</p>
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
					"Жозефина Амарантовна"
				) : (
					<>
						Жозефина Амарантовна
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
