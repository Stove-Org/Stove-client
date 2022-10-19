import styled from "styled-components";

const SettingFooter = ({ children }) => {
  return <SettingFooterWrapper>{children}</SettingFooterWrapper>;
};

const SettingFooterWrapper = styled.div`
  margin-top: 40px;

  & > button + button {
    margin-left: 10px;
  }
`;

export default SettingFooter;
