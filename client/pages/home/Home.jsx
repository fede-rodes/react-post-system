/*
USAGE: <App.pages.Home/>

COMPONENT-TYPE: container-controller; subscribes to data and pass it to child components.
*/
App.pages.Home = React.createClass({

   render() {
      return (
         <App.layouts.Default>
            Home
         </App.layouts.Default>
      );
   }
});
