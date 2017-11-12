import React, {Component} from 'react';

import PageLayout from 'components/PageLayout';
import PageNav from 'components/PageNav';
import ContentLayout from 'components/ContentLayout';
import ContentBlock from 'components/ContentBlock';

import './styles.css';

class Main extends Component {
  render() {
    const pubs = [
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
    ];

    return (
      <PageLayout>
        <ContentLayout>
          <ContentBlock>
            <h2>Публикации</h2>
            {pubs.map((el, i) => (
              <div className="publication" style={{backgroundImage: `url(${el.img})`}}>
                <h3><a href={el.link}>{el.name}</a></h3>
                <p>{el.date} &bull; {el.place}</p>
              </div>
            ))}
          </ContentBlock>
        </ContentLayout>
      </PageLayout>
    );
  }
}

export default Main;
