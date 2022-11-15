import React from "react";
import { Route } from "react-router-dom";

function App() {
  return (
    <Route>
      <Route path="/" />
      <Route path="/nextlck" />
      <Route path="/news" />
      <Route path="/signUp" />
      <Route path="/signIn" />
    </Route>
  );
}

export default App;
