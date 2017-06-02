import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';

export default class Registration extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    determineGender(){
        let male = this.refs.male.checked;
        let female = this.refs.female.checked;
        let other = this.refs.other.checked;
        if (male)
        return "Male"
        if (female)
        return "Female"
        if (other)
        return "Other"
    }

    validPasswords(){
        let passbox = this.refs.password.value;
        let confirmbox = this.refs.passwordConfirm.value;
        return passbox === confirmbox;
    }
        

    handleClick(event) {
        if(this.validPasswords()){
            console.log("password OK");
        let firstname = this.refs.firstname.value;
        let lastname = this.refs.lastname.value;
        let age = this.refs.age.value;
        let gender = this.determineGender();
        let school = this.refs.school.value;
        let job = this.refs.job.value;
        let email = this.refs.email.value;
        let password = this.refs.password.value;

console.log(firstname + " " + lastname+ " " + lastname + " " + age + " " + gender + " " + school+ " " + job + " " + email + " " + password);

axios.post(`${process.env.HOST}:${process.env.PORT}/api/person`,{
    firstName: firstname,
  lastName: lastname,
  age: age,
  gender: gender,
  school: school,
  job: job,
  email: email,
  password: password
})
.then(res => {
console.log('WE HAVE REGISTERED A USER with ID ', res.data._id);
})
.catch(error => {
console.log(error)  
})
        }
    }
    render(){
    // {
    //     let errorMessages = [];
    //     if (this.state.errors.mismatchPasswords){
    //         React.createElement('div', null, 'Error, passwords do not match.');
    //         errorMessages.push(<div className="error message"></div>)
    //     }
        return (
            <div>
                <h1>Registration</h1>
                <div>
                    <label>Email: <input type="email" ref="email" /></label><br />
                    <label>Password: <input type="password" ref="password" /></label><br />
                    <label>Confirm Password: <input type="password" ref="passwordConfirm" /></label><br />
                    <label>First Name: <input type="text" ref="firstname" /></label><br />
                    <label>Last Name: <input type="text" ref="lastname" /></label><br />
                    <label>Age: <input type="number" ref="age" /></label><br />
                    <label >Gender: 
                        <input type="radio" name="genders" value="male" ref="male"/>Male
                        <input type="radio" name="genders" value="female" ref="female"/>Female
                        <input type="radio" name="genders" value="other" ref="other"/>Other
                    </label><br />
                    <label>School: <input type="text" ref="school" /></label><br />
                    <label>Job: <input type="text" ref="job" /></label><br />
                    <button type="button" onClick={this.handleClick}>Register</button>
                    <div>- or -</div>
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                </div>
            </div>
        );
    }
        }
