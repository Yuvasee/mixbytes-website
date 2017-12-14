import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class BlockEvent extends Component {
  render() {
    const text = this.context.text.common;
    const {date, desc, header, prices, speakers, themes} = this.props;

    return (
      <div className="block-event white-block">
        <div className="event-date">{date}</div>
        <h3>{header}</h3>
        <div className="desc" dangerouslySetInnerHTML={{__html: desc}} />
        <div className="themes">
          <h4>{text.themes}</h4>
          <ul>
            {themes.map((element, i) => (
              <li dangerouslySetInnerHTML={{__html: element}} key={i} />
            ))}
          </ul>
        </div>
        <div className="speakers">
          <h4>{text.speakers}</h4>
          <div className="speakers-content">
            {speakers.map((element, i) => (
              <div className="speaker" key={i}>
                <img
                  src={require(`components/Pages/Team/i/${element.img}.jpg`)}
                  alt={element.name}
                />
                {element.name}
                <div>{element.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="conditions">
          <div className="button">
            <a className="link-button" href="https://mixbytes.timepad.ru/event/611938/#register">{text.pay}</a>
          </div>
          <div className="prices">
            {prices.map((element, i) => (
              <div key={i}>
                <b dangerouslySetInnerHTML={{__html: element.period}} /><br />
                <span dangerouslySetInnerHTML={{
                  __html: element.types.map((el) => (
                    `${el.name ? `${el.name}&nbsp;` : ''}${el.price}`
                  )).join(', ')
                }} />
              </div>
            ))}
          </div>
          <div className="pay-crypt">
            <a href="/education#participation">{text.payWithCryptocurrency}</a>
          </div>
        </div>
      </div>
    );
  }
}

export default BlockEvent;

BlockEvent.contextTypes = {
  text: PropTypes.object,
};
