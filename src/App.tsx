import Account from "@pages/account/Account";
import AccountSettings from "@pages/account/accounteSettings/AccountSettings";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.module.scss";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<>main</>} />
				<Route path="/account/" element={<Account />}>
					<Route path="settings" element={<AccountSettings />} />
				</Route>
				<Route path="/market" element={<>market</>} />
				<Route path="/market-item" element={<>market-item</>} />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
