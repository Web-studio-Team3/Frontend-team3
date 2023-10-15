import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Market from "@pages/desktop/market";
import MarketItemPage from "@pages/desktop/marketItemPage";
import {
	Account,
	AccountAds,
	AccountLayout,
	AccountMessages,
	AccountReviews,
	AccountSettings,
} from "@pages/desktop/account";
import AccountSingleChat from "@pages/desktop/account/accountSingleChat";
import Error from "@pages/error";
import Login from "@pages/common/Login";
import Registration from "@pages/common/Registration";
import { CreateNewItem } from "@pages/desktop/CreateNewItem";
import { desktopRoutes } from "../../constants/routes";

const MainRouter: FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Market />} />
				<Route
					path={desktopRoutes.SINGLE_ADVERT}
					element={<MarketItemPage />}
				/>
				<Route
					path={desktopRoutes.PROFILE}
					element={
						<AccountLayout
							type="my"
							component={<Account type="my" />}
						/>
					}
				>
					<Route index element={<AccountSettings />} />
					<Route
						path={desktopRoutes.MESSAGES}
						element={<AccountMessages />}
					/>
					<Route
						path={desktopRoutes.SINGLE_MESSAGE}
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
						path={desktopRoutes.FAVORITES}
						element={
							<AccountAds
								type="favorite"
								title="Избранные объявления"
								subtitle="Здесь представленны все товары, которые тебе понравились"
							/>
						}
					/>
					<Route
						path={desktopRoutes.REVIEWS}
						element={<AccountReviews />}
					/>
					<Route
						path={desktopRoutes.MY_ADS}
						element={
							<AccountAds type="my" title="Мои объявления" />
						}
					/>
				</Route>
				<Route
					path={desktopRoutes.OTHER_USER_ACCOUNT}
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
						path={desktopRoutes.OTHER_USER_REVIEWS}
						element={<AccountReviews />}
					/>
				</Route>
				<Route path="*" element={<Error />} />
				<Route path={desktopRoutes.LOGIN} element={<Login />} />
				<Route
					path={desktopRoutes.REGISTRATION}
					element={<Registration />}
				/>
				<Route
					path={desktopRoutes.CREATE_NEW_ITEM}
					element={<CreateNewItem />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default MainRouter;
