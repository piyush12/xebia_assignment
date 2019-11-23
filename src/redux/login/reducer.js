import * as T from '../types';


const initialState = {
    loading:false,
    isLoggedIn:false,
    logginError:""
}

export const loginReducer = (state=initialState, action) => {
    switch (action.type) {
        case T.LOADING:
            return {...state, loading:true};
        case T.LOGIN_SUCCESS :
            return {...state, isLoggedIn:true, loading:false,logginError:""}
        case T.LOGIN_FAIL :
            return {...state, isLoggedIn:false, loading:false,logginError:"Login fail"}
        default:
            return state;
    }
}