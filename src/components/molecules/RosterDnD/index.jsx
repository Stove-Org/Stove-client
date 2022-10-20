import { DragDropContext } from "react-dnd";
import styled from "styled-components";

import LCKTeamLabel from "../../atoms/LCKTeamLabel";
import PlayerSearchBar from "../PlayerSearchBar";

import TOP from "../../../assets/svg/positions/TOP";
import JGL from "../../../assets/svg/positions/JGL";
import MID from "../../../assets/svg/positions/MID";
import BOT from "../../../assets/svg/positions/BOT";
import SPT from "../../../assets/svg/positions/SPT";

import worldsTrophy from "../../../assets/svg/trophys/worlds.svg";
import msiTrophy from "../../../assets/svg/trophys/msi.svg";
import lckTrophy from "../../../assets/svg/trophys/lck.svg";

const RosterDnD = ({ players, roster, setRoster }) => {
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
  return (
    <RosterDnDWrapper>
      <PlayerListWrapper>
        <PlayerSearchBar />
        <PlayerCard>
          {players.map((player) => (
            <div key={player.id}>
              <PlayerImgBlock>
                <PlayerPosition>{positionIcon(player.position)}</PlayerPosition>
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
          ))}
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
  height: 280px;
  display: flex;
`;
const EditRosterWrapper = styled(RosterDnDInnerWrapper)``;

const PlayerCard = styled.div`
  flex-grow: 1;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  gap: 10px;
`;
const PlayerBlock = styled.div`
  width: 100%;
  min-width: 150px;
  background-color: ${(props) => props.theme.color.white};
  display: flex;
  flex-direction: column;
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

export default RosterDnD;
