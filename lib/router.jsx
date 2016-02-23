/*
NOTICE: ReactLayout inserts the render target inside the html body tag, so no
need to add this tag by hand. Only head tag is required.
*/
/* HOME */
FlowRouter.route('/', {
   name: 'home',
   action() {
      ReactLayout.render(App.controllers.Main, {content: <App.pages.Home/>});
   }
});
/* NOT FOUND */
FlowRouter.notFound = {
   action() {
      ReactLayout.render(App.controllers.Main, {content: <App.pages.NotFound/>});
   }
};
