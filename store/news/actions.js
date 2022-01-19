import { fetchAPI } from "@/lib/api"
const NEXT_PUBLIC_POSTS_API_URL = process.env.NEXT_PUBLIC_POSTS_API_URL;
export const NewsActionTypes = {
    GET_NEWS_LIST: 'GET_NEWS_LIST',
    GET_NEWS_LIST_ERROR: 'GET_NEWS_LIST_ERROR',
    GET_NEWS: 'GET_NEWS',
    GET_NEWS_ERROR: 'GET_NEWS_ERROR',
}

export const GetNewsList = (category = '') => async (dispatch) => {
    const categoryFilter = category ? `?filters[category][$eq]=${category}` : '';
    try {
        const articles = await fetchAPI(`${NEXT_PUBLIC_POSTS_API_URL}${categoryFilter}`)
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

export const GetNews = (slug) => async (dispatch) => {
    let article = [];
    try {
        article = await fetchAPI(`${NEXT_PUBLIC_POSTS_API_URL}?filters[slug][$eq]=${slug}`)
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
    return article;
}

