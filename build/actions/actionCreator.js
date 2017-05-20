/**
 * actionCreator is the file that gives Redux a blueprint of what each event looks like.
 */

// select a user
export let login = () => {
    console.log('dispatch LOGIN');
    return {
        type: 'LOGIN',
        userId
    };
}

export let logout = () => {
    console.log('dispatch LOGOUT');
    return {
        type: 'LOGOUT',
        userId
    };
}
