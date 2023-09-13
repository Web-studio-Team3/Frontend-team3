import React from "react";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { Actions } from "./../../Store/actions";
import AccountApi from "@api/Account/Account";
import { iApi } from "@api/Item/types";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "src/Store/store";
import { ResponseGenerator } from "src/Types/types";
import ItemApi from "@api/Item/Item";
import { notification } from "antd";

const CreateNewItem = function* (action: PayloadAction<iApi.CreateNewItem>) {
	try {
		const items: ResponseGenerator = yield call(
			ItemApi.createNewItem,
			action.payload
		);
		notification.success({
			message: "Товар успешно создан",
		});
	} catch (e) {
		notification.error({
			message: "возникла ошибка при создании товара",
		});
	}
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
	yield takeEvery(Actions.Items.createNewItem, CreateNewItem);
}
