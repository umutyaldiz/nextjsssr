import ReactMarkdown from "react-markdown"
import moment from 'moment'
import Moment from "react-moment";
import 'moment/locale/tr';

import { connect } from 'react-redux'
import GenericSectionHeader from "@/components/GenericSectionHeader";
import Seo from "@/components/Seo";



const NewsContent = ({ type, News }) => {
    const data = News.article.data;
    return (
        <>
            <Seo title={data.attributes.title} description={data.attributes.description} />
            <article className="p-5 my-5 bg-gray-100 rounded-md shadow">
                <div key={data.id} className="pb-2">
                    <GenericSectionHeader title={data.attributes.title} />
                    <figure>
                        <figcaption>
                            <p>
                                {data.attributes.description}
                            </p>
                            <span className="font-black text-xs">
                                <Moment format="MMM Do YYYY">{data.publishedAt}</Moment>
                            </span>
                        </figcaption>
                    </figure>
                    <div className="p-4">
                        <ReactMarkdown>
                            {data.attributes.body}
                        </ReactMarkdown>
                    </div>
                </div>
            </article>
        </>
    );
}

export default connect((state) => state)(NewsContent)