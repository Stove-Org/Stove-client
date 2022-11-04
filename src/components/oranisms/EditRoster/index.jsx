import { useState, useEffect } from "react";
import update from "immutability-helper";
import { useSelector } from "react-redux";

import { useDrop } from "react-dnd";
import { ItemTypes } from "../../../utils/ItemTypes";

import PROGAMERS_DATA from "../../../data/PROGAMERS_DATA";

import Roster from "../../molecules/Roster";
import Progamer from "../../molecules/Progamer";

const EditRoster = () => {
  const isLogin = useSelector((state) => {
    return state.user.signinState;
  });

  const [rosters, setRosters] = useState(
    useSelector((state) => {
      if (isLogin) {
        return state.rosters.myRosters;
      } else {
        return state.rosters.defaultRosters;
      }
    })
  );

  const [progamers, setProgamers] = useState(
    useSelector((state) => {
      return state.progamers.progamers;
    })
  );

  const handleRosterDrop = (index, item, progamer) => {
    const { nickname } = item;

    // 📌 현재 Drag 중인 progamer drop하는 roster에 [UPDATE] 📌
    // 📌 이미 roster에 올라와있는 선수가 다른 roster로 이동할 때 기존 Drop roster는 제거하고 Drop 📌
    const prevRosterProgamer = rosters.find(
      (item) => item.progamer && item.progamer.nickname === nickname
    );

    if (prevRosterProgamer) {
      const prevRosterProgamerIndex = rosters.findIndex((item) => {
        return (
          item.team === prevRosterProgamer.team &&
          item.position === prevRosterProgamer.position
        );
      });

      setRosters(
        update(rosters, {
          [index]: {
            progamer: {
              $set: item,
            },
          },
          [prevRosterProgamerIndex]: {
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
  };

  const handleProgamerListDrop = (item) => {
    const { nickname } = item;

    // 1. rosters에서 item.nickname과 같은 progamer.nickname = null 로 변경
    const removeProgamer = rosters.filter((item) => {
      if (item.progamer) {
        return item.progamer.nickname === nickname;
      }
    });
    const index = removeProgamer[0].id - 1;
    setRosters(
      update(rosters, {
        [index]: {
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

  useEffect(() => {
    // Mount 될 때 이미 로스터에 올라와있는 선수들은 progamers 배열에서 [REMOVE]
    const droppedProgamers = rosters
      .filter((item) => item.progamer !== null)
      .map((item) => item.progamer.nickname);

    const unDroppedProgamer = progamers
      .filter((item) => droppedProgamers.includes(item.nickname) !== true)
      .sort((a, b) => {
        if (a.nickname > b.nickname) return 1;
        if (a.nickname < b.nickname) return -1;
        return 0;
      });

    setProgamers(unDroppedProgamer);
  }, []);

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes.PLAYER,
    drop: handleProgamerListDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = isOver && canDrop;

  let backgroundColor = "#222";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }

  return (
    <div>
      <div style={{ overflow: "hidden", clear: "both" }}>
        {/* {rosters.map(({ progamer, team, position }, index) => (
          <Roster
            progamer={progamer}
            teamName={team}
            position={position}
            onDrop={(item) =>
              handleRosterDrop(index, item, progamer)
            }
            key={index}
          />
        ))} */}
        <Roster
          progamer={rosters[0].progamer}
          teamName={rosters[0].team}
          position={rosters[0].position}
          onDrop={(item) => handleRosterDrop(0, item, rosters[0].progamer)}
        />
        <Roster
          progamer={rosters[1].progamer}
          teamName={rosters[1].team}
          position={rosters[1].position}
          onDrop={(item) => handleRosterDrop(1, item, rosters[1].progamer)}
        />
        <Roster
          progamer={rosters[2].progamer}
          teamName={rosters[2].team}
          position={rosters[2].position}
          onDrop={(item) => handleRosterDrop(2, item, rosters[2].progamer)}
        />
        <Roster
          progamer={rosters[3].progamer}
          teamName={rosters[3].team}
          position={rosters[3].position}
          onDrop={(item) => handleRosterDrop(3, item, rosters[3].progamer)}
        />
      </div>

      <div
        ref={drop}
        style={{ overflow: "hidden", clear: "both", backgroundColor }}
      >
        {progamers.map(({ nickname, birthday }, index) => (
          <Progamer nickname={nickname} birthday={birthday} key={index} />
        ))}
      </div>
    </div>
  );
};

export default EditRoster;
