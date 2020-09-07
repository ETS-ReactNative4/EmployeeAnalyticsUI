import React, { Component } from 'react';
import classes from './Login.css';
import MainPanel from './MainPanel/MainPanel'

class LoginPage extends Component {
    render() {
        return (
            <div className = {classes.LoginPage}>
                <MainPanel />
            </div>
        );
    }
};

export default LoginPage;

