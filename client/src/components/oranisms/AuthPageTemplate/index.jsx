import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const AuthPageTemplate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isSignUp = location.pathname === "/signup";

  return (
    <TemplateWrapper>
      <Link to="/">
        <img
          src={process.env.PUBLIC_URL + `assets/svg/stovelogo.svg`}
          alt="main logo of Stove"
        />
      </Link>
      <TemplateInnerWrapper>
        {isSignUp ? <Title>회원가입</Title> : <Title>로그인</Title>}
        <Outlet />
        {isSignUp && (
          <SignUpButton>
            회원이신가요?{" "}
            <button onClick={() => navigate("/signin")}>로그인하러 가기</button>
          </SignUpButton>
        )}
      </TemplateInnerWrapper>
    </TemplateWrapper>
  );
};

const TemplateWrapper = styled.div`
  background-color: ${(props) => props.theme.color.grayScale.gray10};
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TemplateInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.white};
  margin-top: 20px;
  padding: 20px 40px;
  border-radius: 3px;
`;

const Title = styled.h1`
  padding-bottom: 10px;
  ${(props) => props.theme.typography.headRgBold};
`;

const SignUpButton = styled.div`
  margin-top: 10px;
  ${(props) => props.theme.typography.bodySmRegular};

  & > button {
    color: ${(props) => props.theme.color.main100};
    padding-left: 4px;
    text-decoration: underline;
    border: none;
    background-color: ${(props) => props.theme.color.white};
    cursor: pointer;
  }
`;

export default AuthPageTemplate;
