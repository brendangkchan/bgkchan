///<reference path='../bases/Router-Options.ts'/>
///<reference path='../../typings/modules/es6-promise/index'/>
///<reference path='../../typings/globals/node/index'/>
import BaseController from '../bases/base-controller';
// import SiteService from '../services/site-service';

// const siteService = new SiteService();

export default class SiteController extends BaseController {
  routerPath: string;
  

  constructor() {
    super({
      urlParams: []
    });

    this.routerPath = '/';
    // this.doThings = siteService.doThings.bind(siteService)
  }

  register() {
    this.createPath({
      type: "get",
      path: '/api/comments',
      middleware: [],
      urlParams: [],
      queryParams: [],
      bodyParams: [],
      callback: function() {
        var comments = require('../../comments');
        return Promise.resolve(comments);
      }
    });

    // this.createPath({
    //   type: "put",
    //   path: '/doThings',
    //   middleware: [managePermissions],
    //   urlParams: ['site'],
    //   queryParams: [],
    //   bodyParams: ['jobs'],
    //   callback: this.doThings
    // });

    return this.router;
  }
}