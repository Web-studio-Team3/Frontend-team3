import { FC } from "react";
import classNames from "classnames";
import styles from "./ShopItem.module.scss";

export enum ShopItemSize {
	short = "Short",
	standart = "Standart",
}

export type ShopItemProps = {
	image: string;
	title: string;
	price: number;
	information: string;
	phoneCall: boolean;
	size?: ShopItemSize;
};

export const ShopItem: FC<ShopItemProps> = ({
	image,
	title,
	price,
	information,
	phoneCall,
	size = ShopItemSize.standart,
}) => {
	return (
		<div className={styles[`item${size}`]}>
			<img src={image} alt="" />
			<div className={styles.info}>
				<p className={styles.title}>{title}</p>
				<p className={styles.price}>{price} ₽</p>
				<p className={styles.information}>{information}</p>
			</div>
			<div className={styles[`buttonBlock${size}`]}>
				<button className={classNames(styles.button, styles.typeWrite)}>
					Написать
				</button>
				<button
					disabled={!phoneCall}
					className={classNames(styles.button, styles.typeCall)}
				>
					Позвонить
				</button>
			</div>
		</div>
	);
};
