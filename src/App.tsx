import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./page/MainPage";

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
