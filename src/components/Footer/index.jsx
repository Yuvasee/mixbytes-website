import React, {Component} from 'react';

import Donate from './Donate';

import './styles.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="copy">
          <strong>&copy;&nbsp;2017 MixBytes Blockchain Labs</strong><br />
          По&nbsp;всем вопросам:<br />
          <a href="https://t.me/LoungerX">https://t.me/LoungerX</a><br />
          или&nbsp;<a href="mailto:hello@mixbytes.io">hello@mixbytes.io</a>
        </div>
        <div className="links">
          <div>
            <ul>
              <li><a href="https://t.me/mixbytes_pub">Telegram</a></li>
              <li><a href="https://www.facebook.com/mixbyteslabs/">Facebook</a></li>
              <li><a href="https://github.com/mixbytes">GitHub</a></li>
              <li><a href="https://mixbytes.timepad.ru/">Timepad</a></li>
            </ul>
          </div>
        </div>
        <Donate />
      </div>
    );
  }
}

export default Footer;
