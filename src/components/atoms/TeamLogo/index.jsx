import styled from "styled-components";

import GEN from "../../../assets/img/LCKTeamLogo/GEN-logo.png";
import T1 from "../../../assets/img/LCKTeamLogo/T1-logo.png";
import LSB from "../../../assets/img/LCKTeamLogo/LSB-logo.png";
import DK from "../../../assets/img/LCKTeamLogo/DK-logo.png";
import KT from "../../../assets/img/LCKTeamLogo/KT-logo.png";
import DRX from "../../../assets/img/LCKTeamLogo/DRX-logo.png";
import KDF from "../../../assets/img/LCKTeamLogo/KDF-logo.png";
import NS from "../../../assets/img/LCKTeamLogo/NS-logo.png";
import BRO from "../../../assets/img/LCKTeamLogo/BRO-logo.png";
import HLE from "../../../assets/img/LCKTeamLogo/HLE-logo.png";

const TeamLogo = (teamName) => {
  switch (teamName) {
    case "GEN":
      return <StyleImg src={GEN} alt={`${teamName} logo`} />;
    case "T1":
      return <StyleImg src={T1} alt={`${teamName} logo`} />;
    case "LSB":
      return <StyleImg src={LSB} alt={`${teamName} logo`} />;
    case "DK":
      return <StyleImg src={DK} alt={`${teamName} logo`} />;
    case "KT":
      return <StyleImg src={KT} alt={`${teamName} logo`} />;
    case "DRX":
      return <StyleImg src={DRX} alt={`${teamName} logo`} />;
    case "KDF":
      return <StyleImg src={KDF} alt={`${teamName} logo`} />;
    case "NS":
      return <StyleImg src={NS} alt={`${teamName} logo`} />;
    case "BRO":
      return <StyleImg src={BRO} alt={`${teamName} logo`} />;
    case "HLE":
      return <StyleImg src={HLE} alt={`${teamName} logo`} />;
    default:
      return;
  }
};

const StyleImg = styled.img`
  width: 100%;
`;

export default TeamLogo;
