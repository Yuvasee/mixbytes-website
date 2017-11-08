import React, {Component} from 'react';

import './styles.css';

class BlockEvent extends Component {
  render() {
    const {date, desc, header, prices, speakers, themes} = this.props;

    return (
      <div className="block-event">
        <div className="event-date">{date}</div>
        <h3>{header}</h3>
        <div className="desc">{desc}</div>
        <div className="themes">
          <div className="header">Темы</div>
          <ul>
            {themes.map((element, i) => (
              <li dangerouslySetInnerHTML={{__html: element}} key={i} />
            ))}
          </ul>
        </div>
        <div className="speakers">
          <div className="header">Спикеры</div>
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
            <button>Оплатить</button>
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
            <a href="#">Оплатить криптовалютой</a>
          </div>
        </div>
      </div>
    );
  }
}

export default BlockEvent;
