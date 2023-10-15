import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { mobileRoutes } from "../../constants/routes";
import MobileLayout from "@pages/layouts/MobileLayout";

const MobileRouter: FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MobileLayout />}>
					<Route
						index
						element={<p style={{ color: "white" }}>main</p>}
					/>
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
			</Routes>
		</BrowserRouter>
	);
};

export default MobileRouter;
