import * as T from '../types';
import {fetchPlanets} from '../../services'


export const getAllPlanets = (userName,password) => async dispatch =>  {
    dispatch({
        type:T.LOADING
    })
    try{
        const {results} = await fetchPlanets();
        dispatch({
            type:T.FETCH_PLANETS,
            payload:results
        })
    }
    catch(e){
        dispatch({
            type:T.FETCH_PLANETS_ERROR
        })
    }
    
}