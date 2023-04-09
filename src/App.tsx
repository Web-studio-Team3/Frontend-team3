import AccountLayout from "@pages/accountLayout";
import AccountReviews from "@pages/AccountReviews";
import { AnotherAccount, AccountAds } from "@pages/anotherAccount";
import { CreateNewItem } from "@pages/CreateNewItem";
import Error from "@pages/error";
import { LoginPage } from "@pages/LoginPage";
import Market from "@pages/market";
import { MyAccount, AccountMessages, AccountSettings } from "@pages/myAccount";
import AccountFavorites from "@pages/myAccount/accountFavorites";
import Registration from "@pages/Registration/Registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Market />} />
				<Route
					path="/account/me/"
					element={
						<AccountLayout type="my" component={<MyAccount />} />
					}
				>
					<Route index element={<AccountSettings />} />
					<Route path="messages" element={<AccountMessages />} />
					<Route path="favorites" element={<AccountFavorites />} />
					<Route path="reviews" element={<AccountReviews />} />
				</Route>
				<Route
					path="/account/id/"
					element={
						<AccountLayout
							type="another"
							component={<AnotherAccount />}
						/>
					}
				>
					<Route index element={<AccountAds />} />
					<Route path="reviews" element={<AccountReviews />} />
				</Route>
				<Route path="*" element={<Error />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/registration" element={<Registration />} />
				<Route
					path="/create-new-item-page"
					element={<CreateNewItem />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
