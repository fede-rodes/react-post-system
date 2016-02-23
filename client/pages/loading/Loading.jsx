/*
COMPONENT-TYPE: dumb component.
USAGE: <App.pages.Loading/>
*/
App.pages.Loading = React.createClass({

   render() {
      return (
         <App.layouts.Blank>
            <App.components.Spinner/>
         </App.layouts.Blank>
      );
   }
});
