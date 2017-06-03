import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Registration from './Registration';
import PeopleDirectory from './PeopleDirectory';
import Profile from './Profile';

export default class Homepage extends React.Component{
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this); 
        this.state = {
            userId: ""
        };
    }

      validPasswords(){ 
        let passbox = this.refs.password.value; 
        let confirmbox = this.refs.passwordConfirm.value; 
        return passbox === confirmbox; 
    } 
 
    handleClick(event) { 
        // if(this.validPasswords()){ 
        //     console.log("password OK"); 
        let email = this.refs.email.value; 
        let password = this.refs.password.value; 
        // } 
        console.log(email + " " + password) 
 
 } 

    render(){
        return (
            <div>
                <h2>Welcome to the Almand Network!</h2>
                <h3>userUd: {this.state.userId}</h3>
                <BrowserRouter>
                    <div>
                        <Link to="/Profile">My Profile</Link>
                        <Route exact path="/Profile" render={(routeProps)=> <Profile {...this.state} {...this.props} {...routeProps} />} /><br/>

                        <Link to="/findFriends">Find Friends</Link>
                        <Route exact path="/findFriends" render={(routeProps)=> <PeopleDirectory {...this.state} {...this.props} {...routeProps} />} /><br/>
                    </div>
                </BrowserRouter>
                <div>
                    <h3>Login</h3> 
                    <label><input placeholder="Email" type="email" ref="email" /></label><br/><br/>
                    <label><input placeholder="Password" type="password" ref="password" /></label><br/><br/>
                    <button type="button" onClick={this.handleClick}>Sign in</button><br/><br/>
                    <div> 
                        or
                    </div><br/>

            
                    <BrowserRouter>
                        <div>
                        {/*<Link to="/signup">Click here to sign up</Link>
                        <Route exact path="/signup" render={(routeProps)=> <Registration {...this.state} {...this.props} {...routeProps} />} /><br/>*/}

                       

                        <Link to="/Registration">Click here to sign up</Link>
                        <Route exact path="/Registration" render={(routeProps)=> <Registration {...this.state} {...this.props} {...routeProps} />} /><br/>
                        </div>   
                    </BrowserRouter>


                </div> 
            </div> 
        );
    }
}