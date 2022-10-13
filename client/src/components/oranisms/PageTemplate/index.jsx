import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../../molecules/Header";
import Footer from "../../molecules/Footer";

const PageTemplate = () => {
  return (
    <>
      <PageTemplateWrapper>
        <PageTemplateInnerWrapper>
          <Header />
        </PageTemplateInnerWrapper>
      </PageTemplateWrapper>
      <Line />
      <PageTemplateWrapper>
        <PageTemplateInnerWrapper>
          <Outlet />
        </PageTemplateInnerWrapper>
      </PageTemplateWrapper>
      <Line />
      <PageTemplateWrapper>
        <PageTemplateInnerWrapper>
          <Footer />
        </PageTemplateInnerWrapper>
      </PageTemplateWrapper>
    </>
  );
};

const PageTemplateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageTemplateInnerWrapper = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 718px;
  }
  @media screen and (min-width: 1080px) {
    width: 1080px;
  }
`;

const Line = styled.div`
  width: 100%;
  border-bottom-color: ${(props) => props.theme.color.grayScale.gray20};
  border-bottom-width: 1px;
  border-bottom-style: solid;
`;

export default PageTemplate;
