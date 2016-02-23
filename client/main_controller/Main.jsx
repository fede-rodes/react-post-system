/*
DESCRIPTION: top-most component acting as a general controller for the whole app.
It takes care of global subscriptions and displays loading indicator when
subscriptions aren't ready.

USAGE: <App.controllers.Main content={component}/>
*/
App.controllers.Main = React.createClass({

   // This mixin makes the getMeteorData method work
   mixins: [ReactMeteorData],

   // Global subscriptions
   getMeteorData() { // reactive environment

      var subsReady = false;

      // Global subsriptions
      var handles = [
         //Meteor.subscribe('App.publications.<key>', argument), ...
      ];

      // All subsriptions must be ready
      if (_.every(handles, handle => {return handle.ready();})) {
         subsReady = true;
      }

      // Populate this.data.<property>
      return {
         subsReady: subsReady
      };
   },

   render() {
      return this.data.subsReady ? this.props.content : <App.pages.Loading/>;
   }
});
