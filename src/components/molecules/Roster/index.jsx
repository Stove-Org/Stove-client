import styled from "styled-components";

import TeamLogo from "../../atoms/TeamLogo";
import PlayerItem from "../../atoms/PlayerItem";
import PlayerDrop from "../../atoms/PlayerDrop";

import TOP from "../../../assets/svg/positions/TOP";
import JGL from "../../../assets/svg/positions/JGL";
import MID from "../../../assets/svg/positions/MID";
import BOT from "../../../assets/svg/positions/BOT";
import SPT from "../../../assets/svg/positions/SPT";

const Roster = ({ editRoster, imgToggle, descriptionToggle }) => {
  return (
    <PlayerListInnerWrapper>
      <InnerWrapper>
        <PositionWrapper></PositionWrapper>
        <PositionWrapper>
          <TOP width={36} height={36} fill={"#777777"} />
        </PositionWrapper>
        <PositionWrapper>
          <JGL width={36} height={36} fill={"#777777"} />
        </PositionWrapper>
        <PositionWrapper>
          <MID width={36} height={36} fill={"#777777"} />
        </PositionWrapper>
        <PositionWrapper>
          <BOT width={36} height={36} fill={"#777777"} />
        </PositionWrapper>
        <PositionWrapper>
          <SPT width={36} height={36} fill={"#777777"} />
        </PositionWrapper>
      </InnerWrapper>
      {editRoster.map((team) => (
        <InnerWrapper key={team.id}>
          <TeamLogoWrapper teamName={team.team.name} imgToggle={imgToggle}>
            <StyleTeamName imgToggle={imgToggle}>
              {team.team.name}
            </StyleTeamName>
            <StyleTeamLogo imgToggle={imgToggle}>
              {TeamLogo(team.team.name)}
            </StyleTeamLogo>
          </TeamLogoWrapper>
          {team.TOP ? (
            <div>
              <PlayerItem
                imgToggle={imgToggle}
                descriptionToggle={descriptionToggle}
                id={team.TOP.id}
                position={team.TOP.position}
                imgUrl={team.TOP.imgUrl}
                nickName={team.TOP.nickName}
                name={team.TOP.name}
                birthday={team.TOP.birthday}
                career={team.TOP.career}
              />
            </div>
          ) : (
            <PlayerDrop
              imgToggle={imgToggle}
              descriptionToggle={descriptionToggle}
              position="TOP"
              teamName={team.name}
            />
          )}
          {team.JGL ? (
            <div>
              <PlayerItem
                imgToggle={imgToggle}
                descriptionToggle={descriptionToggle}
                id={team.JGL.id}
                position={team.JGL.position}
                imgUrl={team.JGL.imgUrl}
                nickName={team.JGL.nickName}
                name={team.JGL.name}
                birthday={team.JGL.birthday}
                career={team.JGL.career}
              />
            </div>
          ) : (
            <PlayerDrop
              imgToggle={imgToggle}
              descriptionToggle={descriptionToggle}
              position="JUNGLE"
              teamName={team.name}
            />
          )}
          {team.MID ? (
            <div>
              <PlayerItem
                imgToggle={imgToggle}
                descriptionToggle={descriptionToggle}
                id={team.MID.id}
                position={team.MID.position}
                imgUrl={team.MID.imgUrl}
                nickName={team.MID.nickName}
                name={team.MID.name}
                birthday={team.MID.birthday}
                career={team.MID.career}
              />
            </div>
          ) : (
            <PlayerDrop
              imgToggle={imgToggle}
              descriptionToggle={descriptionToggle}
              position="MID"
              teamName={team.name}
            />
          )}
          {team.BOT ? (
            <div>
              <PlayerItem
                imgToggle={imgToggle}
                descriptionToggle={descriptionToggle}
                id={team.BOT.id}
                position={team.BOT.position}
                imgUrl={team.BOT.imgUrl}
                nickName={team.BOT.nickName}
                name={team.BOT.name}
                birthday={team.BOT.birthday}
                career={team.BOT.career}
              />
            </div>
          ) : (
            <PlayerDrop
              imgToggle={imgToggle}
              descriptionToggle={descriptionToggle}
              position="BOT"
              teamName={team.name}
            />
          )}
          {team.SPT ? (
            <div>
              <PlayerItem
                imgToggle={imgToggle}
                descriptionToggle={descriptionToggle}
                id={team.SPT.id}
                position={team.SPT.position}
                imgUrl={team.SPT.imgUrl}
                nickName={team.SPT.nickName}
                name={team.SPT.name}
                birthday={team.SPT.birthday}
                career={team.SPT.career}
              />
            </div>
          ) : (
            <PlayerDrop
              imgToggle={imgToggle}
              descriptionToggle={descriptionToggle}
              position="SUPPORT"
              teamName={team.name}
            />
          )}
        </InnerWrapper>
      ))}
      <InnerWrapper>
        <PositionWrapper></PositionWrapper>
        <PositionWrapper>
          <TOP width={36} height={36} fill={"#777777"} />
        </PositionWrapper>
        <PositionWrapper>
          <JGL width={36} height={36} fill={"#777777"} />
        </PositionWrapper>
        <PositionWrapper>
          <MID width={36} height={36} fill={"#777777"} />
        </PositionWrapper>
        <PositionWrapper>
          <BOT width={36} height={36} fill={"#777777"} />
        </PositionWrapper>
        <PositionWrapper>
          <SPT width={36} height={36} fill={"#777777"} />
        </PositionWrapper>
      </InnerWrapper>
    </PlayerListInnerWrapper>
  );
};

const PlayerListInnerWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.color.grayScale.gray20};
  border-radius: 3px;
  margin-top: 20px;
  padding: 10px 20px 10px;
`;
const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;

  & + & {
    margin-top: 10px;
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const PositionWrapper = styled.div`
  /* padding: 0 0 10px; */
`;
// imgToggle
const TeamLogoWrapper = styled.div`
  width: 100%
  justify-self: center;
  border-radius: 3px;

  ${({ teamName }) => {
    switch (teamName) {
      case "GEN":
        return `
          border: 1px solid #AA8B30;
          background: rgb(170,139,48);
          background: linear-gradient(99deg, rgba(170,139,48,0) 0%, rgba(170,139,48,0.20214023109243695) 100%);
        `;
      case "T1":
        return `
          border: 1px solid #E2012D;
          background: rgb(226,1,45);
          background: linear-gradient(99deg, rgba(226,1,45,0) 0%, rgba(226,1,45,0.20214023109243695) 100%);
        `;
      case "LSB":
        return `
          border: 1px solid #FFC900;
          background: rgb(255,201,0);
          background: linear-gradient(99deg, rgba(255,201,0,0) 0%, rgba(255,201,0,0.2049413515406162) 100%);
        `;
      case "DK":
        return `
          border: 1px solid #0ec7b5;
          background: rgb(14,199,181);
          background: linear-gradient(99deg, rgba(14,199,181,0) 0%, rgba(14,199,181,0.1993391106442577) 100%);
        `;
      case "KT":
        return `
          border: 1px solid #ff0a07;
          background: rgb(255,10,7);
          background: linear-gradient(99deg, rgba(255,10,7,0) 0%, rgba(255,10,7,0.2049413515406162) 100%);
        `;
      case "DRX":
        return `
          border: 1px solid #5a8dff;
          background: rgb(90,141,255);
          background: linear-gradient(99deg, rgba(90,141,255,0) 0%, rgba(90,141,255,0.1993391106442577) 100%);
        `;
      case "KDF":
        return `
          border: 1px solid #e73312;
          background: rgb(231,51,18);
          background: linear-gradient(99deg, rgba(231,51,18,0) 0%, rgba(231,51,18,0.2049413515406162) 100%);
        `;
      case "NS":
        return `
          border: 1px solid #de2027;
          background: rgb(222,32,39);
          background: linear-gradient(99deg, rgba(222,32,39,0) 0%, rgba(222,32,39,0.2049413515406162) 100%);
        `;
      case "BRO":
        return `
          border: 1px solid #00492b;
          background: rgb(0,73,43);
          background: linear-gradient(99deg, rgba(0,73,43,0) 0%, rgba(0,73,43,0.1993391106442577) 100%);
        `;
      case "HLE":
        return `
          border: 1px solid #ff6b01;
          background: rgb(255,107,1);
          background: linear-gradient(99deg, rgba(255,107,1,0) 0%, rgba(255,107,1,0.19653799019607843) 100%);
        `;
      default:
        return;
    }
  }}
`;
const StyleTeamName = styled.div`
  ${(props) => props.theme.typography.bodySmBold};
  flex-grow: 1;
  margin-left: 16px;
  display: ${(props) => props.imgToggle && "none"};
`;
const StyleTeamLogo = styled.div`
  width: ${(props) => (props.imgToggle ? "100%" : "30px")};
  padding: ${(props) => props.imgToggle && "20%"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px 0 0;
`;

export default Roster;
