import React, {Component} from 'react';

import './styles.css';

class Capabilities extends Component {
  render() {
    const {header, elements} = this.props;

    return (
      <div className="capabilities" id="capabilities">
        <h2>{header}</h2>
        <div className="elements">
          {elements.map((element, i) => (
            <div className="item" key={i}>
              <img src={element.icon} alt="" />
              <p dangerouslySetInnerHTML={{__html: element.text}} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Capabilities;
