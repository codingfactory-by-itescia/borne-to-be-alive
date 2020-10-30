import './assets/style/style.scss';

import {
  Route,
  BrowserRouter as Router,
} from "react-router-dom";

import Medecin from './views/Medecin'
import React from 'react';

function App() {
  return (
    <div className="App">
     <Router>
       <Route exact path="/" render={()=> <Medecin/>}/>
     </Router>
    </div>
  );
}

export default App;
