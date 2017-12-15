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
        {text.description}
        <br />
        {text.stack}
        </div>
      </div>
    );
  }
}

export default HeaderJumbo;

HeaderJumbo.contextTypes = {
  text: PropTypes.object,
};
