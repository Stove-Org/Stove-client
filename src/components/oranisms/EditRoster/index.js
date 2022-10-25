import { useState, useEffect } from "react";
import update from "immutability-helper";

import ROSTER_DATA from "../../../data/ROSTER_DATA";
import PROGAMERS_DATA from "../../../data/PROGAMERS_DATA";

import Roster from "../../molecules/Roster";
import Progamer from "../../molecules/Progamer";

const EditRoster = () => {
  const [rosters, setRosters] = useState(ROSTER_DATA);
  const [progamers, setProgamers] = useState(PROGAMERS_DATA);

  const handleDrop = (index, item, lastDropppedProgamer) => {
    const { nickName } = item;

    // 📌 현재 Drag 중인 progamer drop하는 roster에 [UPDATE] 📌
    // 📌 이미 roster에 올라와있는 선수가 다른 roster로 이동할 때 기존 Drop roster는 제거하고 Drop 📌
    const prevRosterProgamer = rosters.find(
      (item) =>
        item.lastDropppedProgamer &&
        item.lastDropppedProgamer.nickName === nickName
    );

    if (prevRosterProgamer) {
      const prevRosterProgamerIndex = prevRosterProgamer.id - 1;

      setRosters(
        update(rosters, {
          [index]: {
            lastDropppedProgamer: {
              $set: item,
            },
          },
          [prevRosterProgamerIndex]: {
            lastDropppedProgamer: {
              $set: null,
            },
          },
        })
      );
    } else {
      setRosters(
        update(rosters, {
          [index]: {
            lastDropppedProgamer: {
              $set: item,
            },
          },
        })
      );
    }

    // 📌 Drop할 때 이전 게이머 제거하고 현재 드랍된 게이머 리스트에 추가하기 📌
    // 1. progamers useState 배열에 드랍하는 nickName을 제외하고 새 배열에 담는다.
    let newProgamers = progamers.filter((item) => item.nickName !== nickName);
    // 2. lastDropppedProgamer가 null이 아닌 경우
    //    Drop하는 로스터 포지션의 이전 lastDropppedProgamer 정보를 새 배열에 push 한다
    if (lastDropppedProgamer !== null) {
      newProgamers.push(lastDropppedProgamer);
    }

    const sortedProgamers = newProgamers.sort((a, b) => {
      if (a.nickName > b.nickName) return 1;
      if (a.nickName < b.nickName) return -1;
      return 0;
    });
    // 3. set함수로 [UPDATE] 해준다.
    setProgamers(sortedProgamers);
  };

  useEffect(() => {
    // Mount 될 때 이미 로스터에 올라와있는 선수들은 progamers 배열에서 [REMOVE]
    const droppedProgamers = rosters
      .filter((item) => item.lastDropppedProgamer !== null)
      .map((item) => item.lastDropppedProgamer.nickName);

    const unDroppedProgamer = progamers
      .filter((item) => droppedProgamers.includes(item.nickName) !== true)
      .sort((a, b) => {
        if (a.nickName > b.nickName) return 1;
        if (a.nickName < b.nickName) return -1;
        return 0;
      });

    setProgamers(unDroppedProgamer);
  }, []);

  return (
    <div>
      <div style={{ overflow: "hidden", clear: "both" }}>
        {rosters.map(({ lastDropppedProgamer, team, position }, index) => (
          <Roster
            lastDropppedProgamer={lastDropppedProgamer}
            teamName={team}
            position={position}
            onDrop={(item) => handleDrop(index, item, lastDropppedProgamer)}
            key={index}
          />
        ))}
      </div>

      <div style={{ overflow: "hidden", clear: "both" }}>
        {progamers.map(({ nickName, birthday }, index) => (
          <Progamer nickName={nickName} birthday={birthday} key={index} />
        ))}
      </div>
    </div>
  );
};

export default EditRoster;
