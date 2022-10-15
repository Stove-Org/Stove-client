import styled from "styled-components";

import PageTitle from "../../components/atoms/PageTitle";
import HotNewsLayout from "../../components/molecules/HotNewsLayout";
import NewsList from "../../components/atoms/NewsList";

const News = ({ news }) => {
  const firstHotNews = news[0];
  const hotNews = [];
  for (let i = 1; i < 4; i++) {
    hotNews.push(news[i]);
  }
  console.log(firstHotNews);

  return (
    <>
      <PageTitle title={"오늘의 HOT 뉴스"} />
      <NewsWrapper>
        <HotNewsLayout firstHotNews={firstHotNews} hotNews={hotNews} />
      </NewsWrapper>

      <PageTitle title={"최신 뉴스"} />
      <NewsWrapper>
        {news.map((el) => (
          <NewsList
            key={el.id}
            newsUrl={el.newsUrl}
            newsImg={el.newsImg}
            headline={el.headline}
            newsDate={el.newsDate}
          />
        ))}
      </NewsWrapper>
    </>
  );
};

const NewsWrapper = styled.div`
  padding: 20px 0;
  margin-top: 20px;
  border-color: ${(props) => props.theme.color.grayScale.gray20};
  border-width: 1px 0 0;
  border-style: solid;
`;

export default News;
