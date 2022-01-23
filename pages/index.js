import { connect } from "react-redux";
import { wrapper } from "@/store/store";
import { GetNewsList } from "@/store/news/actions";
import GenericHeader from "@/components/GenericHeader";
import NewsList from "@/components/News/NewsList";
import CacheControl from "@/components/CacheControl";
import Seo from "@/components/Seo";
import { MastHead, PageSkinLeft, PageSkinRight } from "@/components/PageSkin";
import Slider from "@/components/Slider";
import GenericSectionHeader from "@/components/GenericSectionHeader";

const Home = (props) => {
  return (
    <>
      <Seo title={`Anasayfa`} description={`Anasayfa açıklama`} />
      <div className="page-wrapper">
        <PageSkinLeft />
        <div className="container">
          <MastHead />
          <GenericHeader title={"Anasayfa"} spot={"Spot"} />
          <GenericSectionHeader title={"Slider"} />
          <Slider
            spaceBetween={16}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            items={props.News.articles}
            className={'slider-type1 !pb-16'}
          />
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

export default connect((state) => state)(Home);
