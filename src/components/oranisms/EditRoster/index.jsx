import { useState } from "react";
import styled from "styled-components";
import update from "immutability-helper";

import { useDrop } from "react-dnd";
import { ItemTypes } from "../../../utils/ItemTypes";

import Roster from "../../molecules/Roster";
import Progamer from "../../molecules/Progamer";
import NextLCKButtons from "./NextLCKButtons";

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

    if (prevRosterProgamer && prevRosterProgamer !== -1) {
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

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes.PLAYER,
    drop: handleProgamerListDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = isOver && canDrop; // Drop중인 영역

  let backgroundColor = "#222";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }

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
    <div>
      <PlayerSearchBarWrapper>
        <input
          type="search"
          value={search}
          onChange={handleChange}
          placeholder="선수 검색"
        />
      </PlayerSearchBarWrapper>
      <div
        ref={drop}
        style={{ overflow: "hidden", clear: "both", backgroundColor }}
      >
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
              />
            ))
          ) : (
            <div>찾고 계신 선수가 없으신가요?</div>
          )
        ) : progamers ? (
          progamers.map((item) => (
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
            />
          ))
        ) : (
          <></>
        )}
      </div>
      <div style={{ overflow: "hidden", clear: "both" }}>
        {rosters ? (
          rosters.map(({ progamer, team, position }, index) => (
            <Roster
              progamer={progamer}
              teamName={team}
              position={position}
              onDrop={(item) => handleRosterDrop(index, item, progamer)}
              key={index}
            />
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

const PlayerSearchBarWrapper = styled.div`
  width: 100%s;
  background-color: ${(props) => props.theme.color.grayScale.gray20};
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

export default EditRoster;
