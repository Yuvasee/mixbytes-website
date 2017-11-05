import React, {Component} from 'react';

import './styles.css';

class BlockEvent extends Component {
  render() {
    const {date, desc, header, prices, speakers, themes} = this.props;
    console.log(date);

    return (
      <div className="block-event">
        {this.props.children}
      </div>
    );
  }
}

export default BlockEvent;
