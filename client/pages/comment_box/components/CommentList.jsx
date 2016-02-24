/*
COMPONENT-TYPE: dumb component
USAGE: <App.components.CommentList comments={array}/>
*/
App.components.CommentList = React.createClass({

   propsType: {
      comments: React.PropTypes.array.isRequired
   },

   renderComments() {
      let list = this.props.comments.map((comment) => {
         return (
            <App.components.Comment key={comment._id} author={comment.author}>
               {comment.text}
            </App.components.Comment>
         );
      });
      return list;
   },

   render() {
      return (
         <div className="commentList">
            {this.renderComments()}
         </div>
      );
   }
});
