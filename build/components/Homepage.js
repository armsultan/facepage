import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Registration from './Registration';

export default class Homepage extends React.Component{
    constructor(){
        super();
    }

    handleClick(){
          
    }

    render(){
        return (
            <div>
                <h1>Welcome to the Almand Network!</h1>
                <div>
                    <h3>Login</h3> 
                    <label>Email: <input type="email" ref="email" /></label>
                    <label>Password: <input type="password" ref="password" /></label>
                    <button type="button" >Sign in</button>
                    <div>- or -</div>
                    <h3>Sign Up</h3>
                    <BrowserRouter>
                        <div>
                        <Link to="/Registration">Sign-Up</Link>
                        <Route exact path="/Registration" render={(routeProps)=> <Registration {...this.props} {...routeProps} />} />
                        </div>   
                    </BrowserRouter>


                </div> 
            </div> 
        );
    }
}