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
        </div>
        <div className="header-right">
          <Langs />
        </div>
      </div>
    );
  }
}

export default Header;
