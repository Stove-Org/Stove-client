import styled from "styled-components";

import PageTitle from "../../components/atoms/PageTitle";
import NewsList from "../../components/atoms/NewsList";

const News = ({ news }) => {
  return (
    <>
      <PageTitle title={"오늘의 HOT 뉴스"} />
      <NewsWrapper>클릭수</NewsWrapper>

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
