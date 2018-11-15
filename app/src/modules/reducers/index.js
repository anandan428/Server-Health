import * as ActionTypes from '../actions';
import { combineReducers } from 'redux';
import user from './user.reducer';
import application from './application.reducer';

const User = user({
    types: [
        ActionTypes.USER.REQUEST,
        ActionTypes.USER.SUCCESS,
        ActionTypes.USER.UPDATE,
        ActionTypes.USER.FAILURE
    ]
});

const Application = application({
    types: [
        ActionTypes.APPLICATION.REQUEST,
        ActionTypes.APPLICATION.SUCCESS,
        ActionTypes.APPLICATION.UPDATE,
        ActionTypes.APPLICATION.FAILURE
    ]
});

const rootReducer = combineReducers({
    Application,
    User
});

export default rootReducer;