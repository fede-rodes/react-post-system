Meteor.methods({"App.methods.InsertComment": function(comment) {

   // Check arguments
   check(comment, {
      author: String,
      text: String
   });

   if (!comment.author || !comment.text) {
      throw new Meteor.Error('invalid-comment');
      return;
   }

   App.collections.Comments.insert(comment);

}});
