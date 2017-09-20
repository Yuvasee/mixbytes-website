import React, {Component} from 'react';
import axios from 'axios';

// import './styles.css';

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
    // /^0x[0-9a-fA-F]{40}$/.test('0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8')
  }

  handleGetBalance(e) {
    e.preventDefault();

    this.setState({
      wallet: address
    });

    const address = e.target.value;
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
    console.log('boom');
    const apiCallbak = (res) => {
      if (res.data.result && /^0x/.test(res.data.result)) {
        this.setState({
          balance: parseInt(res.data.result, 16) / (10 ** 18)
        });
      }
    };
    this.callAPI(method, params, apiCallbak);
  }

  render() {
    const {wallet, balance} = this.state;

    return (
      <div>
        <div className="form-group">
          <label for="getBalance">Проверить баланс ETH-кошелька</label>
          <input className="form-control" name="getBalance"
            value={wallet}
            onChange={this.handleGetBalance.bind(this)}
            placeholder="0x0000000000000000000000000000000000000000"
          />
          <input className="form-control" type="text" placeholder="0 ETH" value={balance} disabled />
        </div>
      </div>
    );
  }
}

export default Ethereum;
