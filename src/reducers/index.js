import { combineReducers } from "redux";
import auth from "./auth";
import homeReducer from "./home";
import parameterReducer from "./parameter";
import orderReducer from "./order";
import productReducer from "./product";
import manageCodeReducer from "./manage_code";
import sprintsReducer from "./sprints";
import processReducer from "./process";

const rootReducer = combineReducers({
  auth,
  homeReducer,
  parameterReducer,
  orderReducer,
  productReducer,
  manageCodeReducer,
  sprintsReducer,
  processReducer
});
export default rootReducer;
