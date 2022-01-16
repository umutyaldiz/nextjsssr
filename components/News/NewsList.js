import Link from "next/link";
import GenericSectionHeader from "@/components/GenericSectionHeader";

const NewsList = ({ list }) => {
    const data = list.data;
    const meta = list.meta;
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

export default NewsList;