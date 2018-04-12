/**
 * Created by Рашид on 07.04.2018.
 */
import { combineReducers } from 'redux'
import * as actions from '../actions'

const users = (state = {items: []}, action) => {
    switch (action.type) {
        case actions.GET_USERS:
            return {
                ...state,
                items: action.items
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    users
})

export default rootReducer
