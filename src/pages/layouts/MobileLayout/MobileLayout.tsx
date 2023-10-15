import { FC } from "react";
import { Outlet } from "react-router-dom";
import BottomNavigator from "@components/BottomNavigator";

const MobileLayout: FC = () => {
	return (
		<>
			<Outlet />
			<BottomNavigator />
		</>
	);
};

export default MobileLayout;
