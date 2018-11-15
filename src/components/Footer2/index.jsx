import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ContentLayout from 'components/ContentLayout';
import ContentBlock from 'components/ContentBlock';
import ContactUsButton from 'components/common/ContactUsButton';

import './styles.css';

class Footer extends Component {
  render() {
    const text = this.context.text.footer;

    return (
      <ContentLayout className="cl-footer">
        <ContentBlock>
          <div className="footer">
            <h2>{text.contacts}</h2>
            <div className="footer-links">
              <div><a href="mailto:hello@mixbytes.io">hello@mixbytes.io</a></div>
              <div><a href="/careers" className="decorated">{text.careers}</a></div>
              <div className="footer-social">
                <div><a href="https://t.me/mixbytes_pub" className="decorated">Telegram</a></div>
                <div><a href="https://www.facebook.com/mixbyteslabs/" className="decorated">Facebook</a></div>
                <div><a href="https://github.com/mixbytes" className="decorated">GitHub</a></div>
              </div>
            </div>
            <div className="last-line">
              <div><ContactUsButton /></div>
              <div>&copy; 2017—2018 MixBytes</div>
            </div>
          </div>
        </ContentBlock>
      </ContentLayout>
    );
  }
}

export default Footer;

Footer.contextTypes = {
  text: PropTypes.object,
};
