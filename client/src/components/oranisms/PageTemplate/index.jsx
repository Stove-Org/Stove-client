import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../../molecules/Header";
import Footer from "../../molecules/Footer";

const PageTemplate = () => {
  return (
    <PageTemplateWrapper>
      <Header />
      <Outlet />
      <Footer />
    </PageTemplateWrapper>
  );
};

const PageTemplateWrapper = styled.div``;

export default PageTemplate;
