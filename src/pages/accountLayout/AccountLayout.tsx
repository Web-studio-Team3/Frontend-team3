import { FC } from "react";
import Header from "@components/header";
import classNames from "classnames";
import styles from "./AccountLayout.module.scss";
import { AccountLayoutProps } from "./AccountLayoutProps";

const AccountLayout: FC<AccountLayoutProps> = ({ type, component }) => {
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
						<a
							href="#"
							className={classNames(
								styles.link,
								styles.linkActive
							)}
						>
							Настройки
						</a>
					</p>
					<div className={styles.content}>{component}</div>
				</div>
			</main>
		</>
	);
};

export default AccountLayout;