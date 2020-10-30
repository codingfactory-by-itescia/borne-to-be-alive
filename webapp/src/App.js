import './assets/style/style.scss';

import React,{ useEffect } from 'react';
import {
  Route,
  BrowserRouter as Router,
} from "react-router-dom";

import Accueil from './views/Accueil'
import Medecin from './views/Medecin'
import Rdv from './views/Rdv'
import Splashscreen from './views/Splashscreen'

function App() {

useEffect(()=> {
  document.body.onload = () => { document.body.requestFullscreen() }
})

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
