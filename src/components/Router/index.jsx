import React, {Component} from 'react';
import {Switch, Route} from 'react-router';

import PageMain from 'components/PageMain';
import PageCourse from 'components/PageCourse';
import PageHelpers from 'components/PageHelpers';
import Page404 from 'components/Page404';

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={PageMain} />
        <Route exact path="/course" component={PageCourse} />
        <Route exact path="/helpers" component={PageHelpers} />
        <Route component={Page404} />
      </Switch>
    );
  }
}

export default Router;
