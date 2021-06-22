import React from 'react'
import { Registration } from "./pages/Registion/registion.page";
import { Entry } from "./pages/Entry/entry.page";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import './App.css'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
              <Entry />
          </Route>
          <Route exact path="/registration">
              <Registration />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
