import rootSagaCreator from "../rootSagaCreator";
import UserLoginSaga from "./UserLoginSaga";
import RegistrationSaga from "./RegistrationSaga";
import GetUser from "./GetUser";

export default function* rootSaga() {
	yield rootSagaCreator([UserLoginSaga, RegistrationSaga, GetUser], "AUTH");
}
