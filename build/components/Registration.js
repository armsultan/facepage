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
               
                <div>
                    <label>Email: <input type="email" ref="email" /></label><br/>
                    <label>Password: <input type="password" ref="password" /></label><br/>
                    <label>First Name: <input type="text" ref="firstname" /></label><br/>
                    <label>Last Name: <input type="text" ref="lastname" /></label><br/>
                    <label>Age: <input type="number" ref="age" /></label><br/>
                    <label>Gender: <input type="radio" ref="value" />Male
                                   <input type="radio" ref="value" />Female
                                   <input type="radio" ref="value" />Other
                    </label><br/>
                    <label>School: <input type="text" ref="school" /></label><br/>
                    <label>Job: <input type="text" ref="job" /></label><br/>

                    <button type="button" >Sign in</button>
                </div>
            </div> 
        );
    }
}