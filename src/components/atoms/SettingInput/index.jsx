import styled from "styled-components";

const SettingInput = ({ children }) => {
  return <SettingWrapper>{children}</SettingWrapper>;
};

const SettingWrapper = styled.div`
  ${(props) => props.theme.typography.bodyRg};
  padding: 0 0 20px;

  & + & {
    padding: 20px 0;
    border-color: ${(props) => props.theme.color.grayScale.gray20};
    border-width: 1px 0 0;
    border-style: solid;
  }

  & > div > aside {
    min-width: 140px;
    padding-right: 20px;
  }

  & > div {
    display: flex;
    align-items: center;
  }

  & > div > input {
    ${(props) => props.theme.typography.bodyRg};
    outline: none;
    border-color: ${(props) => props.theme.color.grayScale.gray30};
    border-width: 1px;
    border-style: solid;
    border-radius: 3px;
    background-color: ${(props) => props.theme.color.grayScale.gray10};
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    padding: 20px 12px;
    width: 200px;
    height: 34px;

    &:focus {
      outline: none;
      border-color: ${(props) => props.theme.color.main100};
      background-color: ${(props) => props.theme.color.white};
    }
  }
`;

export default SettingInput;
