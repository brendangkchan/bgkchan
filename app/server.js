/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
require('babel-register')({
    presets: ['react', 'es2015', 'stage-2']
});
app.set('port', (process.env.PORT || 3000));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});
// import SiteController from './controllers/site-controller';
// const siteController = new SiteController();
// try {
//   app.use(siteController.routerPath, siteController.register());
// } catch(ex) {
//   console.error(ex);
// }
var routes = ['/', '/shop', '/work', '/about', '/work/pablo', '/work/munny', '/work/chance', '/work/falling'];
app.get(routes, function (req, res) {
    const ReactRouter = require('react-router');
    const match = ReactRouter.match;
    const RouterContext = React.createFactory(ReactRouter.RouterContext);
    const Provider = React.createFactory(require('react-redux').Provider);
    const routes = require('./public/routes.js').routes;
    var store = require('./public/redux-store');
    const initialState = {
        image: null,
        preloadedThumbnails: false
    };
    store = store.configureStore(initialState);
    match({ routes: routes, location: req.url }, function (error, redirectLocation, renderProps) {
        if (error) {
            res.status(500).send(error.message);
        }
        else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        }
        else if (renderProps) {
            res.send("<!DOCTYPE html>" +
                ReactDOMServer.renderToString(Provider({ store: store }, RouterContext(renderProps))));
        }
        else {
            res.status(404).send('Not found');
        }
    });
});
app.listen(app.get('port'), function () {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});
