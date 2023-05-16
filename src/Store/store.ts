import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagas from "redux-saga";
import rootSaga from "../Saga/rootSaga";
import rootReducer from "./rootReducer";

const sagaMiddleware = createSagas();
const middleware = [
	...getDefaultMiddleware({
		thunk: false,
		serializableCheck: false,
		immutableCheck: true,
	}),
	sagaMiddleware,
];

export const store = configureStore({
	reducer: rootReducer,
	middleware,
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
