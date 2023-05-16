import { combineReducers } from "redux";

import Auth from "./Auth/AuthRedux";
import User from "./User/UserRedux";
import Items from "./Items/ItemsRedux";

export default combineReducers({
	Auth,
	User,
	Items,
});
