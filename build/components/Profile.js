import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import axios from 'axios';

export default class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            profile: []
        };
    }

    componentDidMount() {

        axios
            .get('http://localhost:3000/api/person/' + this.props.userId)
            .then((response) => {
                console.log(response.data);
                //let people = response.data;
                this.setState({profile: response.data});
            })
            .catch((error) => {
                console.log(error);
            });

    }

    render() {
        let test = this.state.profile;
        console.log(test);
        return (
            <div>            
                <h1>My Profile</h1>
                    <div className="myProfile">
                        <div className="personInfo">
                            <h3>
                                <a href="#">{this.state.profile.firstName} {this.state.profile.lastName}</a>
                            </h3>
                            <p>
                                <em className="job">{this.state.profile.job}</em>
                            </p>
                            <p>
                                <em className="school">{this.state.profile.school}</em>
                            </p>
                        </div>
                    </div>
            </div>
        );
    }
}