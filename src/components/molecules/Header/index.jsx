import { Link, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { signout } from "../../../api/auth";
import { setSigninState, setUser } from "../../../reducers/userSlice";

import SearchBar from "../SearchBar";
import Button from "../../atoms/Button";
import stoveLogo from "../../../assets/svg/stovelogo.svg";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname.slice(1);

  const [openSetting, setOpenSetting] = useState(false);

  const singinState = useSelector((state) => {
    return state.user;
  });
  const isLogin = singinState.signinState;
  const userNickname = singinState.userData && singinState.userData.nickname;

  const handleSignOut = () => {
    signout();
  };

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <Link to="/">
          <Logo src={stoveLogo} alt="main logo of Stove" />
        </Link>
        <SearchBar />
        <Nav>
          {pathName === "nextlck" ? (
            <>
              <CurrentLink to="/nextlck">Next LCK</CurrentLink>
              <Link to="/news">News</Link>
            </>
          ) : pathName === "news" ? (
            <>
              <Link to="/nextlck">Next LCK</Link>
              <CurrentLink to="/news">News</CurrentLink>
            </>
          ) : (
            <>
              <Link to="/nextlck">Next LCK</Link>
              <Link to="/news">News</Link>
            </>
          )}
        </Nav>
      </HeaderLeft>
      <HeaderRight>
        {isLogin ? (
          <>
            <UserNicknameToggle>
              <UserNickname onClick={() => setOpenSetting(!openSetting)}>
                {userNickname} 님 ▾
              </UserNickname>
              {openSetting ? (
                <ul>
                  <li>
                    <Link to="/setting/edit">설정</Link>
                  </li>
                  <li>
                    <button onClick={handleSignOut}>로그아웃</button>
                  </li>
                </ul>
              ) : (
                <></>
              )}
            </UserNicknameToggle>
          </>
        ) : (
          <>
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
          </>
        )}
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

const CurrentLink = styled.a`
  color: ${(props) => props.theme.color.main100};
`;

const UserNicknameToggle = styled.div``;
const UserNickname = styled.button``;

export default Header;
