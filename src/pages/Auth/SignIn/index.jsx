import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Cookies } from "react-cookie";
import customAxios from "../../../lib/axios/customAxios";
import { signin } from "../../../api/auth";

import Button from "../../../components/atoms/Button";
import FormInput from "../../../components/atoms/FormInput";

const SignIn = ({ userProfile, setUserProfile }) => {
  const cookies = new Cookies();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    pwd: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  const onChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const loginObj = {
        email: user.email,
        password: user.pwd,
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

        navigate("/", { replace: true });
        console.log("로그인 성공");
      }
    } catch (err) {
      console.log(`error: ${err}`);
      setErrorMessage(err.message);
      setError(true);
    }
  };

  return (
    <FormWrapper onSubmit={onSubmit}>
      <InputWrapper error={error}>
        <FormInput
          type="email"
          name="email"
          onChange={onChange}
          value={user.email}
          placeholder="이메일을 입력해 주세요"
          labelText="이메일 주소"
          error={error}
        />
        <FormInput
          type="password"
          name="pwd"
          onChange={onChange}
          value={user.pwd}
          placeholder="비밀번호를 입력해 주세요"
          labelText="비밀번호"
          error={error}
        />
      </InputWrapper>
      {error && errorMessage}
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
