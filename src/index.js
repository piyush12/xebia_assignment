import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './container/Login';
import DashBoard from './container/Dashboard'
import store from './redux/store';

import "./styles.css";

function App() {
  return (
    <div className="container">
    
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={DashBoard} />
      </Switch>
    </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  
  , rootElement);
