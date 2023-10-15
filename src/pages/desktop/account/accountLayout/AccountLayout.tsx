import { FC, useContext } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import Header from "@components/header";
import classNames from "classnames";
import styles from "./AccountLayout.module.scss";
import { AccountLayoutProps } from "./AccountLayoutProps";
import {
	BreadcrumbsContext,
	IBreadcrumbsContext,
} from "@pages/layouts/MainLayout/MainLayout";

const AccountLayout: FC<AccountLayoutProps> = ({ type, component }) => {
	const { breadcrumbs } = useContext(
		BreadcrumbsContext
	) as IBreadcrumbsContext;

	return (
		<>
			<Header />
			<main className={styles.layout}>
				<div className={classNames(styles.body, "container")}>
					<Breadcrumbs additionalBreadcrumbs={breadcrumbs} />
					<div className={styles.content}>{component}</div>
				</div>
			</main>
		</>
	);
};

export default AccountLayout;
