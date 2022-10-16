import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import SearchBar from "../SearchBar";
import Button from "../../atoms/Button";
import stoveLogo from "../../../assets/svg/stovelogo.svg";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <Link to="/">
          <Logo src={stoveLogo} alt="main logo of Stove" />
        </Link>
        <SearchBar />
        <Nav>
          <Link to="/nextlck">Next LCK</Link>
          <Link to="/news">News</Link>
        </Nav>
      </HeaderLeft>
      <HeaderRight>
        <Button
          text={"로그인"}
          styleType={"primary"}
          onClick={() => navigate("/signin")}
        />
        <Button
          text={"회원가입"}
          styleType={"reverse"}
          onClick={() => navigate("/signup")}
        />
      </HeaderRight>
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
const HeaderRight = styled.div`
  & > button + button {
    margin-left: 10px;
  }
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
