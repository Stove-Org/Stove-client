import React from "react";
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
import AdminTemplate from "./components/oranisms/AdminTemplate";

import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";

import Home from "./pages/Home";
import SettingEdit from "./pages/Setting/SettingEdit";
import SettingChangePwd from "./pages/Setting/SettingChangePwd";
import SettingLeave from "./pages/Setting/SettingLeave";
import SettingProgamers from "./pages/Admin/SettingProgamers";
import SettingRoster from "./pages/Admin/SettingRoster";
import SettingNews from "./pages/Admin/SettingNews";
import NextLCKRoster from "./pages/NextLCK/NextLCKRoster";
import NextLCKResult from "./pages/NextLCK/NextLCKResult";
import News from "./pages/News";
import Search from "./pages/Search";

import NotFound from "./pages/NotFound";

export let persistor = persistStore(store);

function App() {
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
                <Route element={<AdminTemplate />}>
                  <Route
                    path="/admin/progamers"
                    element={<SettingProgamers />}
                  />
                  <Route path="/admin/roster" element={<SettingRoster />} />
                  <Route path="/admin/news" element={<SettingNews />} />
                </Route>
                <Route path="/nextlck" element={<NextLCKRoster />} />
                <Route path="/nextlck/:id" element={<NextLCKResult />} />
                <Route path="/news" element={<News />} />
                <Route path="/search/:id" element={<Search />} />
                <Route path="*" element={<NotFound />} />
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
