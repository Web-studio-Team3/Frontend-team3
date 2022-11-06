import adImage1 from "@assets/img/ad-image1.png";
import adImage2 from "@assets/img/ad-image2.png";
import adImage3 from "@assets/img/ad-image3.png";
import FavoritesItem from "./../favoritesItem";
import { FavoritesItemProps } from "./../favoritesItem/FavoritesItem.props";
import styles from "./FavoritesList.module.scss";

const FavoritesList = (): JSX.Element => {
	const ads = [
		{
			id: "1",
			image: adImage1,
			title: "Iphone 12 512 gb",
			price: 48990,
			information:
				"Продам айфон 13. Использовался 7 месяцев, идеальное состояние... ",
			phoneCall: true,
			days: "15 дней назад",
		},
		{
			id: "2",
			image: adImage2,
			title: "MacBook Air 2020",
			price: 87990,
			information:
				"Продам макбук 2020. Мощный аппарат, в хорошем состоянии, не пожалеете... ",
			phoneCall: false,
			days: "31 день назад",
		},
		{
			id: "3",
			image: adImage3,
			title: "Iphone 12 512 gb",
			price: 4990,
			information: "Очень крутые аирподсы. Никаких проводов! ",
			phoneCall: true,
			days: "124 дня назад",
		},
	];

	const renderFavorites = (ads: Array<FavoritesItemProps>): JSX.Element => {
		return (
			<>
				{ads.map(({ id, ...props }) => {
					return <FavoritesItem key={id} id={id} {...props} />;
				})}
			</>
		);
	};

	const content = ads.length > 0 ? renderFavorites(ads) : null;

	return <ul className={styles.section}>{content}</ul>;
};

export default FavoritesList;
