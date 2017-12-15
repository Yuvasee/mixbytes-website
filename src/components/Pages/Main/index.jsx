import React, {Component} from 'react';
import PropTypes from 'prop-types';

import PageLayout from 'components/PageLayout';
import PageNav from 'components/PageNav';
import ContentLayout from 'components/ContentLayout';
import ContentBlock from 'components/ContentBlock';

import HeaderJumbo from 'components/HeaderJumbo';
import BlockWithIcon from 'components/ContentBlock/BlockWithIcon';
import BlockTwoColumns from 'components/ContentBlock/BlockTwoColumns';
import BlockEvent from 'components/ContentBlock/BlockEvent';
import Splurge from 'components/Splurge';
import Capabilities from 'components/Capabilities';
import MeetUs from 'components/MeetUs';

class Main extends Component {
  render() {
    const text = this.context.text.main;
    const meetUsText = this.context.text.meetUs;

    const pageNav = [
      {link: 'dev-audit', name: text.devAudit.title},
      {link: 'consulting', name: text.consulting},
      {link: 'splurge', name: '>&#8201;25&#8201;000&#8201;000&#8201;$'},
      {link: 'capabilities', name: text.capabilities.title},
      {link: 'meet-us', name: meetUsText.anchor},
    ];

    return (
      <PageLayout>
        <HeaderJumbo />
        <ContentLayout contentRight={<PageNav links={pageNav} />}>
          <ContentBlock id="dev-audit">
            <h2>{text.devAudit.title}</h2>
            <BlockWithIcon
              icon={require('./i/github-logo.png')}
              iconText={text.devAudit.example}
            >
              <p>{text.devAudit.description}</p>
            </BlockWithIcon>
          </ContentBlock>
          <ContentBlock id="consulting">
            <h2>{text.consulting}</h2>
            <BlockTwoColumns
              content={[
                {
                  header: text.businessRequirements,
                  text: text.businessRequirementsDescription,
                },
                {
                  header: text.hrHelp,
                  text: text.hrHelpDescription,
                },
                {
                  header: text.technicalSolutions,
                  text: text.technicalSolutionsDescription,
                },
                {
                  header: text.technicalDocumentation,
                  text: text.technicalDocumentationDescription,
                }
              ]}
            />
          </ContentBlock>
          <Splurge />
          <Capabilities
            header={text.capabilities.title}
            elements={[
              {
                icon: require('./i/icon-dollar.svg'),
                text: text.capabilities.items.money,
              },
              {
                icon: require('./i/icon-html-brackets.svg'),
                text: text.capabilities.items.testing,
              },
              {
                icon: require('./i/icon-lock.svg'),
                text: text.capabilities.items.security,
              },
              {
                icon: require('./i/icon-lens.svg'),
                text: text.capabilities.items.solidity,
              },
              {
                icon: require('./i/icon-eye.svg'),
                text: text.capabilities.items.analytics,
              },
            ]}
          />
          <MeetUs />
        </ContentLayout>
      </PageLayout>
    );
  }
}

export default Main;

Main.contextTypes = {
  text: PropTypes.object,
};

/*

<ContentBlock id="lectures">
  <h2>{text.lectures}</h2>
  <BlockEvent
    date={text.lecturesItems.diveIntoBlokchain.date}
    header={text.lecturesItems.diveIntoBlokchain.title}
    desc={text.lecturesItems.diveIntoBlokchain.description}
    themes={text.lecturesItems.diveIntoBlokchain.themes}
    speakers={[
      {
        name: text.lecturesItems.diveIntoBlokchain.speakers.prilutsky.name,
        desc: <p>{text.lecturesItems.diveIntoBlokchain.speakers.prilutsky.description}</p>,
        img: "prilutskiy"
      },
      {
        name: text.lecturesItems.diveIntoBlokchain.speakers.vasilchikov.name,
        desc: <p>{text.lecturesItems.diveIntoBlokchain.speakers.vasilchikov.description}</p>,
        img: "vasilchikov"
      }
    ]}
    prices={[
      {
        period: text.lecturesItems.diveIntoBlokchain.prices.early.name,
        types: [
          {
            price: "6000&#8381;"
          },
          {
            name: "VIP",
            price: "12000&#8381;"
          }
        ]
      },
      {
        period: text.lecturesItems.diveIntoBlokchain.prices.late.name,
        types: [
          {
            price: "9000&#8381;"
          },
          {
            name: "VIP",
            price: "18000&#8381;"
          }
        ]
      },
    ]}
  />
</ContentBlock>
*/
