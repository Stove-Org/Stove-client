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
const RosterDnDWrapper = styled.div``;
const BoxWrapper = styled.div``;
const PlayerWrapper = styled(BoxWrapper)``;
const EditRosterWrapper = styled(BoxWrapper)``;

const PlayerBlock = styled.div``;
const RosterWrapper = styled.div``;

const RosterPositionWrapper = styled.div``;
const RosterPosition = styled.div``;
const PositionLabel = styled.div``;
const TruePositionLabel = styled(PositionLabel)``;
const FalsePositionLabel = styled(PositionLabel)``;

export default RosterDnD;
