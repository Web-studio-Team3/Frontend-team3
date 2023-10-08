import { FC, useContext, useState } from "react";
import { ArrowControlIcon, FavoriteIcon } from "@assets/icons/Icons";
import ItemImage from "@assets/img/ad-image1.png";
import Breadcrumbs from "@components/breadcrumbs/Breadcrumbs";
import Header from "@components/header";
import { ShopItemSize } from "@components/ShopItem";
import ShopItemList from "@components/ShopItemList";
import UserCard from "@components/userCard/UserCard";
import Categories from "@pages/market/components/Categories";
import { marketItemsMock } from "../../mocks/marketItemsMock";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
import styles from "./MarketItemPage.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "src/Store/store";
import { Tooltip } from "antd";
import {
	BreadcrumbsContext,
	IBreadcrumbsContext,
} from "@pages/Layouts/MainLayout/MainLayout";

const MarketItemPage: FC = () => {
	const token = useSelector((state: RootState) => state.Auth.token);
	const [currentCategory, replaceCategory] = useState("");
	const user = {
		name: "Шарик",
		surname: "Борисович",
	};
	const path = `/account/id`;
	const navigate = useNavigate();
	const { setBreadcrumbs, breadcrumbs } = useContext(
		BreadcrumbsContext
	) as IBreadcrumbsContext;

	const handleItemClick = () => {
		setBreadcrumbs({
			[path]: `${user.name} ${user.surname}`,
		});
		navigate(path);
	};

	return (
		<>
			<Header />
			<main className={styles.layout}>
				<div className={cn(styles.body, "container")}>
					<Breadcrumbs additionalBreadcrumbs={breadcrumbs} />
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
										className={styles.currentImage}
										width={378}
										height={291}
									/>
									<div className={styles.imagePointers}>
										<span
											className={cn(
												styles.pointer,
												styles.pointerActive
											)}
										/>
										<span className={styles.pointer} />
										<span className={styles.pointer} />
									</div>
									<div className={styles.imageThumbnails}>
										<button
											className={styles.controlButton}
										>
											<ArrowControlIcon
												className={cn(
													styles.arrow,
													styles.arrowLeft
												)}
											/>
										</button>
										<div className={styles.thumbnailsBlock}>
											<img
												src={ItemImage}
												alt="thumbnail"
												className={styles.thumbnail}
												width={85}
												height={66}
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
										<button
											className={styles.controlButton}
										>
											<ArrowControlIcon
												className={cn(
													styles.arrow,
													styles.arrowRight
												)}
											/>
										</button>
									</div>
								</div>
								<div className={styles.description}>
									<p className={styles.heading}>Описание:</p>
									<p className={styles.text}>
										Продам айфон 12. Использовался 7
										месяцев, идеальное состояние, 512 гб
										памяти, синий цвет
									</p>
								</div>
								<div className={styles.features}>
									<p className={styles.heading}>
										Характеристики:
									</p>
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
									<div className={styles.favoriteBlock}>
										<button
											className={styles.favoriteButton}
										>
											<FavoriteIcon />
										</button>
										<p
											className={cn(
												styles.text,
												styles.textSmall
											)}
										>
											В избранное
										</p>
									</div>
									<p
										className={cn(
											styles.text,
											styles.textSmall
										)}
									>
										<span className={styles.textKey}>
											Размещено:
										</span>{" "}
										вчера в 18:32
									</p>
								</div>
								<Tooltip
									title={
										token
											? ""
											: "Чтобы взаимодействовать с продавцом, Вам необходимо зарегистрироваться"
									}
								>
									<div className={styles.buttonBlock}>
										<button
											className={styles.button}
											disabled={token === null}
										>
											Написать
										</button>
										<button
											disabled={token === null}
											className={cn(
												styles.button,
												styles.buttonPurple
											)}
										>
											Позвонить
										</button>
									</div>
								</Tooltip>
								<button
									className={styles.cardLink}
									onClick={handleItemClick}
								>
									<UserCard
										type="another"
										size="s"
										reviewsCount={1}
										userRating={4}
									/>
								</button>
							</div>
							<div className={styles.similarAdverts}>
								<p
									className={cn(
										styles.heading,
										styles.headingLarge
									)}
								>
									Похожие объявления:
								</p>
								<ShopItemList
									itemList={marketItemsMock.slice(
										marketItemsMock.length / 2
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
