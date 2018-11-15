import React, {Component} from 'react';
import PropTypes from 'prop-types';

import PageLayout from 'components/PageLayout';
import PageNav from 'components/PageNav';
import ContentLayout from 'components/ContentLayout';
import HeaderJumbo from 'components/HeaderJumbo';
import Services from 'components/Services';
import Cases from 'components/Cases';
import MeetUs from 'components/MeetUs';
import { OpenSource } from '../../OpenSource';

import './styles.css';

class Main extends Component {
  render() {
    const text = this.context.text.main;
    const meetUsText = this.context.text.meetUs;

    const pageNav = [
      {link: 'services', name: text.navigation.services},
      {link: 'cases', name: text.cases},
      {link: 'meet-us', name: meetUsText.anchor},
    ];

    return (
      <PageLayout>
        <HeaderJumbo />
        <ContentLayout contentRight={<PageNav links={pageNav} />}>
          <Services/>
          <Cases/>
          <MeetUs />
          <OpenSource />
        </ContentLayout>
      </PageLayout>
    );
  }
}

export default Main;

Main.contextTypes = {
  text: PropTypes.object,
};
