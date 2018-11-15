import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ContentBlock from 'components/ContentBlock';
import BigButton from 'components/common/BigButton';

import './styles.css';

class Services extends Component {
  item(e, i) {
    const { trySmartz } = this.context.text.main;

    return (
      <div className="services-item" key={i+e.name}>
        <div className="services-item-icon">
          <img src={require(`assets/services-icons/${e.icon}`)} alt={`${e.name} icon`}/>
        </div>
        <div className="services-item-header">{e.name}</div>
        {e.text &&
          <div className="services-item-text">{e.text}</div>
        }
        {e.list &&
          <div className="services-item-list">
            {e.list.map((ee, ii) => (
              <div key={ii+`${ee.length}`}><span>{ee}</span></div>
            ))}
          </div>
        }
        {e.button &&
          <BigButton>{trySmartz}</BigButton>
        }
      </div>
    );
  }

  render() {
    const text = this.context.text.main;

    return (
      <ContentBlock id="services">
        <h2>{text.services}</h2>

        <div className="services-container">
          <div className="services-column">
            {text.servicesItems.slice(0, 3).map((e, i) => this.item(e, i))}
          </div>
          <div className="services-column">
            {text.servicesItems.slice(3).map((e, i) => this.item(e, i))}
          </div>
        </div>
      </ContentBlock>
    );
  }
}

export default Services;

Services.contextTypes = {
  text: PropTypes.object,
};
