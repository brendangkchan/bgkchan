"use strict";
///<reference path="router-options.ts"/>
///<reference path="endpoint-params.ts"/>
let express = require('express');
var _ = _ || require('lodash');
class BaseController {
    constructor(routerOptions) {
        this.router = express.Router({
            mergeParams: true
        });
        this.urlParams = routerOptions.urlParams;
        this.queryParams = routerOptions.queryParams;
        this.bodyParams = routerOptions.bodyParams;
        if (!routerOptions || !routerOptions.middleware) {
            return;
        }
        _.each(routerOptions.middleware, this.router.use.bind(this));
    }
    createPath(params) {
        const cache = params.cache || {};
        const returnCallback = (req, res) => {
            const origin = req.headers.origin, callback = params.callback, bodyParams = this.getArgs(params.bodyParams, params.bodyParams, req.body), queryParams = this.getArgs(params.queryParams, this.queryParams, req.query), urlParams = this.getArgs(params.urlParams, this.urlParams, req.params);
            let finalParams = _.assign({}, queryParams, urlParams, bodyParams, req.permissions);
            params.callback(finalParams)
                .then((result) => {
                res.send(result);
            }, (error) => {
                res.status(500).send(error);
            });
        };
        if (params.middleware) {
            return this.router[params.type](params.path, ...params.middleware, returnCallback);
        }
        return this.router[params.type](params.path, returnCallback);
    }
    getArgs(params, routerParams, reqData) {
        if ((!params && !routerParams) || !reqData) {
            return {};
        }
        params = _.union(params, routerParams);
        return _.zipObject(params, _.map(params, (param) => {
            if (!reqData[param]) {
                return;
            }
            return reqData[param];
        }));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BaseController;
