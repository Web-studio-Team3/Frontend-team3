import userPhoto from "@assets/img/user-photo.png";
import styles from "./UserCard.module.scss";

const UserCard = (): JSX.Element => {
	return (
		<div className={styles.block}>
			<img src={userPhoto} alt="" className={styles.photo} />
			<p className={styles.name}>Жозефина Амарантовна</p>
			<p className={styles.text}>Общежитие 4</p>
		</div>
	);
};

export default UserCard;
