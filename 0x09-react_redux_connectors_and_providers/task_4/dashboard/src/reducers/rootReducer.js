// Importing necessary dependencies and reducers
import { combineReducers } from "redux";
import { courseReducer } from "./courseReducer";
import { notificationReducer } from "./notificationReducer";
import { uiReducer } from "./uiReducers";

// Combine individual reducers into a single rootReducer
export const rootReducer = combineReducers({
  courses: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer
});
