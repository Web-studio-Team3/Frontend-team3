import "./Header.scss";
import {
	ProfileIcon,
	NotificationIcon,
	BuyIcon,
	LogoIcon,
} from "../../resources/icons/Icons";

const Header = (): JSX.Element => {
	return (
		<header className="header container">
			<div className="header__logo">
				<LogoIcon />
			</div>
			<ul className="header__menu">
				<li className="header__item">
					<a href="#" className="header__link header__link_category">
						Категории
					</a>
				</li>
				<li className="header__item">
					<a href="#" className="header__link header__link_create-ad">
						Разместить объявление
					</a>
				</li>
				<li className="header__item">
					<a href="#" className="header__link header__link_icon">
						<BuyIcon />
					</a>
				</li>
				<li className="header__item">
					<a
						href="#"
						className="header__link header__link_icon active"
					>
						<ProfileIcon />
					</a>
				</li>
				<li className="header__item">
					<a href="#" className="header__link header__link_icon">
						<NotificationIcon />
					</a>
				</li>
			</ul>
		</header>
	);
};

export default Header;
