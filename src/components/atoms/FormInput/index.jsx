import React from "react";
import styled from "styled-components";

const FormInput = React.forwardRef(
  (
    {
      type,
      name,
      onChange,
      value,
      placeholder,
      labelText,
      validate,
      errMessage,
      error,
    },
    ref
  ) => {
    const termsNecessary = labelText.includes("*")
      ? labelText.split(",")
      : labelText;

    return (
      <FormInputWrapper>
        <FormInputInnerWrapper>
          <LabelStyle htmlFor={name}>
            {typeof termsNecessary === "string" ? (
              `${termsNecessary}`
            ) : (
              <>
                <span>{termsNecessary[0]}</span> {termsNecessary[1]}
              </>
            )}
          </LabelStyle>
          <InputStyle
            id={name}
            type={type}
            name={name}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            ref={ref}
            error={error}
          />
        </FormInputInnerWrapper>
        {validate ? <ErrorText>{errMessage}</ErrorText> : null}
      </FormInputWrapper>
    );
  }
);

const FormInputWrapper = styled.div`
  width: 100%;
`;
const FormInputInnerWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`;
const LabelStyle = styled.label`
  ${(props) => props.theme.typography.description};
  width: 100px;
  display: inline-block;

  & > span {
    color: ${(props) => props.theme.color.main100};
  }

  @media screen and (min-width: 768px) {
    width: 130px;
  }
`;
const InputStyle = styled.input`
  flex-grow: 1;
  padding: 10px 0;

  ${(props) => props.theme.typography.bodyRg};
  background-color: ${(props) => props.theme.color.white};
  border: none;
  border-color: ${(props) => (props.error ? "#F54242" : "#DBDBDB")};
  border-style: solid;
  border-width: 0 0 1px;
  border-radius: 0;

  &:focus {
    outline: none !important;
    border-color: ${(props) => props.theme.color.main100};
    box-shadow: none;
  }
`;

const ErrorText = styled.div`
  margin: 4px 0 0 130px;
  ${(props) => props.theme.typography.bodySmRegular};
  color: ${(props) => props.theme.color.main100};
  word-break: keep-all;
`;

export default FormInput;
