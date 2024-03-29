import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Cookies } from "react-cookie";
import customAxios from "../../../lib/axios/customAxios";
import { signin } from "../../../api/auth";
import { userGet, adminCheck } from "../../../api/user";

import { useDispatch } from "react-redux";
import { setSigninState, setUser, setAdmin } from "../../../reducers/userSlice";

import Button from "../../../components/atoms/Button";
import FormInput from "../../../components/atoms/FormInput";

const SignIn = ({ userProfile, setUserProfile }) => {
  const dispatch = useDispatch();

  const cookies = new Cookies();
  const navigate = useNavigate();

  const inputEmail = useRef();
  const inputPwd = useRef();

  const [userInput, setUserInput] = useState({
    email: "",
    pwd: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  const onChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setUserInput({ ...userInput, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    if (userInput.email.length === 0) {
      inputEmail.current.focus();
      return;
    }
    if (userInput.pwd.length === 0) {
      inputPwd.current.focus();
      return;
    }
    try {
      const loginObj = {
        email: userInput.email,
        password: userInput.pwd,
      };

      const res = await signin(loginObj);
      const { data, status } = res;

      if (status === 201 || status === 200) {
        cookies.set("accessToken", data, {
          secure: true,
        });
        customAxios.defaults.headers = {
          Authorization: `Bearer ${data}`,
        };

        await userGet().then((res) => {
          dispatch(setSigninState(true));
          const data = res.data;
          dispatch(setUser(data));
        });

        await adminCheck()
          .then((res) => {
            const { status } = res;
            if (status === 201 || status === 200) {
              dispatch(setAdmin(true));
              navigate("/", { replace: true });
              return;
            }
          })
          .catch(() => {
            // 서버 주소가 뜨길래 에러 콘솔을 지워버림
            // 브라우저 스펙이라 이렇게 지울수밖에..
            console.clear();
            navigate("/", { replace: true });
          });
      }
    } catch (err) {
      setErrorMessage(
        (prev) =>
          (prev =
            "가입된 이메일이 존재하지 않거나 비밀번호가 일치하지 않습니다.\n다시 시도해주세요.")
      );
      setError(true);
    }
  };

  return (
    <FormWrapper onSubmit={onSubmit}>
      <InputWrapper>
        <FormInput
          type="text"
          name="email"
          onChange={onChange}
          value={userInput.email}
          placeholder="이메일을 입력해 주세요"
          labelText="이메일 주소"
          error={error}
          ref={inputEmail}
        />
        <FormInput
          type="password"
          name="pwd"
          onChange={onChange}
          value={userInput.pwd}
          placeholder="비밀번호를 입력해 주세요"
          labelText="비밀번호"
          error={error}
          ref={inputPwd}
        />
      </InputWrapper>
      {error && <ErrorText>{errorMessage}</ErrorText>}
      <Button type="submit" styleType={"primary"} text={"로그인"} />
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: auto;
  }
`;

const InputWrapper = styled.div`
  margin: 40px 0;
  width: 100%;

  & > div + div {
    margin-top: 30px;
  }
  @media screen and (min-width: 768px) {
    width: auto;
  }
`;

const ErrorText = styled.div`
  ${(props) => props.theme.typography.bodyRg};
  background-color: ${(props) => props.theme.color.grayScale.gray10};
  color: ${(props) => props.theme.color.main100};
  text-align: center;
  margin-bottom: 40px;
  width: 100%;
  padding: 20px;
  border-radius: 3px;
  white-space: pre-wrap;
`;

export default SignIn;
