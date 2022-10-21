import { useState } from "react";
// import { DragDropContext } from "react-dnd";
import styled from "styled-components";

// import Checkbox from "../../atoms/Checkbox";
import PositionIcon from "../../atoms/PositionIcon";

import worldsTrophy from "../../../assets/svg/trophys/worlds.svg";
import msiTrophy from "../../../assets/svg/trophys/msi.svg";
import lckTrophy from "../../../assets/svg/trophys/lck.svg";

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
    if (team.TOP.nickName !== "") arr.push(team.TOP.nickName);
    if (team.JGL.nickName !== "") arr.push(team.JGL.nickName);
    if (team.MID.nickName !== "") arr.push(team.MID.nickName);
    if (team.BOT.nickName !== "") arr.push(team.BOT.nickName);
    if (team.SPT.nickName !== "") arr.push(team.SPT.nickName);
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
      <PlayerListWrapper>
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
                  {imgToggle && (
                    <PlayerImgBlock>
                      <PlayerPosition>
                        {PositionIcon(player.position)}
                      </PlayerPosition>
                      <PlayerImg src={player.img} alt={player.nickName} />
                    </PlayerImgBlock>
                  )}
                  <PlayerDescriptionBlock>
                    <PlayerNickname imgToggle={imgToggle}>
                      {player.nickName}
                    </PlayerNickname>
                    {descriptionToggle && (
                      <PlayerDescription>
                        <div>
                          <div>
                            {player.name} ({player.birthday})
                          </div>
                        </div>
                        <div>
                          <div>
                            {[...Array(player.career.worlds)].map((el, idx) => {
                              return (
                                <img
                                  key={idx}
                                  src={worldsTrophy}
                                  alt="Worlds Trophy"
                                />
                              );
                            })}
                          </div>
                          <div>
                            {[...Array(player.career.msi)].map((el, idx) => {
                              return (
                                <img
                                  key={idx}
                                  src={msiTrophy}
                                  alt="MSI Trophy"
                                />
                              );
                            })}
                          </div>
                          <div>
                            {[...Array(player.career.lck)].map((el, idx) => {
                              return (
                                <img
                                  key={idx}
                                  src={lckTrophy}
                                  alt="LCK Trophy"
                                />
                              );
                            })}
                          </div>
                        </div>
                      </PlayerDescription>
                    )}
                  </PlayerDescriptionBlock>
                </div>
              );
            })}
        </PlayerCard>
      </PlayerListWrapper>
    </>
  );
};

const PlayerListWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.color.grayScale.gray20};
  border-radius: 3px;
  margin-top: 20px;
  padding: 20px;
  height: 350px;
  display: flex;
`;

const PlayerCard = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
`;
const PlayerBlock = styled.div`
  width: 159px;
  background-color: ${(props) => props.theme.color.white};
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;
const PlayerImgBlock = styled(PlayerBlock)`
  padding: 20px 0 0;
  border-radius: 3px 3px 0 0;
  position: relative;
  background: rgb(255, 190, 190);
  background: linear-gradient(
    225deg,
    rgba(255, 190, 190, 1) 0%,
    rgba(245, 66, 66, 1) 100%
  );
`;
const PlayerDescriptionBlock = styled(PlayerBlock)`
  padding: 0 10px 10px;
  margin-bottom: 10px;
  border-radius: ${(props) => (props.imgToggle ? "0 0 3px 3px" : "3px")};
`;
const PlayerPosition = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;
const PlayerImg = styled.img`
  width: 100%;
`;
const PlayerNickname = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.color.white};
  color: ${(props) => props.theme.color.black};
  padding: ${(props) => (props.imgToggle ? "5px 0 0" : "10px 0 0")};
  text-align: center;
  ${(props) => props.theme.typography.bodySmBold};
`;
const PlayerDescription = styled.div`
  ${(props) => props.theme.typography.bodySmRegular};
  border-width: 1px 0 0;
  border-style: solid;
  border-color: ${(props) => props.theme.color.main60};
  padding-top: 8px;
  margin-top: 5px;

  & > div + div {
    margin-top: 8px;
  }
`;

// PlayerSearchBar
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

export default PlayerList;
