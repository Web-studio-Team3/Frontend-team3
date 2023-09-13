import React from "react";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { Actions } from "./../../Store/actions";
import AccountApi from "@api/Account/Account";
import { iApi } from "@api/Account/types";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "src/Store/store";
import { ResponseGenerator } from "src/Types/types";
import ItemApi from "@api/Item/Item";

const GetItems = function* () {
	try {
		const items: ResponseGenerator = yield call(ItemApi.getAllItems);
		yield put(Actions.Items.setItems(items.data));
	} catch (e) {}
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
	yield takeEvery(Actions.Items.getItems, GetItems);
}
