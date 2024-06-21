import { combineReducers } from "redux";
import { CategoryState } from "../types/category";
import { UserState } from "../types/user";
import { RecordState } from "../types/record";
import categoryReducer from "./reducers/categoryReducer";
import userReducer from "./reducers/userReducer";
import recordReducer from "./reducers/recordReducer";

export interface AppState {
  user: UserState;
  categories: CategoryState;
  records: RecordState;
}

const rootReducer = combineReducers<AppState>({
  user: userReducer,
  categories: categoryReducer,
  records: recordReducer
});

export default rootReducer;
