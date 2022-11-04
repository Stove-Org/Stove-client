import { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getPublishedNews } from "../../api/news";

import PageTitle from "../../components/atoms/PageTitle";
import HotNewsLayout from "../../components/molecules/HotNewsLayout";
import NewsList from "../../components/atoms/NewsList";

const News = () => {
  useEffect(() => {
    getPublishedNews(0, 10).then(console.log);
  }, []);

  const firstHotNews = useSelector((state) => {
    if (state.news.hotNews !== null) {
      return state.news.hotNews[0];
    }
  });

  const hotNews = useSelector((state) => {
    if (state.news.hotNews !== null) {
      return state.news.hotNews.slice(1, 4);
    }
  });

  return (
    <>
      <PageTitle title={"오늘의 HOT 뉴스"} />
      <NewsWrapper>
        {/* 여기서 지금 에러남 */}
        <HotNewsLayout firstHotNews={firstHotNews} hotNews={hotNews} />
      </NewsWrapper>

      <PageTitle title={"최신 뉴스"} />
      <NewsWrapper>
        {/* {news.map((el) => (
          <NewsList
            key={el.id}
            linkUrl={el.linkUrl}
            imgUrl={el.imgUrl}
            headline={el.headline}
            uploadedAt={el.uploadedAt}
          />
        ))} */}
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
