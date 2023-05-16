import { combineReducers } from "redux";

import Auth from "./Auth/AuthRedux";
import User from "./User/UserRedux";

export default combineReducers({
	Auth,
	User,
});
