/*
USAGE: <App.pages.NotFound/>

COMPONENT-TYPE: container-controller; subscribes to data and pass it to child components.
*/
App.pages.NotFound = React.createClass({

   render() {
      return (
         <App.layouts.Default>
            Not Found :(
         </App.layouts.Default>
      );
   }
});
