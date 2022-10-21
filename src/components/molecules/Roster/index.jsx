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
          <TOP width={40} height={40} fill={"#777777"} />
        </PositionWrapper>
        <PositionWrapper>
          <JGL width={40} height={40} fill={"#777777"} />
        </PositionWrapper>
        <PositionWrapper>
          <MID width={40} height={40} fill={"#777777"} />
        </PositionWrapper>
        <PositionWrapper>
          <BOT width={40} height={40} fill={"#777777"} />
        </PositionWrapper>
        <PositionWrapper>
          <SPT width={40} height={40} fill={"#777777"} />
        </PositionWrapper>
      </InnerWrapper>
      {roster.map((team) => (
        <InnerWrapper key={team.id}>
          <TeamLogoWrapper>{TeamLogo(team.name)}</TeamLogoWrapper>
          {team.TOP ? (
            <TruePositionBlock>
              {imgToggle && (
                <PlayerImgBlock>
                  <PlayerPosition>
                    {PositionIcon(team.TOP.position)}
                  </PlayerPosition>
                  <img src={team.TOP.img} alt={team.TOP.nickName} />
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
                  <img src={team.JGL.img} alt={team.JGL.nickName} />
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
                  <img src={team.MID.img} alt={team.MID.nickName} />
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
                  <img src={team.BOT.img} alt={team.BOT.nickName} />
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
                  <img src={team.SPT.img} alt={team.SPT.nickName} />
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
    </PlayerListInnerWrapper>
  );
};

const PlayerListInnerWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.color.grayScale.gray20};
  border-radius: 3px;
  margin-top: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 159px 159px 159px 159px 159px;
  gap: 10px;

  & + & {
    margin-top: 10px;
  }

  &:last-child {
    border-bottom: none;
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const PositionWrapper = styled.div`
  padding: 0 0 10px;
`;
const TeamLogoWrapper = styled.div`
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FalsePositionBlock = styled.div`
  height: ${(props) =>
    props.imgToggle ? "100%" : props.descriptionToggle ? "100%" : "36.5px"};
  align-self: center;
  background-color: #fff;
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
