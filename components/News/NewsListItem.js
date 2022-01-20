import Link from "next/link";

const NewsItem = ({ item }) => {
  return (
    <div key={item.id} className="box type1">
      <Link href={`/${item.attributes.category}/${item.attributes.slug}`}>
        <a title={item.attributes.title}>
          <figure>
            <div className="image">
              <div className="removedContainer">{item.id}</div>
            </div>
            <figcaption>
              <p>{item.attributes.title}</p>
            </figcaption>
          </figure>
        </a>
      </Link>
    </div>
  );
};

export default NewsItem;
