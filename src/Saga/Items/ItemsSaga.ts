import rootSagaCreator from "../rootSagaCreator";
import GetItems from "./GetItemsSaga";
import CreateNewItemSaga from "./CreateNewItemSaga";

export default function* rootSaga() {
	yield rootSagaCreator([GetItems, CreateNewItemSaga], "ITEMS");
}
