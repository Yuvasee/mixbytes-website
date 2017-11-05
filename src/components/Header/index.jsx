import React, {Component} from 'react';

import Navigation from './Navigation';
import Langs from './Langs';

import './styles.css';

class Header extends Component {
  render() {
    return (
      <div className="container-header">
        <div className="header-left">
          <img src={require('./i/logo.svg')} alt="MixBytes()" />
        </div>
        <div className="header-mid">
          <Navigation />
          <h1>
            Блокчейн-решения
            <br />и&nbsp;смарт-контракты
          </h1>
          <div className="intro">
            Мы&nbsp;&mdash; команда программистов. Составляем технические проекты, внедряем блокчейн-технологии, пишем смарт-контракты. Проводим корпоративное обучение и&nbsp;открытые лекции.
            <br />Стек: Solidity/Truffle, JS/Node, C++/Graphene, Python.
          </div>
        </div>
        <div className="header-right">
          <Langs />
        </div>
      </div>
    );
  }
}

export default Header;
