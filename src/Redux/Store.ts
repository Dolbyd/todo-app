import { combineReducers, createStore } from "redux";
import { tasksReducer } from "./TasksAppState";
import { authReducer } from "./UsetAppState";



//Multiple catsReducer
const reducers = combineReducers({tasksReducer: tasksReducer, authReducer: authReducer});
const store = createStore(reducers)



export default store;