import { FC } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Breadcrumbs.module.scss";
import Crumb from "./crumb/Crumb";

export interface IBreadCrumbsLocationState {
	id: string;
	path: string;
	title: string;
}

const Breadcrumbs: FC = () => {
	const state = useLocation().state as IBreadCrumbsLocationState[];

	return (
		<nav className={styles.wrapper}>
			{state
				? state.map((crumb) => <Crumb {...crumb} key={crumb.id} />)
				: null}
		</nav>
	);
};

export default Breadcrumbs;
