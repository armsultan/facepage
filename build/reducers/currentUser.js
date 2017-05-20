// a reducer takes in two things:
// 1. the action
// 2. copy of current state
// and then returns the new state
// it is a pure function

let users = (state = {}, action) => {
    switch(action.type){
            case 'LOGIN':
            console.log('I am the currentUser, trying to LOGIN.');
            return state;
            default:
            return state;
    }
}

export default users;