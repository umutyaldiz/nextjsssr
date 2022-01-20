import { connect } from "react-redux";
import GenericSectionHeader from "@/components/GenericSectionHeader";
import NewsItem from "./NewsListItem";

const NewsList = ({ type, News }) => {
  const data = News.articles.data;
  const meta = News.articles.meta;
  // if(process.env.NODE_ENV === 'production'){
  //     console.log(News);
  // }
  return (
    <>
      <section className="my-5">
        <GenericSectionHeader title={"Haber Listesi"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {data.map((item) => (
            <NewsItem key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default connect((state) => state)(NewsList);
