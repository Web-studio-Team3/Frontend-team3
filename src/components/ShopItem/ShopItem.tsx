'@ts-ignore'
import { FC, useState, useEffect, MouseEvent } from "react"; // Добавлен useEffect\
import { FavoriteIcon } from "@assets/icons/Icons";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
import styles from "./ShopItem.module.scss";
import { Tooltip } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "src/Store/store";
import axios from "axios";
import Button from "@components/Button";
import {Button as ButtonAntd} from "antd"
import fb from './fallback.jpg'

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
	}) => {
	const token = useSelector((state: RootState) => state.Auth.token);
	const [active, setActive] = useState<boolean>(false)
	//const [url, setUrl] = useState("");
	const [pID, setId] = useState<null | string>(null);
	const [loading, setLoading] = useState(true);
	const path = `/advert/${id}`;
	const navigate = useNavigate();

	const isShortVariant =
		size === ShopItemSize.short || size === ShopItemSize.shortXs;

	useEffect(() => {
		const getPhoto = async () => {
			try {
				setLoading(true);


				const relationsResponse = await axios.get(
					`http://82.146.43.171:8000/api/picture_item_relations/item/${id}`
			);


				if (!relationsResponse.data?.length) {
					throw new Error("No images found");
				}


				const firstImageId = relationsResponse.data[0].picture_id;

				const resp = await axios.get(`http://82.146.43.171:8000/api/pictures/${firstImageId}`)

				if (!resp.data) throw new Error("No images found");

				setId(resp.data.picture_url)
			} catch (error) {
				console.error("Error loading image:", error);
				setId(null); // Сброс URL при ошибке
			} finally {
				setLoading(false);
			}
		};

		if (id) getPhoto();
	}, [id]); // Зависимость от ID

	const handleItemClick = () => {
		onClick?.();
		navigate(path);
	};

	return (
		<div
			className={cn(styles[`item${size}`], styles.link)}
			onClick={handleItemClick}
		>
			{/* Добавили обработку загрузки и ошибок */}
			{loading ? (
				<div className={styles.loader}>Loading...</div>
			) : (
				<img
					src={
						pID
						? `http://82.146.43.171:8000/${pID}`
						:fb // Добавили fallback
					}
					onError={
						(e) => ((e.target as any).src = fb)
					}
					alt={title}
				/>
			)}


			{isShortVariant && (
				<div className={styles.imagePointers}>
					<span className={cn(styles.pointer, styles.pointerActive)} />
					<span className={styles.pointer} />
					<span className={styles.pointer} />
				</div>
			)}

			<div className={styles.info}>
				<p className={styles.title}>{title}</p>
				<p className={styles.price}>{price} ₽</p>
				{size === ShopItemSize.standart ? (
					<p className={styles.information}>{information}</p>
				) : (
					<p className={styles.date}>Сегодня, 15:40</p>
				)}
				<div className={styles.button}>
					<ButtonAntd onClick={(e) => {
						e.stopPropagation()
						setActive((p) => !p)
					}} type='link' icon={<FavoriteIcon active={active} />}      />
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