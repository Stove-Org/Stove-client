import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "../../components/atoms/Button";
import SettingFooter from "../../components/atoms/SettingFooter";
import Checkbox from "../../components/atoms/Checkbox";

const SettingLeave = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Content>
        <div>삭제된 정보는 복구될 수 없습니다.</div>
        <div>회원탈퇴를 진행하시겠습니까?</div>
      </Content>
      <Checkbox
        text={"동의합니다"}
        onClick={() => setChecked((prev) => !prev)}
      />
      <SettingFooter>
        <Button
          text={"비동의"}
          styleType={"light"}
          onClick={() => navigate("/")}
        />
        <Button
          styleType={checked ? "primary" : "default"}
          text={"동의"}
          onClick={() => {}}
        />
      </SettingFooter>
    </>
  );
};

const Content = styled.div`
  ${(props) => props.theme.typography.descriptionBold};
  line-height: 1.6;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-color: ${(props) => props.theme.color.grayScale.gray20};
  border-width: 0 0 1px;
  border-style: solid;
`;

export default SettingLeave;
