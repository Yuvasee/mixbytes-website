import React, {Component} from 'react';

import Navbar from 'components/Navbar';
import ContainerBlock from 'components/ContainerBlock';
import ContainerSeparator from 'components/ContainerSeparator';
import ContentBubble from 'components/ContentBubble';
import Footer from 'components/Footer';

import CryptoRates from './CryptoRates';
import Ethereum from './Ethereum';
import TimestampCheck from './TimestampCheck';

class PageHelpers extends Component {
  render() {
    const navLinks = [
      {link: 'rates', name: 'Курсы обмена'},
      {link: 'ethereum-api', name: 'Ethereum'},
    ];

    return (
      <div>
        <Navbar links={navLinks} />

        <ContainerBlock type="dark">
          <ContentBubble id="rates">
            <h2>Курсы криптовалют</h2>
            <CryptoRates />
          </ContentBubble>

          <ContentBubble id="ethereum-api">
            <h2>Ethereum</h2>
            <Ethereum />
          </ContentBubble>

          <ContentBubble id="ethereum-api">
            <h2>Проверка кода</h2>
            <TimestampCheck />
          </ContentBubble>
        </ContainerBlock>

        <Footer feedback={true} />
      </div>
    );
  }
}

export default PageHelpers;
