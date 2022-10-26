import React, { useRef, useState } from "react";
import styled from "styled-components";

import Button from "../../../components/atoms/Button";
import FormInput from "../../../components/atoms/FormInput";

const SignIn = () => {
  const inputEmail = useRef();
  const inputPwd = useRef();

  const [user, setUser] = useState({
    email: "",
    pwd: "",
  });

  const onChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("로그인 성공");
  };

  return (
    <FormWrapper onSubmit={onSubmit}>
      <InputWrapper>
        <FormInput
          type="email"
          name="email"
          onChange={onChange}
          value={user.email}
          placeholder="이메일을 입력해 주세요"
          labelText="이메일 주소"
          ref={inputEmail}
        />
        <FormInput
          type="password"
          name="pwd"
          onChange={onChange}
          value={user.pwd}
          placeholder="비밀번호를 입력해 주세요"
          labelText="비밀번호"
          ref={inputPwd}
        />
      </InputWrapper>
      error && errMessage="STOVE ID가 존재하지 않거나 비밀번호가 일치하지
      않습니다. 다시 시도해주세요."
      <Button type="submit" styleType={"primary"} text={"로그인"} />
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

export default SignIn;
