import { useState, useEffect } from "react";
import { DragDropContext } from "react-dnd";
import styled from "styled-components";

import LCKTeamLabel from "../../atoms/LCKTeamLabel";
import Checkbox from "../../atoms/Checkbox";

import TOP from "../../../assets/svg/positions/TOP";
import JGL from "../../../assets/svg/positions/JGL";
import MID from "../../../assets/svg/positions/MID";
import BOT from "../../../assets/svg/positions/BOT";
import SPT from "../../../assets/svg/positions/SPT";

import worldsTrophy from "../../../assets/svg/trophys/worlds.svg";
import msiTrophy from "../../../assets/svg/trophys/msi.svg";
import lckTrophy from "../../../assets/svg/trophys/lck.svg";

const positionIcon = (position) => {
  switch (position) {
    case "TOP":
      return <TOP width={24} height={24} />;
    case "JGL":
      return <JGL width={24} height={24} />;
    case "MID":
      return <MID width={24} height={24} />;
    case "BOT":
      return <BOT width={24} height={24} />;
    case "SPT":
      return <SPT width={24} height={24} />;
    default:
      return;
  }
};

const RosterDnD = ({ players, setPlayers, roster, setRoster }) => {
  const [search, setSearch] = useState("");

  const newRoster = roster.map((team) => {
    const arr = [];
    if (team.TOP !== "") arr.push(team.TOP);
    if (team.JGL !== "") arr.push(team.JGL);
    if (team.MID !== "") arr.push(team.MID);
    if (team.BOT !== "") arr.push(team.BOT);
    if (team.SPT !== "") arr.push(team.SPT);
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
    <RosterDnDWrapper>
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
                  <PlayerImgBlock>
                    <PlayerPosition>
                      {positionIcon(player.position)}
                    </PlayerPosition>
                    <PlayerImg src={player.img} alt={player.nickName} />
                  </PlayerImgBlock>
                  <PlayerDescriptionBlock>
                    <PlayerNickname>{player.nickName}</PlayerNickname>
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
                              <img key={idx} src={msiTrophy} alt="MSI Trophy" />
                            );
                          })}
                        </div>
                        <div>
                          {[...Array(player.career.lck)].map((el, idx) => {
                            return (
                              <img key={idx} src={lckTrophy} alt="LCK Trophy" />
                            );
                          })}
                        </div>
                      </div>
                    </PlayerDescription>
                  </PlayerDescriptionBlock>
                </div>
              );
            })}
        </PlayerCard>
      </PlayerListWrapper>
      <EditRosterWrapper>
        {roster.map((team) => (
          <RosterWrapper key={team.id}>
            <LCKTeamLabel teamName={team.name} />
            <RosterPositionWrapper>
              <RosterPosition>
                {team.TOP ? (
                  <TruePositionLabel>{team.TOP}</TruePositionLabel>
                ) : (
                  <FalsePositionLabel>TOP</FalsePositionLabel>
                )}
              </RosterPosition>
              <RosterPosition>
                {team.JGL ? (
                  <TruePositionLabel>{team.JGL}</TruePositionLabel>
                ) : (
                  <FalsePositionLabel>JGL</FalsePositionLabel>
                )}
              </RosterPosition>
              <RosterPosition>
                {team.MID ? (
                  <TruePositionLabel>{team.MID}</TruePositionLabel>
                ) : (
                  <FalsePositionLabel>MID</FalsePositionLabel>
                )}
              </RosterPosition>
              <RosterPosition>
                {team.BOT ? (
                  <TruePositionLabel>{team.BOT}</TruePositionLabel>
                ) : (
                  <FalsePositionLabel>BOT</FalsePositionLabel>
                )}
              </RosterPosition>
              <RosterPosition>
                {team.SPT ? (
                  <TruePositionLabel>{team.SPT}</TruePositionLabel>
                ) : (
                  <FalsePositionLabel>SPT</FalsePositionLabel>
                )}
              </RosterPosition>
            </RosterPositionWrapper>
          </RosterWrapper>
        ))}
      </EditRosterWrapper>
    </RosterDnDWrapper>
  );
};
const RosterDnDWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const RosterDnDInnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.color.grayScale.gray20};
  border-radius: 3px;
  margin-top: 20px;
  padding: 20px;
`;
const PlayerListWrapper = styled(RosterDnDInnerWrapper)`
  height: 350px;
  display: flex;
`;
const EditRosterWrapper = styled(RosterDnDInnerWrapper)``;

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
  border-radius: 0 0 3px 3px;
  margin-bottom: 10px;
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
  padding: 5px 0 0;
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

const RosterWrapper = styled.div``;

const RosterPositionWrapper = styled.div``;
const RosterPosition = styled.div``;
const PositionLabel = styled.div``;
const TruePositionLabel = styled(PositionLabel)``;
const FalsePositionLabel = styled(PositionLabel)``;

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

export default RosterDnD;
