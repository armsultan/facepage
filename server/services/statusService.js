/**
 * Status Services
 * Services are used to abstract out the logic needed to enact on data, before sending it off to the database. 
 */
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