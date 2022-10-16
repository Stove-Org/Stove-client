import React, { useState } from "react";

import AuthForm from "../../../components/oranisms/AuthForm";

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    nickname: "",
    pwd: "",
    pwdConfirm: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("로그인 성공");
  };

  return (
    <>
      <AuthForm
        state={user}
        setState={setUser}
        onSubmit={onSubmit}
        buttonText="로그인"
      />
    </>
  );
};

export default SignIn;
