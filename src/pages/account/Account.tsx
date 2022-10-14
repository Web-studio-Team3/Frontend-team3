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
			<main className={styles.layout}>
				<div className={classNames(styles.body, "container")}>
					<p className={styles.breadcrumbs}>
						<a href="#" className={styles.link}>
							Главная
						</a>
						&gt;&gt;
						<a href="#" className={styles.link}>
							Настройки
						</a>
						&gt;&gt;
						<a
							href="#"
							className={classNames(
								styles.link,
								styles.linkActive
							)}
						>
							Профиль
						</a>
					</p>
					<div className={styles.content}>
						<div className={styles.menu}>
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
