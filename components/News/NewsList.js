import Link from "next/link";
import { connect } from 'react-redux'
import GenericSectionHeader from "@/components/GenericSectionHeader";

const NewsList = ({ type, News }) => {
    const data = News.articles.data;
    const meta = News.articles.meta;
    if(process.env.NODE_ENV === 'production'){
        console.log(News);
    }
    return (
        <>
            <section className="p-5 my-5 bg-gray-100 rounded-md shadow">
                <GenericSectionHeader title={'Haber Listesi'} />
                {
                    data.map(item => (
                        <div key={item.id} className="flex flex-col pb-2 border-b border-gray-300 border-dashed">
                            <Link href={`/sports/${item.id}`}>
                                <a title={item.attributes.title}>
                                    <figure>
                                        <figcaption>
                                            <span className="font-black text-2xl">{item.id}</span>
                                            <p>
                                                {item.attributes.title}
                                            </p>
                                        </figcaption>
                                    </figure>
                                </a>
                            </Link>
                        </div>
                    ))
                }
            </section>
        </>
    );
}

export default connect((state) => state)(NewsList)