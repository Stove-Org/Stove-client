import styled from "styled-components";

const PageTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

const Title = styled.h1`
  ${(props) => props.theme.typography.headMd};
  margin: 22px 10px 12px;
  @media screen and (min-width: 768px) {
    margin: 22px 0 12px;
    display: flex;
  }
  @media screen and (min-width: 1080px) {
  }
`;

export default PageTitle;
