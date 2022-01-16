import NewsContent from "@/components/News/NewsContent";
import { fetchAPI } from "@/lib/api";


const NewsDetail = ({ article }) => {

    return (
        <>
            <div className="container">
                <NewsContent article={article} />
            </div>
        </>
    );
}

export default NewsDetail;

export const getServerSideProps = async (ctx) => {
    const { params, req, res, query } = ctx;
    const { newsID } = params;

    const API_URL = process.env.NEXT_PUBLIC_POSTS_API_URL;
    const article = await fetchAPI(`${API_URL}/${newsID}`);

    return {
        props: {
            article
        }
    }
}