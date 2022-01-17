import {
    NewsActionTypes
} from '@/store/news/actions';

const newsInitialState = {};


const reducer = (state = newsInitialState, action) => {
    switch (action.type) {
        case NewsActionTypes.GET_NEWS_LIST:
            return {
                ...state,
                articles: action.articles,
                ts: action.ts
            }
        case NewsActionTypes.GET_NEWS_LIST_ERROR:
            return {
                ...state,
                message: action.payload
            }
        case NewsActionTypes.GET_NEWS:
            return {
                ...state,
                article: action.article,
                ts: action.ts
            }
        case NewsActionTypes.GET_NEWS_ERROR:
            return {
                ...state,
                message: action.payload
            }
        default:
            return state
    }
}

export default reducer;