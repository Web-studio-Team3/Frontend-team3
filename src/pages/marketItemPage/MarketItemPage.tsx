import { FC, useState } from "react";
import { FavoriteIcon } from "@assets/icons/Icons";
import ItemImage from "@assets/img/ad-image1.png";
import Breadcrumbs from "@components/breadcrumbs/Breadcrumbs";
import Header from "@components/header";
import { ShopItemSize } from "@components/ShopItem";
import ShopItemList from "@components/ShopItemList";
import UserCard from "@components/userCard/UserCard";
import Categories from "@pages/market/components/Categories";
import { MarketItems } from "@pages/market/components/Items/marketItems";
import cn from "classnames";
import styles from "./MarketItemPage.module.scss";

const MarketItemPage: FC = () => {
	const [currentCategory, replaceCategory] = useState("");
	return (
		<>
			<Header />
			<main className={styles.layout}>
				<div className={cn(styles.body, "container")}>
					<Breadcrumbs />
					<div className={styles.wrapper}>
						<Categories
							currentCategory={currentCategory}
							actionCategory={replaceCategory}
						/>
						<div className={styles.content}>
							<div className={styles.itemInfo}>
								<div className={styles.photoBlock}>
									<img
										src={ItemImage}
										alt="Iphone 12"
										className={styles.CurrentImage}
									/>
									<div className={styles.imagePointers}>
										<span className={styles.pointer} />
										<span className={styles.pointer} />
										<span className={styles.pointer} />
									</div>
									<div className={styles.imageThumbnails}>
										<img
											src={ItemImage}
											alt="thumbnail"
											className={styles.thumbnail}
										/>
										<img
											src={ItemImage}
											alt="thumbnail"
											className={styles.thumbnail}
										/>
										<img
											src={ItemImage}
											alt="thumbnail"
											className={styles.thumbnail}
										/>
									</div>
								</div>
								<div className={styles.description}>
									<p className={styles.heading}>Описание</p>
									<p className={styles.text}></p>
								</div>
								<div className={styles.features}>
									<p className={styles.heading}></p>
									<p className={styles.text}>
										<span className={styles.textKey}>
											Состояние:
										</span>{" "}
										Новое
									</p>
									<p className={styles.text}>
										<span className={styles.textKey}>
											Производитель:
										</span>{" "}
										Apple
									</p>
									<p className={styles.text}>
										<span className={styles.textKey}>
											Модель:
										</span>{" "}
										Iphone 12
									</p>
									<p className={styles.text}>
										<span className={styles.textKey}>
											Встроенная память:
										</span>{" "}
										512 ГБ
									</p>
									<p className={styles.text}>
										<span className={styles.textKey}>
											Цвет:
										</span>{" "}
										синий
									</p>
									<p className={styles.text}>
										<span className={styles.textKey}>
											Оперативная память:
										</span>{" "}
										4 ГБ
									</p>
								</div>
								<div className={styles.locationBlock}>
									<p className={styles.heading}>
										Местоположение:
									</p>
									<p className={styles.text}>Общежитие 7</p>
								</div>
							</div>
							<div className={styles.additionalInfo}>
								<p
									className={cn(
										styles.heading,
										styles.headingLarge
									)}
								>
									Iphone 12 512 gb
								</p>
								<p
									className={cn(
										styles.text,
										styles.textPrice
									)}
								>
									48.990p
								</p>
								<div className={styles.favorite}>
									<FavoriteIcon />
									<p className={styles.text}>В избранное</p>
									<p className={styles.text}>
										<span className={styles.textKey}>
											Размещено:
										</span>{" "}
										вчера в 18:32
									</p>
								</div>
								<div className={styles.buttonBlock}>
									<button className={styles.button}>
										Написать
									</button>
									<button
										className={cn(
											styles.button,
											styles.buttonPurple
										)}
									>
										Позвонить
									</button>
								</div>
								<UserCard type="another" />
							</div>
							<div className={styles.similarAdverts}>
								<p
									className={cn(
										styles.heading,
										styles.headingLarge
									)}
								>
									Похожие объявления
								</p>
								<ShopItemList
									itemList={MarketItems.slice(
										MarketItems.length / 2
									)}
									itemsShort={ShopItemSize.short}
								/>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default MarketItemPage;