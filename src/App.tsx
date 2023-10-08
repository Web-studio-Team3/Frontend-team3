import {
	createContext,
	Dispatch,
	SetStateAction,
	useEffect,
	useState,
} from "react";
import { useDispatch } from "react-redux";
import { Actions } from "./Store/actions";
import Router from "@components/Router";

export interface IBreadcrumbsContext {
	breadcrumbs: Record<string, string>;
	setBreadcrumbs: Dispatch<SetStateAction<Record<string, string>>>;
}

export const BreadcrumbsContext = createContext<IBreadcrumbsContext | null>(
	null
);

function App() {
	const [breadcrumbs, setBreadcrumbs] = useState<Record<string, string>>({});
	const dispatch = useDispatch();
	useEffect(() => {
		return () => {
			dispatch(Actions.Items.getItems());
		};
	}, []);

	return (
		<BreadcrumbsContext.Provider
			value={{
				breadcrumbs,
				setBreadcrumbs,
			}}
		>
			<Router />
		</BreadcrumbsContext.Provider>
	);
}

export default App;
