import { createContext, Dispatch, FC, SetStateAction, useState } from "react";
import MainRouter from "@components/Routers/MainRouter";

const MainLayout: FC = () => {
	const [breadcrumbs, setBreadcrumbs] = useState<Record<string, string>>({});
	return (
		<BreadcrumbsContext.Provider
			value={{
				breadcrumbs,
				setBreadcrumbs,
			}}
		>
			<MainRouter />
		</BreadcrumbsContext.Provider>
	);
};

export default MainLayout;

export interface IBreadcrumbsContext {
	breadcrumbs: Record<string, string>;
	setBreadcrumbs: Dispatch<SetStateAction<Record<string, string>>>;
}

export const BreadcrumbsContext = createContext<IBreadcrumbsContext | null>(
	null
);
