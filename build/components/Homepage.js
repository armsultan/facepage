import React from 'react';
import { BrowserRouter, browserHistory, Route, Switch, Link, Redirect } from 'react-router-dom';



import Registration from './Registration';
import PeopleDirectory from './PeopleDirectory';
import Profile from './Profile';

export default class Homepage extends React.Component{
    constructor(){
        super();
        
        this.state = {
            userId: ""
        };
        this.handleClick = this.handleClick.bind(this); 
        this.handleClickProfile = this.handleClickProfile.bind(this); 
        this.handleClickFriends = this.handleClickFriends.bind(this); 
        this.handleClickSignup = this.handleClickSignup.bind(this); 
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

    handleClickProfile(event) {
       
        BrowserRouter.push("/Profile");
  }

     handleClickFriends(event) {
        browserHistory.push("/findFriends");
    }

    handleClickSignup(event) {
        this.props.history.push("/Registration");
    }

    render(){
            
        return (
            <div>
                <h2>Welcome to the Almand Network!</h2>
                <h3>userUd: {this.state.userId}</h3>
            <BrowserRouter history={browserHistory}>                    
                    <div>
                        <button>
                        <Link className="linkButton" to="/Profile">My Profile</Link>
                        </button>
                        <Route exact path="/findFriends" render={(routeProps)=> <PeopleDirectory {...this.state} {...this.props} {...routeProps} />} /><br/>
                        
                        <button>
                       <Link className="linkButton" to="/findFriends">Find Friends</Link>
                       </button>
                        <Route exact path="/findFriends" render={(routeProps)=> <PeopleDirectory {...this.state} {...this.props} {...routeProps} />} /><br/>
                    </div>
             </BrowserRouter>
                <div>
                    <h3>Login</h3> 
                    <label><input placeholder="Email" type="email" ref="email" /></label><br/><br/>
                    <label><input placeholder="Password" type="password" ref="password" /></label><br/><br/>
                    <button className="linkButton" type="button" onClick={this.handleClick}>Sign in</button><br/><br/>
                    <div> 
                        or
                    </div><br/>

            
                    <BrowserRouter>
                        <div>
                        <button>
                        <Link className="linkButton" to="Registration">Click here to sign up</Link>
                        </button>
                        <Route exact path="/Registration" render={(routeProps)=> <Registration {...this.state} {...this.props} {...routeProps} />} /><br/>
                        
                        
                       
                        

                        
                        {/*<button type="button" onClick={this.handleClickSignup}>Click here to sign up</button><br/>*/}
                       

                        {/*<Link to="/Registration">Click here to sign up</Link>
                        <Route exact path="/Registration" render={(routeProps)=> <Registration {...this.state} {...this.props} {...routeProps} />} /><br/>*/}
                        </div>   
                    </BrowserRouter>


                </div> 
            </div> 
        );
    }
}