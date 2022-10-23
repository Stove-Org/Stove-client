import { useCallback, useState } from "react";
import styled from "styled-components";

import NextLCKButtons from "../../molecules/NextLCKButtons";
import PlayerList from "../../molecules/PlayerList";
import Roster from "../../molecules/Roster";

const EditRoster = ({ roster }) => {
  const [imgToggle, setImgToggle] = useState(true);
  const [descriptionToggle, setDescriptionToggle] = useState(false);
  const [players, setPlayers] = useState(roster.candidate_progamers);
  const [editRoster, setEditRoster] = useState(roster.rosters);

  const isDropped = (nickName) => {
    return editRoster.indexOf(nickName) > -1;
    //Drop 되고 setState함수 이후에 true가 되면 렌더링으로 보여줄거 있을때 사용
  };

  const handleDrop = (item) => {
    if (typeof item === "object") {
      console.log(item);
    }
    // 1. 놓아진 곳의 정보(팀, 포지션)를 구한다
    // 2. setEditRoster로 놓아진 곳에 player의 정보를 넣는다
    // 3. setPlayers로 player의 정보를 제거한다
  };

  return (
    <ContainerWrapper>
      <NextLCKButtons
        imgToggle={imgToggle}
        setImgToggle={setImgToggle}
        descriptionToggle={descriptionToggle}
        setDescriptionToggle={setDescriptionToggle}
      />
      <EditRosterWrapper>
        <PlayerList
          players={players}
          imgToggle={imgToggle}
          descriptionToggle={descriptionToggle}
        />
        <Roster
          editRoster={editRoster}
          imgToggle={imgToggle}
          descriptionToggle={descriptionToggle}
          onDrop={handleDrop}
        />
      </EditRosterWrapper>
    </ContainerWrapper>
  );
};

const EditRosterWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
`;

export default EditRoster;
