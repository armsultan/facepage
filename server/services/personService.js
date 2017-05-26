/**
 * Status Services
 * Services are used to abstract out the logic needed to enact on data, before sending it off to the database.
 */
'use strict';
// Load Chance
let Chance = require('chance');
// Instantiate Chance so it can be used
let chance = new Chance();
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

// export let putPerson = (id, p, next) => {

//   let firstName = p.firstName || Person.firstName;
//   let lastName = p.lastName || Person.lastName;
//   let age = p.age || Person.age;
//   let gender = p.gender || Person.gender;
//   let school = p.school || Person.school;
//   let job = p.job || Person.job;
//   let email = p.email || Person.email;
//   let password = p.password || Person.password;
//   let statuses = p.statuses || Person.statuses;

//   Person.findByIdAndUpdate(id, {
//     $set: {
//       firstName: firstName,
//       lastName: lastName,
//       age: age,
//       gender: gender,
//       school: school,
//       job: job,
//       email: email,
//       password: password,
//       statuses: statuses
//     }
//   }, next);

// };


export let putPerson = (id, p, next) => {
  Person.findByIdAndUpdate(id, p, next);
};

// A function to generate x number of people
export let genPerson = (number) => {
  for (let i = 0; i <= number; i++) {

    let firstName = chance.first();
    let lastName = chance.last();
    let age = chance.age();
    let gender = chance.gender();
    let school = chance.province({full: true});
    let job = chance.sentence();
    let email = chance.email();
    let password = chance.word({length: 8});

    let status = genStatusForPerson(20);
//console.log(status);
    Person.create({
      firstName: firstName,
      lastName: lastName,
      age: age,
      gender: gender,
      school: school,
      job: job,
      email: email,
      password: password
    }, function (err, entry) {
      if (err) {
        console.log(err);
      } else {
        console.log(status);
      }
    });
  }
};
