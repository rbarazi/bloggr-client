App.Router.map(function(){
  this.resource('about');
  this.resource('posts', { path: '/' }, function(){
    this.resource('post', { path: ":post_id" }, function(){
      this.resource('comments', { path: "/comments" }, function(){
        this.route("new", { path: "/new" });
      });
    });
  });
})

App.PostsRoute = Ember.Route.extend({
  model: function() {
    return App.Post.find();
  }
});
//
// App.CommentsRoute = Ember.Route.extend({
//   model: function() {
//     return App.Comment.find();
//   }
// });