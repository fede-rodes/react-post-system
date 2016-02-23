/*
USAGE:
<App.layouts.Default>
   Stuff
</App.layouts.Default>
*/
App.layouts.Default = React.createClass({

   render() {
      return (
         <div>
            <App.components.Header/>
            <main>{this.props.content}</main>
            <App.components.Footer/>
         </div>
      );
   }
});
