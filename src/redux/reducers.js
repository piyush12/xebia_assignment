import {combineReducers} from 'redux';
import {loginReducer} from './login/reducer'
import {dashBoard} from './dashboard/reducer'

const reducers = {
    loginReducer,
    dashBoard
}

export const rootReducer = combineReducers(reducers)