import { connect } from "react-redux";
import { wrapper } from "@/store/store";
import { GetNewsList } from "@/store/news/actions";
import GenericHeader from "@/components/GenericHeader";
import NewsList from "@/components/News/NewsList";
import CacheControl from "@/components/CacheControl";
import Seo from "@/components/Seo";
import { MastHead, PageSkinLeft, PageSkinRight } from "@/components/PageSkin";

const Home = (props) => {
  return (
    <>
      <Seo title={`Anasayfa`} description={`Anasayfa açıklama`} />
      <div className="page-wrapper">
        <PageSkinLeft />
        <div className="container">
          <MastHead />
          <GenericHeader title={"Anasayfa"} spot={"Spot"} />
          <NewsList type="home" />
        </div>
        <PageSkinRight />
      </div>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const { res } = ctx;
    CacheControl(res);
    await store.dispatch(GetNewsList());
  }
);

export default connect(null, {})(Home);
