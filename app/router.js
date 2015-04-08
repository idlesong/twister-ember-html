import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // this.resource('users', function() {
  //   this.route('edit', { path: '/:user_id' });
  // });
  this.resource('users');
  this.resource('user', { path: '/user/:user_id' });

  this.resource('posts');
  this.resource('post', { path: '/post/:post_id' });
  this.resource('followings');
});

export default Router;
