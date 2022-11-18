import { useEffect, useState } from "react";
import styled from "styled-components";
import { down } from "styled-breakpoints";
import { useBreakpoint } from "styled-breakpoints/react-styled";
import { useSelector, useDispatch } from "react-redux";
import { getPublishedNews } from "../../api/news";
import Pagination from "react-js-pagination";
import { setPublishedNews } from "../../reducers/newsSlice";

import PageTitle from "../../components/atoms/PageTitle";
import HotNewsLayout from "../../components/molecules/HotNewsLayout";
import NewsList from "../../components/atoms/NewsList";

const News = () => {
  const isMobile = useBreakpoint(down("sm"));
  const dispatch = useDispatch();

  const [offset, setOffset] = useState(0); // 총 아이템 갯수
  const [limit] = useState(10); // 한페이지에 아이템 담길 갯수
  const [page, setPage] = useState(1); // 현재 페이지 넘버

  useEffect(() => {
    getPublishedNews(page - 1, limit).then((res) => {
      setOffset(res.data.totalElements);
      dispatch(setPublishedNews(res.data.content));
    });
  }, [page]);

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

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <>
      <PageTitle title={"오늘의 HOT 뉴스"} />
      <NewsWrapper>
        {isMobile ? (
          <HotNewsLayout hotNews={[firstHotNews, ...hotNews]} />
        ) : (
          <HotNewsLayout firstHotNews={firstHotNews} hotNews={hotNews} />
        )}
      </NewsWrapper>

      <PageTitle title={"최신 뉴스"} />
      <NewsWrapper>
        <NewsList />
        <StylePagination>
          <Pagination
            activePage={page} // 현재 페이지
            itemsCountPerPage={limit} // 한 페이지랑 보여줄 아이템 갯수
            totalItemsCount={offset} // 총 아이템 갯수
            pageRangeDisplayed={10} // paginator의 페이지 범위
            prevPageText={"<"} // "이전"을 나타낼 텍스트
            nextPageText={">"} // "다음"을 나타낼 텍스트
            onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
          />
        </StylePagination>
      </NewsWrapper>
    </>
  );
};

const NewsWrapper = styled.div`
  padding: 20px 10px;
  margin-top: 20px;
  border-color: ${(props) => props.theme.color.grayScale.gray20};
  border-width: 1px 0 0;
  border-style: solid;
  @media screen and (min-width: 768px) {
    padding: 20px 0;
  }
  @media screen and (min-width: 1080px) {
  }
`;

const StylePagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > .pagination {
    display: flex;
    align-items: center;
  }
  & > ul > li {
    list-style: none;
  }
  & > ul > li + li {
    margin-left: 10px;
  }
  & > ul > li > a {
    ${(props) => props.theme.typography.bodySmRegular};
    color: ${(props) => props.theme.color.grayScale.gray60};
    padding: 6px;
  }
  & > ul > li.active > a {
    ${(props) => props.theme.typography.bodySmBold};
    color: ${(props) => props.theme.color.black};
  }
  & > ul > li:first-child,
  & > ul > li:last-child {
    display: none;
  }
`;
export default News;
