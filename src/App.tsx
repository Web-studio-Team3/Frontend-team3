import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Actions } from "./Store/actions";
import MainLayout from "@pages/layouts/MainLayout";
import MobileLayout from "@pages/layouts/MobileLayout";

function App() {
	const dispatch = useDispatch();
	const [view, setView] = useState<"mobile" | "main">("main");

	useEffect(() => {
		if (window.innerWidth < 800) setView("mobile");
		const listener = () => {
			window.innerWidth < 800 ? setView("mobile") : setView("main");
		};
		window.addEventListener("resize", listener);

		return () => {
			dispatch(Actions.Items.getItems());
			window.removeEventListener("resize", listener);
		};
	}, []);

	return <>{view === "main" ? <MainLayout /> : <MobileLayout />}</>;
}

export default App;
