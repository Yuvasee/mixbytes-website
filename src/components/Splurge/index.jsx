import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class Splurge extends Component {
  render() {
    const text = this.context.text.splurge;

    return (
      <div className="splurge" id="splurge">
        <h2>>&#8201;50&#8201;000&#8201;000&#8201;$</h2>
        <div className="splurge-text">
          {text.description_first}<br />{text.description_second}
        </div>
        <div className="splurge-logos">
          {/*
            <div><img src={require('./i/icoplate-logo.png')} alt="ICOPlate" /></div>
          */}
          <div><img src={require('./i/storiqa-logo.svg')} alt="Storiqa" width="180" /></div>
          <div><img src={require('./i/bubbletone-logo.png')} alt="Bubbletone" /></div>
          <div><img src={require('./i/kickico-logo.svg')} alt="KickICO" /></div>
          <div><img src={require('./i/world-wifi.png')} alt="World Wi-Fi" /></div>
          <div><img src={require('./i/sp8de.svg')} alt="Sp8de" /></div>
          <div><img src={require('./i/raison.png')} alt="Raison" /></div>
        </div>
      </div>
    );
  }
}

export default Splurge;

Splurge.contextTypes = {
  text: PropTypes.object,
};
