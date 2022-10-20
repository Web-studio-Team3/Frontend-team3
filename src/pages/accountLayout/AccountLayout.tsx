import Header from "@components/header";
import classNames from "classnames";
import styles from "./AccountLayout.module.scss";
import { AccountLayoutProps } from "./AccountLayoutProps";

const AccountLayout = ({
	type,
	component,
}: AccountLayoutProps): JSX.Element => {
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
					<div className={styles.content}>{component}</div>
				</div>
			</main>
		</>
	);
};

export default AccountLayout;
