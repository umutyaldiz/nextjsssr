import GenericHeader from "@/components/GenericHeader";
import NewsContent from "@/components/News/NewsContent";


const NewsDetail = ({ article }) => {

    return (
        <>
            <div className="container">
                <NewsContent data={article} />
            </div>
        </>
    );
}

export default NewsDetail;

export const getServerSideProps = async (ctx) => {
    const { params, req, res, query } = ctx;
    const { newsID } = params;

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${newsID}`);
    const data = await response.json();

    return {
        props: {
            article: data
        }
    }
}