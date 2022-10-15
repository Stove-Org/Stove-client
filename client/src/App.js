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
    nickName: "Nuguri",
    name: "장하권",
    position: "TOP",
  },
  {
    id: 12,
    nickName: "Canyon",
    name: "김건부",
    position: "JGL",
  },
  {
    id: 13,
    nickName: "Deokdam",
    name: "서대길",
    position: "BOT",
  },
];

function App() {
  const [roster, setRoster] = useState([
    {
      id: 1,
      name: "GEN",
      TOP: "",
      JGL: "",
      MID: "Chovy",
      BOT: "",
      SPT: "",
    },
    {
      id: 2,
      name: "T1",
      TOP: "Zeus",
      JGL: "Oner",
      MID: "",
      BOT: "Gumayusi",
      SPT: "Keria",
    },
    {
      id: 3,
      name: "LSB",
      TOP: "",
      JGL: "",
      MID: "",
      BOT: "",
      SPT: "",
    },
    {
      id: 4,
      name: "DK",
      TOP: "",
      JGL: "",
      MID: "",
      BOT: "",
      SPT: "",
    },
    {
      id: 5,
      name: "KT",
      TOP: "",
      JGL: "",
      MID: "",
      BOT: "",
      SPT: "",
    },
    {
      id: 6,
      name: "DRX",
      TOP: "",
      JGL: "",
      MID: "",
      BOT: "",
      SPT: "",
    },
    {
      id: 7,
      name: "KDF",
      TOP: "",
      JGL: "",
      MID: "",
      BOT: "",
      SPT: "",
    },
    {
      id: 8,
      name: "NS",
      TOP: "",
      JGL: "",
      MID: "",
      BOT: "",
      SPT: "",
    },
    {
      id: 9,
      name: "BRO",
      TOP: "",
      JGL: "",
      MID: "",
      BOT: "",
      SPT: "",
    },
    {
      id: 10,
      name: "HLE",
      TOP: "",
      JGL: "",
      MID: "",
      BOT: "",
      SPT: "",
    },
  ]);
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
