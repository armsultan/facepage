import React from 'react';
import { BrowserRouter, Route,Switch, Link } from 'react-router-dom';
import { render } from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';




import * as actionCreators from '../actions/actionCreator';
import Homepage from './Homepage';
import Update from "./Update";
// import BasicExample from './BasicExample';
// import Users from '.Users';
// import UserProfile from './UserProfile';

// Redux requires to give a correct mapping of what State should ultimately look like. State is how React and Redux work. What the method below is doing is assigning state to an object, which will represent what props will look like as it descends through the app.
let mapStateToProps = (state) => {
    return {
        feelings: state.feelings,
    }  
};

// Binds actions to the dispatch object. The dispatch object is the lifecycle of Redux that gets called whenever there is a state change. When it receives an event, it executes the method that we implemented in our actionCreator module.
let mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};

class App extends React.Component {
    constructor(){
        super();
    }
    render(){
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" render={(routeProps) => <Homepage {...this.props} {...routeProps}/>} />
                    {/*<Link to="/Update">Update</Link>*/}
                       <Route
                           exact
                           path="/Update"
                           render={(routeProps) => <Update {...this.props} {...routeProps}/>}/>
                             <footer className="footer">
                ©Alex on his way Upchurch LLC 2017
            </footer> 
                </div>
            </BrowserRouter>   
          
        );
    
    }
    
}
 

// connect() is used to inject props directly into a container component.
let ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;
