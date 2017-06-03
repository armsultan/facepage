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

axios.post('http://localhost:3000/api/person',{
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
                <div>
                    <div>
                    <h4>Please enter your information</h4>
                    </div>
                    <label><input placeholder="Email" type="email" ref="email" /></label><br />
                    <label><input placeholder="Password" type="password" ref="password" /></label><br />
                    <label><input placeholder="Confirm Password" type="password" ref="passwordConfirm" /></label><br />
                    <label><input placeholder="First Name" type="text" ref="firstname" /></label><br />
                    <label><input placeholder="Last Name" type="text" ref="lastname" /></label><br />
                    <label><input placeholder="Age" type="number" ref="age" /></label><br />
                    <label><input placeholder="School" type="text" ref="school" /></label><br />
                    <label><input placeholder="Occupation" type="text" ref="job" /></label><br />
                    <label>
                        <input class="radio" type="radio" name="genders" value="male" ref="male"/>Male
                        <input class="radio" type="radio" name="genders" value="female" ref="female"/>Female
                        <input class="radio" type="radio" name="genders" value="other" ref="other"/>Other
                    </label><br />
                    <button type="button" onClick={this.handleClick}>Register</button><br/><br/>
                    
                    <div>
                        <Link to="/">Return to Homepage</Link>
                    </div>
                </div>
            </div>
        );
    }
        }
