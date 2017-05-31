import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import axios from 'axios';

export default class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            profile: [],
            update: '',
            statusIds: [],
            statusContent: [],
            friendIds: [],
            friends: []
        };

        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleClick = this
            .handleClick
            .bind(this);
        this.updateStatuses = this
            .updateStatuses
            .bind(this);
        this.updateFriends = this
            .updateFriends
            .bind(this);

    }

    updateStatuses() {

        this
            .state
            .statusIds
            .map((id) => {

                axios
                    .get('http://localhost:3000/api/status/' + id)
                    .then(res => {
                        this.setState({
                            statusContent: this
                                .state
                                .statusContent
                                .concat([res.data])
                        });
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
    }

    updateFriends() {
        this
            .state
            .friendIds
            .map((id) => {
                console.log(id);

                axios
                    .get('http://localhost:3000/api/person/' + id)
                    .then(res => {

                        if(res.data !== ""){
                        this.setState({
                            friends: this.state.friends.concat([res.data])
                        });}
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
    }

    componentDidMount() {

        axios
            .get('http://localhost:3000/api/person/' + this.props.userId)
            .then((response) => {
                this.setState({profile: response.data});
                this.setState({statusIds: response.data.statuses});
                this.setState({friendIds: response.data.friends});

                this.updateStatuses();
                this.updateFriends();

            })
            .catch((error) => {
                console.log(error);
            });

    }

    handleChange(event) {
        this.setState({update: event.target.value});

    }

    handleClick(event) {
        event.preventDefault(); // We want to prevent the default action since in react we want to prevent a page reload from a form submit https://developer.mozilla.org/samples/domref/dispatchEvent.html
        axios
            .post('http://localhost:3000/api/status/', {content: this.state.update})
            .then(res => {
                console.log('UPDATED STATUS WITH ID: ', res.data._id);

                this.setState({
                    statusIds: this
                        .state
                        .statusIds
                        .concat([res.data._id])
                });
                console.log(this.state.statusIds);

                // Now update statuses object for the person
                axios
                    .put('http://localhost:3000/api/person/' + this.props.userId, {statuses: this.state.statusIds})
                    .then(res => {
                        console.log('UPDATED PERSON WITH: ', res.data._id);
                        this.updateStatuses(res.data.statuses);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {

        return (
            <div>
                <h1>My Profile</h1>
                <div className="myProfile">
                    <div className="myPersonInfo">
                        <h3>
                            <a href="#">{this.state.profile.firstName} {this.state.profile.lastName}</a>
                        </h3>
                        <img src={this.state.profile.profilePicture}/>

                        <p>
                            <em className="job">{this.state.profile.job}</em>
                        </p>
                        <p>
                            <em className="school">{this.state.profile.school}</em>
                        </p>
                    </div>
                    <div className="myStatus">

                        <form action="/">
                            Update Status:
                            <input
                                type="text"
                                name="status"
                                value={this.state.update}
                                onChange={this.handleChange}/>

                            <input type="submit" value="Submit" onClick={this.handleClick}/>
                        </form>

                        <h3>Timeline:</h3>
                        <ul>

                            {this
                                .state
                                .statusContent
                                .slice(0)
                                .reverse()
                                .map((status, key) => {
                                    return (
                                        <li className="status" key={key}>
                                            {status.content}
                                            <small>
                                                {status.time}</small>
                                        </li>
                                    )
                                })
}
                        </ul>

                    </div>

                    <div className="friends">

                        <h3>My Friends:</h3>
                        <ul>

                            {this
                                .state
                                .friends
                                .slice(0)
                                .reverse()
                                .map((friend, key) => {
                                    return (
                                        <li className="friend" key={key}>

                                         <h4><a href={'/profile/' + friend._id}>{friend.firstName} {friend.lastName}</a></h4>
                                            <small>
                                                {friend.job}</small>
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