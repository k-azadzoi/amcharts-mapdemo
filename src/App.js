/* Imports */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Map from './components/Map'
import California from './pages/California'
import './App.css';

const App = (props) => {

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Map />
        </Route>
        <Route path='/california'> 
          <California />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;




