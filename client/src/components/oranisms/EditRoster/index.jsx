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
  height: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  & > div + div {
    margin: 10px 0 0;
  }

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1080px) {
    flex-direction: row;

    & > div + div {
      margin: 0 0 0 10px;
    }
  }
`;
const SideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  padding: 20px 0 0;

  & > button + button {
    margin-top: 10px;
  }

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1080px) {
    padding: 0;
  }
`;

export default EditRoster;
