import {
    NavActionTypes
} from '@/store/header/actions';

const headerInitialState = {};

const reducer = (state = headerInitialState, action) => {
    switch (action.type) {
        case NavActionTypes.GET_NAV_LIST:
            return {
                ...state,
                nav: action.nav
            }
        case NavActionTypes.GET_NAV_LIST_ERROR:
            return {
                ...state,
                message: action.message
            }
        default:
            return state
    }
}

export default reducer;