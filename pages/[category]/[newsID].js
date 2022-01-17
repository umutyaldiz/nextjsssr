import { connect } from 'react-redux'
import { wrapper } from '@/store/store';
import { GetNews } from '@/store/news/actions';

import NewsContent from "@/components/News/NewsContent";


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
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    await store.dispatch(GetNews(newsID))
})

export default connect(null, {})(NewsDetail)