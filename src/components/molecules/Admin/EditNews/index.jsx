import { useSelector } from "react-redux";
import News from "../../../atoms/AdminSetting/News/News";

const EditNews = () => {
  const news = useSelector((state) => {
    return state.news.allNews;
  });

  return (
    <>
      {news ? (
        news.map((item) => {
          return (
            <tr key={item.id}>
              <News item={item} />
            </tr>
          );
        })
      ) : (
        <></>
      )}
    </>
  );
};

export default EditNews;
