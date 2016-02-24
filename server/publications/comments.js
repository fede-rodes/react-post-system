Meteor.publish("App.publications.Comments", function() {
   return App.collections.Comments.find({});
});
