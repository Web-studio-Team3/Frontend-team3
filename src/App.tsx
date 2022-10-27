import AccountLayout from "@pages/accountLayout";
import { AnotherAccount, AccountAds } from "@pages/anotherAccount";
import Error from "@pages/error";
import Market from "@pages/market";
import { MyAccount, AccountMessages, AccountSettings } from "@pages/myAccount";
import AccountFavorites from "@pages/myAccount/accountFavorites";
import NavPage from "@pages/NavPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<NavPage />} />
				<Route
					path="/account/me/"
					element={
						<AccountLayout type="my" component={<MyAccount />} />
					}
				>
					<Route index element={<AccountSettings />} />
					<Route path="messages" element={<AccountMessages />} />
					<Route path="favorites" element={<AccountFavorites />} />
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
				</Route>
				<Route path="/market" element={<Market />} />
				<Route path="/market-item" element={<>market-item</>} />
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
