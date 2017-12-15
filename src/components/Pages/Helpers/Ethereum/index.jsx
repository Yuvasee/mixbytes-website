import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import './styles.css';

const API = axios.create({
  baseURL: 'https://mainnet.infura.io/' + TOKEN,
  timeout: 5000,
  headers: {
    'content-type': 'application/json'
  }
});

const TOKEN = 'T44gOUFQej6GXv5fKFfv';

class Ethereum extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  callAPI(method, params, callback) {
    API.post('/', {
      "jsonrpc": "2.0",
      "id": 1,
      "method": method,
      "params": params
    })
      .then((res) => {
        callback(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  checkEthAddress(address) {
    return /^0x[0-9a-fA-F]{40}$/.test(address);
  }

  checkEthTxHash(txHash) {
    return /^0x[0-9a-fA-F]{64}$/.test(txHash);
  }

  handleGetBalance(e) {
    e.preventDefault();

    const address = e.target.value;
    this.setState({
      wallet: address
    });

    if (!address) {
      this.setState({
        balance: ''
      });
      return;
    } else if (!this.checkEthAddress(address)) {
      this.setState({
        balance: 'Invalid address'
      });
      return;
    }

    const method = 'eth_getBalance';
    const params = [address, 'latest'];
    const apiCallback = (res) => {
      if (res.data.result && /^0x/.test(res.data.result)) {
        this.setState({
          balance: '= ' + parseInt(res.data.result, 16) / (10 ** 18)
        });
      }
    };
    this.callAPI(method, params, apiCallback);
  }

  handleGetTransaction(e) {
    e.preventDefault();

    const txHash = e.target.value;
    this.setState({txHash});

    if (!txHash) {
      this.setState({
        txInfo: ''
      });
      return;
    } else if (!this.checkEthTxHash(txHash)) {
      this.setState({
        txInfo: 'Invalid transaction hash'
      });
      return;
    }

    const method = 'eth_getTransactionByHash';
    const params = [txHash];
    const apiCallback = (res) => {
      const result = res.data.result;
      if (result) {
        this.setState({
          txInfo:
            <span>
              value: {parseInt(result.value, 16) / (10 ** 18)} ETH<br />
              from: {result.from}<br />
              to: {result.to}<br />
              block: {parseInt(result.blockNumber, 16)}
            </span>
        });
      }
    };
    this.callAPI(method, params, apiCallback);
  }

  render() {
    const text = this.context.text.common;

    const {wallet, balance, txHash, txInfo} = this.state;

    return (
      <div className="helpers-ethereum">
        <div>
          <h3>{text.ethereumBalance}</h3>
          <input className="form-control" name="getBalance"
            value={wallet}
            onChange={this.handleGetBalance.bind(this)}
            placeholder="0x0000000000000000000000000000000000000000"
          />
          <div className="result">{balance}</div>
        </div>
        <div>
          <h3>{text.transactionInfo}</h3>
          <input className="form-control" name="getTransaction"
            value={txHash}
            onChange={this.handleGetTransaction.bind(this)}
            placeholder="0x0000000000000000000000000000000000000000000000000000000000000000"
          />
          <div className="result2">{txInfo}</div>
        </div>
      </div>
    );
  }
}

export default Ethereum;

Ethereum.contextTypes = {
  text: PropTypes.object,
};
