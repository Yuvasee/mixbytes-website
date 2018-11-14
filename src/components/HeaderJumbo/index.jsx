import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class HeaderJumbo extends Component {

  componentWillMount() {
    this.text = this.context.text.headerJumbo;
  }

  render() {
    const { text } = this;

    return (
      <div className="header-jumbo">
        {text.header}
        <div className="intro">
          <div>{text.description}</div>
          <div>{text.stack}</div>
          {text.blockchains}
        </div>
      </div>
    );
  }
}

export default HeaderJumbo;

HeaderJumbo.contextTypes = {
  text: PropTypes.object,
};
