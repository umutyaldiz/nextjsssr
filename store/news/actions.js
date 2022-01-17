import { fetchAPI } from "@/lib/api"
const NEXT_PUBLIC_POSTS_API_URL = process.env.NEXT_PUBLIC_POSTS_API_URL;
export const NewsActionTypes = {
    GET_NEWS_LIST: 'GET_NEWS_LIST',
    GET_NEWS_LIST_ERROR: 'GET_NEWS_LIST_ERROR',
    GET_NEWS: 'GET_NEWS',
    GET_NEWS_ERROR: 'GET_NEWS_ERROR',
}

export const GetNewsList = () => async (dispatch) => {
    try {
        const articles = await fetchAPI(NEXT_PUBLIC_POSTS_API_URL)
        dispatch({
            type: NewsActionTypes.GET_NEWS_LIST,
            articles: articles,
            ts: Date.now(),//silinecek
        })
    } catch (error) {
        dispatch({
            type: NewsActionTypes.GET_NEWS_LIST_ERROR,
            message: error
        })
    }

}

export const GetNews = (ID) => async (dispatch) => {
    try {
        const article = await fetchAPI(`${NEXT_PUBLIC_POSTS_API_URL}/${ID}`)
        dispatch({
            type: NewsActionTypes.GET_NEWS,
            article: article,
            ts: Date.now(),//silinecek
        })
    } catch (error) {
        dispatch({
            type: NewsActionTypes.GET_NEWS_ERROR,
            message: error
        })
    }

}

