import React, {Component} from 'react';

import Person from 'components/Person';

class Sergey extends Component {
  render() {
    return (
      <Person image={require('./img/pril.jpg')}>
        <h2>Сергей Прилуцкий</h2>
        {!this.props.noPosition &&
          <p><strong>Co-founder, Software Engineer</strong></p>
        }
        <ul>
          <li>Магистр технических наук, практика в&nbsp;сфере информационной безопасности и&nbsp;криптографии с&nbsp;1996 года</li>
          <li>Начал программировать на&nbsp;Assembler еще в&nbsp;школе</li>
          <li>В&nbsp;институте разрабатывал антивирусный движок под Linux, изучал криптографическую защиту информации</li>
          <li>В&nbsp;аспирантуре МИФИ преподавал &laquo;Базы данных&raquo; и&nbsp;&laquo;Информационную безопасность&raquo;</li>
          <li>Преподавал курс прикладной информационной безопасности для проектов &laquo;Технопарк&raquo; (Бауманка) и&nbsp;&laquo;Техноатом&raquo; (МИФИ)</li>
          <li>В&nbsp;Mail.ru был тимлидом проектов Auto.Mail.Ru, Afisha.Mail.Ru, работал в&nbsp;команде Антиспама</li>
        </ul>
        <p>Рекомендуем <a href="https://habrahabr.ru/users/boogerwooger/posts/">публикации</a> Сергея на Habrahabr.</p>
      </Person>
    );
  }
}

export default Sergey;
