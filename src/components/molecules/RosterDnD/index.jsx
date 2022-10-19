import { DragDropContext } from "react-dnd";
import styled from "styled-components";

import LCKTeamLabel from "../../atoms/LCKTeamLabel";

const RosterDnD = ({ players, roster, setRoster }) => {
  return (
    <RosterDnDWrapper>
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
    </RosterDnDWrapper>
  );
};
const RosterDnDWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  max-height: 530px;
`;
const BoxWrapper = styled.div`
  background-color: ${(props) => props.theme.color.grayScale.gray20};
  border-radius: 3px;
  padding: 10px;
  overflow-y: auto;
`;
const PlayerWrapper = styled(BoxWrapper)`
  min-width: 110px;
`;
const EditRosterWrapper = styled(BoxWrapper)`
  flex-grow: 1;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PlayerBlock = styled.div`
  width: 90px;
  padding: 10px 0;
  background-color: ${(props) => props.theme.color.white};
  ${(props) => props.theme.typography.bodyRg};
  text-align: center;
  border-radius: 3px;

  & + & {
    margin-top: 10px;
  }

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1080px) {
    width: 115px;
  }
`;
const RosterWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const RosterPositionWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
`;
const RosterPosition = styled.div`
  width: 90px;
  text-align: center;
  border-radius: 3px;

  & + & {
    margin-left: 10px;
  }

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1080px) {
    width: 115px;
  }
`;
const PositionLabel = styled.div`
  width: 100%;
  ${(props) => props.theme.typography.bodyRgBold};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
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
