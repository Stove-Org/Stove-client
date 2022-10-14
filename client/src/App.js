import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

import PageTemplate from "./components/oranisms/PageTemplate";
import Home from "./pages/Home";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Setting from "./pages/Setting";
import NextLCKRoster from "./pages/NextLCK/NextLCKRoster";
import NextLCKResult from "./pages/NextLCK/NextLCKResult";
import News from "./pages/News";
import Search from "./pages/Search";

const DUMMY_DATA = [
  {
    id: 1,
    nickName: "Faker",
    name: "이상혁",
    position: "MID",
  },
  {
    id: 2,
    nickName: "Chovy",
    name: "정지훈",
    position: "MID",
  },
  {
    id: 3,
    nickName: "Peanut",
    name: "한왕호",
    position: "JGL",
  },
  {
    id: 4,
    nickName: "Doran",
    name: "최현준",
    position: "TOP",
  },
  {
    id: 5,
    nickName: "Ruler",
    name: "박재혁",
    position: "BOT",
  },
  {
    id: 6,
    nickName: "Fate",
    name: "유수혁",
    position: "MID",
  },
  {
    id: 7,
    nickName: "Kiin",
    name: "김기인",
    position: "TOP",
  },
  {
    id: 8,
    nickName: "Pyosik",
    name: "홍창현",
    position: "JGL",
  },
  {
    id: 9,
    nickName: "Breyl",
    name: "조건희",
    position: "SPT",
  },
  {
    id: 10,
    nickName: "Zeka",
    name: "김건우",
    position: "MID",
  },
  {
    id: 11,
    nickName: "Life",
    name: "김정민",
    position: "SPT",
  },
];

function App() {
  const [roster, setRoster] = useState({
    geng: {},
    t1: {},
    dwg: {},
    kf: {},
    drx: {},
    frb: {},
    kt: {},
    nsr: {},
    ls: {},
    hle: {},
  });
  const [players, setPlayers] = useState(DUMMY_DATA);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<PageTemplate />}>
            <Route path="/" element={<Home />} />
            <Route path="/setting" element={<Setting />} />
            <Route
              path="/nextlck"
              element={
                <NextLCKRoster
                  players={players}
                  roster={roster}
                  setRoster={setRoster}
                />
              }
            />
            <Route
              path="/nextlck/:id"
              element={<NextLCKResult roster={roster} />}
            />
            <Route path="/news" element={<News />} />
            <Route path="/search/:id" element={<Search />} />
          </Route>

          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
