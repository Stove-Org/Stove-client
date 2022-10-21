import styled from "styled-components";

const Roster = ({ roster, setRoster }) => {
  return (
    <PlayerListInnerWrapper>
      {roster.map((team) => (
        <RosterWrapper key={team.id}>
          <div>{team.name}</div>
          <RosterPositionWrapper>
            <RosterPosition>
              {team.TOP ? (
                <TruePositionLabel>{team.TOP.birthday}</TruePositionLabel>
              ) : (
                <FalsePositionLabel>TOP</FalsePositionLabel>
              )}
            </RosterPosition>
            <RosterPosition>
              {team.JGL ? (
                <TruePositionLabel>{team.JGL.birthday}</TruePositionLabel>
              ) : (
                <FalsePositionLabel>JGL</FalsePositionLabel>
              )}
            </RosterPosition>
            <RosterPosition>
              {team.MID ? (
                <TruePositionLabel>{team.MID.birthday}</TruePositionLabel>
              ) : (
                <FalsePositionLabel>MID</FalsePositionLabel>
              )}
            </RosterPosition>
            <RosterPosition>
              {team.BOT ? (
                <TruePositionLabel>{team.BOT.birthday}</TruePositionLabel>
              ) : (
                <FalsePositionLabel>BOT</FalsePositionLabel>
              )}
            </RosterPosition>
            <RosterPosition>
              {team.SPT ? (
                <TruePositionLabel>{team.SPT.birthday}</TruePositionLabel>
              ) : (
                <FalsePositionLabel>SPT</FalsePositionLabel>
              )}
            </RosterPosition>
          </RosterPositionWrapper>
        </RosterWrapper>
      ))}
    </PlayerListInnerWrapper>
  );
};

const PlayerListInnerWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.color.grayScale.gray20};
  border-radius: 3px;
  margin-top: 20px;
  padding: 20px;
  height: 350px;
  display: flex;
`;
const RosterWrapper = styled.div``;
const RosterPositionWrapper = styled.div``;
const RosterPosition = styled.div``;
const PositionLabel = styled.div``;
const TruePositionLabel = styled(PositionLabel)``;
const FalsePositionLabel = styled(PositionLabel)``;

export default Roster;
