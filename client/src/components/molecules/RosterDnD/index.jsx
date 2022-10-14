import { DragDropContext } from "react-dnd";
import styled from "styled-components";

import LCKTeamLabel from "../../atoms/LCKTeamLabel";

const RosterDnD = ({ players, roster, setRoster }) => {
  return (
    <>
      <PlayerWrapper>
        {players.map((player) => (
          <PlayerBlock key={player.id}>{player.nickName}</PlayerBlock>
        ))}
      </PlayerWrapper>
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
    </>
  );
};

const BoxWrapper = styled.div`
  background-color: ${(props) => props.theme.color.grayScale.gray20};
  border-radius: 3px;
  padding: 10px;
  overflow-y: auto;
`;
const PlayerWrapper = styled(BoxWrapper)`
  width: 150px;
`;
const EditRosterWrapper = styled(BoxWrapper)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PlayerBlock = styled.div`
  width: 100%;
  padding: 10px 0;
  background-color: ${(props) => props.theme.color.white};
  ${(props) => props.theme.typography.bodyRg};
  text-align: center;
  border-radius: 3px;

  & + & {
    margin-top: 10px;
  }
`;
const RosterWrapper = styled.div`
  display: flex;
`;

const RosterPositionWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
`;
const RosterPosition = styled.div`
  width: 100%;
  text-align: center;
  border-radius: 3px;

  & + & {
    margin-left: 10px;
  }
`;
const PositionLabel = styled.div`
  ${(props) => props.theme.typography.bodyRgBold};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 5px;
  border-radius: 3px;
`;
const TruePositionLabel = styled(PositionLabel)`
  color: ${(props) => props.theme.color.black};
  background-color: ${(props) => props.theme.color.white};
`;
const FalsePositionLabel = styled(PositionLabel)`
  border-style: dashed;
  border-width: 1px;
  border-color: ${(props) => props.theme.color.grayScale.gray40};
  color: ${(props) => props.theme.color.grayScale.gray60};
  background-color: ${(props) => props.theme.color.grayScale.gray20};
`;

export default RosterDnD;
