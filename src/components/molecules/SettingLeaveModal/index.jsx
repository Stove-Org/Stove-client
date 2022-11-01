import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { persistor } from "../../../App";
import { Cookies } from "react-cookie";

import SettingInput from "../../atoms/SettingInput";
import Button from "../../atoms/Button";
import closeBtn from "../../../assets/svg/close.svg";

import { setCloseModal } from "../../../reducers/modalSlice";
import { userRemove, validatePassword } from "../../../api/user";

const SettingLeaveModal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const inputRef = useRef();

  const [pwd, setPwd] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const closeModal = (e) => {
    dispatch(setCloseModal());
  };

  const handleSubmit = async () => {
    setError(false);

    if (pwd.length === 0) {
      inputRef.current.focus();
      setError(true);
      setErrorMsg((prev) => (prev = "비밀번호를 입력해 주세요."));
      return;
    }

    try {
      const data = { password: pwd };
      await validatePassword(data);

      try {
        await userRemove();

        cookies.remove("accessToken");
        await persistor.purge();
        navigate("/", { replace: true });
        window.location.reload();
      } catch {
        inputRef.current.focus();
        setError(true);
        setErrorMsg((prev) => (prev = "잘못된 접근입니다. 다시 시도해주세요."));
      }
    } catch (err) {
      inputRef.current.focus();
      setError(true);
      setErrorMsg((prev) => (prev = "비밀번호가 일치하지 않습니다."));
    }
  };

  return (
    <ModalWrapper>
      <Header>
        <h1>회원탈퇴</h1>
        <button onClick={closeModal}>
          <img src={closeBtn} alt="닫기" />
        </button>
      </Header>
      <Comment>회원 탈퇴를 위해 비밀번호를 입력해 주세요.</Comment>
      <SettingInput inputWidth="100%">
        <div>
          <input
            type="password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            ref={inputRef}
            placeholder="비밀번호 입력"
          />
        </div>
        {error ? <ErrorText>{errorMsg}</ErrorText> : null}
      </SettingInput>
      <ButtonsWrapper>
        <Button styleType="default" text={"취소"} onClick={closeModal} />
        <Button styleType="primary" text={"회원탈퇴"} onClick={handleSubmit} />
      </ButtonsWrapper>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${(props) => props.theme.typography.bodyRg};
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  & > h1 {
    ${(props) => props.theme.typography.head};
  }
  & > button {
    ${(props) => props.theme.typography.head};
    border: none;
    padding: 5px;
    cursor: pointer;
    background-color: ${(props) => props.theme.color.white};
  }
`;

const Comment = styled.div`
  margin: 20px 0;
  color: ${(props) => props.theme.color.grayScale.gray80};
  background-color: ${(props) => props.theme.color.grayScale.gray10};
  padding: 20px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
`;

const ErrorText = styled.p`
  margin: 10px 0 0;
  ${(props) => props.theme.typography.bodySmRegular};
  color: ${(props) => props.theme.color.main100};
  word-break: keep-all;
`;

export default SettingLeaveModal;
