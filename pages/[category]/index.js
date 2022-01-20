import { connect } from "react-redux";
import { wrapper } from "@/store/store";
import { GetNewsList } from "@/store/news/actions";
import GenericHeader from "@/components/GenericHeader";
import NewsList from "@/components/News/NewsList";
import CacheControl from "@/components/CacheControl";
import Seo from "@/components/Seo";
import { MastHead, PageSkinLeft, PageSkinRight } from "@/components/PageSkin";

const Category = ({ category }) => {
  return (
    <>
      <Seo title={category} description={`${category} açıklama`} />
      <div className="flex justify-center overflow-hidden">
        <PageSkinLeft />
        <div className="container">
          <MastHead />
          <GenericHeader title={`KATEGORİ ${category}`} />
          <NewsList type="category" />
        </div>
        <PageSkinRight />
      </div>
    </>
  );
};

Category.layout = `LayoutCategory`;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const { params, req, res, query } = ctx;
    const { category } = params;
    CacheControl(res);
    await store.dispatch(GetNewsList(category));
    return {
      props: {
        category,
      },
    };
  }
);

export default connect((state) => state, {})(Category);
