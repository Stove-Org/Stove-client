import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageTemplate from "../components/oranisms/PageTemplate";
import Home from "../pages/Home";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import Setting from "../pages/Setting";
import NextLCKRoster from "../pages/NextLCK/NextLCKRoster";
import NextLCKResult from "../pages/NextLCK/NextLCKResult";
import News from "../pages/News";
import Search from "../pages/Search";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 헤더 푸터 O */}
        <Route element={<PageTemplate />}>
          <Route path="/" element={<Home />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/nextlck" element={<NextLCKRoster />} />
          <Route path="/nextlck/:id" element={<NextLCKResult />} />
          <Route path="/news" element={<News />} />
          <Route path="/search/:id" element={<Search />} />
        </Route>

        {/* 헤더 푸터 X */}
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
