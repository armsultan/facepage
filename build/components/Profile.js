import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import axios from 'axios';

export default class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            profile: [],
            statuses: []
        };
    }

    componentDidMount() {

        axios
            .get('http://localhost:3000/api/person/' + this.props.userId)
            .then((response) => {
                //console.log(response.data); let people = response.data;
                this.setState({profile: response.data});
                this.setState({statuses: response.data.statuses});
               // this.state.profile.statuses.map
               console.log(this.state.statuses);
            })
            .catch((error) => {
                console.log(error);
            });

    }

    render() {
        //let test = this.state.profile; console.log(test);
        let test = this.state.profile.statuses;
        return (
            <div>
                <h1>My Profile</h1>
                <div className="myProfile">
                    <div className="myPersonInfo">
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
                    <div className="myStatus">


<form action="/">
Update Status: <input type="text" name="status"/>

<input type="submit" value="Submit" />
</form>




                        <ul>

                            {
                                this.state.statuses.map((status, key) => {
                                    return (
                                        <li className="status" key={key}>
                                            {status}
                                        </li>
                                    )
                                })
                        }
                        </ul>

                    </div>
                </div>
            </div>
        );
    }
}