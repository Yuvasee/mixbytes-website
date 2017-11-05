import React, {Component} from 'react';

import './styles.css';

class ContentBlock extends Component {
  render() {
    return (
      <div className="content-block">
        {this.props.children}
      </div>
    );
  }
}

export default ContentBlock;
