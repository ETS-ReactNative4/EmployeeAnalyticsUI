import React, { Component } from 'react';
import classes from './LoginPanel.css';
import TextBox from '../../TextBox/TextBox';
import Button from '../../Button/Button';
import Banner from '../Banner/Banner';
//import { Base64 } from 'js-base64';
import axios from 'axios';

class loginPanel extends Component {

    state = {
        userName: "",
        password: ""
    }

    usernameChangeHandler = (event) => {
        this.setState({userName: event.target.value})
    };

    passwordChangeHandler = (event) => {
        this.setState({password: event.target.value})
    };

    loginClickEventHandler = () => {
        //var encodedPassword = Base64.encode(this.state.password);
        const loginData = {
            userName: this.state.userName,
            password: this.state.password
        };

        console.log(loginData);

        const options = {
            method: 'POST',
            headers: { 
                'content-type': 'application/json',
                'Accept': '*',
                'Access-Control-Allow-Origin' : 'http://localhost:3080',
                'Access-Control-Allow-Methods' : 'POST'
            },
            data: loginData,
            url: 'http://localhost:3069/midas/login'
        };

        axios(options)
            .then(response => {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render () {
        let loginFields = {
            userName: {
                labelName: "User Name",
                placeHolder: "Username",
                id: "username",
                type: "input"
            },
            password: {
                labelName: "Password",
                placeHolder: "Password",
                id: "password",
                type: "password"
            },
            button: {
                buttontext: "Login"
            }
        };    

        return (
        <div>
            <Banner />

            <div className= {classes.loginPanel}>   
                <TextBox 
                    labelName = {loginFields.userName.labelName} 
                    placeholder = {loginFields.userName.placeHolder}
                    id = {loginFields.userName.id}
                    type = {loginFields.userName.type}
                    value = {this.state.userName}
                    changeEvent = {this.usernameChangeHandler}
                />  
                <TextBox 
                    labelName = {loginFields.password.labelName} 
                    placeholder = {loginFields.password.placeHolder}
                    id = {loginFields.password.id}
                    type = {loginFields.password.type}
                    value = {this.state.password}
                    changeEvent = {this.passwordChangeHandler}
                />  
                <Button 
                    buttontext = {loginFields.button.buttontext}
                    clickedEvent = {this.loginClickEventHandler}/>
            
            </div>
        </div>
        );
    };
};

export default loginPanel;