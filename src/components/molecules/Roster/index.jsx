import styled from "styled-components";

import PositionIcon from "../../atoms/PositionIcon";
import TeamLogo from "../../atoms/TeamLogo";

import TOP from "../../../assets/svg/positions/TOP";
import JGL from "../../../assets/svg/positions/JGL";
import MID from "../../../assets/svg/positions/MID";
import BOT from "../../../assets/svg/positions/BOT";
import SPT from "../../../assets/svg/positions/SPT";

import worldsTrophy from "../../../assets/svg/trophys/worlds.svg";
import msiTrophy from "../../../assets/svg/trophys/msi.svg";
import lckTrophy from "../../../assets/svg/trophys/lck.svg";

const Roster = ({ roster, setRoster, imgToggle, descriptionToggle }) => {
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
      {roster.map((team) => (
        <InnerWrapper key={team.id}>
          <TeamLogoWrapper teamName={team.name} imgToggle={imgToggle}>
            <StyleTeamName imgToggle={imgToggle}>{team.name}</StyleTeamName>
            <StyleTeamLogo imgToggle={imgToggle}>
              {TeamLogo(team.name)}
            </StyleTeamLogo>
          </TeamLogoWrapper>
          {team.TOP ? (
            <TruePositionBlock>
              {imgToggle && (
                <PlayerImgBlock>
                  <PlayerPosition>
                    {PositionIcon(team.TOP.position)}
                  </PlayerPosition>
                  <img src={team.TOP.imgUrl} alt={team.TOP.nickName} />
                </PlayerImgBlock>
              )}
              <PlayerDescriptionBlock>
                <PlayerNickname imgToggle={imgToggle}>
                  {team.TOP.nickName}
                </PlayerNickname>
                {descriptionToggle && (
                  <PlayerDescription>
                    <div>
                      <div>
                        {team.TOP.name} ({team.TOP.birthday})
                      </div>
                    </div>
                    <div>
                      <div>
                        {[...Array(team.TOP.career.worlds)].map((el, idx) => {
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
                        {[...Array(team.TOP.career.msi)].map((el, idx) => {
                          return (
                            <img key={idx} src={msiTrophy} alt="MSI Trophy" />
                          );
                        })}
                      </div>
                      <div>
                        {[...Array(team.TOP.career.lck)].map((el, idx) => {
                          return (
                            <img key={idx} src={lckTrophy} alt="LCK Trophy" />
                          );
                        })}
                      </div>
                    </div>
                  </PlayerDescription>
                )}
              </PlayerDescriptionBlock>
            </TruePositionBlock>
          ) : (
            <FalsePositionBlock
              imgToggle={imgToggle}
              descriptionToggle={descriptionToggle}
            >
              TOP
            </FalsePositionBlock>
          )}
          {team.JGL ? (
            <TruePositionBlock>
              {imgToggle && (
                <PlayerImgBlock>
                  <PlayerPosition>
                    {PositionIcon(team.JGL.position)}
                  </PlayerPosition>
                  <img src={team.JGL.imgUrl} alt={team.JGL.nickName} />
                </PlayerImgBlock>
              )}
              <PlayerDescriptionBlock>
                <PlayerNickname imgToggle={imgToggle}>
                  {team.JGL.nickName}
                </PlayerNickname>
                {descriptionToggle && (
                  <PlayerDescription>
                    <div>
                      <div>
                        {team.JGL.name} ({team.JGL.birthday})
                      </div>
                    </div>
                    <div>
                      <div>
                        {[...Array(team.JGL.career.worlds)].map((el, idx) => {
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
                        {[...Array(team.JGL.career.msi)].map((el, idx) => {
                          return (
                            <img key={idx} src={msiTrophy} alt="MSI Trophy" />
                          );
                        })}
                      </div>
                      <div>
                        {[...Array(team.JGL.career.lck)].map((el, idx) => {
                          return (
                            <img key={idx} src={lckTrophy} alt="LCK Trophy" />
                          );
                        })}
                      </div>
                    </div>
                  </PlayerDescription>
                )}
              </PlayerDescriptionBlock>
            </TruePositionBlock>
          ) : (
            <FalsePositionBlock
              imgToggle={imgToggle}
              descriptionToggle={descriptionToggle}
            >
              JGL
            </FalsePositionBlock>
          )}
          {team.MID ? (
            <TruePositionBlock>
              {imgToggle && (
                <PlayerImgBlock>
                  <PlayerPosition>
                    {PositionIcon(team.MID.position)}
                  </PlayerPosition>
                  <img src={team.MID.imgUrl} alt={team.MID.nickName} />
                </PlayerImgBlock>
              )}
              <PlayerDescriptionBlock>
                <PlayerNickname imgToggle={imgToggle}>
                  {team.MID.nickName}
                </PlayerNickname>
                {descriptionToggle && (
                  <PlayerDescription>
                    <div>
                      <div>
                        {team.MID.name} ({team.MID.birthday})
                      </div>
                    </div>
                    <div>
                      <div>
                        {[...Array(team.MID.career.worlds)].map((el, idx) => {
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
                        {[...Array(team.MID.career.msi)].map((el, idx) => {
                          return (
                            <img key={idx} src={msiTrophy} alt="MSI Trophy" />
                          );
                        })}
                      </div>
                      <div>
                        {[...Array(team.MID.career.lck)].map((el, idx) => {
                          return (
                            <img key={idx} src={lckTrophy} alt="LCK Trophy" />
                          );
                        })}
                      </div>
                    </div>
                  </PlayerDescription>
                )}
              </PlayerDescriptionBlock>
            </TruePositionBlock>
          ) : (
            <FalsePositionBlock
              imgToggle={imgToggle}
              descriptionToggle={descriptionToggle}
            >
              MID
            </FalsePositionBlock>
          )}
          {team.BOT ? (
            <TruePositionBlock>
              {imgToggle && (
                <PlayerImgBlock>
                  <PlayerPosition>
                    {PositionIcon(team.BOT.position)}
                  </PlayerPosition>
                  <img src={team.BOT.imgUrl} alt={team.BOT.nickName} />
                </PlayerImgBlock>
              )}
              <PlayerDescriptionBlock>
                <PlayerNickname imgToggle={imgToggle}>
                  {team.BOT.nickName}
                </PlayerNickname>
                {descriptionToggle && (
                  <PlayerDescription>
                    <div>
                      <div>
                        {team.BOT.name} ({team.BOT.birthday})
                      </div>
                    </div>
                    <div>
                      <div>
                        {[...Array(team.BOT.career.worlds)].map((el, idx) => {
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
                        {[...Array(team.BOT.career.msi)].map((el, idx) => {
                          return (
                            <img key={idx} src={msiTrophy} alt="MSI Trophy" />
                          );
                        })}
                      </div>
                      <div>
                        {[...Array(team.BOT.career.lck)].map((el, idx) => {
                          return (
                            <img key={idx} src={lckTrophy} alt="LCK Trophy" />
                          );
                        })}
                      </div>
                    </div>
                  </PlayerDescription>
                )}
              </PlayerDescriptionBlock>
            </TruePositionBlock>
          ) : (
            <FalsePositionBlock
              imgToggle={imgToggle}
              descriptionToggle={descriptionToggle}
            >
              BOT
            </FalsePositionBlock>
          )}
          {team.SPT ? (
            <TruePositionBlock>
              {imgToggle && (
                <PlayerImgBlock>
                  <PlayerPosition>
                    {PositionIcon(team.SPT.position)}
                  </PlayerPosition>
                  <img src={team.SPT.imgUrl} alt={team.SPT.nickName} />
                </PlayerImgBlock>
              )}
              <PlayerDescriptionBlock>
                <PlayerNickname imgToggle={imgToggle}>
                  {team.SPT.nickName}
                </PlayerNickname>
                {descriptionToggle && (
                  <PlayerDescription>
                    <div>
                      <div>
                        {team.SPT.name} ({team.SPT.birthday})
                      </div>
                    </div>
                    <div>
                      <div>
                        {[...Array(team.SPT.career.worlds)].map((el, idx) => {
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
                        {[...Array(team.SPT.career.msi)].map((el, idx) => {
                          return (
                            <img key={idx} src={msiTrophy} alt="MSI Trophy" />
                          );
                        })}
                      </div>
                      <div>
                        {[...Array(team.SPT.career.lck)].map((el, idx) => {
                          return (
                            <img key={idx} src={lckTrophy} alt="LCK Trophy" />
                          );
                        })}
                      </div>
                    </div>
                  </PlayerDescription>
                )}
              </PlayerDescriptionBlock>
            </TruePositionBlock>
          ) : (
            <FalsePositionBlock
              imgToggle={imgToggle}
              descriptionToggle={descriptionToggle}
            >
              SPT
            </FalsePositionBlock>
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
const FalsePositionBlock = styled.div`
  height: ${(props) =>
    props.imgToggle ? "100%" : props.descriptionToggle ? "100%" : "36.5px"};
  align-self: center;
  border-radius: 3px;
  ${(props) => props.theme.typography.bodySmBold};
  color: ${(props) => props.theme.color.grayScale.gray60};
  border-width: 1px;
  border-style: dashed;
  border-color: ${(props) => props.theme.color.grayScale.gray60};
`;
const TruePositionBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
const PlayerBlock = styled.div`
  width: 159px;
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
const PlayerPosition = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;
const PlayerDescriptionBlock = styled(PlayerBlock)`
  padding: 0 10px 10px;
  border-radius: ${(props) => (props.imgToggle ? "0 0 3px 3px" : "3px")};
`;
const PlayerNickname = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.color.white};
  color: ${(props) => props.theme.color.black};
  padding: ${(props) => (props.imgToggle ? "5px 0 0" : "10px 0 0")};
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

export default Roster;
