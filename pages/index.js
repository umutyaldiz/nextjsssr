import { connect } from 'react-redux'
import { wrapper } from '@/store/store';
import { GetNewsList } from '@/store/news/actions';

import GenericHeader from "@/components/GenericHeader";
import NewsList from "@/components/News/NewsList";
import CacheControl from '@/components/CacheControl';
import Seo from '@/components/Seo';

const Home = (props) => {
  return (
    <>
      <Seo title={`Anasayfa`} description={`Anasayfa açıklama`} />
      <div className="container">
        <GenericHeader title={'Anasayfa'} spot={'Spot'} />
        <NewsList type='home' />
      </div>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
  const { res } = ctx;
  CacheControl(res);
  await store.dispatch(GetNewsList())
})

export default connect(null, {})(Home)