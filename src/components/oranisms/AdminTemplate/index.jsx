import { Outlet, Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminTemplate = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const settingPath = pathName.slice(7);
  const navigate = useNavigate();

  const isAdmin = useSelector((state) => {
    return state.user.isAdmin;
  });

  useEffect(() => {
    if (!isAdmin) {
      alert("잘못된 접근입니다.");
      navigate("/", { replace: true });
    }
  }, [isAdmin]);

  return (
    <TemplateWrapper>
      <SideMenu>
        <ul>
          {settingPath === "progamers" ? (
            <CurrentList>
              <Link to="/admin/progamers">프로게이머 관리</Link>
            </CurrentList>
          ) : (
            <UnselectedList>
              <Link to="/admin/progamers">프로게이머 관리</Link>
            </UnselectedList>
          )}
          {settingPath === "roster" ? (
            <CurrentList>
              <Link to="/admin/roster">로스터 관리</Link>
            </CurrentList>
          ) : (
            <UnselectedList>
              <Link to="/admin/roster">로스터 관리</Link>
            </UnselectedList>
          )}
          {settingPath === "news" ? (
            <CurrentList>
              <Link to="/admin/news">뉴스 관리</Link>
            </CurrentList>
          ) : (
            <UnselectedList>
              <Link to="/admin/news">뉴스 관리</Link>
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
  min-height: 70vh;
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
    ${(props) => props.theme.typography.descriptionBold};
    color: ${(props) => props.theme.color.black};
  }
`;

const OutletWrapper = styled.div`
  width: 100%;
  padding: 40px;
`;

export default AdminTemplate;
