import React, {Component} from 'react';

import './styles.css';

class Splurge extends Component {
  render() {
    return (
      <div className="splurge">
        <h2>>&#8201;25&#8201;000&#8201;000&#8201;$</h2>
        <div className="splurge-text">
          Собрали с помощью разработанных
          <br />и проаудированных нами смарт-контрактов
        </div>
        <div className="splurge-logos">
          <img src={require('./i/kickico-logo.svg')} alt="KickICO" />
          <img src={require('./i/storiqa-logo.svg')} alt="Storiqa" width="180" />
          <img src={require('./i/bubbletone-logo.png')} alt="Bubbletone" />
          <img src={require('./i/icoplate-logo.png')} alt="ICOPlate" />
        </div>
      </div>
    );
  }
}

export default Splurge;
