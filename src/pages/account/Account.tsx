import Header from "@components/header";
import ProfileMenu from "@components/profileMenu";
import UserCard from "@components/userCard";
import classNames from "classnames";
import { Outlet } from "react-router-dom";
import styles from "./Account.module.scss";

const Account = (): JSX.Element => {
	return (
		<>
			<Header />
			<main className={styles["account"]}>
				<div
					className={classNames(styles["account__body"], "container")}
				>
					<p className={styles["account__breadcrumbs"]}>
						<a href="#" className={styles["account__link"]}>
							Главная
						</a>
						&gt;&gt;
						<a href="#" className={styles["account__link"]}>
							Настройки
						</a>
						&gt;&gt;
						<a
							href="#"
							className={classNames(
								styles["account__link"],
								styles["active"]
							)}
						>
							Профиль
						</a>
					</p>
					<div className={styles["account__content"]}>
						<div className={styles["account__menu"]}>
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
