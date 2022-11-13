import { FC } from "react";
import FavoritesList from "@pages/myAccount/accountFavorites/components/favoritesList";
import classNames from "classnames";
import styles from "./AccountFavorites.module.scss";

const AccountFavorites: FC = () => {
	return (
		<div className={styles.section}>
			<div className={styles.heading}>
				<div className={styles.title}>
					<p className={styles.text}>ИЗБРАННЫЕ ОБЪЯВЛЕНИЯ</p>
					<p className={classNames(styles.text, styles.textSubtitle)}>
						Здесь представленны все товары, которые тебе понравились
					</p>
				</div>
			</div>
			<div className={styles.content}>
				<FavoritesList />
			</div>
		</div>
	);
};

export default AccountFavorites;
