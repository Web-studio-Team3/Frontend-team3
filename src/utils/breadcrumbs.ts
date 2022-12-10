import { IBreadCrumbsLocationState } from "@components/breadcrumbs/Breadcrumbs";

// state - массив хлебных крошек
// route - url нового breadcrumb
export const isContainRoutes = (
	state: IBreadCrumbsLocationState[],
	route: string
): boolean => state.some(({ path }) => path === route);

// state - массив хлебных крошек
// url - URL страницы, содержащейся в state, на которую осуществляется переход
export const removeRemainingCrumbs = (
	state: IBreadCrumbsLocationState[],
	url: string
): IBreadCrumbsLocationState[] => {
	const index = state.findIndex(({ path }) => path === url);
	return state.slice(0, index);
};
