import { connect } from 'react-redux'
import { wrapper } from '@/store/store';
import { GetNews } from '@/store/news/actions';

import NewsContent from "@/components/News/NewsContent";
import CacheControl from '@/components/CacheControl';


const NewsDetail = (props) => {
    return (
        <>
            <div className="container">
                <NewsContent type='sportNews' />
            </div>
        </>
    );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
    const { params, req, res, query } = ctx;
    const { newsID } = params;
    CacheControl(res);
    const article = await store.dispatch(GetNews(newsID))
    if (!article || !article.data) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        }
    }

})

export default connect(null, {})(NewsDetail)