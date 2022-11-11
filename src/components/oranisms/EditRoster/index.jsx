import { useState } from "react";
import styled from "styled-components";
import update from "immutability-helper";

import { useDrop } from "react-dnd";
import { ItemTypes } from "../../../utils/ItemTypes";

import Roster from "../../molecules/Roster";
import Progamer from "../../molecules/Progamer";
import NextLCKButtons from "./NextLCKButtons";
import TeamLogo from "../../atoms/TeamLogo";

import TOP from "../../../assets/svg/positions/TOP";
import JGL from "../../../assets/svg/positions/JGL";
import MID from "../../../assets/svg/positions/MID";
import BOT from "../../../assets/svg/positions/BOT";
import SPT from "../../../assets/svg/positions/SPT";

const EditRoster = ({ rosters, setRosters, progamers, setProgamers }) => {
  const [imgToggle, setImgToggle] = useState(true);
  const [descriptionToggle, setDescriptionToggle] = useState(false);
  const [search, setSearch] = useState("");
  const [searchProgamer, setSearchProgamer] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  const handleRosterDrop = (index, item, progamer) => {
    const { nickname } = item;

    // 📌 현재 Drag 중인 progamer drop하는 roster에 [UPDATE] 📌
    // 📌 이미 roster에 올라와있는 선수가 다른 roster로 이동할 때 기존 Drop roster는 제거하고 Drop 📌
    const prevRosterProgamer = rosters.findIndex(
      (item) => item.progamer && item.progamer.nickname === nickname
    );

    if (prevRosterProgamer === 0) {
      setRosters(
        update(rosters, {
          [index]: {
            progamer: {
              $set: item,
            },
          },
          0: {
            progamer: {
              $set: null,
            },
          },
        })
      );
    } else if (prevRosterProgamer && prevRosterProgamer !== -1) {
      setRosters(
        update(rosters, {
          [index]: {
            progamer: {
              $set: item,
            },
          },
          [prevRosterProgamer]: {
            progamer: {
              $set: null,
            },
          },
        })
      );
    } else {
      setRosters(
        update(rosters, {
          [index]: {
            progamer: {
              $set: item,
            },
          },
        })
      );
    }

    // 📌 Drop할 때 이전 게이머 제거하고 현재 드랍된 게이머 리스트에 추가하기 📌
    // 1. progamers useState 배열에 드랍하는 nickname을 제외하고 새 배열에 담는다.
    let newProgamers = progamers.filter((item) => item.nickname !== nickname);
    // 2. progamer가 null이 아닌 경우
    //    Drop하는 로스터 포지션의 이전 progamer 정보를 새 배열에 push 한다
    if (progamer !== null) {
      newProgamers.push(progamer);
    }

    const sortedProgamers = newProgamers.sort((a, b) => {
      if (a.nickname > b.nickname) return 1;
      if (a.nickname < b.nickname) return -1;
      return 0;
    });
    // 3. set함수로 [UPDATE] 해준다.
    setProgamers(sortedProgamers);

    // 📌 search중이라면? Search set 배열에서도 삭제해주기 📌
    if (isSearch) {
      let newSearchProgamers = searchProgamer.filter(
        (item) => item.nickname !== nickname
      );
      setSearchProgamer(newSearchProgamers);
    }
  };

  const handleProgamerListDrop = (item) => {
    const { nickname } = item;

    // 1. rosters에서 item.nickname과 같은 progamer.nickname = null 로 변경
    const removeProgamerIndex = rosters.findIndex((item) => {
      return item.progamer && item.progamer.nickname === nickname;
    });
    setRosters(
      update(rosters, {
        [removeProgamerIndex]: {
          progamer: {
            $set: null,
          },
        },
      })
    );

    // 2. progamers에 객체 push 후 sort로 배열정렬
    const newProgamersArr = [...progamers, item].sort((a, b) => {
      if (a.nickname > b.nickname) return 1;
      if (a.nickname < b.nickname) return -1;
      return 0;
    });

    setProgamers(newProgamersArr);
  };

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes.PLAYER,
    drop: handleProgamerListDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  // const isActive = isOver && canDrop; // Drop중인 영역

  const handleChange = (e) => {
    setSearch(e.target.value);

    if (e.target.value === "") {
      setIsSearch(false);
    } else {
      setIsSearch(true);
      const filterProgamer = progamers.filter((item) => {
        if (
          item.nickname.toLowerCase().includes(e.target.value.toLowerCase())
        ) {
          return item;
        } else if (item.name.includes(e.target.value)) {
          return item;
        }
      });
      setSearchProgamer(filterProgamer);
    }
  };

  return (
    <ContainerWrapper>
      <NextLCKButtons
        imgToggle={imgToggle}
        setImgToggle={setImgToggle}
        descriptionToggle={descriptionToggle}
        setDescriptionToggle={setDescriptionToggle}
        rosters={rosters}
        setRosters={setRosters}
        setProgamers={setProgamers}
      />
      <SearchBarWrapper>
        <input
          type="search"
          value={search}
          onChange={handleChange}
          placeholder="선수 검색"
        />
      </SearchBarWrapper>
      <ProgamerWrapper ref={drop}>
        {isSearch ? (
          searchProgamer !== "" && searchProgamer.length !== 0 ? (
            searchProgamer.map((item) => (
              <Progamer
                key={item.id}
                alias={item.alias}
                nickname={item.nickname}
                birthday={item.birthday}
                career={item.career}
                id={item.id}
                imgUrl={item.imgUrl}
                name={item.name}
                position={item.position}
                imgToggle={imgToggle}
                descriptionToggle={descriptionToggle}
              />
            ))
          ) : (
            <SearchNotFound>
              <div>찾고 계신 선수가 없으신가요?</div>
              <SearchNotFoundText>
                Stove{" "}
                <a
                  href="https://discord.gg/xWqcpyk3"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  Discord 서버
                </a>
                에서 선수 요청하기
              </SearchNotFoundText>
            </SearchNotFound>
          )
        ) : progamers ? (
          progamers.map((item, index) => (
            <Progamer
              key={`progamer-${index}`}
              alias={item.alias}
              nickname={item.nickname}
              birthday={item.birthday}
              career={item.career}
              id={item.id}
              imgUrl={item.imgUrl}
              name={item.name}
              position={item.position}
              imgToggle={imgToggle}
              descriptionToggle={descriptionToggle}
              rosters={rosters}
              setRosters={setRosters}
              setProgamers={setProgamers}
              progamers={progamers}
            />
          ))
        ) : (
          <></>
        )}
      </ProgamerWrapper>
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
          {rosters ? (
            <>
              <TeamLogoWrapper teamName="DRX" imgToggle={imgToggle}>
                <StyleTeamName imgToggle={imgToggle}>DRX</StyleTeamName>
                <StyleTeamLogo imgToggle={imgToggle}>
                  {TeamLogo("DRX")}
                </StyleTeamLogo>
              </TeamLogoWrapper>
              {rosters
                .filter((item) => item.team === "DRX")
                .map(({ progamer, team, position }, index) => (
                  <Roster
                    imgToggle={imgToggle}
                    descriptionToggle={descriptionToggle}
                    progamer={progamer}
                    teamName={team}
                    position={position}
                    onDrop={(item) => handleRosterDrop(index, item, progamer)}
                    key={index}
                    rosters={rosters}
                    setRosters={setRosters}
                    progamers={progamers}
                    setProgamers={setProgamers}
                  />
                ))}
            </>
          ) : (
            <></>
          )}
          {rosters ? (
            <>
              <TeamLogoWrapper teamName="T1" imgToggle={imgToggle}>
                <StyleTeamName imgToggle={imgToggle}>T1</StyleTeamName>
                <StyleTeamLogo imgToggle={imgToggle}>
                  {TeamLogo("T1")}
                </StyleTeamLogo>
              </TeamLogoWrapper>
              {rosters
                .filter((item) => item.team === "T1")
                .map(({ progamer, team, position }, index) => (
                  <Roster
                    imgToggle={imgToggle}
                    descriptionToggle={descriptionToggle}
                    progamer={progamer}
                    teamName={team}
                    position={position}
                    onDrop={(item) =>
                      handleRosterDrop(index + 5, item, progamer)
                    }
                    key={index + 5}
                    rosters={rosters}
                    setRosters={setRosters}
                    progamers={progamers}
                    setProgamers={setProgamers}
                  />
                ))}
            </>
          ) : (
            <></>
          )}
          {rosters ? (
            <>
              <TeamLogoWrapper teamName="GEN" imgToggle={imgToggle}>
                <StyleTeamName imgToggle={imgToggle}>GEN</StyleTeamName>
                <StyleTeamLogo imgToggle={imgToggle}>
                  {TeamLogo("GEN")}
                </StyleTeamLogo>
              </TeamLogoWrapper>
              {rosters
                .filter((item) => item.team === "GEN")
                .map(({ progamer, team, position }, index) => (
                  <Roster
                    imgToggle={imgToggle}
                    descriptionToggle={descriptionToggle}
                    progamer={progamer}
                    teamName={team}
                    position={position}
                    onDrop={(item) =>
                      handleRosterDrop(index + 10, item, progamer)
                    }
                    key={index + 10}
                    rosters={rosters}
                    setRosters={setRosters}
                    progamers={progamers}
                    setProgamers={setProgamers}
                  />
                ))}
            </>
          ) : (
            <></>
          )}
          {rosters ? (
            <>
              <TeamLogoWrapper teamName="DK" imgToggle={imgToggle}>
                <StyleTeamName imgToggle={imgToggle}>DK</StyleTeamName>
                <StyleTeamLogo imgToggle={imgToggle}>
                  {TeamLogo("DK")}
                </StyleTeamLogo>
              </TeamLogoWrapper>
              {rosters
                .filter((item) => item.team === "DK")
                .map(({ progamer, team, position }, index) => (
                  <Roster
                    imgToggle={imgToggle}
                    descriptionToggle={descriptionToggle}
                    progamer={progamer}
                    teamName={team}
                    position={position}
                    onDrop={(item) =>
                      handleRosterDrop(index + 15, item, progamer)
                    }
                    key={index + 15}
                    rosters={rosters}
                    setRosters={setRosters}
                    progamers={progamers}
                    setProgamers={setProgamers}
                  />
                ))}
            </>
          ) : (
            <></>
          )}
          {rosters ? (
            <>
              <TeamLogoWrapper teamName="LSB" imgToggle={imgToggle}>
                <StyleTeamName imgToggle={imgToggle}>LSB</StyleTeamName>
                <StyleTeamLogo imgToggle={imgToggle}>
                  {TeamLogo("LSB")}
                </StyleTeamLogo>
              </TeamLogoWrapper>
              {rosters
                .filter((item) => item.team === "LSB")
                .map(({ progamer, team, position }, index) => (
                  <Roster
                    imgToggle={imgToggle}
                    descriptionToggle={descriptionToggle}
                    progamer={progamer}
                    teamName={team}
                    position={position}
                    onDrop={(item) =>
                      handleRosterDrop(index + 20, item, progamer)
                    }
                    key={index + 20}
                    rosters={rosters}
                    setRosters={setRosters}
                    progamers={progamers}
                    setProgamers={setProgamers}
                  />
                ))}
            </>
          ) : (
            <></>
          )}
          {rosters ? (
            <>
              <TeamLogoWrapper teamName="KT" imgToggle={imgToggle}>
                <StyleTeamName imgToggle={imgToggle}>KT</StyleTeamName>
                <StyleTeamLogo imgToggle={imgToggle}>
                  {TeamLogo("KT")}
                </StyleTeamLogo>
              </TeamLogoWrapper>
              {rosters
                .filter((item) => item.team === "KT")
                .map(({ progamer, team, position }, index) => (
                  <Roster
                    imgToggle={imgToggle}
                    descriptionToggle={descriptionToggle}
                    progamer={progamer}
                    teamName={team}
                    position={position}
                    onDrop={(item) =>
                      handleRosterDrop(index + 25, item, progamer)
                    }
                    key={index + 25}
                    rosters={rosters}
                    setRosters={setRosters}
                    progamers={progamers}
                    setProgamers={setProgamers}
                  />
                ))}
            </>
          ) : (
            <></>
          )}
          {rosters ? (
            <>
              <TeamLogoWrapper teamName="KDF" imgToggle={imgToggle}>
                <StyleTeamName imgToggle={imgToggle}>KDF</StyleTeamName>
                <StyleTeamLogo imgToggle={imgToggle}>
                  {TeamLogo("KDF")}
                </StyleTeamLogo>
              </TeamLogoWrapper>
              {rosters
                .filter((item) => item.team === "KDF")
                .map(({ progamer, team, position }, index) => (
                  <Roster
                    imgToggle={imgToggle}
                    descriptionToggle={descriptionToggle}
                    progamer={progamer}
                    teamName={team}
                    position={position}
                    onDrop={(item) =>
                      handleRosterDrop(index + 30, item, progamer)
                    }
                    key={index + 30}
                    rosters={rosters}
                    setRosters={setRosters}
                    progamers={progamers}
                    setProgamers={setProgamers}
                  />
                ))}
            </>
          ) : (
            <></>
          )}
          {rosters ? (
            <>
              <TeamLogoWrapper teamName="NS" imgToggle={imgToggle}>
                <StyleTeamName imgToggle={imgToggle}>NS</StyleTeamName>
                <StyleTeamLogo imgToggle={imgToggle}>
                  {TeamLogo("NS")}
                </StyleTeamLogo>
              </TeamLogoWrapper>
              {rosters
                .filter((item) => item.team === "NS")
                .map(({ progamer, team, position }, index) => (
                  <Roster
                    imgToggle={imgToggle}
                    descriptionToggle={descriptionToggle}
                    progamer={progamer}
                    teamName={team}
                    position={position}
                    onDrop={(item) =>
                      handleRosterDrop(index + 35, item, progamer)
                    }
                    key={index + 35}
                    rosters={rosters}
                    setRosters={setRosters}
                    progamers={progamers}
                    setProgamers={setProgamers}
                  />
                ))}
            </>
          ) : (
            <></>
          )}
          {rosters ? (
            <>
              <TeamLogoWrapper teamName="BRO" imgToggle={imgToggle}>
                <StyleTeamName imgToggle={imgToggle}>BRO</StyleTeamName>
                <StyleTeamLogo imgToggle={imgToggle}>
                  {TeamLogo("BRO")}
                </StyleTeamLogo>
              </TeamLogoWrapper>
              {rosters
                .filter((item) => item.team === "BRO")
                .map(({ progamer, team, position }, index) => (
                  <Roster
                    imgToggle={imgToggle}
                    descriptionToggle={descriptionToggle}
                    progamer={progamer}
                    teamName={team}
                    position={position}
                    onDrop={(item) =>
                      handleRosterDrop(index + 40, item, progamer)
                    }
                    key={index + 40}
                    rosters={rosters}
                    setRosters={setRosters}
                    progamers={progamers}
                    setProgamers={setProgamers}
                  />
                ))}
            </>
          ) : (
            <></>
          )}
          {rosters ? (
            <>
              <TeamLogoWrapper teamName="HLE" imgToggle={imgToggle}>
                <StyleTeamName imgToggle={imgToggle}>HLE</StyleTeamName>
                <StyleTeamLogo imgToggle={imgToggle}>
                  {TeamLogo("HLE")}
                </StyleTeamLogo>
              </TeamLogoWrapper>
              {rosters
                .filter((item) => item.team === "HLE")
                .map(({ progamer, team, position }, index) => (
                  <Roster
                    imgToggle={imgToggle}
                    descriptionToggle={descriptionToggle}
                    progamer={progamer}
                    teamName={team}
                    position={position}
                    onDrop={(item) =>
                      handleRosterDrop(index + 45, item, progamer)
                    }
                    key={index + 45}
                    rosters={rosters}
                    setRosters={setRosters}
                    progamers={progamers}
                    setProgamers={setProgamers}
                  />
                ))}
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
    </ContainerWrapper>
  );
};

const ContainerWrapper = styled.div`
  margin-bottom: 80px;
`;
const InnerContainer = styled.div`
  width: 100%s;
  background-color: ${(props) => props.theme.color.grayScale.gray20};
`;
const SearchBarWrapper = styled(InnerContainer)`
  padding: 20px 20px 0;
  margin-top: 20px;
  border-radius: 3px 3px 0 0;
  ${(props) => props.theme.typography.bodyRg};

  & > input[type="search"] {
    width: 200px;
    outline: none;
    border: none;
    border-radius: 3px;
    background-color: ${(props) => props.theme.color.white};
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    padding: 10px 12px;
    margin-bottom: 20px;

    &:focus {
      outline: none;
    }
  }
`;
const ProgamerWrapper = styled(InnerContainer)`
  padding: 0 20px 0;
  height: 280px;
  overflow-x: hidden;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
`;
const RosterWrapper = styled(InnerContainer)`
  border-radius: 3px;
  margin-top: 20px;
  padding: 10px 20px 10px;
`;
const RosterInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;

  & + & {
    margin-top: 10px;
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
  margin-left: 16px;
  display: ${(props) => props.imgToggle && "none"};
`;
const StyleTeamLogo = styled.div`
  width: ${(props) => (props.imgToggle ? "100%" : "30px")};
  padding: ${(props) => props.imgToggle && "20%"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.imgToggle === false && "0 10px 0 0"};
`;

const PositionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchNotFound = styled.div`
  ${(props) => props.theme.typography.bodyRg};
  grid-column-start: span 6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  line-height: 1.6;
`;
const SearchNotFoundText = styled.div`
  ${(props) => props.theme.typography.bodyMd};
  & > a {
    color: #7289da;
    text-decoration: underline;
  }
`;
export default EditRoster;
