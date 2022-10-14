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

const TeamLabel = styled.div`
  ${(props) => props.theme.typography.bodyRgBold};
  width: 60px;
  padding: 8px 10px;
  text-align: center;
  border-radius: 3px;
  white-space: nowrap;

  ${({ teams }) => {
    switch (teams) {
      case "GEN":
        return `
            background-color: #AA8B30;
            color: #000;
            `;
      case "T1":
        return `
            background-color: #E2012D;
            color: #fff;
            `;
      case "LSB":
        return `
            background-color: #FFC900;
            color: #000000;
            `;
      case "DK":
        return `
            background-color: #0ec7b5;
            color: #000;
            `;
      case "KT":
        return `
            background-color: #000;
            color: #ff0a07;
            `;
      case "DRX":
        return `
            background-color: #5a8dff;
            color: #000000;
            `;
      case "KDF":
        return `
            background-color: #e73312;
            color: #fff;
            `;
      case "NS":
        return `
            background-color: #000;
            color: #de2027;
            `;
      case "BRO":
        return `
            background-color: #00492b;
            color: #fff;
            `;
      case "HLE":
        return `
            background-color: #ff6b01;
            color: #fff;
            `;
      default:
        return `
            background-color: #000;
            color: #fff;
            `;
    }
  }}
`;

export default LCKTeamLabel;
