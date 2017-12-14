import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.css';

const btc = '1QKj9niHezvenxWWw5ZDrHv6i4yujo3ZPh';
const eth = '0x2B1d01Ac2c87F1FD3b07F0A09eF4A42a03368458';

class Donate extends Component {
  constructor(props) {
    super(props);
    this.state = {active: 'btc'};
  }

  clickHandler(e) {
    e.preventDefault();
    this.setState({
      active: this.state.active === 'btc' ? 'eth' : 'btc'
    });
  }

  render() {
    const text = this.context.text.common;
    const { active } = this.state;

    return (
      <div className="donate">
        {text.donate}
        <div>
          <button
            className={classNames({active: active === 'btc'})}
            onClick={this.clickHandler.bind(this)}
            disabled={active === 'btc'}
          >
            <span>BTC</span>
          </button>
          <button
            className={classNames({active: active === 'eth'})}
            onClick={this.clickHandler.bind(this)}
            disabled={active === 'eth'}
          >
            <span>ETH</span>
          </button>
          <input
            type="text"
            value={active === 'btc' ? btc : eth}
            disabled={true}
          />
        </div>
      </div>
    );
  }
}

export default Donate;

Donate.contextTypes = {
  text: PropTypes.object,
};
