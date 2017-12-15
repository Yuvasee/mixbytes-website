import React, {Component} from 'react';
import PropTypes from 'prop-types';

import PageLayout from 'components/PageLayout';
import PageNav from 'components/PageNav';
import ContentLayout from 'components/ContentLayout';
import ContentBlock from 'components/ContentBlock';

import BlockEmphasis from 'components/ContentBlock/BlockEmphasis';
import BlockInfoTabs from 'components/ContentBlock/BlockInfoTabs';
import BlockWithAside from 'components/ContentBlock/BlockWithAside';
import BlockThreeColumns from 'components/ContentBlock/BlockThreeColumns';
import BlockProgram from 'components/ContentBlock/BlockProgram';
import BlockPerson from 'components/ContentBlock/BlockPerson';
import BlockPersonList from 'components/ContentBlock/BlockPersonList';
import BlockTwoColumns from 'components/ContentBlock/BlockTwoColumns';
import BlockLogos from 'components/ContentBlock/BlockLogos';

class Education extends Component {
  render() {
    const text = this.context.text.education;

    const pageNav = [
      {link: 'blockchain-dive', name: text.navigation.description},
      {link: 'program', name: text.navigation.program},
      {link: 'speakers', name: text.navigation.speakers},
      {link: 'participation', name: text.navigation.participation},
      {link: 'place', name: text.navigation.place},
      {link: 'partners', name: text.navigation.partners},
    ];

    return (
      <PageLayout>
        <ContentLayout contentRight={<PageNav links={pageNav} />}>
          <ContentBlock id="blockchain-dive">
            {text.header.title}
            <BlockEmphasis>
              {text.header.description}
              {text.header.comment}
            </BlockEmphasis>
          </ContentBlock>
          <ContentBlock id="description">
            <BlockInfoTabs tabs={[
              {
                id: 'blockchain',
                name: text.info.blockchain.name,
                content: text.info.blockchain.content,
              },
              {
                id: 'cryptoCurrencies',
                name: text.info.cryptoCurrencies.name,
                content: text.info.cryptoCurrencies.content,
              },
              {
                id: 'smartContracts',
                name: text.info.smartContracts.name,
                content: text.info.smartContracts.content,
              },
              {
                id: 'ico',
                name: text.info.ico.name,
                content: text.info.ico.content,
              },
              {
                id: 'bitcoin',
                name: text.info.bitcoin.name,
                content: text.info.bitcoin.content,
              },
              {
                id: 'ethereum',
                name: text.info.ethereum.name,
                content: text.info.ethereum.content,
              }
            ]} />
            <BlockWithAside aside={
              <p>
                <strong className="d-block mb-2">{text.asideBlock.title}</strong>
                >{text.asideBlock.businessmen}<br />
                >{text.asideBlock.investors}<br />
                >{text.asideBlock.lawyers}<br />
                >{text.asideBlock.managers}<br />
                >{text.asideBlock.programmers}
              </p>
            }>
              <p>{text.description.intro}</p>
              <p>{text.description.courceGoal}</p>
            </BlockWithAside>
            <BlockThreeColumns content={[
              {
                text: <p>{text.advices.first}</p>,
                icon: <strong style={{color: '#FF5932'}}>1</strong>
              },
              {
                text: <p>{text.advices.second}</p>,
                icon: <strong style={{color: '#481F80'}}>2</strong>
              },
              {
                text: <p>{text.advices.promise}</p>,
                icon: <img style={{marginBottom: '10px'}} src={require('./i/littlefinger.png')} />
              },

            ]} />
          </ContentBlock>
          <ContentBlock id="program">
            <BlockProgram program={[
              {
                dayName: text.program.dayOne.name,
                blocks: [
                  {
                    type: 'lecture',
                    name: text.program.dayOne.blocks.first.name,
                    time: '10:00-11:30',
                    desc: text.program.dayOne.blocks.first.desc,
                  },
                  {
                    type: 'lecture',
                    name: text.program.dayOne.blocks.second.name,
                    time: '11:45-13:15',
                    desc: text.program.dayOne.blocks.second.desc,
                  },
                  {
                    type: 'break',
                    desc: text.program.dayOne.blocks.break.desc,
                  },
                  {
                    type: 'lecture',
                    name: text.program.dayOne.blocks.third.name,
                    time: '14:30-16:00',
                    desc: text.program.dayOne.blocks.third.desc,
                  },
                  {
                    type: 'lecture',
                    name: text.program.dayOne.blocks.fourth.name,
                    time: '16:15-17:45',
                    desc: text.program.dayOne.blocks.fourth.desc,
                  }
                ]
              },
              {
                dayName: text.program.dayTwo.name,
                blocks: [
                  {
                    type: 'lecture',
                    name: text.program.dayTwo.blocks.fifth.name,
                    time: '10:00-11:30',
                    desc: text.program.dayTwo.blocks.fifth.desc,
                  },
                  {
                    type: 'lecture',
                    name: text.program.dayTwo.blocks.sixth.name,
                    time: '11:45-13:15',
                    desc: text.program.dayTwo.blocks.sixth.desc,
                  },
                  {
                    type: 'break',
                    desc: text.program.dayTwo.blocks.break.desc,
                  },
                  {
                    type: 'lecture',
                    name: text.program.dayTwo.blocks.seventh.name,
                    time: '14:30-16:00',
                    desc: text.program.dayTwo.blocks.seventh.desc,
                  },
                  {
                    type: 'lecture',

                    name: text.program.dayTwo.blocks.eigth.name,
                    time: '16:15-17:45',
                    desc: text.program.dayTwo.blocks.eigth.desc,
                  }
                ]
              }
            ]} />
          </ContentBlock>
          <ContentBlock id="speakers">
            <BlockPerson person={{
              link: 'prilutskiy',
              name: text.speakers.prilutsky.name,
              photo: require('components/Pages/Team/i/prilutskiy.jpg'),
              position: text.speakers.prilutsky.position,
              text: text.speakers.prilutsky.description,
            }} />
            <BlockPersonList
              header={text.speakers.lawyersTeam.header}
              position={text.speakers.lawyersTeam.position}
              persons={[
              {
                name: text.speakers.lawyersTeam.levashenko.name,
                photo: require('./i/levashenko.jpg'),
                desc: text.speakers.lawyersTeam.levashenko.desc,
              },
              {
                name: text.speakers.lawyersTeam.ermohin.name,
                photo: require('./i/ermohin.jpg'),
                desc: text.speakers.lawyersTeam.ermohin.desc,
              },
              {
                name: text.speakers.lawyersTeam.lebedeva.name,
                photo: require('./i/lebedeva.jpg'),
                desc: text.speakers.lawyersTeam.lebedeva.desc,
              },
              {
                name: text.speakers.lawyersTeam.girich.name,
                photo: require('./i/girich.jpg'),
                desc: text.speakers.lawyersTeam.girich.desc,
              },
              {
                name: text.speakers.lawyersTeam.koval.name,
                photo: require('./i/koval.jpg'),
                desc: text.speakers.lawyersTeam.koval.desc,
              },
            ]} />
          </ContentBlock>
          <ContentBlock id="participation">
            <h2>{text.conditions.title}</h2>
            <div className="white-block">
              <BlockTwoColumns content={[
                {
                  header: text.conditions.early.header,
                  text: text.conditions.early.text,
                },
                {
                  header: text.conditions.late.header,
                  text: text.conditions.late.text,
                }
              ]} />
              <div className="mt-3 text-center"><a className="link-button" href="https://mixbytes.timepad.ru/event/611938/#register">{text.conditions.registration}</a></div>
              <div className="card border-success mt-4" style={{fontSize: '80%'}}>
                <div className="card-body">
                  <h4 className="card-title text-success">{text.conditions.sale}</h4>
                  {text.conditions.saleDescription}
                  <p>
                    Bitcoin: 1QKj9niHezvenxWWw5ZDrHv6i4yujo3ZPh<br />
                    Ethereum: 0x2B1d01Ac2c87F1FD3b07F0A09eF4A42a03368458
                  </p>
                </div>
              </div>
            </div>
          </ContentBlock>
          <ContentBlock id="place">
            <h2>{text.location.title}</h2>
            <p><img src={require('./i/kluch.jpg')} /></p>
            {text.location.place}
            {text.location.support}
          </ContentBlock>
          <ContentBlock id="partners">
            <BlockLogos header={text.partners.title} logos={[
              {
                src: require('./i/forklog-logo.svg'),
                link: 'https://forklog.com/',
                alt: 'Forklog'
              },
              {
                src: require('./i/allcoinshome-logo.png'),
                link: 'https://allcoinshome.com/',
                alt: 'AllCoinsHome'
              },
              {
                src: require('./i/more-logo.png'),
                link: 'http://cryptomore.io/',
                alt: 'CryptoMore'
              },
              {
                src: require('./i/freed-logo.png'),
                link: 'https://freedman.club/',
                alt: 'freedman club'
              },
              {
                src: require('./i/logo-inv-fut.jpg'),
                link: 'https://investfuture.ru/',
                alt: 'Invest Future'
              },
              {
                src: require('./i/logo-anycoin.jpg'),
                link: 'https://anycoin.news/',
                alt: 'Anycoin.News'
              },
              {
                src: require('./i/kl10ch-logo.jpg'),
                link: 'https://kl10.ch/',
                alt: 'Ключ'
              },
              {
                src: require('./i/aronicle-logo.jpg'),
                link: 'http://aronicle.com/',
                alt: 'Aronicle'
              },
              {
                src: require('./i/coinforce-logo.jpg'),
                link: 'http://coinforce.ru/',
                alt: 'Aronicle'
              },
              {
                src: require('./i/startup-logo.jpg'),
                link: 'http://startupmagazine.ru/',
                alt: 'Aronicle'
              },
            ]} />
          </ContentBlock>
        </ContentLayout>
      </PageLayout>
    );
  }
}

export default Education;

Education.contextTypes = {
  text: PropTypes.object,
};
