import classNames from "classnames";
import styles from "./marketItemShort.module.scss";

type marketItemShortProps = {
	image: string;
	title: string;
	price: number;
};

const marketItemShort: React.FC<marketItemShortProps> = ({
	image,
	title,
	price,
}) => {
	return (
		<div className={styles.item}>
			<img src={image} alt="" />
			<div className={styles.info}>
				<p className={styles.title}>{title}</p>
				<p className={styles.price}>{price} ₽</p>
			</div>
		</div>
	);
};

export default marketItemShort;
