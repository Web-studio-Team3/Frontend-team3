import { FC, memo } from "react";
import { StarIcon } from "@assets/icons/Icons";
import classNames from "classnames";
import styles from "./RatingStars.module.scss";
import { RatingStarsProps } from "./RatingStars.props";

const RatingStars: FC<RatingStarsProps> = memo(({ currentRating }) => {
	return (
		<ul className={styles.list}>
			{new Array(5).fill(<></>).map((item: JSX.Element, i: number) => {
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
			})}
		</ul>
	);
});

export default RatingStars;
