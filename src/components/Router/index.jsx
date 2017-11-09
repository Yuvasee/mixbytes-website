import React, {Component} from 'react';
import {Switch, Route} from 'react-router';

import Main from 'components/Pages/Main';
import Team from 'components/Pages/Team';
import Page404 from 'components/Pages/404';

class Router extends Component {
  render() {
    return (
      <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/team" component={Team} />
        <Route component={Page404} />
      </Switch>
    );
  }
}

export default Router;
