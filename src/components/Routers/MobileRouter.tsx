import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { desktopRoutes, mobileRoutes } from "../../constants/routes";
import WithBottomNavigator from "@components/WithBottomNavigator";
import Error from "@pages/error";
import Login from "@pages/common/Login";
import Registration from "@pages/common/Registration";
import { AccountMobile } from "@pages/mobile";
import AccountMessagesMobile from "@pages/mobile/accountMessagesMobile";
import AccountReviewsMobile from "@pages/mobile/accountReviewsMobile";
import AccountSingleChatMobile from "@pages/mobile/accountSingleChatMobile";
import AuthRoute from "@components/Routers/AuthRoute";
import BurgerMenu from "@components/mobile/burgerMenu";
import AccountSettingsMobile from "@pages/mobile/accountSettingsMobile";
import SettingsMessagesMobile from "@pages/mobile/accountSettingsMobile/settingsMessagesMobile";
import SettingsNotificationsMobile from "@pages/mobile/accountSettingsMobile/settingsNotificationsMobile";

const MobileRouter: FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path={mobileRoutes.SINGLE_MESSAGE}
					element={
						<AccountSingleChatMobile
							user={{
								first_name: "Егор",
								last_name: "Сашев",
								was_active_at: "4:20",
							}}
						/>
					}
				/>
				<Route
					path={mobileRoutes.SETTINGS_ADDRESS}
					element={<p style={{ color: "white" }}>SETTINGS_ADDRESS</p>}
				/>
				<Route
					path={mobileRoutes.SETTINGS_EMAIL}
					element={<p style={{ color: "white" }}>SETTINGS_EMAIL</p>}
				/>
				<Route
					path={mobileRoutes.SETTINGS_PHONE}
					element={<p style={{ color: "white" }}>SETTINGS_PHONE</p>}
				/>
				<Route
					path={mobileRoutes.SETTINGS_NOTIFICATIONS}
					element={<SettingsNotificationsMobile />}
				/>
				<Route
					path={mobileRoutes.SETTINGS_MESSAGES}
					element={<SettingsMessagesMobile />}
				/>
				<Route
					path={mobileRoutes.SETTINGS_DELIVERY}
					element={
						<p style={{ color: "white" }}>SETTINGS_DELIVERY</p>
					}
				/>
				<Route
					path={mobileRoutes.SETTINGS_CALLS}
					element={<p style={{ color: "white" }}>SETTINGS_CALLS</p>}
				/>
				<Route
					path={mobileRoutes.SETTINGS_BLACKLIST}
					element={
						<p style={{ color: "white" }}>SETTINGS_BLACKLIST</p>
					}
				/>
				<Route
					path={mobileRoutes.SETTINGS_POLICY}
					element={<p style={{ color: "white" }}>SETTINGS_POLICY</p>}
				/>
				<Route
					path={mobileRoutes.REVIEWS}
					element={<AccountReviewsMobile />}
				/>
				<Route
					path="/"
					element={
						<AuthRoute>
							<WithBottomNavigator />
						</AuthRoute>
					}
				>
					<Route
						index
						element={<p style={{ color: "white" }}>main</p>}
					/>
					<Route
						path={mobileRoutes.PROFILE}
						element={<AccountMobile type="my" />}
					/>
					<Route
						path={mobileRoutes.SETTINGS}
						element={<AccountSettingsMobile />}
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
						element={<AccountMessagesMobile />}
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
