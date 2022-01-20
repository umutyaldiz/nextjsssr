import Link from "next/link";

const NewsItem = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col pb-2 rounded-md shadow">
      <Link href={`/${item.attributes.category}/${item.attributes.slug}`}>
        <a title={item.attributes.title}>
          <figure>
            <div className="rounded-md aspect-square bg-gray-200 relative">
              <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
                {item.id}
              </div>
            </div>
            <figcaption className="p-3">
              <p className="text-sm line-clamp-2">{item.attributes.title}</p>
            </figcaption>
          </figure>
        </a>
      </Link>
    </div>
  );
};

export default NewsItem;
