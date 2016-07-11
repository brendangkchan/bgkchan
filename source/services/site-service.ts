const promisify = require("promisify-node");
const fs = promisify("fs");

export default class SiteService {

  constructor() {

  }

  getComments() {
    var comments = require('../../comments');
    return Promise.resolve(comments);
  }
  
}