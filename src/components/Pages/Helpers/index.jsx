import React, {Component} from 'react';
import PropTypes from 'prop-types';

import PageLayout from 'components/PageLayout';
import PageNav from 'components/PageNav';
import ContentLayout from 'components/ContentLayout';
import ContentBlock from 'components/ContentBlock';

import CryptoRates from './CryptoRates';
import Ethereum from './Ethereum';
import TimestampCheck from './TimestampCheck';

import './styles.css';

class Helpers extends Component {
  render() {
    const text = this.context.text.common;

    return (
      <PageLayout>
        <ContentLayout>
          <ContentBlock>
            <h2>{text.coursesCalculator}</h2>
            <div className="white-block">
              <CryptoRates />
            </div>
          </ContentBlock>
          <ContentBlock>
            <h2>Ethereum</h2>
            <div className="white-block">
              <Ethereum />
            </div>
          </ContentBlock>
          <ContentBlock>
            <h2>{text.codeCheck}</h2>
            <div className="white-block">
              <TimestampCheck />
            </div>
          </ContentBlock>
        </ContentLayout>
      </PageLayout>
    );
  }
}

export default Helpers;

Helpers.contextTypes = {
  text: PropTypes.object,
};
