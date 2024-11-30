import { FavoriteIcon } from "@assets/icons/Icons";
import { FC, useContext, useEffect, useRef, useState } from "react";
// import ItemImage from "@assets/img/ad-image1.png";
import Request from "@api/Request";
import Button from "@components/Button";
import { ShopItemSize } from "@components/ShopItem";
import ShopItemList from "@components/ShopItemList";
import Breadcrumbs from "@components/breadcrumbs/Breadcrumbs";
import Footer from "@components/footer";
import Header from "@components/header";
import PhotoCarousel from "@components/photoCarousel/PhotoCarousel";
import UserCard from "@components/userCard/UserCard";
import Categories from "@pages/desktop/market/components/Categories";
import {
	BreadcrumbsContext,
	IBreadcrumbsContext,
} from "@pages/layouts/MainLayout/MainLayout";
import Input from "@ui-kit/Input";
import { Modal, Tooltip } from "antd";
import axios from "axios";
import cn from "classnames";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../../Store/store";
import { marketItemsMock } from "../../../mocks/marketItemsMock";
import styles from "./MarketItemPage.module.scss";

const MarketItemPage: FC = () => {
	const [visible, setVisible] = useState(false);
	const [url, setUrl] = useState("");
	const token = useSelector((state: RootState) => state.Auth.token);
	const [currentCategory, replaceCategory] = useState("");
	const user = {
		name: "Шарик",
		surname: "Борисович",
	};
	const changeCost = useRef<any>(null);
	const changeDesc = useRef<any>(null);
	const changeTitle = useRef<any>(null);
	const params = useParams();

	const path = `/account/id`;
	const navigate = useNavigate();
	const { setBreadcrumbs, breadcrumbs } = useContext(
		BreadcrumbsContext
	) as IBreadcrumbsContext;
	const CurrenItem = useSelector((state: RootState) =>
		state.Items.items?.items.filter((item) => item.id === params.id)
	);

	const getPhoto = async () => {
		const data = await axios.get(
			`http://217.28.220.136:8000/api/picture_item_relations/item/${params.id}`
		);
		const url = await axios.get(
			`http://217.28.220.136:8000/api/pictures/${data.data[0].picture_id}`
		);
		setUrl(url.data.picture_url);
	};
	useEffect(() => {
		getPhoto();
	}, []);
	if (!CurrenItem || !CurrenItem[0]) return null;
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
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									cursor="pointer"
									onClick={() => setVisible(true)}
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M18.1465 4.74791C17.5826 4.18461 16.6685 4.18461 16.1046 4.74791L15.5616 5.29089L18.6784 8.40774L19.2217 7.86451C19.785 7.30174 19.7856 6.38702 19.2217 5.82304L18.1465 4.74791ZM17.7412 9.34497L14.6244 6.22812L9.50147 11.351C9.27368 11.5788 9.14242 11.8852 9.13427 12.2066L9.0681 14.8675H11.6988C12.0318 14.8675 12.351 14.7352 12.5865 14.4997L17.7412 9.34497ZM15.1678 3.81018C16.2492 2.72994 18.0019 2.72994 19.0833 3.81018L20.1589 4.88581C21.2402 5.96713 21.2406 7.72121 20.1586 8.80199L13.5237 15.4369C13.04 15.9207 12.3837 16.193 11.6988 16.193H8.3887C8.21007 16.193 8.03902 16.1209 7.91429 15.993C7.78957 15.8651 7.72174 15.6924 7.72618 15.5138L7.80924 12.1737C7.82589 11.5126 8.09579 10.8822 8.56425 10.4138L15.1678 3.81018ZM4.36939 4.54721C5.27312 3.57763 6.56078 3.03411 8.0835 3.03411H11.3874C11.7534 3.03411 12.0501 3.33082 12.0501 3.69683C12.0501 4.06284 11.7534 4.35955 11.3874 4.35955H8.0835C6.88908 4.35955 5.96634 4.77786 5.33896 5.45094C4.70678 6.12919 4.32544 7.11973 4.32544 8.34382V15.6903C4.32544 16.9152 4.70527 17.9056 5.33628 18.5835C5.96229 19.256 6.88468 19.6746 8.0835 19.6746H15.8806C17.0799 19.6746 18.0025 19.2559 18.6286 18.5835C19.2597 17.9056 19.6396 16.9152 19.6396 15.6903V12.131C19.6396 11.765 19.9363 11.4683 20.3023 11.4683C20.6683 11.4683 20.965 11.765 20.965 12.131V15.6903C20.965 17.1887 20.497 18.5218 19.5987 19.4866C18.6955 20.4568 17.4073 21 15.8806 21H8.0835C6.55722 21 5.26922 20.4567 4.36612 19.4866C3.46801 18.5218 3 17.1887 3 15.6903V8.34382C3 6.84458 3.47048 5.51162 4.36939 4.54721Z"
										fill="#FFF"
									/>
								</svg>
								{/* <button onClick={() => setVisible(true)}>
									Редактировать
								</button> */}
								<div className={styles.photoBlock}>
									<img
										src={`http://217.28.220.136:8000/${url}/`}
										alt="Iphone 12"
										className={styles.currentImage}
										width={378}
										height={291}
									/>
									<PhotoCarousel
										images={[
											`http://217.28.220.136:8000/${url}/`,
											`http://217.28.220.136:8000/${url}/`,
											`http://217.28.220.136:8000/${url}/`,
											`http://217.28.220.136:8000/${url}/`,
										]}
									/>
								</div>
								<div className={styles.description}>
									<p className={styles.heading}>Описание:</p>
									<p className={styles.text}>
										{CurrenItem[0].description}
									</p>
								</div>
								{/* <div className={styles.features}>
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
								</div> */}
								<div className={styles.locationBlock}>
									<p className={styles.heading}>
										Местоположение:
									</p>
									<p className={styles.text}>
										{CurrenItem[0].address}
									</p>
								</div>
							</div>
							<div className={styles.additionalInfo}>
								<p
									className={cn(
										styles.heading,
										styles.headingLarge
									)}
								>
									{CurrenItem[0].title}
								</p>
								<p
									className={cn(
										styles.text,
										styles.textPrice
									)}
								>
									{CurrenItem[0].cost}p
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
										Сегодня
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
			<Modal
				visible={visible}
				closable={true}
				onCancel={() => setVisible(false)}
				className={styles.modal}
				title="Редактирование товара"
				footer={null}
				centered
			>
				<div className={styles.modalChangeElement}>
					<span>Название:</span>
					<Input
						defaultValue={CurrenItem[0].title}
						ref={changeTitle}
						value={""}
					/>
				</div>
				<div className={styles.modalChangeElement}>
					<span>Цена:</span>
					<Input
						defaultValue={CurrenItem[0].cost}
						ref={changeCost}
						value={""}
					/>
				</div>
				<div className={styles.modalChangeElement}>
					<span>Описание:</span>
					<Input
						defaultValue={CurrenItem[0].description}
						ref={changeDesc}
						value={""}
					/>
				</div>
				<Button
					onClick={async () => {
						const token = sessionStorage.getItem("jwt_token");
						await Request.put(
							`items/${params.id}`,
							{
								category_id: CurrenItem[0].category_id,
								title: changeTitle.current.input.value,
								description: changeDesc.current.input.value,
								condition: CurrenItem[0].condition,
								address: CurrenItem[0].address,
								cost: changeCost.current.input.value,
								status: CurrenItem[0].item_status,
							},
							{
								headers: {
									Authorization: "Bearer " + token,
								},
							}
						);
						window.location.reload();
					}}
				>
					Сохранить изменения
				</Button>
			</Modal>
			<Footer />
		</>
	);
};

export default MarketItemPage;
