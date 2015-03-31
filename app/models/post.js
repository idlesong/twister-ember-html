import DS from 'ember-data';

var Post = DS.Model.extend({
  content:     DS.attr("string"),
  create_time: DS.attr("string")
});

Post.reopenClass({
  FIXTURES: [
    {
      id: 1,
      content: 'my 1 post',
      create_time: '2014-01-01'
    },
    {
      id: 2,
      content: 'my 2 post',
      create_time: '2014-01-01'
    },
    {
      id: 3,
      content: 'my 3 post',
      create_time: '2014-01-01'
    }
  ]
});

export default Post;
