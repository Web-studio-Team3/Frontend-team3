import { FC } from "react";
import Breadcrumbs from "@components/breadcrumbs";
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
					<Breadcrumbs />
					<div className={styles.content}>{component}</div>
				</div>
			</main>
		</>
	);
};

export default AccountLayout;
