import { combineReducers } from "redux";
import { usersReducers } from "../features/users/users.reducers";

const rootReducer = combineReducers({
    users: usersReducers,
});
export default rootReducer;