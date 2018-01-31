import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export class OpenSource extends React.Component {
  render() {
    const text = this.context.text.main;

    return (
      <div className="openSource-wrapper">
        <div className="openSource-container">
          <div className="github-icn"></div>
          {text.openSource}&nbsp;-&nbsp;<a href="https://github.com/mixbytes">github.com/mixbytes</a>
        </div>
      </div>
    );
  }
}

OpenSource.contextTypes = {
  text: PropTypes.object,
};
