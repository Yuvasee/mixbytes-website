import React, {Component} from 'react';

import Navigation from './Navigation';
import Langs from './Langs';

import './styles.css';

class Header extends Component {
  render() {
    return (
      <div className="container-header">
        <div className="header-left">
          <a href="/"><img src={require('./i/logo.svg')} alt="MixBytes()" /></a>
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
