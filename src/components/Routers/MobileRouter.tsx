import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const MobileRouter: FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<p style={{ color: "white" }}>Mobile</p>}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default MobileRouter;
