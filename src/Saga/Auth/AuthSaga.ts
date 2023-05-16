import rootSagaCreator from "../rootSagaCreator";
import UserLoginSaga from "./UserLoginSaga";
import RegistrationSaga from "./RegistrationSaga";

export default function* rootSaga() {
	yield rootSagaCreator([UserLoginSaga, RegistrationSaga], "AUTH");
}
