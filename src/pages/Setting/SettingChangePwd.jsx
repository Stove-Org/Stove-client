import { useState } from "react";
import Button from "../../components/atoms/Button";
import SettingInput from "../../components/atoms/SettingInput";
import SettingFooter from "../../components/atoms/SettingFooter";

const SettingChangePwd = () => {
  const [pwd, setPwd] = useState({
    currentPwd: "",
    newPwd: "",
    newPwdCofirm: "",
  });

  const onChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setPwd({ ...pwd, [name]: value });
  };

  return (
    <>
      <SettingInput>
        <aside>현재 비밀번호 입력</aside>
        <input
          type="password"
          name="currentPwd"
          value={pwd.currentPwd}
          onChange={onChange}
        />
      </SettingInput>
      <SettingInput>
        <aside>신규 비밀번호 입력</aside>
        <input
          type="password"
          name="newPwd"
          value={pwd.newPwd}
          onChange={onChange}
        />
      </SettingInput>
      <SettingInput>
        <aside>신규 비밀번호 재입력</aside>
        <input
          type="password"
          name="newPwdCofirm"
          value={pwd.newPwdCofirm}
          onChange={onChange}
        />
      </SettingInput>
      <SettingFooter>
        <Button styleType={"primary"} text={"비밀번호 변경"} />
      </SettingFooter>
    </>
  );
};

export default SettingChangePwd;
