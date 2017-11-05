import React, {Component} from 'react';

import './styles.css';

class BlockWithIcon extends Component {
  render() {
    return (
      <div className="block-with-icon">
        <div className="text">
          {this.props.children}
        </div>
        <div className="icon">
          <img src={this.props.icon} />
          {this.props.iconText}
        </div>
      </div>
    );
  }
}

export default BlockWithIcon;
