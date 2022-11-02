import React from "react";
import styled from "styled-components";

const ModalContent = ({ contentComponent }) => {
  return <ModalContentWrapper>{contentComponent}</ModalContentWrapper>;
};

export default ModalContent;

const ModalContentWrapper = styled.div`
  ${(props) => props.theme.typography.descriptionBold};
  position: fixed;
  background: #fff;
  display: flex;
  padding: 32px 40px;
  width: 514px;
`;

ModalContent.defaultProps = {
  contentComponent: "",
};
