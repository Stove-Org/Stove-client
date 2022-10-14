import styled from "styled-components";

import Button from "../../atoms/Button";
import RosterDnD from "../../molecules/RosterDnD";

const EditRoster = ({ players, roster, setRoster }) => {
  return (
    <ContainerWrapper>
      <RosterDnD players={players} roster={roster} setRoster={setRoster} />
      <SideWrapper>
        <Button text={"초기화"} onClick={() => {}} />
        <Button text={"저장하기"} type={"primary"} onClick={() => {}} />
        <Button text={"공유하기"} type={"light"} onClick={() => {}} />
        <Button
          text={"카카오톡 공유하기"}
          type={"kakaoShare"}
          onClick={() => {}}
        />
      </SideWrapper>
    </ContainerWrapper>
  );
};

const ContainerWrapper = styled.div`
  display: flex;
  height: 60vh;
  margin-bottom: 40px;

  & > div + div {
    margin-left: 10px;
  }
`;
const SideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  padding: 0 10px;

  & > button + button {
    margin-top: 10px;
  }
`;

export default EditRoster;
