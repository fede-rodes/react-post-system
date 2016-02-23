/*
USAGE:
<App.layouts.Blank>
   Stuff
</App.layouts.Blank>
*/
App.layouts.Blank = React.createClass({

   render() {
      return (
         <div>
            <main>{this.props.content}</main>            
         </div>
      );
   }
});
