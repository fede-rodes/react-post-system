/*
USAGE:
<App.layouts.Default>
   Stuff
</App.layouts.Default>
*/
App.layouts.Default = React.createClass({

   render() {
      return (
         <div className="container app-width">
            <div className="row app-bg-color">
               <div className="col-xs-12">
                  <App.components.Header/>
                  <main>{this.props.children}</main>
                  <App.components.Footer/>
               </div>
            </div>
         </div>
      );
   }
});
