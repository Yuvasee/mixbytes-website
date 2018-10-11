import React, {Component} from 'react';

import './styles.css';

class BlockTwoColumns extends Component {
  render() {
    const {persons, header, position} = this.props;

    return (
      <div className="block-person-list">
        <h2>{header}</h2>
        <div className="position" dangerouslySetInnerHTML={{__html: position}} />
        <div>
          {persons.map((element, i) => (
            <div key={i}>
              <img src={element.photo} alt="" />
              <p className="person-name">{element.name}</p>
              {element.desc}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default BlockTwoColumns;
