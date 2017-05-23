import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import axios from 'axios';

export default class PeopleDirectory extends React.Component {
    constructor() {
        super();
        this.state = {
            peopleList: []
        };
    }

    componentDidMount() {

        axios.get('http://localhost:3000/api/person')
            .then((response) => {
                console.log(response.data);
                //let people = response.data;
                this.setState({peopleList: response.data});
            })
            .catch((error) => {
                console.log(error);
            });

    }

    render() {
        let test = this.state.peopleList;
        console.log(test);
        return (
            <div>
                <h1>People Directory:</h1>
                {this.state.peopleList.map((person, key) =>{
                    return (<div key={key}>{person.firstName}</div>)
                })}
            </div>
        );
    }
}