import GenericHeader from "@/components/GenericHeader";
import NewsList from "@/components/News/NewsList";

const Home = (props) => {
  return (
    <>
      <div className="container">
        <GenericHeader title={'Blog Anasayfa'} spot={'Blog Spot'} />
        <NewsList data={props.articles} />
      </div>
    </>
  );
}
export default Home;

export const getServerSideProps = async (ctx) => {
  const { params } = ctx;
  const API_URL = process.env.POSTS_API_URL;
  const response = await fetch(API_URL);
  const data = await response.json();

  return {
    props: {
      articles: data
    }
  }
}