import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { progamerGet } from "../../api/admin";

import PageTitle from "../../components/atoms/PageTitle";
import SearchProgamerList from "./SearchProgamerList";

const Search = () => {
  const location = useLocation();
  const pathName = location.pathname.split("/");
  const search = decodeURI(pathName[2]);
  const [searchProgamer, setSearchProgamer] = useState([]);

  useEffect(() => {
    progamerGet().then((res) => {
      const filterArr = res.data.filter((item) => {
        if (item.nickname.toLowerCase().includes(search.toLowerCase())) {
          return item;
        } else if (item.name.includes(search)) {
          return item;
        }
      });
      setSearchProgamer(filterArr);
    });
  }, [search]);
  return (
    <>
      <PageTitle title={`"${search}" 검색 결과`} />
      <SearchWrapper>
        {searchProgamer.length !== 0 ? (
          searchProgamer.map((item) => {
            return <SearchProgamerList item={item} key={item.id} />;
          })
        ) : (
          <></>
        )}
      </SearchWrapper>
    </>
  );
};

const SearchWrapper = styled.div`
  padding: 0 0 20px;
  border-color: ${(props) => props.theme.color.grayScale.gray20};
  border-width: 1px 0 0;
  border-style: solid;
`;

export default Search;
