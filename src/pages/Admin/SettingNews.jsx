import { useState, useEffect } from "react";
import styled from "styled-components";
import Pagination from "react-js-pagination";
import { newsAllGet, naverNewsRefreshGet } from "../../api/admin";
import EditNews from "../../components/molecules/Admin/EditNews";
import { setAllNews } from "../../reducers/newsSlice";
import { useDispatch } from "react-redux";

const SettingNews = () => {
  const dispatch = useDispatch();

  const [offset, setOffset] = useState(0); // 총 아이템 갯수
  const [limit] = useState(10); // 한페이지에 아이템 담길 갯수
  const [page, setPage] = useState(1); // 현재 페이지 넘버

  useEffect(() => {
    newsAllGet(page - 1, limit).then((res) => {
      setOffset(res.data.totalElements);
      dispatch(setAllNews(res.data.content));
    });
  }, [page]);

  const handlePageChange = (page) => {
    setPage(page);
  };

  const handleNaverNewsRefresh = async () => {
    try {
      await naverNewsRefreshGet();
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SettingWrapper>
      <button onClick={handleNaverNewsRefresh}>
        네이버 뉴스 새로 불러오기(자주X)
      </button>
      <StyleTable>
        <thead>
          <tr>
            <th>id</th>
            <th>headline</th>
            <th>imgUrl</th>
            <th>isPublished</th>
            <th>linkUrl</th>
            <th>uploadedAt</th>
            <th>viewsCount</th>
            <th>hashtagViews</th>
            <th>buttons</th>
          </tr>
        </thead>
        <tbody>
          <EditNews />
        </tbody>
      </StyleTable>
      <Pagination
        activePage={page} // 현재 페이지
        itemsCountPerPage={limit} // 한 페이지랑 보여줄 아이템 갯수
        totalItemsCount={offset} // 총 아이템 갯수
        pageRangeDisplayed={10} // paginator의 페이지 범위
        prevPageText={"<"} // "이전"을 나타낼 텍스트
        nextPageText={">"} // "다음"을 나타낼 텍스트
        onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
      />
    </SettingWrapper>
  );
};

const SettingWrapper = styled.div`
  width: 100%;

  & > * + * {
    margin-top: 20px;
  }

  & > ul {
    display: flex;
  }

  & > ul > li {
    list-style: none;
  }

  & > ul > li.active > a {
    font-weight: 700;
    text-decoration: underline;
    color: ${(props) => props.theme.color.black};
  }

  & > ul > li + li {
    margin-left: 10px;
  }

  & > ul > li > a {
    padding: 5px;
    font-size: 12px;
    color: ${(props) => props.theme.color.grayScale.gray60};
  }
`;

const StyleTable = styled.table`
  width: 100%;
  table-layout: fixed;

  & > tbody > tr > td {
    vertical-align: middle;
    padding: 5px;
    border: 1px solid #000;
    text-overflow: ellipsis;
    word-break: break-all;
  }
`;

export default SettingNews;
