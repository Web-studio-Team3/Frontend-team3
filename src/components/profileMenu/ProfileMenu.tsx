import "./ProfileMenu.scss";
import { NavLink } from "react-router-dom";
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
					<NavLink
						to="./my-ads"
						className={({ isActive }) =>
							isActive
								? "profile-menu__link active"
								: "profile-menu__link"
						}
					>
						<div className="profile-menu__icon">
							<CalendarIcon />
						</div>
						<p className="profile-menu__text">Мои объявления</p>
					</NavLink>
				</li>
				<li className="profile-menu__item">
					<NavLink
						to="./orders"
						className={({ isActive }) =>
							isActive
								? "profile-menu__link active"
								: "profile-menu__link"
						}
					>
						<div className="profile-menu__icon">
							<BagIcon />
						</div>
						<p className="profile-menu__text">Заказы</p>
					</NavLink>
				</li>
				<li className="profile-menu__item">
					<NavLink
						to="./reviews"
						className={({ isActive }) =>
							isActive
								? "profile-menu__link active"
								: "profile-menu__link"
						}
					>
						<div className="profile-menu__icon">
							<StarIcon />
						</div>
						<p className="profile-menu__text">Отзывы</p>
					</NavLink>
				</li>
				<li className="profile-menu__item">
					<NavLink
						to="./favorites"
						className={({ isActive }) =>
							isActive
								? "profile-menu__link active"
								: "profile-menu__link"
						}
					>
						<div className="profile-menu__icon">
							<HeartIcon />
						</div>
						<p className="profile-menu__text">Избранное</p>
					</NavLink>
				</li>
				<li className="profile-menu__item">
					<NavLink
						to="./messages"
						className={({ isActive }) =>
							isActive
								? "profile-menu__link active"
								: "profile-menu__link"
						}
					>
						<div className="profile-menu__icon">
							<ChatIcon />
						</div>
						<p className="profile-menu__text">Сообщения</p>
					</NavLink>
				</li>
				<li className="profile-menu__item">
					<NavLink
						to="./wallet"
						className={({ isActive }) =>
							isActive
								? "profile-menu__link active"
								: "profile-menu__link"
						}
					>
						<div className="profile-menu__icon">
							<WalletIcon />
						</div>
						<p className="profile-menu__text">Кошелёк</p>
					</NavLink>
				</li>
			</ul>
			<ul className="profile-menu__list active">
				<li className="profile-menu__item">
					<NavLink
						to="./settings"
						className={({ isActive }) =>
							isActive
								? "profile-menu__link active"
								: "profile-menu__link"
						}
					>
						<div className="profile-menu__icon">
							<SettingIcon />
						</div>
						<p className="profile-menu__text">Настройки</p>
					</NavLink>
				</li>
				<li className="profile-menu__item">
					<NavLink
						to="./help"
						className={({ isActive }) =>
							isActive
								? "profile-menu__link active"
								: "profile-menu__link"
						}
					>
						<div className="profile-menu__icon">
							<SearchIcon />
						</div>
						<p className="profile-menu__text">Помощь</p>
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default ProfileMenu;
