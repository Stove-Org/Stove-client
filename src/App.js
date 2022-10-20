import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

import PageTemplate from "./components/oranisms/PageTemplate";
import AuthPageTemplate from "./components/oranisms/AuthPageTemplate";
import SettingTemplate from "./components/oranisms/SettingTemplate";

import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";

import Home from "./pages/Home";
import SettingEdit from "./pages/Setting/SettingEdit";
import SettingChangePwd from "./pages/Setting/SettingChangePwd";
import SettingLeave from "./pages/Setting/SettingLeave";
import NextLCKRoster from "./pages/NextLCK/NextLCKRoster";
import NextLCKResult from "./pages/NextLCK/NextLCKResult";
import News from "./pages/News";
import Search from "./pages/Search";

import ROSTER_DATA from "./data/ROSTER_DATA";
import DUMMY_DATA from "./data/DUMMY_DATA";
import NEWS_DATA from "./data/NEWS_DATA";

function App() {
  const [roster, setRoster] = useState(ROSTER_DATA);
  const [players, setPlayers] = useState(DUMMY_DATA);
  const [news, setNews] = useState(NEWS_DATA);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<PageTemplate />}>
            <Route path="/" element={<Home />} />
            <Route element={<SettingTemplate />}>
              <Route path="/setting/edit" element={<SettingEdit />} />
              <Route
                path="/setting/change-password"
                element={<SettingChangePwd />}
              />
              <Route path="/setting/leave" element={<SettingLeave />} />
            </Route>
            <Route
              path="/nextlck"
              element={
                <NextLCKRoster
                  players={players}
                  setPlayers={setPlayers}
                  roster={roster}
                  setRoster={setRoster}
                />
              }
            />
            <Route
              path="/nextlck/:id"
              element={<NextLCKResult roster={roster} />}
            />
            <Route path="/news" element={<News news={news} />} />
            <Route path="/search/:id" element={<Search />} />
          </Route>

          <Route element={<AuthPageTemplate />}>
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
