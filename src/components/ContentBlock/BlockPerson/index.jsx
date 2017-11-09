import React, {Component} from 'react';

import './styles.css';

class BlockPerson extends Component {
  render() {
    const {link, name, photo, position, text} = this.props.person;
    return (
      <div className="block-person">
        <div className="photo">
          <img src={photo} alt={name} />
        </div>
        <div className="text">
          <h2>{name}</h2>
          <div className="position">{position}</div>
          {text}
        </div>
      </div>
    );
  }
}

export default BlockPerson;
