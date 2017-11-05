import React, {Component} from 'react';

import Donate from './Donate';

import './styles.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div>
          <strong>&copy;&nbsp;2017 MixBytes Blockchain Labs</strong><br />
          <a href="mailto:hello@mixbytes.io">hello@mixbytes.io</a>
        </div>
        <div className="links">
          <ul>
            <li><a href="https://t.me/mixbytes_pub">Telegram</a></li>
            <li><a href="https://www.facebook.com/mixbyteslabs/">Facebook</a></li>
            <li><a href="https://github.com/mixbytes">GitHub</a></li>
            <li><a href="https://mixbytes.timepad.ru/">Timepad</a></li>
          </ul>
        </div>
        <Donate />
      </div>
    );
  }
}

export default Footer;
