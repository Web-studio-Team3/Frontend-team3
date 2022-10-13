import userPhoto from "../../resources/img/user-photo.png";
import styles from "./UserCard.module.scss";

const UserCard = (): JSX.Element => {
	return (
		<div className={styles["user-card"]}>
			<img
				src={userPhoto}
				alt=""
				className={styles["user-card__photo"]}
			/>
			<p className={styles["user-card__name"]}>Жозефина Амарантовна</p>
			<p className={styles["user-card__text"]}>Общежитие 4</p>
		</div>
	);
};

export default UserCard;
