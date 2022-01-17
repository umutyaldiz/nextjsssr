import { connect } from 'react-redux'
import { wrapper } from '@/store/store';
import { GetNewsList } from '@/store/news/actions';

import GenericHeader from "@/components/GenericHeader";
import NewsList from "@/components/News/NewsList";


const Category = ({ category }) => {
    return (
        <>
            <div className="container">
                <GenericHeader title={`KATEGORİ ${category}`} />
                <NewsList type='category' />
            </div>
        </>
    );
}

Category.layout = `LayoutCategory`;

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
    const { params, req, res, query } = ctx;
    const { category } = params;
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    await store.dispatch(GetNewsList())

    return {
        props:{
            category
        }
    }
})

export default connect(null, {})(Category)