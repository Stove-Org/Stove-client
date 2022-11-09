import styled from "styled-components";
import { postMyRosters } from "../../../api/next-lck";
import { rostersGet, progamerGet } from "../../../api/admin";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../../atoms/Button";
import shareIcon from "../../../assets/svg/share.svg";
import kakaoIcon from "../../../assets/svg/sns_logo/icon-logo-kakao.svg";
import ToggleButton from "../../atoms/ToggleButton";

const NextLCKButtons = (props) => {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => {
    return state.user.signinState;
  });

  const handleSave = async () => {
    if (isLogin) {
      const droppedRosters = props.rosters
        .filter((item) => item.progamer)
        .map((item) => {
          const itemArr = {
            team: item.team,
            position: item.position,
            progamerId: item.progamer.id,
          };
          return itemArr;
        });

      if (droppedRosters.length !== 0) {
        try {
          await postMyRosters(droppedRosters);
          alert("저장되었습니다.");
        } catch (err) {
          navigate("/signin");
        }
      }
    } else {
      navigate("/signin");
    }
  };

  const handleReset = () => {
    rostersGet().then((res) => {
      const rosterData = res.data;
      progamerGet().then((res) => {
        const progamersData = res.data;

        const droppedProgamers = rosterData
          .filter((item) => item.progamer !== null)
          .map((item) => item.progamer.nickname);

        const unDroppedProgamer = progamersData
          .filter((item) => droppedProgamers.includes(item.nickname) !== true)
          .sort((a, b) => {
            if (a.nickname > b.nickname) return 1;
            if (a.nickname < b.nickname) return -1;
            return 0;
          });

        props.setProgamers(unDroppedProgamer);
      });

      props.setRosters(rosterData);
    });
  };
  return (
    <ButtonsWrapper>
      <ButtonInnerWrapper>
        <Button text={"저장하기"} styleType={"primary"} onClick={handleSave} />
        <Button text={"초기화"} onClick={handleReset} />
        <Button
          icon={
            <>
              <StyleIcon src={shareIcon} alt="링크 공유하기" />
            </>
          }
          styleType={"light"}
          onClick={() => {}}
        />
        {/* <Button
          icon={
            <>
              <StyleIcon src={kakaoIcon} alt="카카오톡 공유하기" />
            </>
          }
          styleType={"kakaoShare"}
          onClick={() => {}}
        /> */}
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
