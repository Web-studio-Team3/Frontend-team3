import Header from "@components/header/Header";
import ProfileMenu from "@components/profileMenu/ProfileMenu";
import UserCard from "@components/userCard/UserCard";
import { Outlet } from "react-router-dom";
import "./Account.scss";

const Account = (): JSX.Element => {
	return (
		<>
			<Header />
			<main className="account">
				<div className="accounte__body container">
					<p className="account__breadcrumbs">
						<a href="#" className="account__link">
							Главная
						</a>
						&gt;&gt;
						<a href="#" className="account__link">
							Настройки
						</a>
						&gt;&gt;
						<a href="#" className="account__link active">
							Профиль
						</a>
					</p>
					<div className="account__content">
						<div className="account__menu ">
							<UserCard />
							<ProfileMenu />
						</div>
						<Outlet />
					</div>
				</div>
			</main>
		</>
	);
};

export default Account;
