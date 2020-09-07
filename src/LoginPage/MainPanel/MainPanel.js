import React from 'react';
import classes from './MainPanel.css';
import LoginPanel from '../LoginPanel/LoginPanel'

const mainPanel = () => (
    <div className= {classes.mainPanel}>     
        <LoginPanel />
    </div>
);

export default mainPanel;