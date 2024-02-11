import { call, put, select, takeEvery } from "redux-saga/effects";
import { Actions } from "../../Store/actions";
import AccountApi from "@api/Account/Account";
import { iApi } from "@api/Account/types";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "src/Store/store";
import { ResponseGenerator } from "@utils/commonTypes";
import { AxiosResponse } from "axios";
import { notification } from "antd";
import { hashPassword } from "@utils/commonHelpers";

const Authorization = function* (action: PayloadAction<iApi.Login>) {
	try {
		yield put(Actions.User.userLoading(true));
		const login: AxiosResponse<iApi.oLogin> = yield call(AccountApi.login, {
			...action.payload,
			raw_password: hashPassword(action.payload.raw_password),
		});
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
		yield sessionStorage.setItem("jwt_token", login.data.jwt_token);
		yield sessionStorage.setItem("user_id", login.data.user_id);
		yield put(Actions.User.userLoading(false));
		notification.success({
			message: "Вы успешно вошли в аккаунт",
		});
	} catch (e) {
		notification.error({
			message: "Неверный логин или пароль",
		});
		yield put(Actions.User.userLoading(false));
	}
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
	yield takeEvery(Actions.Auth.authorization, Authorization);
}
