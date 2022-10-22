import { useState } from "react";
import styled from "styled-components";

import PlayerItem from "../../atoms/PlayerItem";

const PlayerList = ({ players, imgToggle, descriptionToggle }) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <PlayerSearchBarWrapper>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="선수 검색"
        />
      </PlayerSearchBarWrapper>
      <PlayerCard>
        {players
          .filter((player) => {
            if (search === "") {
              return player.name;
            } else if (
              player.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return player.name;
            } else if (
              player.nickName.toLowerCase().includes(search.toLowerCase())
            ) {
              return player.nickName;
            }
          })
          .map((player) => {
            return (
              <div key={player.id}>
                <PlayerItem
                  imgToggle={imgToggle}
                  descriptionToggle={descriptionToggle}
                  id={player.id}
                  position={player.position}
                  imgUrl={player.imgUrl}
                  nickName={player.nickName}
                  name={player.name}
                  birthday={player.birthday}
                  career={player.career}
                />
              </div>
            );
          })}
      </PlayerCard>
      <Footer />
    </>
  );
};

const PlayerCard = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.color.grayScale.gray20};
  padding: 0 20px 0;
  height: 280px;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
`;

const PlayerSearchBarWrapper = styled.div`
  width: 100%s;
  background-color: ${(props) => props.theme.color.grayScale.gray20};
  padding: 20px 20px 0;
  margin-top: 20px;
  border-radius: 3px 3px 0 0;
  ${(props) => props.theme.typography.bodyRg};

  & > input[type="search"] {
    width: 200px;
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

const Footer = styled.div`
  width: 100%;
  height: 20px;
  background-color: ${(props) => props.theme.color.grayScale.gray20};
  border-radius: 0 0 3px 3px;
`;

export default PlayerList;
