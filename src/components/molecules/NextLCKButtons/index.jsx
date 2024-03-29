import styled from "styled-components";

import Button from "../../atoms/Button";
import shareIcon from "../../../assets/svg/share.svg";
import kakaoIcon from "../../../assets/svg/sns_logo/icon-logo-kakao.svg";
import ToggleButton from "../../atoms/ToggleButton";

const NextLCKButtons = (props) => {
  return (
    <ButtonsWrapper>
      <ButtonInnerWrapper>
        <Button text={"저장하기"} styleType={"primary"} onClick={() => {}} />
        <Button text={"초기화"} onClick={() => {}} />
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
      </ButtonInnerWrapper>
      <ToggleWrapper>
        <ToggleButton
          onClick={() => props.setImgToggle(!props.imgToggle)}
          toggle={props.imgToggle}
          text="선수 이미지"
        />
        <ToggleButton
          onClick={() => props.setDescriptionToggle(!props.descriptionToggle)}
          toggle={props.descriptionToggle}
          text="소개"
        />
      </ToggleWrapper>
    </ButtonsWrapper>
  );
};

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const ButtonInnerWrapper = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: row;
`;
const StyleIcon = styled.img`
  width: 20px;
  height: 20px;
`;
const ToggleWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;

  & > div + div {
    margin-left: 16px;
  }
`;

export default NextLCKButtons;
