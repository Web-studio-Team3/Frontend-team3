import { Account, AccountMessages, AccountSettings } from "@pages/account";
import Error from "@pages/error";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<>main</>} />
				<Route path="/account/" element={<Account />}>
					<Route index element={<AccountSettings />} />
					<Route path="settings" element={<AccountSettings />} />
					<Route path="messages" element={<AccountMessages />} />
				</Route>
				<Route path="/market" element={<>market</>} />
				<Route path="/market-item" element={<>market-item</>} />
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
