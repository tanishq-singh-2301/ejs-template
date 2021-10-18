import counterReducer from './counter';
import authReducer from './isLogged';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    counterReducer,
    authReducer
});

export default reducers;