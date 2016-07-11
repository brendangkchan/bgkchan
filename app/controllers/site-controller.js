"use strict";
///<reference path='../bases/Router-Options.ts'/>
///<reference path='../../typings/globals/node/index'/>
const base_controller_1 = require('../bases/base-controller');
const site_service_1 = require('../services/site-service');
const siteService = new site_service_1.default();
class SiteController extends base_controller_1.default {
    constructor() {
        super({
            urlParams: []
        });
        this.routerPath = '/';
    }
    register() {
        this.createPath({
            type: "get",
            path: '/api/comments',
            middleware: [],
            urlParams: [],
            queryParams: [],
            bodyParams: [],
            callback: siteService.getComments
        });
        return this.router;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SiteController;
