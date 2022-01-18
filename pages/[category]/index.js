import { connect } from 'react-redux'
import { wrapper } from '@/store/store';
import { GetNewsList } from '@/store/news/actions';

import GenericHeader from "@/components/GenericHeader";
import NewsList from "@/components/News/NewsList";
import CacheControl from '@/components/CacheControl';


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
    CacheControl(res);
    await store.dispatch(GetNewsList())

    return {
        props:{
            category
        }
    }
})

export default connect(null, {})(Category)