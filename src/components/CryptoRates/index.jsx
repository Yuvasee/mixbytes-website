import React, {Component} from 'react';
import axios from 'axios';

import SymbolSelect from 'components/CryptoRates/SymbolSelect';

import './styles.css';

class CryptoRates extends Component {
  constructor(props) {
    super(props)

    this.state = {
      symbolLeft: 'BTC',
      symbolRight: 'USD',
      sumLeft: 1
    }
  }

  round(num) {
    return Math.round(num * 100000000) / 100000000;
  };

  handleChangeSymbolLeft(e) {
    e.preventDefault();
    this.getApiData({symbolLeft: e.target.value});
  }

  handleChangeSymbolRight(e) {
    e.preventDefault();
    this.getApiData({symbolRight: e.target.value});
  }

  handleChangeSumLeft(e) {
    e.preventDefault();

    this.setState({
      sumLeft: e.target.value,
      sumRight: this.round(e.target.value * this.state.price)
    });
  }

  handleChangeSumRight(e) {
    e.preventDefault();

    this.setState({
      sumRight: e.target.value,
      sumLeft: this.round(e.target.value / this.state.price)
    });
  }

  getApiData({symbolLeft, symbolRight, sumLeft, sumRight}) {
    if (!symbolLeft) {
      ({symbolLeft, sumLeft} = this.state);
    }
    if (!symbolRight) {
      ({symbolRight, sumRight} = this.state);
    }

    axios.get(`https://api.cryptonator.com/api/ticker/${symbolLeft}-${symbolRight}`)
      .then((res) => {
        this.setState({
          symbolLeft,
          symbolRight,
          sumRight: sumRight || this.round(sumLeft * res.data.ticker.price),
          sumLeft: sumLeft || this.round(sumRight / res.data.ticker.price),
          price: res.data.ticker.price
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  componentWillMount() {
    this.getApiData({});
  }

  render() {
    const {symbolLeft, symbolRight, sumLeft, sumRight} = this.state;

    return (
      <div className="crypto-rates row form-inline">
        <div className="col-md">
          <SymbolSelect selected={symbolLeft} onChange={this.handleChangeSymbolLeft.bind(this)} />
        </div>
        <div className="col-md">
          <input type="text" className="form-control" value={sumLeft} onChange={this.handleChangeSumLeft.bind(this)} />
        </div>
        <div className="eq">
          =
        </div>
        <div className="col-md">
          <input type="text" className="form-control" value={sumRight} onChange={this.handleChangeSumRight.bind(this)} />
        </div>
        <div className="col-md">
          <SymbolSelect selected={symbolRight} onChange={this.handleChangeSymbolRight.bind(this)} />
        </div>
      </div>
    );
  }
}

export default CryptoRates;
