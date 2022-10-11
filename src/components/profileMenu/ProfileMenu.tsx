import "./ProfileMenu.scss";
import {
	CalendarIcon,
	BagIcon,
	StarIcon,
	HeartIcon,
	ChatIcon,
	WalletIcon,
	SettingIcon,
	SearchIcon,
} from "../../resources/icons/Icons";

const ProfileMenu = (): JSX.Element => {
	return (
		<div className="profile-menu">
			<ul className="profile-menu__list">
				<li className="profile-menu__item">
					<div className="profile-menu__icon">
						<CalendarIcon />
					</div>
					<p className="profile-menu__text">Мои объявления</p>
				</li>
				<li className="profile-menu__item">
					<div className="profile-menu__icon">
						<BagIcon />
					</div>
					<p className="profile-menu__text">Заказы</p>
				</li>
				<li className="profile-menu__item">
					<div className="profile-menu__icon">
						<StarIcon />
					</div>
					<p className="profile-menu__text">Отзывы</p>
				</li>
				<li className="profile-menu__item">
					<div className="profile-menu__icon">
						<HeartIcon />
					</div>
					<p className="profile-menu__text">Избранное</p>
				</li>
				<li className="profile-menu__item">
					<div className="profile-menu__icon">
						<ChatIcon />
					</div>
					<p className="profile-menu__text">Сообщения</p>
				</li>
				<li className="profile-menu__item">
					<div className="profile-menu__icon">
						<WalletIcon />
					</div>
					<p className="profile-menu__text">Кошелёк</p>
				</li>
			</ul>
			<ul className="profile-menu__list active">
				<li className="profile-menu__item active">
					<div className="profile-menu__icon">
						<SettingIcon />
					</div>
					<p className="profile-menu__text">Настройка</p>
				</li>
				<li className="profile-menu__item">
					<div className="profile-menu__icon">
						<SearchIcon />
					</div>
					<p className="profile-menu__text">Помощь</p>
				</li>
			</ul>
		</div>
	);
};

export default ProfileMenu;
