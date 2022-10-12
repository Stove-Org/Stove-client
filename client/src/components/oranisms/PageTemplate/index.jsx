import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../../molecules/Header";
import Footer from "../../molecules/Footer";

const PageTemplate = () => {
  return (
    <>
      <PageTemplateWrapper>
        <div>
          <Header />
        </div>
      </PageTemplateWrapper>
      <Line />
      <PageTemplateWrapper>
        <div>
          <Outlet />
          <Footer />
        </div>
      </PageTemplateWrapper>
    </>
  );
};

const PageTemplateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  width: 100%;
  border-bottom-color: ${(props) => props.theme.color.grayScale.gray20};
  border-bottom-width: 1px;
  border-bottom-style: solid;
`;

export default PageTemplate;
