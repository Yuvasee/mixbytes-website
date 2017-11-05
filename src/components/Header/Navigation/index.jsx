import React, {Component} from 'react';

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

    const navItems = links.map((item, i) => (
      <div className="nav-item" key={i}>
        <a href={item.link}>{item.name}</a>
      </div>
    ));

    return (
      <nav className="header-navigation">
        {navItems}
      </nav>
    );
  }}

export default Navigation;
