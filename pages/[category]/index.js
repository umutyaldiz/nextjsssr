import GenericHeader from "@/components/GenericHeader";
import NewsList from "@/components/News/NewsList";
import { fetchAPI } from "@/lib/api";


const Category = ({ articles, category }) => {
    return (
        <>
            <div className="container">
                <GenericHeader title={`KATEGORİ ${category}`} />
                <NewsList list={articles} />
            </div>
        </>
    );
}

Category.layout = `LayoutCategory`;
export default Category;

export const getServerSideProps = async (ctx) => {
    const { params, req, res, query } = ctx;
    const { category } = params;
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    // console.log(req.headers.cookie);
    // res.setHeader('Set-Cookie', ['name=Umut'])

    const API_URL = process.env.NEXT_PUBLIC_POSTS_API_URL;
    const [articles] = await Promise.all([
        fetchAPI(API_URL)
    ])

    return {
        props: {
            articles,
            category
        }
    }
}