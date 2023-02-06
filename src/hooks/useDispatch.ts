import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as UserActionCreators from '../store/actionCreaters/page'

export const useTypedDispatch = () => {
    const dispatch = useDispatch()
    return bindActionCreators(UserActionCreators , dispatch)
}