import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    //var users = this.store.find('user');
    //return users.findBy('id', params.user_id);
    return this.store.find('user', params.user_id);
  }
});
