import { FC, useState } from "react";
import { FavoriteIcon } from "@assets/icons/Icons";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
import styles from "./ShopItemMobile.module.scss";
import { Tooltip } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "src/Store/store";
import Button from "@components/Button";
import { getBaseUrl } from "@utils/commonHelpers";

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

export const ShopItemMobile: FC<ShopItemProps> = ({
	id,
	image,
	title,
	price,
	information,
	phoneCall,
	size = ShopItemSize.standart,
}) => {
	const token = useSelector((state: RootState) => state.Auth.token);
	const [url, setUrl] = useState("");
	const [loading, setLoading] = useState(true);
	const path = `/advert/${id}`;
	const navigate = useNavigate();

	return (
		<div className={cn(styles[`item${size}`], styles.link)}>
			<img
				src={url ? `${getBaseUrl()}${url}/` : image}
				alt="mock items"
			/>
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
				<div className={styles.buttonWrapper}>
					<div>
						<p className={styles.title}>{title}</p>
						<p className={styles.price}>{price} ₽</p>
					</div>

					<div className={styles.button}>
						<Button onClick={() => {}} variant="ghost" size="xs">
							<FavoriteIcon width={15} height={15} />
						</Button>
					</div>
				</div>
				<div className={styles.dateWrapper}>
					{size === ShopItemSize.standart ? (
						<p className={styles.information}>{information}</p>
					) : (
						<p className={styles.date}>Сегодня, 15:40</p>
					)}
				</div>
			</div>
			<Tooltip
				title={
					token
						? ""
						: "Чтобы взаимодействовать с продавцом, Вам необходимо зарегистрироваться"
				}
			>
				<div className={styles[`buttonBlock${size}`]}>
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
			</Tooltip>
		</div>
	);
};
