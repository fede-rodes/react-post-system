/*
COMPONENT-TYPE: dumb component
USAGE:
<App.components.Comment author="String">
   ...
<App.components.Comment/>
*/
App.components.Comment = React.createClass({

   propsType: {
      author: React.PropTypes.string.isRequired
   },

   render() {
      return (
         <div className="comment">
            <h2 className="commentAuthor">
               {this.props.author}
            </h2>
            {this.props.children}
         </div>
      );
   }
});
