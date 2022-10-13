import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import SearchBar from "../SearchBar";
import Button from "../../atoms/Button";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <Link to="/">
          <Logo
            src={process.env.PUBLIC_URL + "assets/svg/stovelogo.svg"}
            alt="main logo of Stove"
          />
        </Link>
        <SearchBar />
        <Nav>
          <Link to="/nextlck">Next LCK</Link>
          <Link to="/news">News</Link>
        </Nav>
      </HeaderLeft>
      <div>
        <Button
          text={"로그인"}
          type={"primary"}
          onClick={() => navigate("/signin")}
        />
        <Button
          text={"회원가입"}
          type={"reverse"}
          onClick={() => navigate("/signup")}
        />
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  width: 100%;
  height: 62px;
  display: flex;
  align-items: center;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
`;

const Logo = styled.img`
  margin-right: 20px;
`;

const Nav = styled.nav`
  ${(props) => props.theme.typography.bodyRg};
  & > a {
    margin-left: 20px;
    padding: 5px;
  }

  & > a:hover {
    color: ${(props) => props.theme.color.main100};
  }
`;

export default Header;
