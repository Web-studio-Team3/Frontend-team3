import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./styles/styles.scss";
import { store } from "./Store/store";
import CheckAuth from "./Containers/CheckAuth/CheckAuth";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<Provider store={store}>
		<React.StrictMode>
			<CheckAuth>
				<App />
			</CheckAuth>
		</React.StrictMode>
	</Provider>
);
