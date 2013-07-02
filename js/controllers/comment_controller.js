App.CommentController = Ember.ObjectController.extend({
});

App.CommentsController = Ember.ObjectController.extend({
  new: function() {
    alert('new comment is called');
  }
});