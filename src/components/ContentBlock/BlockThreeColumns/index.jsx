import React, {Component} from 'react';

import './styles.css';

class BlockThreeColumns extends Component {
  render() {
    const {content} = this.props;

    return (
      <div className="block-three-columns white-block">
        {content.map((element, i) => (
          <div key={i}>
            <div className="text">{element.text}</div>
            <div className="icon">{element.icon}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default BlockThreeColumns;
