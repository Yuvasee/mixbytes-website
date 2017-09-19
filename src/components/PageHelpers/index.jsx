import React, {Component} from 'react';

import Navbar from 'components/Navbar';
import ContainerBlock from 'components/ContainerBlock';
import ContainerSeparator from 'components/ContainerSeparator';
import ContentBubble from 'components/ContentBubble';
import CryptoRates from 'components/CryptoRates';

class PageHelpers extends Component {
  render() {
    const navLinks = [
      {link: 'rates', name: 'Курсы обмена'},
    ];

    return (
      <div>
        <Navbar links={navLinks} />

        <ContainerBlock type="dark">
          <ContentBubble id="rates">
            <h2>Курсы криптовалют</h2>
            <CryptoRates />
          </ContentBubble>
        </ContainerBlock>
      </div>
    );
  }
}

export default PageHelpers;
