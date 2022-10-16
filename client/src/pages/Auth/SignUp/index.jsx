import React, { useState } from "react";

import AuthForm from "../../../components/oranisms/AuthForm";

const SingUp = () => {
  const [initUser, setInitUser] = useState({
    email: "",
    nickname: "",
    pwd: "",
    pwdConfirm: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("회원가입 성공");
  };

  return (
    <>
      <AuthForm
        state={initUser}
        setState={setInitUser}
        onSubmit={onSubmit}
        buttonText="회원가입"
      />
    </>
  );
};

export default SingUp;
