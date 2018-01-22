import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.css';

class Navigation extends React.PureComponent {

  render() {
    const text = this.context.text.navigation;

    const links = [
      {link: '/', name: text.services},
      {link: '/publications', name: text.publications},
      {link: '/education', name: text.training},
      {link: '/helpers', name: text.tools},
      {link: '/team', name: text.team},
      {link: '/job', name: text.careers},
      {link: '/feedback', name: text.feedback},
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

Navigation.contextTypes = {
  text: PropTypes.object,
};
