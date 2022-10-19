import styled from "styled-components";

const LCKTeamLabel = ({ teamName }) => {
  const teams = [
    "GEN",
    "T1",
    "LSB",
    "DK",
    "KT",
    "DRX",
    "KDF",
    "NS",
    "BRO",
    "HLE",
  ].includes(teamName)
    ? teamName
    : "default";
  return <TeamLabel teams={teams}>{teamName}</TeamLabel>;
};

const TeamLabel = styled.div``;

export default LCKTeamLabel;
