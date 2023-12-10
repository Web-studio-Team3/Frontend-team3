import { call, put, takeEvery } from "redux-saga/effects";
import { Actions } from "../../Store/actions";
import { ResponseGenerator } from "@utils/commonTypes";
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
