import { useEffect, useState } from "react";
import styled from "styled-components";
import { getParticipants } from "../../../api/next-lck";
import { addCommas } from "../../../functions";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import PageTitle from "../../../components/atoms/PageTitle";
import EditRoster from "../../../components/oranisms/EditRoster";
import Countdown from "../../../components/atoms/Countdown";

const NextLCKRoster = () => {
  const [participants, setParticipants] = useState("0");
  useEffect(() => {
    getParticipants().then((res) =>
      setParticipants((prev) => (prev = addCommas(res.data.count)))
    );
  }, []);

  return (
    <>
      <PageTitle title={"Next LCK"} />
      <Description>
        <p>LCK 팀들의 다음 시즌 로스터를 맞춰보세요!</p>
        <div>
          <p>
            스토브리그 종료까지{" "}
            <span>{Countdown("2022-11-31T00:00:00+0900")}</span>
          </p>
          <SubDescription>현재 {participants}명 참여 중 🔥</SubDescription>
        </div>
      </Description>
      <DndProvider backend={HTML5Backend}>
        <EditRoster />
      </DndProvider>
    </>
  );
};

const Description = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 40px;
  p {
    ${(props) => props.theme.typography.description};
  }
  p > span {
    ${(props) => props.theme.typography.descriptionBold};
  }

  & > div {
    text-align: end;
  }
`;
const SubDescription = styled.p`
  ${(props) => props.theme.typography.bodyRg};
  color: ${(props) => props.theme.color.grayScale.gray60};
  padding-top: 4px;
`;

export default NextLCKRoster;
