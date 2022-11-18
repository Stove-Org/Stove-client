import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import searchIcon from "../../../assets/svg/search.svg";

const SearchBar = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const navigate = useNavigate();

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      navigate(`/search/${searchTxt}`);
    }
  };

  const handleClick = () => {
    if (searchTxt !== "") {
      navigate(`/search/${searchTxt}`);
    }
    return;
  };
  return (
    <SearchWrapper>
      <SearchInput
        type="text"
        value={searchTxt}
        onChange={(e) => setSearchTxt(e.target.value)}
        onKeyPress={onKeyPress}
        placeholder="프로게이머 검색"
        autoComplete="off"
      />
      <SearchButton onClick={handleClick}>
        <img src={searchIcon} alt="search button" />
      </SearchButton>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  display: none;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: flex;
  }
  @media screen and (min-width: 1080px) {
    display: flex;
  }
`;
const SearchInput = styled.input`
  ${(props) => props.theme.typography.bodyRg};
  outline: none;
  border: none;
  border-radius: 3px 0px 0px 3px;
  background-color: ${(props) => props.theme.color.grayScale.gray10};
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;

  padding: 10px 12px;
  width: 150px;
  height: 34px;

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 200px;
  }
`;

const SearchButton = styled.button`
  width: 34px;
  height: 34px;
  border: none;
  background-color: ${(props) => props.theme.color.grayScale.gray10};
  border-radius: 0px 3px 3px 0px;
  cursor: pointer;
`;

export default SearchBar;
