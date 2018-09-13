import { combineReducers, createStore } from "redux";
import { toolReducer } from "./ToolReducer";

const reducers = combineReducers({
  Tool: toolReducer
});

export const store = createStore(reducers);
