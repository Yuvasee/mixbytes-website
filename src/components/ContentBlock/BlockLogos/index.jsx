import React, {Component} from 'react';

import './styles.css';

class BlockLogos extends Component {
  render() {
    const {logos, header} = this.props;
    return (
      <div className="block-logos">
        <h2>{header}</h2>
        <div className="logos">
          {logos.map((el, i) => (
            <div><a href={el.link}><img src={el.src} alt={el.alt} /></a></div>
          ))}
        </div>
      </div>
    );
  }
}

export default BlockLogos;
