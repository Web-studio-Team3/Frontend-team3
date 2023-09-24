import { FC, useContext, useEffect, useState } from "react";
import { FavoriteIcon } from "@assets/icons/Icons";
import classNames from "classnames";
import cn from "classnames";
import { useLocation, useNavigate } from "react-router-dom";
import { BreadcrumbsContext, IBreadcrumbsContext } from "../../App";
import styles from "./ShopItem.module.scss";
import { Tooltip } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "src/Store/store";
import ItemApi from "@api/Item/Item";
import AccountApi from "@api/Account/Account";
import axios from "axios";
import photo from "./ad-image2.png";

export enum ShopItemSize {
	short = "Short",
	standart = "Standart",
}

export type ShopItemProps = {
	id?: number | string;
	image?: string;
	title: string;
	price?: number | string;
	information?: string;
	phoneCall?: boolean;
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
	const token = useSelector((state: RootState) => state.Auth.token);
	const items = useSelector((state: RootState) => state.Items.items);
	const [url, setUrl] = useState("");
	const [loading, setLoading] = useState(true);
	const currentItem = items.filter((item) => item.id === id);
	const state = useLocation().state;
	const path = `/advert/${id}`;
	const navigate = useNavigate();
	const { setBreadcrumbs } = useContext(
		BreadcrumbsContext
	) as IBreadcrumbsContext;
	const getPhoto = async () => {
		const data = await axios.get(
			`http://217.28.220.136:8000/api/picture_item_relations/item/${id}`
		);
		const url = await axios.get(
			`http://217.28.220.136:8000/api/pictures/${data.data[0].picture_id}`
		);
		setLoading(false);
		setUrl(url.data.picture_url);
	};

	const handleItemClick = () => {
		setBreadcrumbs({
			[path]: title,
		});
		navigate(path);
	};

	getPhoto();
	return (
		<div
			className={cn(styles[`item${size}`], styles.link)}
			onClick={handleItemClick}
		>
			<img src={`http://217.28.220.136:8000/${url}/`} alt="mock items" />
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
			<Tooltip
				title={
					token
						? ""
						: "Чтобы взаимодействовать с продавцом, Вам необходимо зарегистрироваться"
				}
			>
				<div className={styles[`buttonBlock${size}`]}>
					<button
						className={classNames(styles.button, styles.typeWrite)}
						disabled={token === null}
					>
						Написать
					</button>
					<button
						disabled={token === null}
						className={classNames(styles.button, styles.typeCall)}
					>
						Позвонить
					</button>
				</div>
			</Tooltip>
		</div>
	);
};
