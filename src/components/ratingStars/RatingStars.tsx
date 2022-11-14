import { FC, useEffect, useState } from "react";
import { StarIcon } from "@assets/icons/Icons";
import classNames from "classnames";
import styles from "./RatingStars.module.scss";
import { RatingStarsProps } from "./RatingStars.props";

const RatingStars: FC<RatingStarsProps> = ({ currentRating }) => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
		new Array(5).fill(<></>)
	);

	useEffect(() => {
		const updatedArray = ratingArray.map((item: JSX.Element, i: number) => {
			return (
				<li
					key={i}
					className={classNames(styles.item, {
						[styles.itemFilled]: i < currentRating,
					})}
				>
					<StarIcon />
				</li>
			);
		});

		setRatingArray(updatedArray);
	}, [currentRating]);

	return (
		<ul className={styles.list}>
			{ratingArray.map((item, i) => (
				<span key={i}>{item}</span>
			))}
		</ul>
	);
};

export default RatingStars;
