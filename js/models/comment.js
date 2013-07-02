App.Comment = DS.Model.extend({
  post: DS.belongsTo('App.Post'),
  author: DS.attr('string'),
  body: DS.attr('string')
});

App.Comment.FIXTURES = [{
  id: 1,
  author: 'Rida',
  body: 'I like this post'
}];