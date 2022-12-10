import { FC } from "react";
import { removeRemainingCrumbs } from "@utils/breadcrumbs";
import cn from "classnames";
import classNames from "classnames";
import { useNavigate, useLocation, useMatch } from "react-router-dom";
import { IBreadCrumbsLocationState } from "../Breadcrumbs";
import styles from "./Crumb.module.scss";

export interface IcrumbProps {
	className?: string;
	path: string;
	title: string;
}

const Crumb: FC<IcrumbProps> = ({ className, path, title }) => {
	const navigate = useNavigate();
	const state = useLocation().state as IBreadCrumbsLocationState[];
	const match = useMatch({ path, caseSensitive: false, end: true });

	const routeTo = (event: any) => {
		event.preventDefault();
		navigate(path, { state: removeRemainingCrumbs(state, path) });
	};

	return match ? (
		<span className={classNames(styles.link, styles.linkActive)}>
			{title}
		</span>
	) : (
		<span onClick={routeTo} className={styles.link}>
			{title + ">>"}
		</span>
	);
};

export default Crumb;
