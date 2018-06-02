import React, {Component} from 'react';
import PropTypes from 'prop-types';

import PageLayout from 'components/PageLayout';
import PageNav from 'components/PageNav';
import ContentLayout from 'components/ContentLayout';
import ContentBlock from 'components/ContentBlock';
import HeaderJumbo from 'components/HeaderJumbo';
import { BlockWithIcon } from 'components/ContentBlock/BlockWithIcon';
import BlockTwoColumns from 'components/ContentBlock/BlockTwoColumns';
import BlockEvent from 'components/ContentBlock/BlockEvent';
import Splurge from 'components/Splurge';
import Capabilities from 'components/Capabilities';
import MeetUs from 'components/MeetUs';
// import { FeedbackForm } from '../../FeedbackForm'
import { SmartzIcn, ICOTechIcn, ConsultingIcn, BlokchainIcn, EtheriumIcn, DocsIcn } from './icons';
import { OpenSource } from '../../OpenSource';

import './styles.css';

class Main extends Component {
  render() {
    const text = this.context.text.main;
    const meetUsText = this.context.text.meetUs;

    const pageNav = [
      // {link: 'dev-audit', name: text.devAudit.title},
      // {link: 'consulting', name: text.consulting},
      {link: 'services', name: text.navigation.services},
      // {link: 'feedback', name: text.navigation.feedback},
      {link: 'splurge', name: '>&#8201;50&#8201;000&#8201;000&#8201;$'},
      // {link: 'capabilities', name: text.capabilities.title},
      {link: 'meet-us', name: meetUsText.anchor},
    ];

    return (
      <PageLayout>
        <HeaderJumbo />
        <ContentLayout contentRight={<PageNav links={pageNav} />}>

          { this.renderServices() }

          { this.renderDevAuditBlock() }

          { this.renderConsultingBlock() }

          {/*
          <div id="feedback">
            <FeedbackForm containerStyle="content-block"/>
          </div>
          */}

          <Splurge />

          { this.renderCapabilitiesBlock() }

          <MeetUs />

          <OpenSource />
        </ContentLayout>
      </PageLayout>
    );
  }

  getServiceBlock = (element, isFocused, isList, html, index) => {
    return (
      <div
        key={element.header + index}
        className={
          `service-block ${isFocused ? 'service-block--focused' : ''}` +
          `${isList ? 'service-block-list' : ''}`
        }
      >
        <div>{element.icn}</div>
        <div className="service-block-header">{element.header}</div>
        <div className="service-block-text">{element.text}</div>
        <div className="service-block-footer">{element.footerImg}</div>
        { html }
      </div>
    );
  }

  renderServices = () => {
    const text = this.context.text.main;

    return (
      <ContentBlock id="services">
        <h2>{text.services.title}</h2>

        <div className="row services-container">
          <div className="column services-column">
            {
              [
                {
                  header: text.services.smartz.header,
                  text: text.services.smartz.text,
                  icn: SmartzIcn,
                  html: <a target="_blank" rel="noopener noreferrer" href="https://smartz.io/"><button className="btn btn-success service-button">{text.services.smartz.buttonText}</button></a>,
                },
                {
                  header: text.services.icoTech.header,
                  text: text.services.icoTech.text,
                  icn: ICOTechIcn,
                  isList: true,
                },
              ]
              .map((element, index) => this.getServiceBlock(
                element,
                element.isFocused,
                element.isList,
                element.html,
                index
              ))
            }
          </div>
          <div className="column services-column">
            {
              [
                {
                  header: text.services.blokchain.header,
                  text: text.services.blokchain.text,
                  icn: BlokchainIcn,
                  isFocused: true,
                  footerImg: <div className="blockchain-systems-img"></div>
                },
                {
                  header: text.services.etherium.header,
                  text: text.services.etherium.text,
                  icn: EtheriumIcn,
                },
              ]
              .map((element, index) => this.getServiceBlock(
                element,
                element.isFocused,
                element.isList,
                element.html,
                index,
              ))
            }
          </div>
        </div>
      </ContentBlock>
    );

  }

  renderCapabilitiesBlock = () => {
    // const text = this.context.text.main;
    return null;

    /*
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
    */
  }

  renderDevAuditBlock = () => {
    // const text = this.context.text.main;
    return null;

    /*
    <ContentBlock id="dev-audit">
      <h2>{text.devAudit.title}</h2>
      <BlockWithIcon
        icon={require('./i/github-logo.png')}
        iconText={text.devAudit.example}
      >
        <p>{text.devAudit.description}</p>
      </BlockWithIcon>
    </ContentBlock>
    */
  }

  renderConsultingBlock = () => {
    // const text = this.context.text.main;
    return null;
    /*
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
    */
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
