import { call, takeEvery } from "redux-saga/effects";
import { Actions } from "../../Store/actions";
import { iApi } from "@api/Item/types";
import { PayloadAction } from "@reduxjs/toolkit";
import { ResponseGenerator } from "@utils/commonTypes";
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
