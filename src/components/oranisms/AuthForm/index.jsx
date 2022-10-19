import styled from "styled-components";

import Button from "../../atoms/Button";
import FormInput from "../../atoms/FormInput";

const AuthForm = (props) => {
  const isSignIn = props.buttonText === "회원가입";

  const onChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    props.setState({ ...props.state, [name]: value });
  };

  return (
    <FormWrapper onSubmit={props.onSubmit}>
      {isSignIn ? (
        <InputWrapper>
          <FormInput
            type="text"
            name="email"
            onChange={onChange}
            value={props.state.email}
            placeholder="이메일을 입력해 주세요"
            labelText="* 이메일 주소"
          />
          <FormInput
            type="text"
            name="nickname"
            onChange={onChange}
            value={props.state.nickname}
            placeholder="닉네임을 입력해 주세요"
            labelText="* 닉네임"
          />
          <FormInput
            type="password"
            name="pwd"
            onChange={onChange}
            value={props.state.pwd}
            placeholder="8글자 이상 입력해 주세요"
            labelText="* 비밀번호"
          />
          <FormInput
            type="password"
            name="pwdConfirm"
            onChange={onChange}
            value={props.state.pwdConfirm}
            placeholder="비밀번호를 한번 더 입력해 주세요"
            labelText="* 비밀번호 확인"
          />
        </InputWrapper>
      ) : (
        <InputWrapper>
          <FormInput
            type="email"
            name="email"
            onChange={onChange}
            value={props.state.email}
            placeholder="이메일을 입력해 주세요"
            labelText="이메일 주소"
          />
          <FormInput
            type="password"
            name="pwd"
            onChange={onChange}
            value={props.state.pwd}
            placeholder="8글자 이상 입력해 주세요"
            labelText="비밀번호"
          />
        </InputWrapper>
      )}
      <Button type="submit" styleType={"primary"} text={props.buttonText} />
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

export default AuthForm;
