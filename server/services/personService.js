/**
 * Status Services
 * Services are used to abstract out the logic needed to enact on data, before sending it off to the database.
 */
'use strict';
// Load Chance
let Chance = require('chance');
// Instantiate Chance so it can be used
let chance = new Chance();

//Load axios
import axios from 'axios';

import {Person} from '../models/Person.model';
import {Status} from '../models/Status.model';
import {
    deleteStatus,
    getStatus,
    putStatus,
    genStatus,
    getAllStatus,
    createStatus,
    genStatusForPerson
} from '../services/statusService';

export let getAllPerson = (list, next) => {
  Person.find(list, next);
};

export let createPerson = (p, next) => {
  Person.create(p, next);
};

export let deletePerson = (p, next) => {
  Person.findOneAndRemove(p, next);
};

export let getPerson = (p, next) => {
  Person.findById(p, next);
};

export let putPerson = (id, p, next) => {
  Person.findByIdAndUpdate(id, p, next);
};

function getProfilePic(){

new Promise((resolve, reject) => {
      
 axios.get('https://randomuser.me/api/')
  .then(function (res) {
    resolve(res.data.results.picture.large);
  })
  .catch(function (err) {
    reject("");
  });

});

return Promise;

};


// A function to generate x number of people
export let genPerson = (number) => {
  
  for (let i = 0; i <= number; i++) {

    let firstName = chance.first();
    let lastName = chance.last();
    let age = chance.age();
    let gender = chance.gender();
    let school = chance.province({full: true});
    let job = chance.sentence({words: 2})
    let email = chance.email();
    let password = chance.word({length: 8});
    let profilePicture = chance.avatar({fileExtension: 'jpg'});


    let statusPromise = genStatusForPerson(Math.floor((Math.random() * 20) + 1));
    
    

    statusPromise.then((statuses) => {
      Person.create({
        firstName: firstName,
        lastName: lastName,
        age: age,
        gender: gender,
        school: school,
        job: job,
        email: email,
        password: password,
        profilePicture: profilePicture,
        statuses: statuses
      }, function (err, person) {
        if (err) {
          console.log(err);
        } else {
          // console.log(person.statuses);
          console.log('all done');
        }
      });
    });
  }
};




