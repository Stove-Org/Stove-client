import { useState } from "react";
import styled from "styled-components";

import NextLCKButtons from "../../molecules/NextLCKButtons";
import PlayerList from "../../molecules/PlayerList";
import Roster from "../../molecules/Roster";

const EditRoster = ({ players, setPlayers, roster, setRoster }) => {
  const [imgToggle, setImgToggle] = useState(true);
  const [descriptionToggle, setDescriptionToggle] = useState(false);

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
          setPlayers={setPlayers}
          roster={roster}
          setRoster={setRoster}
          imgToggle={imgToggle}
          descriptionToggle={descriptionToggle}
        />
        <Roster
          roster={roster}
          setRoster={setRoster}
          imgToggle={imgToggle}
          descriptionToggle={descriptionToggle}
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
