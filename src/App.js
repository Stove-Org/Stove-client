import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import { Provider } from "react-redux";
import store from "./reducers/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

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

import NEWS_DATA from "./data/NEWS_DATA";

export let persistor = persistStore(store);

function App() {
  const [news, setNews] = useState(NEWS_DATA);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
                <Route path="/nextlck" element={<NextLCKRoster />} />
                <Route path="/nextlck/:id" element={<NextLCKResult />} />
                <Route path="/news" element={<News news={news} />} />
                <Route path="/search/:id" element={<Search />} />
              </Route>

              <Route element={<AuthPageTemplate />}>
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/signIn" element={<SignIn />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
