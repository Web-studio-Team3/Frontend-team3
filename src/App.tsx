import { createContext, useState } from "react";
import {
	Account,
	AccountMessages,
	AccountSettings,
	AccountAds,
	AccountReviews,
	AccountLayout,
} from "@pages/account";
import AccountSingleChat from "@pages/account/accountSingleChat";
import { CreateNewItem } from "@pages/CreateNewItem";
import Error from "@pages/error";
import Login from "@pages/Login/Login";
import Market from "@pages/market";
import MarketItemPage from "@pages/marketItemPage/MarketItemPage";
import Registration from "@pages/Registration/Registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export interface IBreadcrumbsContext {
	breadcrumbs: Record<string, string>;
	setBreadcrumbs: React.Dispatch<
		React.SetStateAction<Record<string, string>>
	>;
}

export const BreadcrumbsContext = createContext<IBreadcrumbsContext | null>(
	null
);

function App() {
	const [breadcrumbs, setBreadcrumbs] = useState<Record<string, string>>({});

	return (
		<BreadcrumbsContext.Provider
			value={{
				breadcrumbs,
				setBreadcrumbs,
			}}
		>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Market />} />
					<Route path="/advert/:id" element={<MarketItemPage />} />
					<Route
						path="/account/me/"
						element={
							<AccountLayout
								type="my"
								component={<Account type="my" />}
							/>
						}
					>
						<Route index element={<AccountSettings />} />
						<Route path="messages" element={<AccountMessages />} />
						<Route
							path="messages/:id"
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
							path="favorites"
							element={
								<AccountAds
									type="favorite"
									title="Избранные объявления"
									subtitle="Здесь представленны все товары, которые тебе понравились"
								/>
							}
						/>
						<Route path="reviews" element={<AccountReviews />} />
						<Route
							path="my-ads"
							element={
								<AccountAds type="my" title="Мои объявления" />
							}
						/>
					</Route>
					<Route
						path="/account/id/"
						element={
							<AccountLayout
								type="another"
								component={<Account type="another" />}
							/>
						}
					>
						<Route
							index
							element={
								<AccountAds type="my" title="Объявления" />
							}
						/>
						<Route path="reviews" element={<AccountReviews />} />
					</Route>
					<Route path="*" element={<Error />} />
					<Route path="/login" element={<Login />} />
					<Route path="/registration" element={<Registration />} />
					<Route path="/login" element={<Registration />} />
					<Route
						path="/create-new-item-page"
						element={<CreateNewItem />}
					/>
				</Routes>
			</BrowserRouter>
		</BreadcrumbsContext.Provider>
	);
}

export default App;
