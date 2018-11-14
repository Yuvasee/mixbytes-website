import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import PageLayout from 'components/PageLayout';
// import PageNav from 'components/PageNav';
import ContentLayout from 'components/ContentLayout';
import ContentBlock from 'components/ContentBlock';

import './styles.css';

class Publications extends Component {
  render() {
    const text = this.context.text.common;

    const pubs = [
      {
        name: 'Simple and Powerful Short-Term Smart Contracts',
        date: '4 апреля 2017',
        place: 'Medium',
        img: require('./i/smart-contracts.jpeg'),
        link: 'https://medium.com/@sprilutskiy/simple-and-powerful-short-term-smart-contracts-ba069954b0ca'
      },
      {
        name: 'Dive into ICO',
        date: '16 ноября 2017',
        place: 'Хабрахабр',
        img: require('./i/dive.jpg'),
        link: 'https://habrahabr.ru/post/342534/'
      },
      {
        name: 'Технические особенности проведения ICO. Начало',
        date: '10 ноября 2017',
        place: 'Хабрахабр',
        img: require('./i/ico.jpg'),
        link: 'https://habrahabr.ru/post/342102/'
      },
      {
        name: 'Blockchain глазами разработчика',
        date: '25 октября 2017',
        place: 'Хабрахабр',
        img: require('./i/blockchain.jpg'),
        link: 'https://habrahabr.ru/post/340916/'
      },
      {
        name: 'Дырка в Parity Multisig Wallet',
        date: 'июль 2017',
        place: 'Golos.io',
        link: 'https://golos.io/ru--blokcheijn/@boogerwooger/dyrka-v-parity-multisig-wallet'
      },
      {
        name: 'Storj. Парни, вы мой файл не видали?',
        date: 'июнь 2017',
        place: 'Golos.io',
        link: 'https://golos.io/ru--blokcheijn/@boogerwooger/storj-parni-vy-moi-fail-ne-vidali'
      },
      {
        name: 'О смарт-контрактах попроще',
        date: 'июнь 2017',
        place: 'Golos.io',
        link: 'https://golos.io/ru--smart-kontrakty/@boogerwooger/o-smart-kontraktakh-poproshe'
      },
      {
        name: 'Proof Of Stake & Proof Of Work',
        date: 'май 2017',
        place: 'Golos.io',
        link: 'https://golos.io/blockchain/@boogerwooger/proof-of-stake-and-proof-of-work-korotenko'
      },
    ];

    return (
      <PageLayout>
        <ContentLayout>
          <ContentBlock>
            <h2>{text.publications}</h2>
            {pubs.map((el, i) => (
              <div className={classNames('publication', {noimg: !el.img})} style={el.img ? {backgroundImage: `url(${el.img})`} : {}}>
                <h3><a href={el.link}>{el.name}</a></h3>
                <p><span>{el.date} &bull; {el.place}</span></p>
              </div>
            ))}
          </ContentBlock>
        </ContentLayout>
      </PageLayout>
    );
  }
}

export default Publications;

Publications.contextTypes = {
  text: PropTypes.object,
};
