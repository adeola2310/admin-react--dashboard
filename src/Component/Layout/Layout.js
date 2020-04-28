import React, {Component} from 'react';
import './Layout.css';
import {NavLink} from "react-router-dom";

class Layout extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="header__details">
                        <h3>Admin Dashboard</h3>
                        <div className="profiles">
                            <img src={require('../../images/user.svg')} style={{width: '20%'}} alt="profile__Picture"/>
                            <span style={{marginTop:'15px'}}>Adeola</span>
                        </div>
                    </div>
                </div>
                <div className="side-nav">
                    <ul className="side-nav__items">
                        <li className="list">
                            <NavLink to={{pathname: '/dashboard'}}>Dashboard</NavLink>
                        </li>
                        <li className="list">
                           <NavLink to={{pathname: '/categories'}}>Categories</NavLink>
                        </li>
                        <li className="list">
                            Users
                        </li>
                    </ul>
                </div>


            </div>
        );
    }
}

export default Layout;
