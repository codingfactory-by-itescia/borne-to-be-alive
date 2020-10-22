import './assets/style/style.scss';

import {
  Route,
  BrowserRouter as Router,
} from "react-router-dom";

import Accueil from './views/Accueil'
import Rdv from './views/Rdv'
import React from 'react';
import Splashscreen from './views/Splashscreen'
import Ticket from './views/Ticket'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path={"/"} render={() => <Splashscreen/>} />
        <Route exact path={"/Accueil"} render={() => <Accueil/>} />
        <Route exact path={"/Ticket"} render={() => <Ticket/>} />
        <Route exact path={"/RDV"} render={() => <Rdv/>} />
      </Router>
    </div>
  );
}

export default App;
