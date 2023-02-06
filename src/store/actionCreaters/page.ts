import axios from "axios"
import { Dispatch } from "redux"
import { EnumActionTypes,  TypePageAction } from "../../types/page"


export const fetchPage = ()=>{
    return async (dispatch: Dispatch<TypePageAction>)=>{
        try{
            dispatch({type : EnumActionTypes.FETCH_PAGE})
            const res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=45d1d56fc54beedb6c0207f9ac6cab7c&language=en-US&page=1`)
            dispatch({type : EnumActionTypes.FETCH_PAGE_SUCCSESS, payload : res.data})
        }catch(e){
            dispatch({type: EnumActionTypes.FETCH_PAGE_ERROR, payload : 'Error!!!'})
        }
    }
}