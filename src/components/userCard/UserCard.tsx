import "./UserCard.scss";
import userPhoto from "../../resources/img/user-photo.png";

const UserCard = (): JSX.Element => {
	return (
		<div className="user-card">
			<img src={userPhoto} alt="" className="user-card__photo" />
			<p className="user-card__name">Жозефина Амарантовна</p>
			<p className="user-card__text">Общежитие 4</p>
		</div>
	);
};

export default UserCard;
