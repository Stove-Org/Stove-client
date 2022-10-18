import { useState } from "react";
import Button from "../../components/atoms/Button";

import SettingInput from "../../components/atoms/SettingInput";

const SettingEdit = () => {
  const [nickname, setNickname] = useState("기존닉네임");

  return (
    <>
      <SettingInput>
        <aside>이메일</aside>
        <div>이메일@email.com</div>
      </SettingInput>
      <SettingInput>
        <aside>생성일자</aside>
        <div>2022년 10월 11일</div>
      </SettingInput>
      <SettingInput>
        <aside>닉네임</aside>
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
      </SettingInput>
      <Button styleType={"primary"} text={"저장"} />
    </>
  );
};

export default SettingEdit;
