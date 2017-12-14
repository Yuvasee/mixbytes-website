import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class MeetUs extends Component {
  render() {
    const text = this.context.text.meetUs;

    return (
      <div className="meet-us" id="meet-us">
        <div>
          <h2>{text.title}</h2>
          <p>{text.description}</p>
          <p className="angle-bullet"><a href="/team">{text.linkText}</a></p>
        </div>
        <div className="person">
          <img
            src={require('components/Pages/Team/i/prilutskiy.jpg')}
            alt="Сергей Прилуцкий"
          />
          {text.persons.prilutsky.label}
        </div>
        <div className="person">
          <img
            src={require('components/Pages/Team/i/vasilchikov.jpg')}
            alt="Юрий Васильчиков"
          />
          {text.persons.vasilchikov.label}
        </div>
        <div className="person">
          <img
            src={require('components/Pages/Team/i/makeev.jpg')}
            alt="Алексей Макеев"
          />
          {text.persons.makeev.label}
        </div>
      </div>
    );
  }
}

export default MeetUs;

MeetUs.contextTypes = {
  text: PropTypes.object,
};
