import React, {Component} from 'react';

import './styles.css';

class BlockTwoColumns extends Component {
  render() {
    const {content} = this.props;

    return (
      <div className="block-two-columns">
        {content.map((element, i) => (
          <div key={i}>
            <p dangerouslySetInnerHTML={{
              __html: `<b>${element.header}</b><br />${element.text}`
            }}/>
          </div>
        ))}
      </div>
    );
  }
}

export default BlockTwoColumns;
