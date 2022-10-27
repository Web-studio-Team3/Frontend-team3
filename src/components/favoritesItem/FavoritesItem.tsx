import classNames from "classnames";
import styles from "./FavoritesItem.module.scss";
import { FavoritesItemProps } from "./FavoritesItem.props";

const FavoritesItem: React.FC<FavoritesItemProps> = ({
	image,
	title,
	price,
	information,
	phoneCall,
	days,
}) => {
	return (
		<div className={styles.item}>
			<img src={image} className={styles.image} alt="" />
			<div className={styles.info}>
				<p className={styles.title}>{title}</p>
				<p className={styles.price}>{price} ₽</p>
				<p className={styles.information}>{information}</p>
			</div>
			<div className={styles.buttonBlock}>
				<button className={classNames(styles.button, styles.typeWrite)}>
					Написать
				</button>
				<button
					disabled={!phoneCall}
					className={classNames(styles.button, styles.typeCall)}
				>
					Позвонить
				</button>
				<p className={styles.text}>{days}</p>
			</div>
		</div>
	);
};

export default FavoritesItem;
