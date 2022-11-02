import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Cookies } from "react-cookie";

import Button from "../../components/atoms/Button";
import SettingFooter from "../../components/atoms/SettingFooter";
import Checkbox from "../../components/atoms/Checkbox";
import ModalContainer from "../../components/atoms/Modal";
import SettingLeaveModal from "../../components/molecules/SettingLeaveModal";

import { setOpenModal, setCloseModal } from "../../reducers/modalSlice";

const SettingLeave = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cookies = new Cookies();

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (cookies.get("accessToken")) {
      return;
    } else {
      alert("Stove 회원만 이용 가능한 페이지입니다.");
      navigate("/signin", { replace: true });
    }
  }, []);

  const isModalOpen = useSelector((state) => {
    return state.modal.isModalOpen;
  });

  const openModal = () => {
    if (checked) {
      dispatch(setOpenModal());
    }
  };
  const closeModal = (e) => {
    dispatch(setCloseModal());
  };

  return (
    <>
      <ModalContainer
        isPopup={isModalOpen}
        onClickOverlay={closeModal}
        contentComponent={<SettingLeaveModal />}
      />
      <Content>
        <div>삭제된 정보는 복구될 수 없습니다.</div>
        <div>회원탈퇴를 진행하시겠습니까?</div>
      </Content>
      <Checkbox
        text={"동의합니다"}
        id={"acceptCheck"}
        onClick={() => setChecked((prev) => !prev)}
      />
      <SettingFooter>
        <Button
          text={"비동의"}
          styleType={"light"}
          onClick={() => navigate("/")}
        />
        <Button
          styleType={checked ? "primary" : "default"}
          text={"동의"}
          onClick={openModal}
          isActive={checked}
        />
      </SettingFooter>
    </>
  );
};

const Content = styled.div`
  ${(props) => props.theme.typography.descriptionBold};
  line-height: 1.6;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-color: ${(props) => props.theme.color.grayScale.gray20};
  border-width: 0 0 1px;
  border-style: solid;
`;

export default SettingLeave;
