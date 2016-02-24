/*
COMPONENT-TYPE: dumb component
USAGE: <App.components.CommentForm onCommentSubmit={callback}/>
*/
App.components.CommentForm = React.createClass({

   getInitialState() {
      return {author: "", text: ""};
   },

   handleAuthorChange(e) {
      this.setState({author: e.target.value});
   },

   handleTextChange(e) {
      this.setState({text: e.target.value});
   },

   handleSubmit(e) {
      e.preventDefault();
      const comment = {
         author: this.state.author.trim(),
         text: this.state.text.trim()
      };
      if (!comment.text || !comment.author) {
         return;
      }
      this.props.onCommentSubmit(comment);
      this.setState({author: "", text: ""});
   },

   render() {
      return (
         <form className="commentForm" onSubmit={this.handleSubmit}>
            <input
               type="text"
               placeholder="Your name"
               value={this.state.author}
               onChange={this.handleAuthorChange}
            />
            <input
               type="text"
               placeholder="Say something..."
               value={this.state.text}
               onChange={this.handleTextChange}
            />
            <button type="submit" className="btn btn-danger">Post</button>
         </form>
      );
   }
});
