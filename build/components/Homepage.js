import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Registration from './Registration';
import PeopleDirectory from './PeopleDirectory';
import Profile from './Profile';

export default class Homepage extends React.Component{
    constructor(){
        super();
        this.state = {
            userId: "59239587d1dc6233ea56bf0a"
        };
    }

    handleClick(){
          
    }

    render(){
        return (
            <div>
                <h1>Welcome to the Almand Network!</h1>
                <h2>userUd: {this.state.userId}</h2>
                <div>
                    <h3>Login</h3> 
                    <label>Email: <input type="email" ref="email" /></label>
                    <label>Password: <input type="password" ref="password" /></label>
                    <button type="button" >Sign in</button>
                    <div>- or -</div>
                    <h3>Sign Up</h3>
                    <BrowserRouter>
                        <div>
                        <Link to="/signup">Sign-Up</Link>
                        <Route exact path="/signup" render={(routeProps)=> <Registration {...this.state} {...this.props} {...routeProps} />} />

                         <Link to="/Profile">My Profile</Link>
                        <Route exact path="/Profile" render={(routeProps)=> <Profile {...this.state} {...this.props} {...routeProps} />} />

                        <Link to="/findFriends">Find Friends</Link>
                        <Route exact path="/findFriends" render={(routeProps)=> <PeopleDirectory {...this.state} {...this.props} {...routeProps} />} />

                        <Link to="/Registration">Sign-Up</Link>
                        <Route exact path="/Registration" render={(routeProps)=> <Registration {...this.state} {...this.props} {...routeProps} />} />
                        </div>   
                    </BrowserRouter>


                </div> 
            </div> 
        );
    }
}