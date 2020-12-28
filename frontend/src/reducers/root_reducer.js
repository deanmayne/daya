import { combineReducers } from "redux";
import events from "./events_reducer";

const RootReducer = combineReducers({
  events,
});

export default RootReducer;
