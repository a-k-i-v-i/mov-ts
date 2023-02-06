import { TypedUseSelectorHook, useSelector } from "react-redux";
import { rootState } from "../store/Reducers/RootReducers";

export const useTypedSelector: TypedUseSelectorHook<rootState> = useSelector