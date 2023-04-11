import { FC } from "react";
import { IBreadCrumbsLocationState } from "@components/breadcrumbs/Breadcrumbs";
import classNames from "classnames";
import cn from "classnames";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import styles from "./ShopItem.module.scss";

export enum ShopItemSize {
	short = "Short",
	standart = "Standart",
}

export type ShopItemProps = {
	id: number | string;
	image: string;
	title: string;
	price: number;
	information: string;
	phoneCall: boolean;
	size?: ShopItemSize;
};

export const ShopItem: FC<ShopItemProps> = ({
	id,
	image,
	title,
	price,
	information,
	phoneCall,
	size = ShopItemSize.standart,
}) => {
	const state = useLocation().state as IBreadCrumbsLocationState[];
	console.log(state);
	const path = useLocation().pathname + `advert/${id}`;
	const navigate = useNavigate();

	const handleItemClick = () => {
		const newState = [
			{ id: v4(), path: "/", title: "Объявления" },
			{ id: v4(), path, title },
		];
		console.log(newState);
		navigate(path, {
			state: newState,
		});
	};

	return (
		<div
			className={cn(styles[`item${size}`], styles.link)}
			onClick={handleItemClick}
		>
			<img src={image} alt="" />
			<div className={styles.info}>
				<p className={styles.title}>{title}</p>
				<p className={styles.price}>{price} ₽</p>
				{size === ShopItemSize.standart ? (
					<p className={styles.information}>{information}</p>
				) : null}
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
