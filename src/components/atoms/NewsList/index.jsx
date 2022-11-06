import { useSelector } from "react-redux";
import News from "./News";

const NewsList = () => {
  const news = useSelector((state) => {
    return state.news.publishedNews;
  });

  return news ? (
    news.map((item) => {
      return <News item={item} key={item.id} />;
    })
  ) : (
    <></>
  );
};

export default NewsList;
