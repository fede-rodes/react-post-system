/*
COMPONENT-TYPE: container-controller; subscribes to data and pass it to child components.
USAGE: <App.pages.CommentBox/>
*/
App.pages.CommentBox = React.createClass({

   mixins: [ReactMeteorData],

   // Minimongo queries
   getMeteorData() {
      return {
         comments: App.collections.Comments.find({}).fetch()
      };
   },

   /*
   Callbacks as props:
   When a user submits a comment, we will need to refresh the list of comments to
   include the new one. It makes sense to do all of this logic in CommentBox since
   CommentBox owns the state that represents the list of comments.
   We need to pass data from the child component back up to its parent. We do this
   in our parent's render method by passing a new callback (handleCommentSubmit)
   into the child, binding it to the child's onCommentSubmit event. Whenever the
   event is triggered, the callback will be invoked:
   */
   handleCommentSubmit(newComment) {
      Meteor.call("App.methods.InsertComment", newComment);
   },

   render() {
      return (
         <App.layouts.Default>
            <h1>Comments</h1>
            <App.components.CommentList comments={this.data.comments}/>
            <App.components.CommentForm onCommentSubmit={this.handleCommentSubmit}/>
         </App.layouts.Default>
      );
   }
});
