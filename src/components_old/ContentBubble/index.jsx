import React, {Component} from 'react';
import classNames from 'classnames';

import './styles.css';

class ContentBubble extends Component {
  render() {
    return (
      <div className="content-bubble" {...this.props}>
        {this.props.children}
      </div>
    );
  }
}

export default ContentBubble;
