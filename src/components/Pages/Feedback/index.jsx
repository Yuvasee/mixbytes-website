import React, {Component} from 'react';

import PageLayout from 'components/PageLayout';
import ContentLayout from 'components/ContentLayout';
import ContentBlock from 'components/ContentBlock';
import { FeedbackForm } from '../../FeedbackForm/index';

export class FeedbackPage extends Component {
  render() {
    return (
      <PageLayout>
        <ContentLayout>
          <ContentBlock>
            <FeedbackForm />
          </ContentBlock>
        </ContentLayout>
      </PageLayout>
    );
  }
}
