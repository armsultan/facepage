

let todos = (state = false, action = {}) => {
     switch(action.type){
            case 'LOGIN':
            console.log('I am the loggedIn prop, trying to LOGIN.');
            return state;
            default:
            return state;
    }
};

export default todos; 