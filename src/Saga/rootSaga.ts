import AuthSaga from "./Auth/AuthSaga";
import ItemsSaga from "./Items/ItemsSaga";
import rootSagaCreator from "./rootSagaCreator";

export default function* rootSaga() {
	const sagas = [AuthSaga, ItemsSaga];
	yield rootSagaCreator(sagas, "ROOT");
}
