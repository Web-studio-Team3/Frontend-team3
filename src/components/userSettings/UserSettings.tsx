import "./UserSettings.scss";
import { PlusIcon } from "../../resources/icons/Icons";

const UserSettings = (): JSX.Element => {
	return (
		<div className="user-settings">
			<h2 className="user-settings__title">Общие настройки</h2>
			<ul className="user-settings__list">
				<li className="user-settings__item">
					<p className="user-settings__text">Банковские карты</p>
					<p className="user-settings__text not-stated">данных нет</p>
					<button className="user-settings__icon">
						<PlusIcon />
					</button>
				</li>
				<li className="user-settings__item">
					<p className="user-settings__text">Уведомления</p>
					<p className="user-settings__text">включены</p>
					<button type="button" className="user-settings__icon">
						<PlusIcon />
					</button>
				</li>
				<li className="user-settings__item">
					<p className="user-settings__text">Сообщения</p>
					<p className="user-settings__text">могут писать все</p>
					<button className="user-settings__icon">
						<PlusIcon />
					</button>
				</li>
				<li className="user-settings__item">
					<p className="user-settings__text">
						Реквизиты для доставки
					</p>
					<p className="user-settings__text not-stated">данных нет</p>
					<button className="user-settings__icon">
						<PlusIcon />
					</button>
				</li>
			</ul>
		</div>
	);
};

export default UserSettings;
