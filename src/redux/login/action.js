import * as T from '../types';
import {fetchData} from '../../services'


export const logIn = (userName,password) => async dispatch =>  {
    

    dispatch({
        type:T.LOADING
    })
    try{
        const {results} = await fetchData();
        const {name,birth_year} = results;
        console.log(results)
        const findUser = results.find(user => user.name === userName);
        const findPassword = results.find(pass => pass.birth_year === password);
        if(findUser && findPassword){
            dispatch({
                type:T.LOGIN_SUCCESS
            })
        }else{
            dispatch({
                type:T.LOGIN_FAIL
            })
        }
    }
    catch(e){
        dispatch({
            type:T.FETCH_CHARACTER_ERROR
        })
    }
    
}
export const clearLogin = () => dispatch => {
    dispatch({
        type:T.CLEAR_LOGIN
    })
}