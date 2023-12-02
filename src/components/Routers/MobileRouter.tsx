import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< Updated upstream
import { mobileRoutes } from "../../constants/routes";
import MobileLayout from "@pages/layouts/MobileLayout";
=======
import { desktopRoutes, mobileRoutes } from "../../constants/routes";
import WithBottomNavigator from "@components/WithBottomNavigator";
import Error from "@pages/error";
import Login from "@pages/common/Login";
import Registration from "@pages/common/Registration";
import AuthRoute from "@components/Routers/AuthRoute";
import { AccountMobile } from "@pages/mobile";
import { AccountMessages, AccountReviews } from "@pages/desktop/account";
import AccountMessagesMobile from "@pages/mobile/accountMessagesMobile";
import AccountReviewsMobile from "@pages/mobile/accountReviewsMobile";
import AccountSingleChatMobile from "@pages/mobile/accountSingleChatMobile";
>>>>>>> Stashed changes

const MobileRouter: FC = () => {
	return (
		<BrowserRouter>
			<Routes>
<<<<<<< Updated upstream
				<Route path="/" element={<MobileLayout />}>
=======
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
>>>>>>> Stashed changes
					<Route
						index
						element={<p style={{ color: "white" }}>main</p>}
					/>
					<Route
						path={mobileRoutes.PROFILE}
						element={<AccountMobile type="my" />}
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
			</Routes>
		</BrowserRouter>
	);
};

export default MobileRouter;
