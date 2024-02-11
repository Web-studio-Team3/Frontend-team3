import { FC, useState } from "react";
import { FavoriteActiveIcon, FavoriteInactiveIcon } from "@assets/icons/Icons";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
import styles from "./ShopItem.module.scss";
import { Tooltip } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "src/Store/store";
import axios from "axios";
import Button from "@components/Button";

export enum ShopItemSize {
	short = "Short",
	shortXs = "ShortXs",
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
	onClick?: VoidFunction;
	isFavorite?: boolean;
};

export const ShopItem: FC<ShopItemProps> = ({
	id,
	image,
	title,
	price,
	information,
	phoneCall,
	size = ShopItemSize.standart,
	onClick,
	isFavorite,
}) => {
	const token = useSelector((state: RootState) => state.Auth.token);
	const [url, setUrl] = useState("");
	const [loading, setLoading] = useState(true);
	const path = `/advert/${id}`;
	const navigate = useNavigate();

	const isShortVariant =
		size === ShopItemSize.short || size === ShopItemSize.shortXs;
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
		if (onClick) {
			onClick();
		}
		navigate(path);
	};

	getPhoto();
	return (
		<div
			className={cn(styles[`item${size}`], styles.link)}
			onClick={handleItemClick}
		>
			<img
				src={url ? `http://217.28.220.136:8000/${url}/` : image}
				alt="mock items"
			/>
			{isShortVariant ? (
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
				<div className={styles.button}>
					<Button onClick={() => {}} variant="ghost" size="xs">
						{isFavorite ? (
							<FavoriteActiveIcon width={36} height={36} />
						) : (
							<FavoriteInactiveIcon />
						)}
					</Button>
				</div>
			</div>
			<Tooltip
				title={
					token
						? ""
						: "Чтобы взаимодействовать с продавцом, Вам необходимо зарегистрироваться"
				}
			>
				{!isShortVariant && (
					<div className={styles.buttonBlock}>
						<Button
							onClick={() => {}}
							variant="green"
							size="sm"
							disabled={token === null}
						>
							Написать
						</Button>
						<Button
							onClick={() => {}}
							size="sm"
							disabled={token === null}
						>
							Позвонить
						</Button>
					</div>
				)}
			</Tooltip>
		</div>
	);
};
