import React from 'react';
import { BrowserRouter, Route,Switch, Link } from 'react-router-dom';


export default class Registration extends React.Component{
    constructor(){
        super();
    }

    handleClick(){
          
    }

    render(){
        return (
            <div>
             <h1>Registration</h1>
               <h3>Sign Up</h3> 
                <div>
                    <label>Email: <input type="email" ref="email" /></label>
                    <label>Password: <input type="password" ref="password" /></label>
                    <label>First Name: <input type="text" ref="firstname" /></label>
                    <label>Last Name: <input type="text" ref="lastname" /></label>
                    <label>Age: <input type="number" ref="age" /></label>
                    <label>Gender: <input type="radio" ref="gender" /></label>
                    <label>School: <input type="text" ref="school" /></label>
                    <label>Job: <input type="text" ref="job" /></label>

                    <button type="button" >Sign in</button>
                </div>
            </div> 
        );
    }
}