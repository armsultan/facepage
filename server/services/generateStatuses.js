'use strict';
// Load Chance
let Chance = require('chance');
// Instantiate Chance so it can be used 
let chance = new Chance();

// require DB settings and our Status schema
import {Status} from '../models/Status.model';

// A function to generate x number of status items
export let genStatus = (number) => {
  for (let i = 0; i <= number; i++) {
    let item = chance.sentence();
    let timeNow = Date();
    Status.create({
    content: item,
    time:  timeNow
}, function (err, entry) {
      if (err) {
        console.log("Error creating entry");
      } else {
        console.log("name: \"" + item + "\", email: \"" + timeNow + "\n");
      }
    });
  }
};