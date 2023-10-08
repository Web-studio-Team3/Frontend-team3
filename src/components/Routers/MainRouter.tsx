import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Market from "@pages/market";
import MarketItemPage from "@pages/marketItemPage";
import {
	Account,
	AccountAds,
	AccountLayout,
	AccountMessages,
	AccountReviews,
	AccountSettings,
} from "@pages/account";
import AccountSingleChat from "@pages/account/accountSingleChat";
import Error from "@pages/error";
import Login from "@pages/Login";
import Registration from "@pages/Registration";
import { CreateNewItem } from "@pages/CreateNewItem";
import routes from "../../constants/routes";

const MainRouter: FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Market />} />
				<Route
					path={routes.SINGLE_ADVERT}
					element={<MarketItemPage />}
				/>
				<Route
					path={routes.PROFILE}
					element={
						<AccountLayout
							type="my"
							component={<Account type="my" />}
						/>
					}
				>
					<Route index element={<AccountSettings />} />
					<Route
						path={routes.MESSAGES}
						element={<AccountMessages />}
					/>
					<Route
						path={routes.SINGLE_MESSAGE}
						element={
							<AccountSingleChat
								user={{
									first_name: "Егор",
									last_name: "Сашев",
									was_active_at: "4:20",
								}}
							/>
						}
					/>
					<Route
						path={routes.FAVORITES}
						element={
							<AccountAds
								type="favorite"
								title="Избранные объявления"
								subtitle="Здесь представленны все товары, которые тебе понравились"
							/>
						}
					/>
					<Route path={routes.REVIEWS} element={<AccountReviews />} />
					<Route
						path={routes.MY_ADS}
						element={
							<AccountAds type="my" title="Мои объявления" />
						}
					/>
				</Route>
				<Route
					path={routes.OTHER_USER_ACCOUNT}
					element={
						<AccountLayout
							type="another"
							component={<Account type="another" />}
						/>
					}
				>
					<Route
						index
						element={<AccountAds type="my" title="Объявления" />}
					/>
					<Route
						path={routes.OTHER_USER_REVIEWS}
						element={<AccountReviews />}
					/>
				</Route>
				<Route path="*" element={<Error />} />
				<Route path={routes.LOGIN} element={<Login />} />
				<Route path={routes.REGISTRATION} element={<Registration />} />
				<Route
					path={routes.CREATE_NEW_ITEM}
					element={<CreateNewItem />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default MainRouter;
