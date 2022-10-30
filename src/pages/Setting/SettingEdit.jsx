import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/atoms/Button";
import { userGet, resetNickname } from "../../api/user";
import { Cookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { setUserNickname } from "../../reducers/userSlice";

import SettingInput from "../../components/atoms/SettingInput";
import SettingFooter from "../../components/atoms/SettingFooter";

const SettingEdit = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [registAt, setRegistAt] = useState("");

  useEffect(() => {
    if (cookies.get("accessToken")) {
      userGet()
        .then((data) => {
          const datas = data.data;
          const registData = datas.registAt.slice(0, 10);

          setEmail(datas.email);
          setNickname(datas.nickname);
          setRegistAt(registData);
        })
        .catch((err) => console.log(err));
    } else {
      alert("Stove 회원만 이용 가능한 페이지입니다.");
      navigate("/signin", { replace: true });
    }
  }, []);

  const handleSubmit = async () => {
    await resetNickname({ nickname });
    dispatch(setUserNickname(nickname));
    alert("닉네임이 정상적으로 변경되었습니다.");
  };

  return (
    <>
      <SettingInput>
        <aside>이메일</aside>
        <div>{email}</div>
      </SettingInput>
      <SettingInput>
        <aside>생성일자</aside>
        <div>{registAt}</div>
      </SettingInput>
      <SettingInput>
        <aside>닉네임</aside>
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
      </SettingInput>
      <SettingFooter>
        <Button styleType={"primary"} text={"저장"} onClick={handleSubmit} />
      </SettingFooter>
    </>
  );
};

export default SettingEdit;
