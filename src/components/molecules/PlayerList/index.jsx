import { useState } from "react";
import styled from "styled-components";

// import Checkbox from "../../atoms/Checkbox";
import PlayerItem from "../../atoms/PlayerItem";

const PlayerList = ({
  players,
  setPlayers,
  roster,
  setRoster,
  imgToggle,
  descriptionToggle,
}) => {
  const [search, setSearch] = useState("");

  const newRoster = roster.map((team) => {
    const arr = [];
    if (team.TOP) arr.push(team.TOP.nickName);
    if (team.JGL) arr.push(team.JGL.nickName);
    if (team.MID) arr.push(team.MID.nickName);
    if (team.BOT) arr.push(team.BOT.nickName);
    if (team.SPT) arr.push(team.SPT.nickName);
    return arr;
  });

  // const [checked, setChecked] = useState(new Set());

  // const CheckedHandler = (e) => {
  //   const isChecked = e.target.checked;
  //   const id = e.target.id;

  //   if (isChecked) {
  //     checked.add(id);
  //     setChecked(checked);
  //   } else if (!isChecked && checked.has(id)) {
  //     checked.delete(id);
  //     setChecked(checked);
  //   }
  // };

  // const getProcessPlayerList = () => {
  //   if (checked.size === 0) {
  //     return players;
  //   } else {
  //     const newPlayers = players.filter((player) =>
  //       checked.has(player.position.toLowerCase())
  //     );
  //     return newPlayers;
  //   }
  // };

  return (
    <>
      <PlayerSearchBarWrapper>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="선수 검색"
        />
        {/* <StyleCheckbox>
            <Checkbox
              text={"탑"}
              id={"top"}
              onClick={CheckedHandler}
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
              onClick={CheckedHandler}
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
              onClick={CheckedHandler}
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
              onClick={CheckedHandler}
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
              onClick={CheckedHandler}
              value={"SPT"}
              styleType={"primary"}
              width={"16px"}
              height={"16px"}
            />
          </StyleCheckbox> */}
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
          .filter((player) => {
            if (newRoster.length === 0) {
              return player;
            } else if (newRoster.flat(1).includes(player.nickName) !== true) {
              return player;
            } else if (newRoster.flat(1).includes(player.nickName) !== true) {
              return player;
            } else if (newRoster.flat(1).includes(player.nickName) !== true) {
              return player;
            } else if (newRoster.flat(1).includes(player.nickName) !== true) {
              return player;
            } else if (newRoster.flat(1).includes(player.nickName) !== true) {
              return player;
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

// PlayerSearchBar
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

// const StyleCheckbox = styled.div`
//   & + & {
//     margin-top: 10px;
//   }
// `;

export default PlayerList;
