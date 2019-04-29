import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <div>
      <Router>

        <React.Fragment>
        <div><NavBar/></div>
          <Route path="/" component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/actors" component={Actors} />
          <Route path="/directors" component={Directors} />
        </React.Fragment>
      </Router>
    </div>
  );
};

export default App
