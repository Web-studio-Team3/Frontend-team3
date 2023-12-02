import { FC } from "react";
import { Outlet } from "react-router-dom";
import BottomNavigator from "./BottomNavigator";

const WithBottomNavigator: FC = () => {
	return (
		<>
			<Outlet />
			<BottomNavigator />
		</>
	);
};

export default WithBottomNavigator;
