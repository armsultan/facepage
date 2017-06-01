"use strict";
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// create a schema
//gender, first name, last name, age, school, job, email, password, statuses
let PersonSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: String, required: true },
  gender: {type: String, enum: ["Male", "Female", "Other"]},
  school: String,
  job: String,
  email: { type: String, required: true, index: { unique: true }},
  password: { type: String, required: true },
  statuses: [{ type: Schema.Types.ObjectId, ref: 'Status' }],
  friends: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
  profilePicture: String


});

// the schema is useless so far
// we need to create a model using it
export let Person = mongoose.model('Person', PersonSchema);
