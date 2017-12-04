import React, {Component} from 'react';

import './styles.css';

class MeetUs extends Component {
  render() {
    return (
      <div className="meet-us" id="meet-us">
        <div>
          <h2>Будем знакомы</h2>
          <p>Мы&nbsp;разрабатываем смарт-контракты, проводим их&nbsp;аудит, консультируем организации и&nbsp;рассказываем об&nbsp;этом в&nbsp;наших курсах и&nbsp;лекциях.</p>
          <p className="angle-bullet"><a href="/team">Познакомиться ближе</a></p>
        </div>
        <div className="person">
          <img
            src={require('components/Pages/Team/i/prilutskiy.jpg')}
            alt="Сергей Прилуцкий"
          />
          <p>Сергей<br />Прилуцкий</p>
        </div>
        <div className="person">
          <img
            src={require('components/Pages/Team/i/vasilchikov.jpg')}
            alt="Юрий Васильчиков"
          />
          <p>Юрий<br />Васильчиков</p>
        </div>
        <div className="person">
          <img
            src={require('components/Pages/Team/i/makeev.jpg')}
            alt="Алексей Макеев"
          />
          <p>Алексей<br />Макеев</p>
        </div>
      </div>
    );
  }
}

export default MeetUs;
