import React from 'react';
import TapPlugin from 'react-tap-event-plugin';
import MainView from './components/main-view';
import About from './components/about'

(function() {

  window.React = React;
  TapPlugin();
  var Router = require('react-router');
  var Route = Router.Route;
  var RouteHandler = Router.RouteHandler;

  // declare our routes and their hierarchy
  var routes = (
    <Route handler={MainView}>
      
    </Route>
  );

  Router.run(routes, Router.HashLocation, (Root) => {
    React.render(<Root/>, document.body);
  });

  //React.render( < MainView / > , document.body);
})();
