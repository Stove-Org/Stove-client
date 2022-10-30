import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/atoms/Button";
import { userGet, resetNickname } from "../../api/user";
import { Cookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { setUserNickname } from "../../reducers/userSlice";
import { validateNicknameGet } from "../../api/auth";
import styled from "styled-components";

import SettingInput from "../../components/atoms/SettingInput";
import SettingFooter from "../../components/atoms/SettingFooter";

const SettingEdit = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const inputNickname = useRef();

  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [registAt, setRegistAt] = useState("");

  const [prevNickname, setPrevNickname] = useState("");

  const [validate, setValidate] = useState(false);
  const [erroMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (cookies.get("accessToken")) {
      userGet()
        .then((data) => {
          const datas = data.data;
          const registData = datas.registAt.slice(0, 10);
          setPrevNickname(datas.nickname);

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

  const onChange = async (e) => {
    const target = e.target;
    const value = target.value;
    setNickname(value);

    // 닉네임 유효성 검사
    if (value.length < 2) {
      setErrorMessage(
        (prev) => (prev = "최소 2자 이상 최대 20자 이하로 입력해 주세요.")
      );
      setValidate(true);
    } else if (value.length > 20) {
      setErrorMessage(
        (prev) => (prev = "최소 2자 이상 최대 20자 이하로 입력해 주세요.")
      );
      setValidate(true);
    } else if (value === prevNickname) {
      setErrorMessage((prev) => (prev = "현재 닉네임과 같은 닉네임입니다."));
      setValidate(true);
    } else {
      try {
        await validateNicknameGet(value);
        setErrorMessage((prev) => (prev = ""));
        setValidate(false);
      } catch (err) {
        setErrorMessage(err.response.data.errorMessage);
        setValidate(true);
      }
    }
  };

  const handleSubmit = async () => {
    if (
      nickname.length < 1 ||
      nickname.length > 20 ||
      nickname === prevNickname ||
      validate
    ) {
      inputNickname.current.focus();
      setValidate(true);
      return;
    }
    await resetNickname({ nickname });
    setPrevNickname(nickname);
    dispatch(setUserNickname(nickname));
    alert("닉네임이 정상적으로 변경되었습니다.");
  };

  return (
    <>
      <SettingInput>
        <div>
          <aside>이메일</aside>
          <TextGray>{email}</TextGray>
        </div>
      </SettingInput>
      <SettingInput>
        <div>
          <aside>생성일자</aside>
          <TextGray>{registAt}</TextGray>
        </div>
      </SettingInput>
      <SettingInput>
        <div>
          <aside>닉네임</aside>
          <input
            type="text"
            value={nickname}
            onChange={onChange}
            ref={inputNickname}
          />
        </div>
        {validate ? <ErrorText>{erroMessage}</ErrorText> : null}
      </SettingInput>
      <SettingFooter>
        <Button styleType={"primary"} text={"저장"} onClick={handleSubmit} />
      </SettingFooter>
    </>
  );
};

const ErrorText = styled.p`
  margin: 10px 0 0 140px;
  ${(props) => props.theme.typography.bodySmRegular};
  color: ${(props) => props.theme.color.main100};
  word-break: keep-all;
`;

const TextGray = styled.p`
  color: ${(props) => props.theme.color.grayScale.gray60};
`;

export default SettingEdit;
