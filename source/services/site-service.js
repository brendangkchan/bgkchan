import _ from 'lodash';
const promisify = require("promisify-node");
const fs = promisify("fs");

export default class YourService {

  constructor() {

  }

  getComments() {
    return fs.readFile(COMMENTS_FILE)
      .then((data) => {
        return JSON.parse(data);
      }, (error) => {
        console.error(error);
        return error;
      });
  }

  saveComments() {
    return this.getComments()
      .then((comments) => {
        if (req.body.author.trim() && req.body.text.trim()) {
          var newComment = {
            id: Date.now(),
            author: req.body.author,
            text: req.body.text,
          };
          comments.push(newComment);
        }
        
        return fs.writeFile(COMMENTS_FILE, JSON.stringify(comments, null, 4);
      })
      .then((data) => {
        return data;
      }, (error) => {
        console.error(error);
        return error;
      })
    });
  }

  
}