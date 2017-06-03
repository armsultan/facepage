import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import Registration from './Registration';
import PeopleDirectory from './PeopleDirectory';
import Profile from './Profile';
import axios from 'axios';

export default class Homepage extends React.Component {
    constructor() {
        super();
        this.state = {
            userId: "592f2ae0329c0bef347d8858"
        };

        this.handleClick = this
            .handleClick
            .bind(this);
    }

    handleClick() {
        console.log('Looking up email: ' + this.refs.email.value + 'and password: ' + this.refs.password.value);
        event.preventDefault(); // We want to prevent the default action since in react we want to prevent a page reload from a form submit https://developer.mozilla.org/samples/domref/dispatchEvent.html

        axios
            .get('/api/person/email/' + this.refs.email.value)
            .then((response) => {
                console.log(response.data[0]);
                console.log('user id is:' + response.data[0]._id);
                if (response.data[0]._id !== "") {

                    if (response.data[0].password === this.refs.password.value) {

                        this.setState({userId: response.data[0]._id});
                        console.log('Updated User ID: ' + this.state.userId);

                    }
                    else{
                        console.log('PASSWORD ERROR');
                    }
                }

            })
            .catch((error) => {
                console.log(error);
            });

    }

    render() {
        return (
            <div>
                <h1>Welcome to the Almand Network!</h1>
                <h2>userUd: {this.state.userId}</h2>
                <div>
                    {/*        <h3>Login</h3>
                    <label>Email: <input type="email" ref="email" /></label>
                    <label>Password: <input type="password" ref="password" /></label>
                    <button type="button" >Sign in</button> */}

                    <form action="/">
                        <h3>Login</h3>

                        <label>Email:
                            <input type="email" ref="email" name="email"/></label>
                        <label>Password:
                            <input type="password" ref="password" name="password"/></label>
                        <button type="button" onClick={this.handleClick}>Sign in</button>
                    </form>

                    <div>- or -</div>
                    <h3>Sign Up</h3>
                    <BrowserRouter>
                        <div>
                            <Link to="/signup">Sign-Up</Link>
                            <Route
                                exact
                                path="/signup"
                                render={(routeProps) => <Registration {...this.state} {...this.props} {...routeProps}/>}/>

                            <Link to="/Profile">My Profile</Link>
                            <Route
                                exact
                                path="/Profile"
                                render={(routeProps) => <Profile {...this.state} {...this.props} {...routeProps}/>}/>

                            <Link to="/findFriends">Find Friends</Link>
                            <Route
                                exact
                                path="/findFriends"
                                render={(routeProps) => <PeopleDirectory {...this.state} {...this.props} {...routeProps}/>}/>

                            <Link to="/Registration">Sign-Up</Link>
                            <Route
                                exact
                                path="/Registration"
                                render={(routeProps) => <Registration {...this.state} {...this.props} {...routeProps}/>}/>
                        </div>
                    </BrowserRouter>

                </div>
            </div>
        );
    }
}