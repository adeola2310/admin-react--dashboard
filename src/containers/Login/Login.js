import React, {Component} from 'react';
import './Login.css';

class Login extends Component {
    render() {
        return (
            <div className="login__card">
              <form className="login__details">
                  <div className="login__header">
                      <h3>please login</h3>
                  </div>
                  <input type="email" placeholder="Enter email"/>
                  <input type="password" placeholder="Enter Password"/>
                  <button className="login__button">Login</button>
              </form>
            </div>
        );
    }
}

export default Login;
