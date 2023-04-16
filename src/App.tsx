import AccountLayout from "@pages/accountLayout";
import AccountReviews from "@pages/AccountReviews";
import { AnotherAccount, AccountAds } from "@pages/anotherAccount";
import { CreateNewItem } from "@pages/CreateNewItem";
import Error from "@pages/error";
import Login from "@pages/Login/Login";
import Market from "@pages/market";
import { MyAccount, AccountMessages, AccountSettings } from "@pages/myAccount";
import AccountFavorites from "@pages/myAccount/accountFavorites";
import Registration from "@pages/Registration/Registration";
import AccountSingleChat from "@pages/myAccount/accountSingleChat";
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
				<Route path="/login" element={<Login />} />
				<Route path="/registration" element={<Registration />} />
				<Route path="/login" element={<Registration />} />
				<Route
					path="/create-new-item-page"
					element={<CreateNewItem />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
