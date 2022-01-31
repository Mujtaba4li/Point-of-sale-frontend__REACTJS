import { combineReducers } from 'redux'
import errorsReducer from './errorsReducer';
import viewCashierReducer from './viewCashierReducer';


export default combineReducers({
error:errorsReducer,
viewCashiers:viewCashierReducer,
deleteCashier:viewCashierReducer
});