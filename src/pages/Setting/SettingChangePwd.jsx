import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../../api/user";
import { Cookies } from "react-cookie";
import { validatePassword } from "../../functions";
import styled from "styled-components";
import { signout } from "../../api/auth";

import Button from "../../components/atoms/Button";
import SettingInput from "../../components/atoms/SettingInput";
import SettingFooter from "../../components/atoms/SettingFooter";

const SettingChangePwd = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();

  const currentPw = useRef();
  const newPw = useRef();
  const newpwConfirm = useRef();

  const [pwd, setPwd] = useState({
    currentPassword: "",
    newPassword: "",
    newPasswordConfirm: "",
  });
  const [validate, setValidate] = useState({
    currentPassword: false,
    newPassword: false,
    newPasswordConfirm: false,
  });
  const [erroMessage, setErrorMessage] = useState({
    currentPassword: "",
    newPassword: "",
    newPasswordConfirm: "작성된 비밀번호와 일치하지 않습니다.",
  });

  useEffect(() => {
    if (cookies.get("accessToken")) {
      return;
    } else {
      alert("Stove 회원만 이용 가능한 페이지입니다.");
      navigate("/signin", { replace: true });
    }
  }, []);

  const onChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setPwd({ ...pwd, [name]: value });

    if (name === "currentPassword" && value.length > 0) {
      setValidate({
        ...validate,
        [name]: false,
      });
    }

    // 신규 비밀번호 유효성 검사
    if (name === "newPassword" && validatePassword(value)) {
      setErrorMessage({
        ...erroMessage,
        newPassword:
          "숫자+영문자+특수문자(!,@,#,$,%,^,*,+,=,-,_) 조합으로 8자리 이상 입력해 주세요.",
      });
      if (pwd.newPasswordConfirm.length > 0) {
        value === pwd.newPasswordConfirm
          ? setValidate({
              ...validate,
              [name]: true,
              newPasswordConfirm: false,
            })
          : setValidate({
              ...validate,
              [name]: true,
              newPasswordConfirm: true,
            });
      } else {
        setValidate({ ...validate, [name]: true });
      }
    } else if (name === "newPassword") {
      setErrorMessage({
        ...erroMessage,
        newPassword:
          "숫자+영문자+특수문자(!,@,#,$,%,^,*,+,=,-,_) 조합으로 8자리 이상 입력해 주세요.",
      });
      if (pwd.newPasswordConfirm.length > 0) {
        value === pwd.newPasswordConfirm
          ? setValidate({
              ...validate,
              [name]: false,
              newPasswordConfirm: false,
            })
          : setValidate({
              ...validate,
              [name]: false,
              newPasswordConfirm: true,
            });
      } else {
        setValidate({ ...validate, [name]: false });
      }
    }

    // 신규 비밀번호 재입력 유효성 검사
    if (name === "newPasswordConfirm" && value !== pwd.newPassword) {
      setValidate({ ...validate, [name]: true });
    } else if (name === "newPasswordConfirm") {
      setValidate({ ...validate, [name]: false });
    }
  };

  const handleSubmit = async () => {
    const { currentPassword, newPassword } = pwd;

    // 현재 비밀번호 length 0일 경우 return
    if (pwd.currentPassword.length < 1) {
      currentPw.current.focus();
      setErrorMessage({
        ...erroMessage,
        currentPassword: "현재 비밀번호를 입력해 주세요.",
      });
      setValidate({ ...validate, currentPassword: true });

      return;
    }
    // 신규 비밀번호 유효성 검사 return
    if (validatePassword(pwd.newPassword) || validate.newPassword) {
      newPw.current.focus();
      setErrorMessage({
        ...erroMessage,
        newPassword:
          "현재 비밀번호와 일치합니다. 신규 비밀번호를 입력해 주세요.",
      });
      setValidate({ ...validate, newPassword: true });
      return;
    }
    // 신규 비밀번호와 신규 비밀번호 확인이 다르면 return
    if (
      pwd.newPasswordConfirm !== pwd.newPassword ||
      validate.newPasswordConfirm
    ) {
      newpwConfirm.current.focus();
      setValidate({ ...validate, newPasswordConfirm: true });
      return;
    }
    // 현재 비밀번호와 신규 비밀번호가 같을경우 return
    if (pwd.currentPassword === pwd.newPassword) {
      newPw.current.focus();
      setErrorMessage({
        ...erroMessage,
        newPassword:
          "현재 비밀번호와 일치합니다. 변경할 비밀번호를 입력해 주세요.",
      });
      setValidate({ ...validate, newPassword: true });

      return;
    }

    try {
      await resetPassword({ currentPassword, newPassword });
      setValidate({ ...validate, currentPassword: true });
      alert("비밀번호가 정상적으로 변경되었습니다. 다시 로그인해 주세요.");
      signout();
      navigate("/signin");
    } catch (err) {
      currentPw.current.focus();
      setErrorMessage({
        ...erroMessage,
        currentPassword: "현재 비밀번호가 일치하지 않습니다.",
      });
      setValidate({ ...validate, currentPassword: true });
    }
  };

  return (
    <>
      <SettingInput>
        <div>
          <aside>현재 비밀번호 입력</aside>
          <input
            type="password"
            name="currentPassword"
            value={pwd.currentPassword}
            onChange={onChange}
            ref={currentPw}
          />
        </div>
        {validate.currentPassword ? (
          <ErrorText>{erroMessage.currentPassword}</ErrorText>
        ) : null}
      </SettingInput>
      <SettingInput>
        <div>
          <aside>신규 비밀번호 입력</aside>
          <input
            type="password"
            name="newPassword"
            value={pwd.newPassword}
            onChange={onChange}
            ref={newPw}
          />
        </div>
        {validate.newPassword ? (
          <ErrorText>{erroMessage.newPassword}</ErrorText>
        ) : null}
      </SettingInput>
      <SettingInput>
        <div>
          <aside>신규 비밀번호 재입력</aside>
          <input
            type="password"
            name="newPasswordConfirm"
            value={pwd.newPasswordConfirm}
            onChange={onChange}
            ref={newpwConfirm}
          />
        </div>
        {validate.newPasswordConfirm ? (
          <ErrorText>{erroMessage.newPasswordConfirm}</ErrorText>
        ) : null}
      </SettingInput>
      <SettingFooter>
        <Button
          styleType={"primary"}
          text={"비밀번호 변경"}
          onClick={handleSubmit}
        />
      </SettingFooter>
    </>
  );
};

const ErrorText = styled.p`
  margin: 10px 0 0 140px;
  ${(props) => props.theme.typography.bodySmRegular};
  color: ${(props) => props.theme.color.main100};
  word-break: keep-all;
`;

export default SettingChangePwd;
