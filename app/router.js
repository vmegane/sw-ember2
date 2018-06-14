import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('people',  {path: 'people/:page_id'});
  this.route('details', {path: 'details/:person_id'});
});


export default Router;
