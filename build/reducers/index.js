import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

// EXAMPLE CODE... you can combine multiple reducers to help reduce the changes of State in your app.
import currentUser from './currentUser';
import loggedIn from './loggedIn';
const rootReducer = combineReducers({loggedIn: loggedIn, currentUser: currentUser, routing: routerReducer});

export default rootReducer;