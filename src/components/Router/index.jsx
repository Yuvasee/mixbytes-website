import React, {Component} from 'react';
import {Switch, Route} from 'react-router';
import PropTypes from 'prop-types';

import Main from 'components/Pages/Main';
import Publications from 'components/Pages/Publications';
import Helpers from 'components/Pages/Helpers';
import Job from 'components/Pages/Job';
import Page404 from 'components/Pages/404';

import { getLanguage } from '../../helpers/language';
import text from '../../content';

class Router extends Component {
  getChildContext() {
    const language = getLanguage();

    return { text: text[language], language };
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/publications" component={Publications} />
        <Route exact path="/helpers" component={Helpers} />
        <Route exact path="/job" component={Job} />
        <Route component={Page404} />
      </Switch>
    );
  }
}

Router.childContextTypes = {
  text: PropTypes.object,
  language: PropTypes.string
};

export default Router;
