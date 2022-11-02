import TOP from "../../../assets/svg/positions/TOP";
import JGL from "../../../assets/svg/positions/JGL";
import MID from "../../../assets/svg/positions/MID";
import BOT from "../../../assets/svg/positions/BOT";
import SPT from "../../../assets/svg/positions/SPT";

const PositionIcon = (position) => {
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

export default PositionIcon;
