import GenericHeader from "@/components/GenericHeader";
import NewsList from "@/components/News/NewsList";


const Category = ({ articles, category }) => {
    return (
        <>
            <div className="container">
                <GenericHeader title={`KATEGORİ ${category}`} />
                <NewsList data={articles} />
            </div>
        </>
    );
}

Category.layout = `LayoutCategory`;
export default Category;

export const getServerSideProps = async (ctx) => {
    const { params, req, res, query } = ctx;
    const { category } = params;
    //console.log(query);
    // console.log(req.headers.cookie);
    // res.setHeader('Set-Cookie', ['name=Umut'])

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    return {
        props: {
            articles: data,
            category
        }
    }
}