import { useEffect, useState, useMemo } from "react";
import Select from "react-select";
import styled from "styled-components";
import { getRanking } from "../../../api/next-lck";
import RankingList from "./RankingList";

import TOP from "../../../assets/svg/positions/TOP";
import JGL from "../../../assets/svg/positions/JGL";
import MID from "../../../assets/svg/positions/MID";
import BOT from "../../../assets/svg/positions/BOT";
import SPT from "../../../assets/svg/positions/SPT";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px solid #EEEEEE",
    color: state.isSelected ? "#000000" : "#999999",
    backgroundColor: "#ffffff",
    "&:hover": {
      backgroundColor: "#EEEEEE",
      color: "#000000",
    },
    padding: "6px 16px",
    fontFamily: "NotoSansKR-Regular",
    fontSize: 16,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 3,
    display: "flex",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 1px 8px 0px",
    padding: "6px 16px",
    fontFamily: "NotoSansKR-Regular",
    fontSize: 16,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;

    return { ...provided, opacity };
  },
};

const NextLCKRanking = () => {
  const options = useMemo(
    () => [
      { value: "DRX", label: "DRX" },
      { value: "T1", label: "T1" },
      { value: "GEN", label: "Gen.G" },
      { value: "DK", label: "DWG KIA" },
      { value: "LSB", label: "Liiv SANDBOX" },
      { value: "KT", label: "KT Rolster" },
      { value: "KDF", label: "KWANGDONG FREECS" },
      { value: "NS", label: "NongShim REDFORCE" },
      { value: "BRO", label: "Fredit BRION" },
      { value: "HLE", label: "Hanwha Life Esports" },
    ],
    []
  );
  const teamList = [
    "DRX",
    "T1",
    "GEN",
    "DK",
    "LSB",
    "KT",
    "KDF",
    "NS",
    "BRO",
    "HLE",
  ];
  const [teamName, setTeamName] = useState("DRX");
  const [position, setPosition] = useState("TOP");
  const [data, setData] = useState([]);

  useEffect(() => {
    getRanking().then((res) => setData(res.data));
    setTeamName(teamList[Math.random().toFixed(1) * 10]);
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => {
      if (position === "TOP") {
        setPosition("JGL");
      } else if (position === "JGL") {
        setPosition("MID");
      } else if (position === "MID") {
        setPosition("BOT");
      } else if (position === "BOT") {
        setPosition("SPT");
      } else if (position === "SPT") {
        setPosition("TOP");
      }
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [position]);

  return (
    <>
      {data.length !== 0 ? (
        <RankingWrapper>
          <div>
            <Select
              styles={customStyles}
              options={options}
              isSearchable={false}
              defaultValue={() =>
                options.find((item) => item.value === teamName)
              }
              onChange={(selected) => setTeamName(selected.value)}
            />
          </div>
          <ButtonsWrapper>
            <TopButton position={position} onClick={() => setPosition("TOP")}>
              <TOP
                width={24}
                height={24}
                fill={position === "TOP" ? "#ffffff" : "#999999"}
              />
              <div>Top</div>
            </TopButton>
            <JGLButton position={position} onClick={() => setPosition("JGL")}>
              <JGL
                width={24}
                height={24}
                fill={position === "JGL" ? "#ffffff" : "#999999"}
              />
              <div>Junggle</div>
            </JGLButton>
            <MIDButton position={position} onClick={() => setPosition("MID")}>
              <MID
                width={24}
                height={24}
                fill={position === "MID" ? "#ffffff" : "#999999"}
              />
              <div>Mid</div>
            </MIDButton>
            <BOTButton position={position} onClick={() => setPosition("BOT")}>
              <BOT
                width={24}
                height={24}
                fill={position === "BOT" ? "#ffffff" : "#999999"}
              />
              <div>Bottom</div>
            </BOTButton>
            <SPTButton position={position} onClick={() => setPosition("SPT")}>
              <SPT
                width={24}
                height={24}
                fill={position === "SPT" ? "#ffffff" : "#999999"}
              />
              <div>Support</div>
            </SPTButton>
          </ButtonsWrapper>
          <div>
            <RankingListWrapper>
              {data
                .filter(
                  (item) => item.team === teamName && item.position === position
                )
                .map((item, index) => {
                  return <RankingList item={item} key={index} />;
                })}
            </RankingListWrapper>
          </div>
        </RankingWrapper>
      ) : (
        <></>
      )}
    </>
  );
};

const RankingWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.8fr 2fr;
  gap: 10px;
  @media screen and (min-width: 768px) {
    gap: 20px;
  }
  @media screen and (min-width: 1080px) {
    gap: 30px;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyleButton = styled.button`
  ${(props) => props.theme.typography.description}
  padding: 12px 16px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 1px 8px 0px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-style: solid;

  &:hover {
    border-color: ${(props) => props.theme.color.main100};
  }
  & + & {
    margin-top: 14px;
  }
  & > div {
    width: 90px;
  }
`;
const TopButton = styled(StyleButton)`
  background-color: ${(props) =>
    props.position === "TOP" ? "#F54242" : "#ffffff"};
  color: ${(props) => (props.position === "TOP" ? "#ffffff" : "#000000")};
  border-color: ${(props) =>
    props.position === "TOP" ? "#F54242" : "#ffffff"};
`;
const JGLButton = styled(StyleButton)`
  background-color: ${(props) =>
    props.position === "JGL" ? "#F54242" : "#ffffff"};
  color: ${(props) => (props.position === "JGL" ? "#ffffff" : "#000000")};
  border-color: ${(props) =>
    props.position === "JGL" ? "#F54242" : "#ffffff"};
`;
const MIDButton = styled(StyleButton)`
  background-color: ${(props) =>
    props.position === "MID" ? "#F54242" : "#ffffff"};
  color: ${(props) => (props.position === "MID" ? "#ffffff" : "#000000")};
  border-color: ${(props) =>
    props.position === "MID" ? "#F54242" : "#ffffff"};
`;
const BOTButton = styled(StyleButton)`
  background-color: ${(props) =>
    props.position === "BOT" ? "#F54242" : "#ffffff"};
  color: ${(props) => (props.position === "BOT" ? "#ffffff" : "#000000")};
  border-color: ${(props) =>
    props.position === "BOT" ? "#F54242" : "#ffffff"};
`;
const SPTButton = styled(StyleButton)`
  background-color: ${(props) =>
    props.position === "SPT" ? "#F54242" : "#ffffff"};
  color: ${(props) => (props.position === "SPT" ? "#ffffff" : "#000000")};
  border-color: ${(props) =>
    props.position === "SPT" ? "#F54242" : "#ffffff"};
`;

const RankingListWrapper = styled.div`
  & > div + div {
    margin-top: 14px;
  }
`;

export default NextLCKRanking;
