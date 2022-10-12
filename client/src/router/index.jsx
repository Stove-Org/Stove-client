import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageTemplate from "../components/oranisms/PageTemplate";
import Home from "../pages/Home";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import Setting from "../pages/Setting";
import NextLCKRoster from "../pages/NextLCK/NextLCKRoster";
import NextLCKResult from "../pages/NextLCK/NextLCKResult";
import News from "../pages/News";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 헤더 푸터 X */}
        <Route exact path="/signIn" element={<SignIn />} />
        <Route exact path="/signUp" element={<SignUp />} />

        {/* 헤더 푸터 O */}
        <Route element={<PageTemplate />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/setting" element={<Setting />} />
          <Route exact path="/nextlck" element={<NextLCKRoster />} />
          <Route exact path="/nextlck/:id" element={<NextLCKResult />} />
          <Route exact path="/news" element={<News />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
