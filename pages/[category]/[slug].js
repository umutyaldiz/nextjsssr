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

NewsDetail.layout = `LayoutCategory`;

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
    const { params, req, res, query } = ctx;
    const { slug } = params;
    CacheControl(res);
    const article = await store.dispatch(GetNews(slug))
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