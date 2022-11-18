import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/nextlck" />
        <Route path="/news" />
        <Route path="/signUp" />
        <Route path="/signIn" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
