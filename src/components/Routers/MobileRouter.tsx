import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { mobileRoutes } from "../../constants/routes";
import WithBottomNavigator from "@components/WithBottomNavigator";
import Error from "@pages/error";
import Login from "@pages/common/Login";
import Registration from "@pages/common/Registration";
import AuthRoute from "@components/Routers/AuthRoute";
import Market from "@pages/mobile/market";

const MobileRouter: FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<AuthRoute>
							<WithBottomNavigator />
						</AuthRoute>
					}
				>
					<Route index element={<Market />} />
					<Route
						path={mobileRoutes.PROFILE}
						element={<p style={{ color: "white" }}>profile</p>}
					/>
					<Route
						path={mobileRoutes.REVIEWS}
						element={<p style={{ color: "white" }}>reviews</p>}
					/>
					<Route
						path={mobileRoutes.MY_ADS}
						element={<p style={{ color: "white" }}>my ads</p>}
					/>
					<Route
						path={mobileRoutes.FAVORITES}
						element={<p style={{ color: "white" }}>favorite ads</p>}
					/>
					<Route
						path={mobileRoutes.MESSAGES}
						element={<p style={{ color: "white" }}>messages</p>}
					/>
					<Route
						path={mobileRoutes.CREATE_NEW_ITEM}
						element={
							<p style={{ color: "white" }}>
								create new item page
							</p>
						}
					/>
				</Route>
				<Route path="*" element={<Error />} />
				<Route path={mobileRoutes.LOGIN} element={<Login />} />
				<Route
					path={mobileRoutes.REGISTRATION}
					element={<Registration />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default MobileRouter;
