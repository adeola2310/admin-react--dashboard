import React from 'react';
import './App.css';
import Login from './containers/Login/Login';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
        <div>
          <Login/>
        </div>
      </BrowserRouter>

  );
}

export default App;
