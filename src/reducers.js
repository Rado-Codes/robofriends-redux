import { CHANGE_SEARCH_FIELD } from './constants'

const initalState = {
    searchField: ''
}

export const searchRobots = (state=initalState, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
            //returning new state plus searchField property will be updated with action.payload
        default:
            return state;
    }
}