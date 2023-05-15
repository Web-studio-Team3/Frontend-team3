import { FC, useContext } from "react";
import { FavoriteIcon } from "@assets/icons/Icons";
import classNames from "classnames";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
import { BreadcrumbsContext, IBreadcrumbsContext } from "../../App";
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
	const path = `/advert/${id}`;
	const navigate = useNavigate();
	const { setBreadcrumbs } = useContext(
		BreadcrumbsContext
	) as IBreadcrumbsContext;

	const handleItemClick = () => {
		setBreadcrumbs({
			[path]: title,
		});
		navigate(path);
	};

	return (
		<div
			className={cn(styles[`item${size}`], styles.link)}
			onClick={handleItemClick}
		>
			<img src={image} alt="" />
			{size === ShopItemSize.short ? (
				<div className={styles.imagePointers}>
					<span
						className={cn(styles.pointer, styles.pointerActive)}
					/>
					<span className={styles.pointer} />
					<span className={styles.pointer} />
				</div>
			) : null}
			<div className={styles.info}>
				<p className={styles.title}>{title}</p>
				<p className={styles.price}>{price} ₽</p>

				{size === ShopItemSize.standart ? (
					<p className={styles.information}>{information}</p>
				) : (
					<p className={styles.date}>Сегодня, 15:40</p>
				)}
				<button className={styles.button}>
					<FavoriteIcon />
				</button>
			</div>
			<div className={styles[`buttonBlock${size}`]}>
				<button
					className={classNames(styles.button, styles.typeWrite)}
					disabled={localStorage.getItem("token") === null}
				>
					Написать
				</button>
				<button
					disabled={localStorage.getItem("token") === null}
					className={classNames(styles.button, styles.typeCall)}
				>
					Позвонить
				</button>
			</div>
		</div>
	);
};
