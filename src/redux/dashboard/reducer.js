import * as T from '../types';


const initialState = {
    loading:false,
    planets:[]
}

export const dashBoard = (state=initialState, action) => {
    switch (action.type) {
        case T.LOADING:
            return {...state, loading:true};
        case T.FETCH_PLANETS :
            return {...state, loading:false,planets:action.payload}
        case T.FETCH_PLANETS_ERROR :
            return {...state, loading:false}
        default:
            return state;
    }
}