import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { signout } from "../../../api/auth";

import SearchBar from "../SearchBar";
import Button from "../../atoms/Button";
import stoveLogo from "../../../assets/svg/stovelogo.svg";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname.slice(1);

  const [isOpen, setIsOpen] = useState(false);

  const singinState = useSelector((state) => {
    return state.user;
  });
  const isLogin = singinState.signinState;
  const userNickname = singinState.userData && singinState.userData.nickname;

  useEffect(() => {
    const closeDropdown = (e) => {
      if (e.path[0].tagName !== "BUTTON") {
        setIsOpen(false);
      }
    };

    document.body.addEventListener("click", closeDropdown);

    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);
  const handleSetting = () => {
    setIsOpen(false);
    navigate("/setting/edit");
  };

  const handleSignOut = () => {
    setIsOpen(false);
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
              <UserNickname onClick={() => setIsOpen((prev) => !prev)}>
                {userNickname} 님 <span>▾</span>
              </UserNickname>
              {isOpen ? (
                <SettingList>
                  <li>
                    <button onClick={handleSetting}>설정</button>
                  </li>
                  <li>
                    <button onClick={handleSignOut}>로그아웃</button>
                  </li>
                </SettingList>
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

const UserNicknameToggle = styled.div`
  position: relative;
  z-index: 9;
`;
const UserNickname = styled.button`
  ${(props) => props.theme.typography.bodyRg};
  background-color: ${(props) => props.theme.color.white};
  border: none;
  cursor: pointer;

  & > span {
    color: ${(props) => props.theme.color.grayScale.gray60};
  }

  &:hover > span {
    color: ${(props) => props.theme.color.main100};
  }
`;
const SettingList = styled.ul`
  position: absolute;
  top: 23px;
  right: 0;
  list-style: none;
  width: 120px;
  border-radius: 3px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  overflow: hidden;

  & > li {
    background-color: ${(props) => props.theme.color.white};
    ${(props) => props.theme.typography.bodyRg};
  }
  & > li:hover {
    background-color: ${(props) => props.theme.color.grayScale.gray10};
  }
  & > li + li {
    border-width: 1px 0 0;
    border-style: solid;
    border-color: ${(props) => props.theme.color.grayScale.gray30};
  }

  & > li > button {
    display: inline-block;
    width: 100%;
    height: 100%;

    background-color: ${(props) => props.theme.color.white};
    border: none;
    cursor: pointer;
    ${(props) => props.theme.typography.bodyRg};
    padding: 10px 16px;
  }
  & > li:hover > button {
    background-color: ${(props) => props.theme.color.grayScale.gray10};
  }
`;

export default Header;
