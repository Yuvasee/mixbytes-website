import React, {Component} from 'react';
import PropTypes from 'prop-types';

import PageLayout from 'components/PageLayout';
import PageNav from 'components/PageNav';
import ContentLayout from 'components/ContentLayout';
import ContentBlock from 'components/ContentBlock';

import { BlockPerson } from 'components/ContentBlock/BlockPerson';

class Team extends Component {
  render() {
    const text = this.context.text.team;

    const team = [
      {
        link: 'prilutskiy',
        name: text.prilutsky.name,
        photo: require('./i/prilutskiy.jpg'),
        position: 'Co-founder, Software Engineer',
        text: text.prilutsky.desc,
        socialLinks: {
          facebook: 'https://www.facebook.com/prilutskiy.sergey',
        },
      },
      {
        link: 'vasilchikov',
        name: text.vasilchikov.name,
        photo: require('./i/vasilchikov.jpg'),
        position: 'Co-founder, Manager, Developer',
        text: text.vasilchikov.desc,
        socialLinks: {
          facebook: 'https://www.facebook.com/yuriy.vasilchikov',
          linkedin: 'https://www.linkedin.com/in/yuriy-vasilchikov',
        },
      },
      {
        link: 'makeev',
        name: text.makeev.name,
        photo: require('./i/makeev.jpg'),
        position: 'Co-founder, Software Engineer',
        text: text.makeev.desc,
        socialLinks: {
          facebook: 'https://www.facebook.com/alpsycongroo',
        },
      },
      {
        link: 'karbachinsky',
        name: text.karbachinsky.name,
        photo: require('./i/karbachinsky.jpg'),
        position: 'Software Engineer',
        text: text.karbachinsky.desc,
        socialLinks: {
          facebook: 'https://www.facebook.com/igor.karbachinsky',
        },
      },
      {
        link: 'kruglov',
        name: text.kruglov.name,
        photo: require('./i/kruglov.jpg'),
        position: 'Analyst, SMM, Manager',
        text: text.kruglov.desc,
        socialLinks: {
          facebook: 'https://www.facebook.com/pkrglv',
          linkedin: 'https://www.linkedin.com/in/pkruglov',
        },
      },
      {
        link: 'yakovlev',
        name: text.yakovlev.name,
        photo: require('./i/yakovlev.jpg'),
        position: 'Software Engineer',
        text: text.yakovlev.desc,
        socialLinks: {
          facebook: 'https://www.facebook.com/yakovlev.andrew',
        },
      },
      {
        link: 'shubin',
        name: text.shubin.name,
        photo: require('./i/shubin.jpg'),
        position: 'DevOps Engineer',
        text: text.shubin.desc,
      },
      {
        link: 'galuzinskaya',
        name: text.galuzinskaya.name,
        photo: require('./i/galuzinskaya.jpg'),
        position: 'Event Manager, Business Assistant',
        text: text.galuzinskaya.desc,
      },
      {
        link: 'privezentsev',
        name: text.privezentsev.name,
        photo: require('./i/privezentsev.jpg'),
        position: 'Backend Developer',
        text: text.privezentsev.desc,
      },
    ];

    const pageNav = team.map((el, i) => {
      const {link, name} = el;
      return {link, name};
    });

    return (
      <PageLayout>
        <ContentLayout contentRight={<PageNav links={pageNav} />}>
          {team.map((el) => (
            <ContentBlock id={el.link} key={el.link}>
              <BlockPerson person={el} />
            </ContentBlock>
          ))}
        </ContentLayout>
      </PageLayout>
    );
  }
}

export default Team;

Team.contextTypes = {
  text: PropTypes.object,
};
