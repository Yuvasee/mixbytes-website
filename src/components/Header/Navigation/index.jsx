import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.css';

class Navigation extends React.PureComponent {

  render() {
    const text = this.context.text.navigation;
    const language = this.context.language;

    const links = [
      {link: '/', name: text.services},
      {link: '/publications', name: text.publications},
    ];

    if (language === 'RU') {
      links.push({link: '/job', name: text.careers});
    }

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

Navigation.contextTypes = {
  text: PropTypes.object,
  language: PropTypes.string
};
