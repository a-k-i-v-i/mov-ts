import { EnumActionTypes, IPageState, TypePageAction } from "../../types/page"

const initialState: IPageState = {
    page : [],
    loader : false,
    error : null
}


export const PageReducer = (state = initialState, action : TypePageAction) : IPageState=>{
    switch (action.type) {
        case EnumActionTypes.FETCH_PAGE : {
            return {...state , loader : true}
        }
        case EnumActionTypes.FETCH_PAGE_SUCCSESS : {
            return { ...state, loader : false, page : action.payload}
        }
        case EnumActionTypes.FETCH_PAGE_ERROR : {
            return {...state , loader : false, page : [],  error : action.payload}
        }

        default :
            return state
    }
}