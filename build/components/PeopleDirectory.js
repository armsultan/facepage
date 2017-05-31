import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import axios from 'axios';

export default class PeopleDirectory extends React.Component {
    constructor() {
        super();
        this.state = {
            peopleList: [],
            friendIds: []
        };

        this.handleAddClick = this
            .handleAddClick
            .bind(this);

        this.handleRemoveClick = this
            .handleRemoveClick
            .bind(this);

    }

    componentDidMount() {

        axios
            .get('http://localhost:3000/api/person')
            .then((response) => {
                //console.log(response.data);
                this.setState({peopleList: response.data});
            })
            .catch((error) => {
                console.log(error);
            });

        axios
            .get('http://localhost:3000/api/person/' + this.props.userId)
            .then((response) => {
                this.setState({friendIds: response.data.friends});
                console.log('my friends are: ' + this.state.friendIds);

            })
            .catch((error) => {
                console.log(error);
            });

    }

    handleAddClick(event) {
        //console.log('ADDING FRIEND: ' + event.target.value);
        let friends = this.state.friendIds;
        console.log('IS ' + event.target.value + ' OR ' + this.props.userId + ' IN MY FRIEND LIST: ' + friends + " ? " + friends.includes(event.target.value));

        if (friends.includes(event.target.value) === false && event.target.value !== this.props.userId) {

            friends.push(event.target.value);
            console.log('NEW FREIND LIST TO BE UPDATED: ' + friends);

            event.preventDefault(); // We want to prevent the default action since in react we want to prevent a page reload from a form submit https://developer.mozilla.org/samples/domref/dispatchEvent.html
            axios
                .put('http://localhost:3000/api/person/' + this.props.userId, {friends: friends})
                .then(res => {
                    console.log('UPDATED FRIENDS LIST: ', friends);
                })
                .catch((error) => {
                    console.log(error);
                });

        } else {
            console.log('FAILED: TRIED TO ADD AN EXISTING FRIEND OR YOURSELF');

        }

    }

    handleRemoveClick(event) {
        //console.log('REMOVING FRIEND: ' + event.target.value);
        let friends = this.state.friendIds;
        console.log('IS ' + event.target.value + ' IN MY FRIEND LIST: ' + friends + " ? " + friends.includes(event.target.value));

        event.preventDefault(); // We want to prevent the default action since in react we want to prevent a page reload from a form submit https://developer.mozilla.org/samples/domref/dispatchEvent.html

        if (friends.includes(event.target.value) === true) {

            friends.splice(friends.indexOf(event.target.value), 1); //remove element

            axios
                .put('http://localhost:3000/api/person/' + this.props.userId, {friends: friends})
                .then(res => {

                    console.log('UPDATED FRIENDS LIST: ', friends);

                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            console.log('FAILED: TRIED TO REMOVE AN NONEXISTENT FRIEND');

        }

    }

    render() {
        return (
            <div>
                <h1>People Directory:</h1>
                <ul>
                    {this
                        .state
                        .peopleList
                        .map((person, key) => {
                            return (
                                <li className="person" key={key}>
                                    <div className="personInfo">
                                        <h3>
                                            <a href={'/profile/' + person._id}>{person.firstName} {person.lastName}</a>
                                        </h3>
                                        <img src={person.profilePicture}/>
                                        <p>
                                            <em className="job">{person.job}</em>
                                        </p>
                                        <p>
                                            <em className="school">{person.school}</em>
                                        </p>
                                    </div>
                                    <div className="personActions">
                                        <button type="button" value={person._id} onClick={this.handleAddClick}>Add as friend
                                        </button>
                                        <button type="button" value={person._id} onClick={this.handleRemoveClick}>Remove friend
                                        </button>

                                    </div>
                                </li>
                            )
                        })}
                </ul>
            </div>
        );
    }
}