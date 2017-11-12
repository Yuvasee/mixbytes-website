import React, {Component} from 'react';

import './styles.css';

class BlockEmphasis extends Component {
  render() {
    return (
      <div className="block-emphasis">
        {this.props.children}
      </div>
    );
  }
}

export default BlockEmphasis;
