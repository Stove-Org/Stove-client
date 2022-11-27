import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { getShareRosters } from "../../../api/next-lck";
import TeamLogo from "../../../components/atoms/TeamLogo";
import ToggleButton from "../../../components/atoms/ToggleButton";
import PositionIcon from "../../../components/atoms/PositionIcon";
import PageTitle from "../../../components/atoms/PageTitle";
import Button from "../../../components/atoms/Button";

import TOP from "../../../assets/svg/positions/TOP";
import JGL from "../../../assets/svg/positions/JGL";
import MID from "../../../assets/svg/positions/MID";
import BOT from "../../../assets/svg/positions/BOT";
import SPT from "../../../assets/svg/positions/SPT";

import worldsTrophy from "../../../assets/svg/trophys/worlds.svg";
import msiTrophy from "../../../assets/svg/trophys/msi.svg";
import lckTrophy from "../../../assets/svg/trophys/lck.svg";

const NextLCKResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname.split("/");
  const decodeNickname = decodeURI(pathName[2]);

  const [resultRosters, setResultRosters] = useState([]);
  const [imgToggle, setImgToggle] = useState(false);
  const [descriptionToggle, setDescriptionToggle] = useState(false);

  useEffect(() => {
    getShareRosters(decodeNickname).then((res) => setResultRosters(res.data));
  }, []);
  return (
    <>
      <PageTitle title={`${decodeNickname}님의 로스터`} />
      <ButtonsWrapper>
        <ToggleWrapper>
          <ToggleButton
            onClick={() => setImgToggle(!imgToggle)}
            toggle={imgToggle}
            text="선수 이미지"
          />
          <ToggleButton
            onClick={() => setDescriptionToggle(!descriptionToggle)}
            toggle={descriptionToggle}
            text="소개"
          />
        </ToggleWrapper>
        <Button
          text={"+ 내 로스터 만들기"}
          styleType={"primary"}
          onClick={() => {
            navigate("/nextlck");
          }}
        />
      </ButtonsWrapper>
      <RosterWrapper>
        <RosterInnerWrapper>
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
        </RosterInnerWrapper>
        <RosterInnerWrapper>
          {resultRosters ? (
            <>
              <TeamLogoWrapper teamName="DRX" imgToggle={imgToggle}>
                <StyleTeamName imgToggle={imgToggle}>DRX</StyleTeamName>
                <StyleTeamLogo imgToggle={imgToggle}>
                  {TeamLogo("DRX")}
                </StyleTeamLogo>
              </TeamLogoWrapper>
              {resultRosters
                .filter((item) => item.team === "DRX")
                .map(({ progamer, team, position }, index) =>
                  progamer ? (
                    <div key={progamer.id}>
                      {imgToggle && (
                        <PlayerImgBlock>
                          <PlayerPosition>
                            {PositionIcon(position)}
                          </PlayerPosition>
                          <PlayerImg
                            src={progamer.imgUrl}
                            alt={progamer.nickname}
                          />
                        </PlayerImgBlock>
                      )}
                      <PlayerDescriptionBlock>
                        <Playernickname imgToggle={imgToggle}>
                          {progamer.nickname}
                        </Playernickname>
                        {descriptionToggle && (
                          <PlayerDescription>
                            <div>
                              <div>
                                {progamer.name} ({progamer.birthday})
                              </div>
                            </div>
                            <div>
                              <div>
                                {[...Array(progamer.career.worlds)].map(
                                  (el, idx) => {
                                    return (
                                      <img
                                        key={idx}
                                        src={worldsTrophy}
                                        alt="Worlds Trophy"
                                      />
                                    );
                                  }
                                )}
                              </div>
                              <div>
                                {[...Array(progamer.career.msi)].map(
                                  (el, idx) => {
                                    return (
                                      <img
                                        key={idx}
                                        src={msiTrophy}
                                        alt="MSI Trophy"
                                      />
                                    );
                                  }
                                )}
                              </div>
                              <div>
                                {[...Array(progamer.career.lck)].map(
                                  (el, idx) => {
                                    return (
                                      <img
                                        key={idx}
                                        src={lckTrophy}
                                        alt="LCK Trophy"
                                      />
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          </PlayerDescription>
                        )}
                      </PlayerDescriptionBlock>
                    </div>
                  ) : (
                    <FalsePositionBlock
                      imgToggle={imgToggle}
                      descriptionToggle={descriptionToggle}
                      key={`${team}-${position}`}
                    >
                      <p>{position}</p>
                    </FalsePositionBlock>
                  )
                )}
            </>
          ) : (
            <></>
          )}
          {resultRosters ? (
            <>
              <TeamLogoWrapper teamName="T1" imgToggle={imgToggle}>
                <StyleTeamName imgToggle={imgToggle}>T1</StyleTeamName>
                <StyleTeamLogo imgToggle={imgToggle}>
                  {TeamLogo("T1")}
                </StyleTeamLogo>
              </TeamLogoWrapper>
              {resultRosters
                .filter((item) => item.team === "T1")
                .map(({ progamer, team, position }, index) =>
                  progamer ? (
                    <div key={progamer.id}>
                      {imgToggle && (
                        <PlayerImgBlock>
                          <PlayerPosition>
                            {PositionIcon(position)}
                          </PlayerPosition>
                          <PlayerImg
                            src={progamer.imgUrl}
                            alt={progamer.nickname}
                          />
                        </PlayerImgBlock>
                      )}
                      <PlayerDescriptionBlock>
                        <Playernickname imgToggle={imgToggle}>
                          {progamer.nickname}
                        </Playernickname>
                        {descriptionToggle && (
                          <PlayerDescription>
                            <div>
                              <div>
                                {progamer.name} ({progamer.birthday})
                              </div>
                            </div>
                            <div>
                              <div>
                                {[...Array(progamer.career.worlds)].map(
                                  (el, idx) => {
                                    return (
                                      <img
                                        key={idx}
                                        src={worldsTrophy}
                                        alt="Worlds Trophy"
                                      />
                                    );
                                  }
                                )}
                              </div>
                              <div>
                                {[...Array(progamer.career.msi)].map(
                                  (el, idx) => {
                                    return (
                                      <img
                                        key={idx}
                                        src={msiTrophy}
                                        alt="MSI Trophy"
                                      />
                                    );
                                  }
                                )}
                              </div>
                              <div>
                                {[...Array(progamer.career.lck)].map(
                                  (el, idx) => {
                                    return (
                                      <img
                                        key={idx}
                                        src={lckTrophy}
                                        alt="LCK Trophy"
                                      />
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          </PlayerDescription>
                        )}
                      </PlayerDescriptionBlock>
                    </div>
                  ) : (
                    <FalsePositionBlock
                      imgToggle={imgToggle}
                      descriptionToggle={descriptionToggle}
                      key={`${team}-${position}`}
                    >
                      <p>{position}</p>
                    </FalsePositionBlock>
                  )
                )}
            </>
          ) : (
            <></>
          )}
          {resultRosters ? (
            <>
              <TeamLogoWrapper teamName="GEN" imgToggle={imgToggle}>
                <StyleTeamName imgToggle={imgToggle}>GEN</StyleTeamName>
                <StyleTeamLogo imgToggle={imgToggle}>
                  {TeamLogo("GEN")}
                </StyleTeamLogo>
              </TeamLogoWrapper>
              {resultRosters
                .filter((item) => item.team === "GEN")
                .map(({ progamer, team, position }, index) =>
                  progamer ? (
                    <div key={progamer.id}>
                      {imgToggle && (
                        <PlayerImgBlock>
                          <PlayerPosition>
                            {PositionIcon(position)}
                          </PlayerPosition>
                          <PlayerImg
                            src={progamer.imgUrl}
                            alt={progamer.nickname}
                          />
                        </PlayerImgBlock>
                      )}
                      <PlayerDescriptionBlock>
                        <Playernickname imgToggle={imgToggle}>
                          {progamer.nickname}
                        </Playernickname>
                        {descriptionToggle && (
                          <PlayerDescription>
                            <div>
                              <div>
                                {progamer.name} ({progamer.birthday})
                              </div>
                            </div>
                            <div>
                              <div>
                                {[...Array(progamer.career.worlds)].map(
                                  (el, idx) => {
                                    return (
                                      <img
                                        key={idx}
                                        src={worldsTrophy}
                                        alt="Worlds Trophy"
                                      />
                                    );
                                  }
                                )}
                              </div>
                              <div>
                                {[...Array(progamer.career.msi)].map(
                                  (el, idx) => {
                                    return (
                                      <img
                                        key={idx}
                                        src={msiTrophy}
                                        alt="MSI Trophy"
                                      />
                                    );
                                  }
                                )}
                              </div>
                              <div>
                                {[...Array(progamer.career.lck)].map(
                                  (el, idx) => {
                                    return (
                                      <img
                                        key={idx}
                                        src={lckTrophy}
                                        alt="LCK Trophy"
                                      />
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          </PlayerDescription>
                        )}
                      </PlayerDescriptionBlock>
                    </div>
                  ) : (
                    <FalsePositionBlock
                      imgToggle={imgToggle}
                      descriptionToggle={descriptionToggle}
                      key={`${team}-${position}`}
                    >
                      <p>{position}</p>
                    </FalsePositionBlock>
                  )
                )}
            </>
          ) : (
            <></>
          )}
          {resultRosters ? (
            <>
              <TeamLogoWrapper teamName="DK" imgToggle={imgToggle}>
                <StyleTeamName imgToggle={imgToggle}>DK</StyleTeamName>
                <StyleTeamLogo imgToggle={imgToggle}>
                  {TeamLogo("DK")}
                </StyleTeamLogo>
              </TeamLogoWrapper>
              {resultRosters
                .filter((item) => item.team === "DK")
                .map(({ progamer, team, position }, index) =>
                  progamer ? (
                    <div key={progamer.id}>
                      {imgToggle && (
                        <PlayerImgBlock>
                          <PlayerPosition>
                            {PositionIcon(position)}
                          </PlayerPosition>
                          <PlayerImg
                            src={progamer.imgUrl}
                            alt={progamer.nickname}
                          />
                        </PlayerImgBlock>
                      )}
                      <PlayerDescriptionBlock>
                        <Playernickname imgToggle={imgToggle}>
                          {progamer.nickname}
                        </Playernickname>
                        {descriptionToggle && (
                          <PlayerDescription>
                            <div>
                              <div>
                                {progamer.name} ({progamer.birthday})
                              </div>
                            </div>
                            <div>
                              <div>
                                {[...Array(progamer.career.worlds)].map(
                                  (el, idx) => {
                                    return (
                                      <img
                                        key={idx}
                                        src={worldsTrophy}
                                        alt="Worlds Trophy"
                                      />
                                    );
                                  }
                                )}
                              </div>
                              <div>
                                {[...Array(progamer.career.msi)].map(
                                  (el, idx) => {
                                    return (
                                      <img
                                        key={idx}
                                        src={msiTrophy}
                                        alt="MSI Trophy"
                                      />
                                    );
                                  }
                                )}
                              </div>
                              <div>
                                {[...Array(progamer.career.lck)].map(
                                  (el, idx) => {
                                    return (
                                      <img
                                        key={idx}
                                        src={lckTrophy}
                                        alt="LCK Trophy"
                                      />
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          </PlayerDescription>
                        )}
                      </PlayerDescriptionBlock>
                    </div>
                  ) : (
                    <FalsePositionBlock
                      imgToggle={imgToggle}
                      descriptionToggle={descriptionToggle}
                      key={`${team}-${position}`}
                    >
                      <p>{position}</p>
                    </FalsePositionBlock>
                  )
                )}
            </>
          ) : (
            <></>
          )}
          {resultRosters ? (
            <>
              <TeamLogoWrapper teamName="LSB" imgToggle={imgToggle}>
                <StyleTeamName imgToggle={imgToggle}>LSB</StyleTeamName>
                <StyleTeamLogo imgToggle={imgToggle}>
                  {TeamLogo("LSB")}
                </StyleTeamLogo>
              </TeamLogoWrapper>
              {resultRosters
                .filter((item) => item.team === "LSB")
                .map(({ progamer, team, position }, index) =>
                  progamer ? (
                    <div key={progamer.id}>
                      {imgToggle && (
                        <PlayerImgBlock>
                          <PlayerPosition>
                            {PositionIcon(position)}
                          </PlayerPosition>
                          <PlayerImg
                            src={progamer.imgUrl}
                            alt={progamer.nickname}
                          />
                        </PlayerImgBlock>
                      )}
                      <PlayerDescriptionBlock>
                        <Playernickname imgToggle={imgToggle}>
                          {progamer.nickname}
                        </Playernickname>
                        {descriptionToggle && (
                          <PlayerDescription>
                            <div>
                              <div>
                                {progamer.name} ({progamer.birthday})
                              </div>
                            </div>
                            <div>
                              <div>
                                {[...Array(progamer.career.worlds)].map(
                                  (el, idx) => {
                                    return (
                                      <img
                                        key={idx}
                                        src={worldsTrophy}
                                        alt="Worlds Trophy"
                                      />
                                    );
                                  }
                                )}
                              </div>
                              <div>
                                {[...Array(progamer.career.msi)].map(
                                  (el, idx) => {
                                    return (
                                      <img
                                        key={idx}
                                        src={msiTrophy}
                                        alt="MSI Trophy"
                                      />
                                    );
                                  }
                                )}
                              </div>
                              <div>
                                {[...Array(progamer.career.lck)].map(
                                  (el, idx) => {
                                    return (
                                      <img
                                        key={idx}
                                        src={lckTrophy}
                                        alt="LCK Trophy"
                                      />
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          </PlayerDescription>
                        )}
                      </PlayerDescriptionBlock>
                    </div>
                  ) : (
                    <FalsePositionBlock
                      imgToggle={imgToggle}
                      descriptionToggle={descriptionToggle}
                      key={`${team}-${position}`}
                    >
                      <p>{position}</p>
                    </FalsePositionBlock>
                  )
                )}
            </>
          ) : (
            <></>
          )}
          {resultRosters ? (
            <>
              <TeamLogoWrapper teamName="KT" imgToggle={imgToggle}>
                <StyleTeamName imgToggle={imgToggle}>KT</StyleTeamName>
                <StyleTeamLogo imgToggle={imgToggle}>
                  {TeamLogo("KT")}
                </StyleTeamLogo>
              </TeamLogoWrapper>
              {resultRosters
                .filter((item) => item.team === "KT")
                .map(({ progamer, team, position }, index) =>
                  progamer ? (
                    <div key={progamer.id}>
                      {imgToggle && (
                        <PlayerImgBlock>
                          <PlayerPosition>
                            {PositionIcon(position)}
                          </PlayerPosition>
                          <PlayerImg
                            src={progamer.imgUrl}
                            alt={progamer.nickname}
                          />
                        </PlayerImgBlock>
                      )}
                      <PlayerDescriptionBlock>
                        <Playernickname imgToggle={imgToggle}>
                          {progamer.nickname}
                        </Playernickname>
                        {descriptionToggle && (
                          <PlayerDescription>
                            <div>
                              <div>
                                {progamer.name} ({progamer.birthday})
                              </div>
                            </div>
                            <div>
                              <div>
                                {[...Array(progamer.career.worlds)].map(
                                  (el, idx) => {
                                    return (
                                      <img
                                        key={idx}
                                        src={worldsTrophy}
                                        alt="Worlds Trophy"
                                      />
                                    );
                                  }
                                )}
                              </div>
                              <div>
                                {[...Array(progamer.career.msi)].map(
                                  (el, idx) => {
                                    return (
                                      <img
                                        key={idx}
                                        src={msiTrophy}
                                        alt="MSI Trophy"
                                      />
                                    );
                                  }
                                )}
                              </div>
                              <div>
                                {[...Array(progamer.career.lck)].map(
                                  (el, idx) => {
                                    return (
                                      <img
                                        key={idx}
                                        src={lckTrophy}
                                        alt="LCK Trophy"
                                      />
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          </PlayerDescription>
                        )}
                      </PlayerDescriptionBlock>
                    </div>
                  ) : (
                    <FalsePositionBlock
                      imgToggle={imgToggle}
                      descriptionToggle={descriptionToggle}
                      key={`${team}-${position}`}
                    >
                      <p>{position}</p>
                    </FalsePositionBlock>
                  )
                )}
            </>
          ) : (
            <></>
          )}
          {resultRosters ? (
            <>
              <TeamLogoWrapper teamName="KDF" imgToggle={imgToggle}>
                <StyleTeamName imgToggle={imgToggle}>KDF</StyleTeamName>
                <StyleTeamLogo imgToggle={imgToggle}>
                  {TeamLogo("KDF")}
                </StyleTeamLogo>
              </TeamLogoWrapper>
              {resultRosters
                .filter((item) => item.team === "KDF")
                .map(({ progamer, team, position }, index) =>
                  progamer ? (
                    <div key={progamer.id}>
                      {imgToggle && (
                        <PlayerImgBlock>
                          <PlayerPosition>
                            {PositionIcon(position)}
                          </PlayerPosition>
                          <PlayerImg
                            src={progamer.imgUrl}
                            alt={progamer.nickname}
                          />
                        </PlayerImgBlock>
                      )}
                      <PlayerDescriptionBlock>
                        <Playernickname imgToggle={imgToggle}>
                          {progamer.nickname}
                        </Playernickname>
                        {descriptionToggle && (
                          <PlayerDescription>
                            <div>
                              <div>
                                {progamer.name} ({progamer.birthday})
                              </div>
                            </div>
                            <div>
                              <div>
                                {[...Array(progamer.career.worlds)].map(
                                  (el, idx) => {
                                    return (
                                      <img
                                        key={idx}
                                        src={worldsTrophy}
                                        alt="Worlds Trophy"
                                      />
                                    );
                                  }
                                )}
                              </div>
                              <div>
                                {[...Array(progamer.career.msi)].map(
                                  (el, idx) => {
                                    return (
                                      <img
                                        key={idx}
                                        src={msiTrophy}
                                        alt="MSI Trophy"
                                      />
                                    );
                                  }
                                )}
                              </div>
                              <div>
                                {[...Array(progamer.career.lck)].map(
                                  (el, idx) => {
                                    return (
                                      <img
                                        key={idx}
                                        src={lckTrophy}
                                        alt="LCK Trophy"
                                      />
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          </PlayerDescription>
                        )}
                      </PlayerDescriptionBlock>
                    </div>
                  ) : (
                    <FalsePositionBlock
                      imgToggle={imgToggle}
                      descriptionToggle={descriptionToggle}
                      key={`${team}-${position}`}
                    >
                      <p>{position}</p>
                    </FalsePositionBlock>
                  )
                )}
            </>
          ) : (
            <></>
          )}
          {resultRosters ? (
            <>
              <TeamLogoWrapper teamName="NS" imgToggle={imgToggle}>
                <StyleTeamName imgToggle={imgToggle}>NS</StyleTeamName>
                <StyleTeamLogo imgToggle={imgToggle}>
                  {TeamLogo("NS")}
                </StyleTeamLogo>
              </TeamLogoWrapper>
              {resultRosters
                .filter((item) => item.team === "NS")
                .map(({ progamer, team, position }, index) =>
                  progamer ? (
                    <div key={progamer.id}>
                      {imgToggle && (
                        <PlayerImgBlock>
                          <PlayerPosition>
                            {PositionIcon(position)}
                          </PlayerPosition>
                          <PlayerImg
                            src={progamer.imgUrl}
                            alt={progamer.nickname}
                          />
                        </PlayerImgBlock>
                      )}
                      <PlayerDescriptionBlock>
                        <Playernickname imgToggle={imgToggle}>
                          {progamer.nickname}
                        </Playernickname>
                        {descriptionToggle && (
                          <PlayerDescription>
                            <div>
                              <div>
                                {progamer.name} ({progamer.birthday})
                              </div>
                            </div>
                            <div>
                              <div>
                                {[...Array(progamer.career.worlds)].map(
                                  (el, idx) => {
                                    return (
                                      <img
                                        key={idx}
                                        src={worldsTrophy}
                                        alt="Worlds Trophy"
                                      />
                                    );
                                  }
                                )}
                              </div>
                              <div>
                                {[...Array(progamer.career.msi)].map(
                                  (el, idx) => {
                                    return (
                                      <img
                                        key={idx}
                                        src={msiTrophy}
                                        alt="MSI Trophy"
                                      />
                                    );
                                  }
                                )}
                              </div>
                              <div>
                                {[...Array(progamer.career.lck)].map(
                                  (el, idx) => {
                                    return (
                                      <img
                                        key={idx}
                                        src={lckTrophy}
                                        alt="LCK Trophy"
                                      />
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          </PlayerDescription>
                        )}
                      </PlayerDescriptionBlock>
                    </div>
                  ) : (
                    <FalsePositionBlock
                      imgToggle={imgToggle}
                      descriptionToggle={descriptionToggle}
                      key={`${team}-${position}`}
                    >
                      <p>{position}</p>
                    </FalsePositionBlock>
                  )
                )}
            </>
          ) : (
            <></>
          )}
          {resultRosters ? (
            <>
              <TeamLogoWrapper teamName="BRO" imgToggle={imgToggle}>
                <StyleTeamName imgToggle={imgToggle}>BRO</StyleTeamName>
                <StyleTeamLogo imgToggle={imgToggle}>
                  {TeamLogo("BRO")}
                </StyleTeamLogo>
              </TeamLogoWrapper>
              {resultRosters
                .filter((item) => item.team === "BRO")
                .map(({ progamer, team, position }, index) =>
                  progamer ? (
                    <div key={progamer.id}>
                      {imgToggle && (
                        <PlayerImgBlock>
                          <PlayerPosition>
                            {PositionIcon(position)}
                          </PlayerPosition>
                          <PlayerImg
                            src={progamer.imgUrl}
                            alt={progamer.nickname}
                          />
                        </PlayerImgBlock>
                      )}
                      <PlayerDescriptionBlock>
                        <Playernickname imgToggle={imgToggle}>
                          {progamer.nickname}
                        </Playernickname>
                        {descriptionToggle && (
                          <PlayerDescription>
                            <div>
                              <div>
                                {progamer.name} ({progamer.birthday})
                              </div>
                            </div>
                            <div>
                              <div>
                                {[...Array(progamer.career.worlds)].map(
                                  (el, idx) => {
                                    return (
                                      <img
                                        key={idx}
                                        src={worldsTrophy}
                                        alt="Worlds Trophy"
                                      />
                                    );
                                  }
                                )}
                              </div>
                              <div>
                                {[...Array(progamer.career.msi)].map(
                                  (el, idx) => {
                                    return (
                                      <img
                                        key={idx}
                                        src={msiTrophy}
                                        alt="MSI Trophy"
                                      />
                                    );
                                  }
                                )}
                              </div>
                              <div>
                                {[...Array(progamer.career.lck)].map(
                                  (el, idx) => {
                                    return (
                                      <img
                                        key={idx}
                                        src={lckTrophy}
                                        alt="LCK Trophy"
                                      />
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          </PlayerDescription>
                        )}
                      </PlayerDescriptionBlock>
                    </div>
                  ) : (
                    <FalsePositionBlock
                      imgToggle={imgToggle}
                      descriptionToggle={descriptionToggle}
                      key={`${team}-${position}`}
                    >
                      <p>{position}</p>
                    </FalsePositionBlock>
                  )
                )}
            </>
          ) : (
            <></>
          )}
          {resultRosters ? (
            <>
              <TeamLogoWrapper teamName="HLE" imgToggle={imgToggle}>
                <StyleTeamName imgToggle={imgToggle}>HLE</StyleTeamName>
                <StyleTeamLogo imgToggle={imgToggle}>
                  {TeamLogo("HLE")}
                </StyleTeamLogo>
              </TeamLogoWrapper>
              {resultRosters
                .filter((item) => item.team === "HLE")
                .map(({ progamer, team, position }, index) =>
                  progamer ? (
                    <div key={progamer.id}>
                      {imgToggle && (
                        <PlayerImgBlock>
                          <PlayerPosition>
                            {PositionIcon(position)}
                          </PlayerPosition>
                          <PlayerImg
                            src={progamer.imgUrl}
                            alt={progamer.nickname}
                          />
                        </PlayerImgBlock>
                      )}
                      <PlayerDescriptionBlock>
                        <Playernickname imgToggle={imgToggle}>
                          {progamer.nickname}
                        </Playernickname>
                        {descriptionToggle && (
                          <PlayerDescription>
                            <div>
                              <div>
                                {progamer.name} ({progamer.birthday})
                              </div>
                            </div>
                            <div>
                              <div>
                                {[...Array(progamer.career.worlds)].map(
                                  (el, idx) => {
                                    return (
                                      <img
                                        key={idx}
                                        src={progamer.career.worldsTrophy}
                                        alt="Worlds Trophy"
                                      />
                                    );
                                  }
                                )}
                              </div>
                              <div>
                                {[...Array(progamer.career.msi)].map(
                                  (el, idx) => {
                                    return (
                                      <img
                                        key={idx}
                                        src={progamer.career.msiTrophy}
                                        alt="MSI Trophy"
                                      />
                                    );
                                  }
                                )}
                              </div>
                              <div>
                                {[...Array(progamer.career.lck)].map(
                                  (el, idx) => {
                                    return (
                                      <img
                                        key={idx}
                                        src={progamer.career.lckTrophy}
                                        alt="LCK Trophy"
                                      />
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          </PlayerDescription>
                        )}
                      </PlayerDescriptionBlock>
                    </div>
                  ) : (
                    <FalsePositionBlock
                      imgToggle={imgToggle}
                      descriptionToggle={descriptionToggle}
                      key={`${team}-${position}`}
                    >
                      <p>{position}</p>
                    </FalsePositionBlock>
                  )
                )}
            </>
          ) : (
            <></>
          )}
        </RosterInnerWrapper>
        <RosterInnerWrapper>
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
        </RosterInnerWrapper>
      </RosterWrapper>
    </>
  );
};

const InnerContainer = styled.div`
  width: auto;
  background-color: ${(props) => props.theme.color.grayScale.gray20};
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;
const RosterWrapper = styled(InnerContainer)`
  border-radius: 3px;
  margin: 20px 10px 40px;
  padding: 10px;
  overflow-x: scroll;
  @media screen and (min-width: 768px) {
    margin: 20px 0 40px;
    padding: 10px 20px 10px;
  }
`;
const RosterInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;

  & + & {
    margin-top: 0;
  }

  @media screen and (min-width: 768px) {
    & + & {
      margin-top: 10px;
    }
  }
`;
// imgToggle
const TeamLogoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
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
  display: ${(props) => props.imgToggle && "none"};
  margin-left: 16px;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;
const StyleTeamLogo = styled.div`
  width: ${(props) => (props.imgToggle ? "100%" : "30px")};
  padding: ${(props) => props.imgToggle && "20%"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  @media screen and (min-width: 768px) {
    margin: ${(props) => props.imgToggle === false && "0 10px 0 0"};
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 10px 0;
  @media screen and (min-width: 768px) {
    margin: 20px 0 0;
  }
`;

const ToggleWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: none;

  & > div + div {
    margin-left: 16px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const PlayerBlock = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.color.white};
  display: flex;
  flex-direction: column;
`;
const PlayerImgBlock = styled(PlayerBlock)`
  height: 150px;
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
const PlayerDescriptionBlock = styled(PlayerBlock)`
  padding: 0 10px 10px;
  border-radius: ${(props) => (props.imgToggle ? "0 0 3px 3px" : "3px")};
`;
const PlayerPosition = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;
const PlayerImg = styled.img`
  height: 100%;
  object-fit: cover;
`;
const Playernickname = styled.div`
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
const FalsePositionBlock = styled.div`
  height: ${(props) =>
    props.imgToggle ? "100%" : props.descriptionToggle ? "100%" : "36.5px"};
  align-self: center;
  border-radius: 3px;
  background-color: ${(props) => props.theme.color.grayScale.gray20};
  ${(props) => props.theme.typography.bodySmBold};
  color: ${(props) => props.theme.color.grayScale.gray60};
  border-width: 1px;
  border-style: dashed;
  border-color: ${(props) => props.theme.color.grayScale.gray60};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PositionWrapper = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export default NextLCKResult;
