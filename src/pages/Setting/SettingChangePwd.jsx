import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../../api/user";
import { Cookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { setUserNickname } from "../../reducers/userSlice";

import Button from "../../components/atoms/Button";
import SettingInput from "../../components/atoms/SettingInput";
import SettingFooter from "../../components/atoms/SettingFooter";

const SettingChangePwd = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [pwd, setPwd] = useState({
    currentPassword: "",
    newPassword: "",
    newPasswordConfirm: "",
  });

  useEffect(() => {
    if (cookies.get("accessToken")) {
      return;
    } else {
      alert("Stove 회원만 이용 가능한 페이지입니다.");
      navigate("/signin", { replace: true });
    }
  }, []);

  const onChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setPwd({ ...pwd, [name]: value });
  };

  const handleSubmit = async () => {
    const { currentPassword, newPassword } = pwd;
    await resetPassword({ currentPassword, newPassword });
    alert("비밀번호가 정상적으로 변경되었습니다. 다시 로그인해주세요.");
  };

  return (
    <>
      <SettingInput>
        <aside>현재 비밀번호 입력</aside>
        <input
          type="password"
          name="currentPassword"
          value={pwd.currentPassword}
          onChange={onChange}
        />
      </SettingInput>
      <SettingInput>
        <aside>신규 비밀번호 입력</aside>
        <input
          type="password"
          name="newPassword"
          value={pwd.newPassword}
          onChange={onChange}
        />
      </SettingInput>
      <SettingInput>
        <aside>신규 비밀번호 재입력</aside>
        <input
          type="password"
          name="newPasswordConfirm"
          value={pwd.newPasswordConfirm}
          onChange={onChange}
        />
      </SettingInput>
      <SettingFooter>
        <Button
          styleType={"primary"}
          text={"비밀번호 변경"}
          onClick={handleSubmit}
        />
      </SettingFooter>
    </>
  );
};

export default SettingChangePwd;
