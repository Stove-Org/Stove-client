import styled from "styled-components";

const FormInput = ({ type, name, onChange, value, placeholder, labelText }) => {
  const termsNecessary = labelText.includes("*")
    ? labelText.split(" ")
    : labelText;

  return (
    <FormInputWrapper>
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
      />
    </FormInputWrapper>
  );
};

const FormInputWrapper = styled.div`
  min-width: 450px;
  display: flex;
  align-items: center;

  & + & {
    margin-top: 40px;
  }
`;
const LabelStyle = styled.label`
  ${(props) => props.theme.typography.description};
  width: 130px;
  display: inline-block;

  & > span {
    color: ${(props) => props.theme.color.main100};
  }
`;
const InputStyle = styled.input`
  flex-grow: 1;
  padding: 10px 0;

  ${(props) => props.theme.typography.bodyRg};
  background-color: ${(props) => props.theme.color.white};
  border: none;
  border-color: ${(props) => props.theme.color.grayScale.gray30};
  border-style: solid;
  border-width: 0 0 1px;
  border-radius: 0;

  &:focus {
    outline: none !important;
    border-color: ${(props) => props.theme.color.main100};
    box-shadow: none;
  }
`;

export default FormInput;
