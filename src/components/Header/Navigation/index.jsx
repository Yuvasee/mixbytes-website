import React, {Component} from 'react';
import ClassNames from 'classnames';

import './styles.css';

class Navigation extends Component {
  render() {
    const links = [
      {link: '/', name: 'Услуги'},
      {link: '/publications', name: 'Публикации'},
      {link: '/education', name: 'Обучение'},
      {link: '/helpers', name: 'Инструменты'},
      {link: '/team', name: 'Команда'},
    ];

    const navItems = links.map((item, i) => {
      const active = window.location.pathname === item.link;
      return (
        <div className={ClassNames('nav-item', {active})} key={i}>
          {active ? item.name : <a href={item.link}>{item.name}</a>}
        </div>
      );
    });

    return (
      <nav className="header-navigation">
        {navItems}
      </nav>
    );
  }}

export default Navigation;
