import styled from "styled-components";

const PageTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

const Title = styled.h1`
  ${(props) => props.theme.typography.headMd};
  margin: 22px 0 12px;
`;

export default PageTitle;
