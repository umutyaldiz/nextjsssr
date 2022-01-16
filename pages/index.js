import GenericHeader from "@/components/GenericHeader";
import NewsList from "@/components/News/NewsList";
import { fetchAPI } from "@/lib/api.js";


const Home = ({ articles }) => {
  return (
    <>
      <div className="container">
        <GenericHeader title={'Anasayfa'} spot={'Spot'} />
        <NewsList list={articles} />
      </div>
    </>
  );
}
export default Home;

export const getServerSideProps = async (ctx) => {
  const { res } = ctx;
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  const API_URL = process.env.NEXT_PUBLIC_POSTS_API_URL;
  const [articles] = await Promise.all([
    fetchAPI(API_URL)
  ])
  return {
    props: {
      articles
    }
  }
}