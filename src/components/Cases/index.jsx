import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ContentBlock from 'components/ContentBlock';
import BigButton from 'components/common/BigButton';

import './styles.css';

class Cases extends Component {
  render() {
    const text = this.context.text.main;

    return (
      <ContentBlock id="cases">
        <h2>{text.cases}</h2>

        <div className="cases-container">
          {text.casesItems.map((e, i) => (
            <div className="cases-item">
              <div className="cases-item-logo-wrapper">
                <div className="cases-item-logo">
                  <img src={require(`assets/cases-logos/${e.logo}`)} alt={`${e.name} logo`}/>
                </div>
              </div>
              <div className="cases-item-name">{e.name}</div>
              <div className="cases-item-description">{e.description}</div>
              <div className="cases-item-job">{e.job}</div>
            </div>
            ))}
        </div>
      </ContentBlock>
    );
  }
}

export default Cases;

Cases.contextTypes = {
  text: PropTypes.object,
};
