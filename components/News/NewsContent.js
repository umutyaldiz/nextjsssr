import GenericSectionHeader from "@/components/GenericSectionHeader";

const NewsContent = ({ data }) => {
    return (
        <>
            <article className="p-5 my-5 bg-gray-100 rounded-md shadow">
                <div key={data.id} className="pb-2">
                    <GenericSectionHeader title={data.title} />
                    <figure>
                        <figcaption>
                            <p>
                                {data.body}
                            </p>
                            <span className="font-black text-xs">{data.id}</span>
                        </figcaption>
                    </figure>
                </div>
            </article>
        </>
    );
}

export default NewsContent;