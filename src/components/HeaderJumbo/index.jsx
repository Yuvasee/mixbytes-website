import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ContactUsButton from '../common/ContactUsButton';

import './styles.css';

class HeaderJumbo extends Component {

  componentWillMount() {
    this.text = this.context.text.headerJumbo;
  }

  render() {
    const { text } = this;

    return (
      <div className="header-jumbo">
        <h1>{text.header}</h1>
        <div>{text.description}</div>
        <div>
          <span>{text.stack}</span> {text.stackText}<br/>
          <span>{text.blockchains}</span> {text.blockchainsText}
        </div>
        <div className="jumbo-contacts-us"><ContactUsButton/></div>
        <div className="facts">
          <div className="facts-h"><span>{text.facts}</span></div>
          {text.factsTexts.map((e, i) => (
            <div key={i+e.length}>{e}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default HeaderJumbo;

HeaderJumbo.contextTypes = {
  text: PropTypes.object,
};
