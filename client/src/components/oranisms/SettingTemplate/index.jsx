import { Outlet, Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const SettingTemplate = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const settingPath = pathName.slice(9);
  console.log({ settingPath });

  return (
    <TemplateWrapper>
      <SideMenu>
        <ul>
          {settingPath === "edit" ? (
            <CurrentList>
              <Link to="/setting/edit">정보 관리</Link>
            </CurrentList>
          ) : (
            <UnselectedList>
              <Link to="/setting/edit">정보 관리</Link>
            </UnselectedList>
          )}
          {settingPath === "change-password" ? (
            <CurrentList>
              <Link to="/setting/change-password">비밀번호 변경</Link>
            </CurrentList>
          ) : (
            <UnselectedList>
              <Link to="/setting/change-password">비밀번호 변경</Link>
            </UnselectedList>
          )}
          {settingPath === "leave" ? (
            <CurrentList>
              <Link to="/setting/leave">회원탈퇴</Link>
            </CurrentList>
          ) : (
            <UnselectedList>
              <Link to="/setting/leave">회원탈퇴</Link>
            </UnselectedList>
          )}
        </ul>
      </SideMenu>
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </TemplateWrapper>
  );
};

const TemplateWrapper = styled.div`
  display: flex;
`;
const SideMenu = styled.div`
  width: 160px;
  padding: 30px 0;
  border-width: 0 1px 0 0;
  border-style: solid;
  border-color: ${(props) => props.theme.color.grayScale.gray20};

  & > ul > li {
    ${(props) => props.theme.typography.description};
    list-style-type: none;
  }
`;
const List = styled.li`
  padding: 10px 0;
  width: 100%;

  & > a {
    display: inline-block;
    width: 100%;
  }
`;
const UnselectedList = styled(List)`
  & > a {
    color: ${(props) => props.theme.color.grayScale.gray60};
  }
  &:hover > a {
    color: ${(props) => props.theme.color.black};
  }
`;
const CurrentList = styled(List)`
  & > a {
    color: ${(props) => props.theme.color.black};
  }
`;

const OutletWrapper = styled.div`
  flex-grow: 1;
  padding: 40px;
`;

export default SettingTemplate;
