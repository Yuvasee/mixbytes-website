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
