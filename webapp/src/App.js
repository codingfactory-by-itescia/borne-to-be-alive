import './assets/style/style.scss';

import {
  Route,
  BrowserRouter as Router,
} from "react-router-dom";

import Accueil from './views/Accueil'
import Medecin from './views/Medecin'
import Rdv from './views/Rdv'
import React from 'react';
import Splashscreen from './views/Splashscreen'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path={"/"} render={() => <Splashscreen/>} />
        <Route exact path={"/Accueil"} render={() => <Accueil/>} />
        <Route exact path={"/RDV"} render={() => <Rdv/>} />
        <Route exact path={"/Medecin"} render={() => <Medecin/>} />
      </Router>
    </div>
  );
}

export default App;
