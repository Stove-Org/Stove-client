import styled from "styled-components";

import Button from "../../atoms/Button";
import RosterDnD from "../../molecules/RosterDnD";
import shareIcon from "../../../assets/svg/share.svg";
import kakaoIcon from "../../../assets/svg/sns_logo/icon-logo-kakao.svg";

const EditRoster = ({ players, roster, setRoster }) => {
  return (
    <ContainerWrapper>
      <ButtonsWrapper>
        <Button text={"초기화"} onClick={() => {}} />
        <Button text={"저장하기"} styleType={"primary"} onClick={() => {}} />
        <Button
          icon={
            <>
              <StyleIcon src={shareIcon} alt="링크 공유하기" />
            </>
          }
          styleType={"light"}
          onClick={() => {}}
        />
        <Button
          icon={
            <>
              <StyleIcon src={kakaoIcon} alt="카카오톡 공유하기" />
            </>
          }
          styleType={"kakaoShare"}
          onClick={() => {}}
        />
      </ButtonsWrapper>
      <RosterDnD players={players} roster={roster} setRoster={setRoster} />
    </ContainerWrapper>
  );
};

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ButtonsWrapper = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: row;
`;
const StyleIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export default EditRoster;
