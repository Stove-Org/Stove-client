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
            <Route path="/news" element={<News news={news} />} />
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
