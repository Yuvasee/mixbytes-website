import React, {Component} from 'react';

import './styles.css';

export class BlockPerson extends Component {
  render() {
    const {name, photo, position, text, socialLinks} = this.props.person;

    return (
      <div className="block-person">
        <div className="photo">
          <img src={photo} alt={name} />
        </div>
        <div className="text">
          <h2>{name}</h2>

          <div className="position personPosition">{position}</div>

          { text }

          <div>
            {
              socialLinks && socialLinks.facebook
                ? <a className="social-icn facebook-icn" href={socialLinks.facebook}> </a>
                : null
            }

            {
              socialLinks && socialLinks.linkedin
                ? <a className="social-icn linkedin-icn" href={socialLinks.linkedin}> </a>
                : null
            }
          </div>
        </div>
      </div>
    );
  }
}
