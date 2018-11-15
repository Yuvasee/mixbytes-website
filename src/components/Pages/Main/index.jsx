import React, {Component} from 'react';
import PropTypes from 'prop-types';

import PageLayout from 'components/PageLayout';
import PageNav from 'components/PageNav';
import ContentLayout from 'components/ContentLayout';
import HeaderJumbo from 'components/HeaderJumbo';
import Services from 'components/Services';
import Cases from 'components/Cases';
import WorkingProcess from 'components/WorkingProcess';
import Founders from 'components/Founders';

import './styles.css';

class Main extends Component {
  render() {
    const text = this.context.text.main;

    const pageNav = [
      {link: 'services', name: text.navigation.services},
      {link: 'cases', name: text.cases},
      {link: 'wprocess', name: text.wprocess},
      {link: 'founders', name: text.founders},
    ];

    return (
      <PageLayout>
        <HeaderJumbo />
        <ContentLayout contentRight={<PageNav links={pageNav} />}>
          <Services/>
          <Cases/>
          <WorkingProcess/>
          <Founders/>
        </ContentLayout>
      </PageLayout>
    );
  }
}

export default Main;

Main.contextTypes = {
  text: PropTypes.object,
};
