import React, {Component} from 'react';

import Person from 'components/Person';

class Kruglov extends Component {
  render() {
    return (
      <Person>
        <h2 id="kruglov">Павел Круглов</h2>
        <ul>
          <li>Выпускник МИФИ, факультет Информационной Безопасности, кафедра безопасности банковских систем.</li>
          <li>Участвовал в&nbsp;разработке системы безопасности для Банка России.</li>
          <li>Почетный автор и&nbsp;редактор журнала &laquo;Хакер&raquo; (более 100 статей для журнала).</li>
          <li>Вдохновитель сообщества пишущих разработчиков Mail.Ru Group (более 800 публикаций на&nbsp;Habrahabr, Medium и&nbsp;в&nbsp;других блогах).</li>
          <li>Заядлый сторонник open-source и&nbsp;Linux.</li>
        </ul>
      </Person>
    );
  }
}

export default Kruglov;
