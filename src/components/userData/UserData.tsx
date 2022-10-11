import "./UserData.scss";
import { PlusIcon } from "../../resources/icons/Icons";

const UserData = (): JSX.Element => {
	return (
		<div className="user-data">
			<h2 className="user-data__title">Личные данные</h2>
			<ul className="user-data__list">
				<li className="user-data__item">
					<p className="user-data__text">Профиль</p>
					<p className="user-data__text">
						Амарантова Жозефина Котлетовна
					</p>
					<button className="user-data__icon">
						<PlusIcon />
					</button>
				</li>
				<li className="user-data__item">
					<p className="user-data__text">Телефон</p>
					<p className="user-data__text">+7 (900)-888-88-88</p>
					<button type="button" className="user-data__icon">
						<PlusIcon />
					</button>
				</li>
				<li className="user-data__item">
					<p className="user-data__text">Место</p>
					<p className="user-data__text">Москва, 4 общежитие</p>
					<button className="user-data__icon">
						<PlusIcon />
					</button>
				</li>
				<li className="user-data__item">
					<p className="user-data__text">E-mail</p>
					<p className="user-data__text">kotletka@gmail.com</p>
					<button className="user-data__icon">
						<PlusIcon />
					</button>
				</li>
			</ul>
		</div>
	);
};

export default UserData;
