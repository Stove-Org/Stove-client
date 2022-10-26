import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as API from "../../../api";
import styled from "styled-components";
import { validateEmail, validatePassword } from "../../../functions";

import Button from "../../../components/atoms/Button";
import FormInput from "../../../components/atoms/FormInput";

const SingUp = () => {
  const navigate = useNavigate();

  const inputEmail = useRef();
  const inputNickname = useRef();
  const inputPwd = useRef();
  const inputConfirmPwd = useRef();

  const [initUser, setInitUser] = useState({
    email: "",
    nickname: "",
    pwd: "",
    pwdConfirm: "",
  });
  const [validate, setValidate] = useState({
    email: false,
    nickname: false,
    pwd: false,
    pwdConfirm: false,
  });

  const onChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setInitUser({ ...initUser, [name]: value });

    // 이메일 유효성 검사
    if (name === "email" && validateEmail(value)) {
      setValidate({ ...validate, [name]: true });
    } else if (name === "email") {
      setValidate({ ...validate, [name]: false });
    }

    // 닉네임 유효성 검사
    if (name === "nickname" && !(value.length > 1)) {
      setValidate({ ...validate, [name]: true });
    } else if (name === "nickname") {
      setValidate({ ...validate, [name]: false });
    }

    // 비밀번호 유효성 검사
    if (name === "pwd" && validatePassword(value)) {
      if (initUser.pwdConfirm.length > 0) {
        value === initUser.pwdConfirm
          ? setValidate({ ...validate, [name]: true, pwdConfirm: false })
          : setValidate({ ...validate, [name]: true, pwdConfirm: true });
      } else {
        setValidate({ ...validate, [name]: true });
      }
    } else if (name === "pwd") {
      if (initUser.pwdConfirm.length > 0) {
        value === initUser.pwdConfirm
          ? setValidate({ ...validate, [name]: false, pwdConfirm: false })
          : setValidate({ ...validate, [name]: false, pwdConfirm: true });
      } else {
        setValidate({ ...validate, [name]: false });
      }
    }

    // 비밀번호 확인 유효성 검사
    if (name === "pwdConfirm" && value !== initUser.pwd) {
      setValidate({ ...validate, [name]: true });
    } else if (name === "pwdConfirm") {
      setValidate({ ...validate, [name]: false });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (validateEmail(initUser.email)) {
      inputEmail.current.focus();
      setValidate({ ...validate, email: true });
      return;
    }
    if (!(initUser.nickname.length > 1)) {
      inputNickname.current.focus();
      setValidate({ ...validate, nickname: true });
      return;
    }
    if (validatePassword(initUser.pwd)) {
      inputPwd.current.focus();
      setValidate({ ...validate, pwd: true });
      return;
    }
    if (initUser.pwdConfirm !== initUser.pwd) {
      inputConfirmPwd.current.focus();
      setValidate({ ...validate, pwdConfirm: true });
      return;
    }

    try {
      const data = {
        email: initUser.email,
        password: initUser.pwd,
        nickname: initUser.nickname,
      };

      await API.post("/api/v1/users/signup", "", data);
      navigate("/signin", { replace: true });
    } catch (err) {
      console.log(`error: ${err}`);
    }
  };

  return (
    <FormWrapper onSubmit={onSubmit}>
      <InputWrapper>
        <FormInput
          type="text"
          name="email"
          onChange={onChange}
          value={initUser.email}
          placeholder="이메일을 입력해 주세요"
          labelText="* 이메일 주소"
          ref={inputEmail}
          validate={validate.email}
          errMessage="이메일 형식이 아닙니다"
        />
        <FormInput
          type="text"
          name="nickname"
          onChange={onChange}
          value={initUser.nickname}
          placeholder="닉네임을 입력해 주세요"
          labelText="* 닉네임"
          ref={inputNickname}
          validate={validate.nickname}
          errMessage="2글자 이상 입력해 주세요"
        />
        <FormInput
          type="password"
          name="pwd"
          onChange={onChange}
          value={initUser.pwd}
          placeholder="비밀번호를 입력해 주세요"
          labelText="* 비밀번호"
          ref={inputPwd}
          validate={validate.pwd}
          errMessage="숫자+영문자+특수문자(!,@,#,$,%,^,*,+,=,-,_) 조합으로 8자리 이상 입력해 주세요"
        />
        <FormInput
          type="password"
          name="pwdConfirm"
          onChange={onChange}
          value={initUser.pwdConfirm}
          placeholder="비밀번호를 한번 더 입력해 주세요"
          labelText="* 비밀번호 확인"
          ref={inputConfirmPwd}
          validate={validate.pwdConfirm}
          errMessage="작성된 비밀번호와 일치하지 않습니다"
        />
      </InputWrapper>
      <Button type="submit" styleType={"primary"} text={"회원가입"} />
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled.div`
  margin: 40px 0;
`;

export default SingUp;
