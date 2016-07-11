"use strict";
const promisify = require("promisify-node");
const fs = promisify("fs");
class SiteService {
    constructor() {
    }
    getComments() {
        var comments = require('../../comments');
        return Promise.resolve(comments);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SiteService;
