import styles from "./MarketItem.module.scss";

type MarketItemProps = {
	image: string;
	title: string;
	price: number;
	information: string;
	phoneCall: boolean;
};

const MarketItem: React.FC<MarketItemProps> = ({
	image,
	title,
	price,
	information,
	phoneCall,
}) => {
	return (
		<div className={styles.item}>
			<img src={image} alt="" />
			<div className={styles.info}>
				<p className={styles.title}>{title}</p>
				<p className={styles.price}>{price} ₽</p>
				<p className={styles.information}>{information}</p>
				<div className={styles.buttonBlock}>
					<button className={styles.button1}>
						Написать в телеграм
					</button>
					{phoneCall ? (
						<button className={styles.button2}>Позвонить</button>
					) : (
						<></>
					)}
				</div>
			</div>
		</div>
	);
};

export default MarketItem;
