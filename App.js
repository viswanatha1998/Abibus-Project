import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Bus from './Bus/Bus';
import Trains from './Trains';
import Hotels from './Hotels';
import Navbar from './Navbar';
import BusList from './BusList';
import Pagenotfound from './Pagenotfound';
import MyBookings from './MyBookings';
import Flights from './Flights';
import Offers from './Offers/Offers';

// import Login from './Login/Login'


class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          {/* <Route exact path="/" component={Login} /> */}
          <Route exact path="/" component={Bus} />
          <Route path="/trains" component={Trains} />
          <Route path="/hotels" component={Hotels} />
          <Route path="/flights" component={Flights} />
          <Route path="/offers" component={Offers} />
          <Route path="/bus_search/:source/:destination" component={BusList} />
          <Route path="/404" component={Pagenotfound} />
          <Route path="/mybookings" component={MyBookings} />
          <Redirect to="/404" />
          {/* Route params */}
        </Switch>

      </Router>
    )
  }
}

export default App;

// State ----->  Data within the component
// Props -----> Passing data from one component another component




