import { useState } from "react";
import styled from "styled-components";

import Checkbox from "../../atoms/Checkbox";

const PlayerSearchBar = () => {
  const [search, setSearch] = useState();

  return (
    <PlayerSearchBarWrapper>
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="선수 검색"
      />
      <StyleCheckbox>
        <Checkbox
          text={"탑"}
          id={"top"}
          onClick={() => {}}
          value={"TOP"}
          width={"16px"}
          height={"16px"}
          styleType={"primary"}
        />
      </StyleCheckbox>
      <StyleCheckbox>
        <Checkbox
          text={"정글"}
          id={"jgl"}
          onClick={() => {}}
          value={"JGL"}
          styleType={"primary"}
          width={"16px"}
          height={"16px"}
        />
      </StyleCheckbox>
      <StyleCheckbox>
        <Checkbox
          text={"미드"}
          id={"mid"}
          onClick={() => {}}
          value={"MID"}
          styleType={"primary"}
          width={"16px"}
          height={"16px"}
        />
      </StyleCheckbox>
      <StyleCheckbox>
        <Checkbox
          text={"원딜"}
          id={"bot"}
          onClick={() => {}}
          value={"BOT"}
          styleType={"primary"}
          width={"16px"}
          height={"16px"}
        />
      </StyleCheckbox>
      <StyleCheckbox>
        <Checkbox
          text={"서폿"}
          id={"spt"}
          onClick={() => {}}
          value={"SPT"}
          styleType={"primary"}
          width={"16px"}
          height={"16px"}
        />
      </StyleCheckbox>
    </PlayerSearchBarWrapper>
  );
};

const PlayerSearchBarWrapper = styled.div`
  min-width: 180px;
  padding-right: 20px;
  ${(props) => props.theme.typography.bodyRg};

  & > input[type="search"] {
    width: 100%;
    outline: none;
    border: none;
    border-radius: 3px;
    background-color: ${(props) => props.theme.color.white};
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    padding: 10px 12px;
    margin-bottom: 20px;

    &:focus {
      outline: none;
    }
  }
`;

const StyleCheckbox = styled.div`
  & + & {
    margin-top: 10px;
  }
`;

export default PlayerSearchBar;
