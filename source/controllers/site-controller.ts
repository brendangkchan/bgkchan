///<reference path='../bases/Router-Options.ts'/>
///<reference path='../../typings/globals/node/index'/>
import BaseController from '../bases/base-controller';
import SiteService from '../services/site-service';

const siteService = new SiteService();

export default class SiteController extends BaseController {
  routerPath: string;

  constructor() {
    super({
      urlParams: []
    });

    this.routerPath = '/';
  }

  register() {
    return this.router;
  }
}