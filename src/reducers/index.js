import { combineReducers } from 'redux';
import ListReducer from "./listReducer";
import ItemReducer from "./itemReducer";

const rootReducer = combineReducers({
    list: ListReducer,
    activeItem: ItemReducer,
});

export default rootReducer;
