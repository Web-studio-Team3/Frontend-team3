import React from "react";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { Actions } from "./../../Store/actions";
import AccountApi from "@api/Account/Account";
import { iApi } from "@api/Account/types";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "src/Store/store";
import { ResponseGenerator } from "src/Types/types";

const Authorization = function* (action: PayloadAction<iApi.Login>) {
	try {
		const login: ResponseGenerator = yield call(
			AccountApi.login,
			action.payload
		);
		yield put(Actions.Auth.setData(login.data));
		const user_id: string = yield select(
			(state: RootState) => state.Auth.user_id
		);
		const token: string = yield select(
			(state: RootState) => state.Auth.token
		);
		if (!user_id || !token) throw new Error();
		const user: ResponseGenerator = yield call(AccountApi.getUser, {
			id: user_id,
			token: token,
		});
		yield put(Actions.User.setUser(user.data));
		const user_picture_id: string = yield select(
			(state: RootState) => state.User.user?.picture_id
		);
		if (!user_picture_id) throw new Error();
		const user_photo: ResponseGenerator = yield call(AccountApi.getPhoto, {
			id: user_picture_id,
			token: token,
		});
		yield put(Actions.User.setUserPicture(user_photo.data.picture_url));
	} catch (e) {
		console.log("error");
	}
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
	yield takeEvery(Actions.Auth.authorization, Authorization);
}
