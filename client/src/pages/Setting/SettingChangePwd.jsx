import { useState } from "react";
import Button from "../../components/atoms/Button";
import SettingInput from "../../components/atoms/SettingInput";
import SettingFooter from "../../components/atoms/SettingFooter";

const SettingChangePwd = () => {
  return (
    <>
      <SettingInput>
        <aside>현재 비밀번호 입력</aside>
        <input
          type="password"
          // value={nickname}
          // onChange={(e) => setNickname(e.target.value)}
        />
      </SettingInput>
      <SettingInput>
        <aside>신규 비밀번호 입력</aside>
        <input
          type="password"
          // value={nickname}
          // onChange={(e) => setNickname(e.target.value)}
        />
      </SettingInput>
      <SettingInput>
        <aside>신규 비밀번호 재입력</aside>
        <input
          type="password"
          // value={nickname}
          // onChange={(e) => setNickname(e.target.value)}
        />
      </SettingInput>
      <SettingFooter>
        <Button styleType={"primary"} text={"비밀번호 변경"} />
      </SettingFooter>
    </>
  );
};

export default SettingChangePwd;
