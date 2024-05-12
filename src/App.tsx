import ItemApi from "@api/Item/Item";
import {createContext, useEffect, useLayoutEffect, useState} from "react";
import {
	Account,
	AccountMessages,
	AccountSettings,
	AccountAds,
	AccountReviews,
	AccountLayout,
} from "@pages/account";
import AccountSingleChat from "@pages/account/accountSingleChat";
import { CreateNewItem } from "@pages/CreateNewItem";
import Error from "@pages/error";
import Login from "@pages/Login/Login";
import Market from "@pages/market";
import MarketItemPage from "@pages/marketItemPage/MarketItemPage";
import Registration from "@pages/Registration/Registration";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Actions } from "./Store/actions";
import { RootState } from "./Store/store";
import styles from './App.module.scss'
import CategoryPage from "@pages/placingAdd/CategoryPage";
import FillingForm from "@pages/placingAdd/FillingForm"


export interface IBreadcrumbsContext {
	breadcrumbs: Record<string, string>;
	setBreadcrumbs: React.Dispatch<
		React.SetStateAction<Record<string, string>>
	>;
}

export const BreadcrumbsContext = createContext<IBreadcrumbsContext | null>(
	null
);

function App() {
	const [breadcrumbs, setBreadcrumbs] = useState<Record<string, string>>({});
	const dispatch = useDispatch();
	const [pageLoading, setPageLoading] = useState(true);

	useLayoutEffect(() => {
		window.addEventListener('load', () => {
			setTimeout(() => {
				setPageLoading(false);
			}, 2000);
		});
	});

	useEffect(() => {
		return () => {
			dispatch(Actions.Items.getItems());
		};
	}, []);

	const authData = useSelector((state: RootState) => state.Auth);

	if (pageLoading) {
		return (
			<div className={styles.preloader}>
				<div className={styles.loader}></div>
			</div>
		);
	}

	return (
		<BreadcrumbsContext.Provider value={{ breadcrumbs, setBreadcrumbs }}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Market />} />
					<Route path="/advert/:id" element={<MarketItemPage />} />
					<Route path="/account/me/" element={<AccountLayout type="my" component={<Account type="my" />} />}>
						<Route index element={<AccountSettings />} />
						<Route path="messages" element={<AccountMessages />} />
						<Route path="messages/:id" element={<AccountSingleChat user={{ first_name: "Егор", last_name: "Сашев", was_active_at: "4:20" }} />} />
						<Route path="favorites" element={<AccountAds type="favorite" title="Избранные объявления" subtitle="Здесь представлены все товары, которые тебе понравились" />} />
						<Route path="reviews" element={<AccountReviews />} />
						<Route path="my-ads" element={<AccountAds type="my" title="Мои объявления" />} />
					</Route>
					<Route path="/account/id/" element={<AccountLayout type="another" component={<Account type="another" />} />}>
						<Route index element={<AccountAds type="my" title="Объявления" />} />
						<Route path="reviews" element={<AccountReviews />} />
					</Route>
					<Route path="*" element={<Error />} />
					<Route path="/login" element={<Login />} />
					<Route path="/registration" element={<Registration />} />
					<Route path="/create-new-item-page" element={<CreateNewItem />} />
					<Route path="/filling" element={<FillingForm />} />
					<Route path="/categories" element={<CategoryPage currentCategory="" actionCategory={() => {}} />} />

				</Routes>
			</BrowserRouter>
		</BreadcrumbsContext.Provider>
	);
}

export default App;
