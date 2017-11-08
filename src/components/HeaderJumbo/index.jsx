import React, {Component} from 'react';

import './styles.css';

class HeaderJumbo extends Component {
  render() {
    return (
      <div className="header-jumbo">
        <h1>
          Блокчейн-решения
          <br />и&nbsp;смарт-контракты
        </h1>
        <div className="intro">
          Мы&nbsp;&mdash; команда программистов. Составляем технические проекты, внедряем блокчейн-технологии, пишем смарт-контракты. Проводим корпоративное обучение и&nbsp;открытые лекции.
          <br />Стек: Solidity/Truffle, JS/Node, C++/Graphene, Python.
        </div>
      </div>
    );
  }
}

export default HeaderJumbo;
