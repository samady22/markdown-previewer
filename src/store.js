import { createStore } from "redux";
import { editorReducer } from "./reducers/editorReducer";

const rootReducer = editorReducer;

const store = createStore(rootReducer);

export default store;
