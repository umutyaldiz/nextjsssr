import { connect } from 'react-redux'
import { wrapper } from '@/store/store';
import { GetNewsList } from '@/store/news/actions';

import GenericHeader from "@/components/GenericHeader";
import NewsList from "@/components/News/NewsList";



const Home = (props) => {
  return (
    <>
      <div className="container">
        <GenericHeader title={'Anasayfa'} spot={'Spot'} />
        <NewsList type='home' />
      </div>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
  const { res } = ctx;
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  await store.dispatch(GetNewsList())
})

export default connect(null, {})(Home)