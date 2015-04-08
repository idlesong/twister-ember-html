import DS from 'ember-data';

var Following = DS.Model.extend({
  status: DS.attr('string'),
  follower: DS.belongsTo('user', {async: true}),
  followed: DS.belongsTo('user', {async: true})
});


Following.reopenClass({
  FIXTURES: [
    {
      id: 1,
      status: 'OK',
      follower: 1,
      followed: 2
    },
    {
      id: 2,
      status: 'OK',
      follower: 1,
      followed: 3
    },
    {
      id: 3,
      status: 'OK',
      follower: 2,
      followed: 3
    }
  ]
});

export default Following;
