import { FC } from "react";
import ReviewCard from "../reviewCard";
import styles from "./ReviewList.module.scss";

const ReviewList: FC = () => {
	return (
		<ul className={styles.list}>
			<ReviewCard
				id={1}
				userName="Вася"
				ad="Худи оверсайз"
				reviewText="Очень ответсвенный продавец, хорошая коммуникация по сделкам, внимательная и хорошая упаковка товара. "
				rate={5}
			/>
			<ReviewCard
				id={2}
				userName="Иван"
				ad="Iphone 11"
				reviewText="Телефон полностью соответствует описанию, только коробка пришла помятой"
				rate={4}
			/>
		</ul>
	);
};

export default ReviewList;
