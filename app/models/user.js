import DS from 'ember-data';

var User = DS.Model.extend({
  screenName: DS.attr("string"),
  bio:        DS.attr("text"),
  location:   DS.attr("string"),
  url:        DS.attr("string")
});

User.reopenClass({
  FIXTURES: [
    {
      id: 1,
      screenName: 'guest1',
      bio: 'Learn twister Ember.js',
      location: 'Shanghai'
    },
    {
      id: 2,
      screenName: 'guest2',
      bio: 'Learn twister Ember.js',
      location: 'Shanghai'
    },
    {
      id: 3,
      screenName: 'guest3',
      bio: 'Learn twister Ember.js',
      location: 'Shanghai'
    }
  ]
});

export default User;