import React, {Component} from 'react';
import {Switch, Route} from 'react-router';

import PageMain from 'components/Pages/Main';
import Page404 from 'components/Pages/404';

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={PageMain} />
        <Route component={Page404} />
      </Switch>
    );
  }
}

export default Router;
