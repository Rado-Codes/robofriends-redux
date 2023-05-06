import { CHANGE_SEARCH_FIELD } from './contants';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD, //action that is being taken
    payload: text //we are sending whatever data is needed to the reducer
});