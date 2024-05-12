import { call, put, takeEvery, select } from "redux-saga/effects";
import { Actions } from "../../Store/actions";
import AccountApi from "@api/Account/Account";
import { iApi } from "@api/Account/types";
import { PayloadAction } from "@reduxjs/toolkit";
import { ResponseGenerator } from "@utils/commonTypes";

const GetUser = function* (action: PayloadAction<iApi.igetUser>) {
	try {
		put(Actions.Auth.getUserState("loading"));
		const user: ResponseGenerator = yield call(AccountApi.getUser, {
			id: action.payload.user_id,
			token: action.payload.jwt_token,
		});
		yield put(Actions.User.setUser(user.data));
		const user_picture_id: string = yield select(
			(state) => state.User.user?.picture_id
		);
		if (!user_picture_id) throw new Error();
		const user_photo: ResponseGenerator = yield call(AccountApi.getPhoto, {
			id: user_picture_id,
			token: action.payload.jwt_token,
		});
		yield put(Actions.User.setUserPicture(user_photo.data.picture_url));
		yield put(
			Actions.Auth.setData({
				jwt_token: action.payload.jwt_token,
				user_id: action.payload.user_id,
			})
		);
		put(Actions.Auth.getUserState("success"));
	} catch (e) {
		put(Actions.User.eraseUser());
		put(Actions.Auth.eraseData());
		sessionStorage.clear();
		document.location.href = "/";
		put(Actions.Auth.getUserState("error"));
	}
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
	yield takeEvery(Actions.Auth.getUser, GetUser);
}
