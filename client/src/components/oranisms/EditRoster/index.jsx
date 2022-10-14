import styled from "styled-components";

import Button from "../../atoms/Button";

const EditRoster = ({ players, roster, setRoster }) => {
  console.log(players);
  console.log(players[0].nickName);

  return (
    <ContainerWrapper>
      <PlayerWrapper>
        {players.map((player) => (
          <div key={player.id}>{player.nickName}</div>
        ))}
      </PlayerWrapper>
      <EditRosterWrapper>EditRosterWrapper</EditRosterWrapper>
      <SideWrapper>
        <Button text={"초기화하기"} type={"light"} onClick={() => {}} />
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
    margin-left: 30px;
  }
`;
const BoxWrapper = styled.div`
  background-color: ${(props) => props.theme.color.grayScale.gray20};
  border-radius: 3px;
  padding: 10px;
`;
const PlayerWrapper = styled(BoxWrapper)`
  overflow-y: scroll;
  width: 170px;
`;
const EditRosterWrapper = styled(BoxWrapper)`
  flex-grow: 1;
`;
const SideWrapper = styled(BoxWrapper)`
  display: flex;
  flex-direction: column;
`;

export default EditRoster;
