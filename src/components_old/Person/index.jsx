import React, {Component} from 'react';

import './styles.css';

class Person extends Component {
  render() {
    const {image, children} = this.props;

    return (
      <div className="team-member d-md-flex">
        {image &&
          <div className="pic">
            <img src={image} className="team" />
          </div>
        }
        <div className="info">
          {children}
        </div>
      </div>
    );
  }
}

export default Person;
