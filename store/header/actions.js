import { fetchAPI } from "@/lib/api"
const NEXT_PUBLIC_CATEGORIES_API_URL = process.env.NEXT_PUBLIC_CATEGORIES_API_URL;
export const NavActionTypes = {
    GET_NAV_LIST: 'GET_NAV_LIST',
    GET_NAV_LIST_ERROR: 'GET_NAV_LIST_ERROR',
}

export const GetNav = () => async (dispatch) => {
    try {
        const categories = await fetchAPI(NEXT_PUBLIC_CATEGORIES_API_URL)
        dispatch({
            type: NavActionTypes.GET_NAV_LIST,
            nav: categories
        })
    } catch (error) {
        dispatch({
            type: NavActionTypes.GET_NAV_LIST_ERROR,
            message: error
        })
    }

}
