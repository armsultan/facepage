/**
 * Status Services
 * Services are used to abstract out the logic needed to enact on data, before sending it off to the database.
 */
'use strict';
// Load Chance
let Chance = require('chance');
// Instantiate Chance so it can be used
let chance = new Chance();

import {Status} from '../models/Status.model';

export let getAllStatus = (list, next) => {
  Status.find(list, next);
};

export let createStatus = (status, next) => {
  Status.create(status, next);
};

export let deleteStatus = (status, next) => {
  Status.findOneAndRemove(status, next);
};

export let getStatus = (status, next) => {
  Status.findById(status, next);
};

export let putStatus = (id, status, next) => {
  Status.findByIdAndUpdate(id, status, next);
};

// A function to generate x number of status items
export let genStatus = (number) => {
  for (let i = 0; i <= number; i++) {
    let item = chance.sentence();
    let timeNow = Date();
    Status.create({
      content: item,
      time: timeNow
    }, function (err, entry) {
      if (err) {
        console.log("Error creating entry");
      } else {
        console.log("name: \"" + item + "\", email: \"" + timeNow + "\n");
      }
    });
  }
};

export let genStatusForPerson = (number) => {

  // let statusArray = [];
  let promiseArray = [];
  // Do an async task async task and then...
  for (let i = 0; i <= number; i++) {
    let item = chance.sentence();
    let timeNow = Date();

    promiseArray.push(new Promise((resolve, reject) => {
      Status.create({
        content: item,
        time: timeNow
      }, (err, entry) => {
        if (err) {
          reject('error');
        } else {
          resolve(entry);
        }
      });
    }));


  }
return Promise.all(promiseArray);

};
