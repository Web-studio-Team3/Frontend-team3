import AuthSaga from "./Auth/AuthSaga";
import rootSagaCreator from "./rootSagaCreator";

export default function* rootSaga() {
	const sagas = [AuthSaga];
	yield rootSagaCreator(sagas, "ROOT");
}
