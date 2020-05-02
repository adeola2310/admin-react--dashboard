import React from 'react';
import './App.css';
import Login from './containers/Login/Login';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Dashboard from "./containers/Dashboard/Dashboard";
import Categories from "./containers/Categories/Categories";

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Login}/>
                  <Route path="/dashboard" component={Dashboard}/>
                  <Route path="/categories" component={Categories}/>

          </Switch>
      </BrowserRouter>

  );
}

export default App;
