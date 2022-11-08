import { useEffect, useState } from "react";
import styled from "styled-components";
import { getParticipants } from "../../../api/next-lck";
import { addCommas } from "../../../functions";
import { rostersGet, progamerGet } from "../../../api/admin";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import PageTitle from "../../../components/atoms/PageTitle";
import EditRoster from "../../../components/oranisms/EditRoster";
import Countdown from "../../../components/atoms/Countdown";

const NextLCKRoster = () => {
  const [rosters, setRosters] = useState(null);
  const [progamers, setProgamers] = useState(null);
  const [participants, setParticipants] = useState("0");

  useEffect(() => {
    rostersGet().then((res) => {
      const rosterData = res.data;
      progamerGet().then((res) => {
        const progamersData = res.data;

        const droppedProgamers = rosterData
          .filter((item) => item.progamer !== null)
          .map((item) => item.progamer.nickname);

        const unDroppedProgamer = progamersData
          .filter((item) => droppedProgamers.includes(item.nickname) !== true)
          .sort((a, b) => {
            if (a.nickname > b.nickname) return 1;
            if (a.nickname < b.nickname) return -1;
            return 0;
          });

        setProgamers(unDroppedProgamer);
      });

      setRosters(rosterData);
    });

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
        <EditRoster
          rosters={rosters}
          setRosters={setRosters}
          progamers={progamers}
          setProgamers={setProgamers}
        />
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
    color: ${(props) => props.theme.color.main100};
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
