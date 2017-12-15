import React, {Component} from 'react';
import PropTypes from 'prop-types';

import PageLayout from 'components/PageLayout';
import PageNav from 'components/PageNav';
import ContentLayout from 'components/ContentLayout';
import ContentBlock from 'components/ContentBlock';

import BlockJob from 'components/ContentBlock/BlockJob';

class Job extends Component {
  render() {
    const text = this.context.text.job;

    const jobs = [
      {
        link: 'blockchain-dev',
        name: text.blockchainDev.name,
        description: text.blockchainDev.desc,
        requirements: text.blockchainDev.requirements,
        advantages: text.blockchainDev.advantages,
        conditions: text.blockchainDev.conditions,
      },
      {
        link: 'backend-dev',
        name: text.backendDev.name,
        description: text.backendDev.desc,
        requirements: text.backendDev.requirements,
        advantages: text.backendDev.advantages,
        conditions: text.backendDev.conditions,
      },
      {
        link: 'cpp-dev',
        name: text.cppDev.name,
        description: text.cppDev.desc,
        requirements: text.cppDev.requirements,
        advantages: text.cppDev.advantages,
        conditions: text.cppDev.conditions,
      },
      {
        link: 'devops',
        name: text.devops.name,
        description: text.devops.desc,
        requirements: text.devops.requirements,
        advantages: text.devops.advantages,
        conditions: text.devops.conditions,
      },
    ];

    const pageNav = jobs.map((el, i) => {
      const {link, name} = el;
      return {link, name};
    });

    return (
      <PageLayout>
        <ContentLayout contentRight={<PageNav links={pageNav} />}>
          {jobs.map((el, i) => (
            <ContentBlock id={el.link} key={el.link}>
              {i === 0 &&
                <h2>{text.title}</h2>
              }
              <BlockJob job={el} />
            </ContentBlock>
          ))}
        </ContentLayout>
      </PageLayout>
    );
  }
}

export default Job;

Job.contextTypes = {
  text: PropTypes.object,
};
