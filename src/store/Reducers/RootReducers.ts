import { combineReducers } from "redux";
import { PageReducer } from "./User";




export const rootReducer = combineReducers({
    page : PageReducer
})

export type rootState = ReturnType<typeof rootReducer> 