import React, {Component} from 'react';

import './styles.css';

class BlockWithIcon extends Component {
  render() {
    return (
      <div className="block-with-aside">
        <div className="text">
          {this.props.children}
        </div>
        <div className="aside">
          {this.props.aside}
        </div>
      </div>
    );
  }
}

export default BlockWithIcon;
