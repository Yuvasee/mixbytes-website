import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Donate from './Donate';

import './styles.css';

class Footer extends Component {
  render() {
    const text = this.context.text.common;

    return (
      <div className="footer">
        <div className="copy">
          <strong>&copy;&nbsp;2017 MixBytes Blockchain Labs</strong><br />
          {text.questions}<br />
          <a href="https://t.me/LoungerX">https://t.me/LoungerX</a><br />
          {text.or}&nbsp;<a href="mailto:hello@mixbytes.io">hello@mixbytes.io</a><br />
          <br />
          <a href="/job">{text.careers}</a>
        </div>
        <div className="links">
          <div>
            <ul>
              <li><a href="https://t.me/mixbytes_pub">Telegram</a></li>
              <li><a href="https://www.facebook.com/mixbyteslabs/">Facebook</a></li>
              <li><a href="https://github.com/mixbytes">GitHub</a></li>
              <li><a href="https://mixbytes.timepad.ru/">Timepad</a></li>
              <li><a href="https://www.youtube.com/channel/UCcEtHFZPsWoSxi4fdZcLsxQ/videos">YouTube</a></li>
            </ul>
          </div>
        </div>
        <Donate />
      </div>
    );
  }
}

export default Footer;

Footer.contextTypes = {
  text: PropTypes.object,
};
