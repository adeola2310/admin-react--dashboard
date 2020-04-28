import React, {Component} from 'react';
import './Dashboard.css';
import Layout from "../../Component/Layout/Layout";

class Dashboard extends Component {
    render() {
        return (
<div>
    <Layout/>

    <div className="content">
        <div className="head">
            <h5>Dashboard</h5>
        </div>
        <div className="cards">
            <div className="card__one">
                <div className="headers">
                    <p>Users</p>
                    <img src={require('../../images/user.svg')} style={{width: '10%'}} alt=""
                    />
                </div>
                <div className="bottom">
                    <h5>1000</h5>
                </div>
            </div>
            <div className="card__one">
                <div className="headers">
                    <p>Users</p>
                    <img src={require('../../images/user.svg')} style={{width: '10%'}} alt=""/>
                </div>
                <div className="bottom">
                    <h5>1000</h5>
                </div>
            </div>
            <div className="card__one">
                <div className="headers">
                    <p>Users</p>
                    <img src={require('../../images/user.svg')} style={{width: '10%'}} alt=""/>
                </div>
                <div className="bottom">
                    <h5>1000</h5>
                </div>
            </div>
            <div className="card__one">
                <div className="headers">
                    <p>Users</p>
                    <img src={require('../../images/user.svg')} style={{width: '10%'}} alt=""/>
                </div>
                <div className="bottom">
                    <h5>1000</h5>
                </div>
            </div>
        </div>

        <div className="sales">
            <div className="sales__head">
                <h5> Sales Report</h5>
            </div>
            <table className="table">
                

            </table>
        </div>


    </div>
</div>




        );
    }
}

export default Dashboard;
